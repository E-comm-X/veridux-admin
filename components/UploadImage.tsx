"use client";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, message, Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { ProductRequestI } from "@/interfaces/product";
import { IoPencil } from "react-icons/io5";
import { Input } from "antd";
import { useUpdateProductPreviewImageMutation } from "@/services/product.service";
import { useAuthToken } from "@/hooks/useAuthToken";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const UploadImage: React.FC<{
  setProductPreviewImage: React.Dispatch<
    React.SetStateAction<Partial<ProductRequestI>>
  >;
}> = ({ setProductPreviewImage }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1),
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length >= 1) {
      setProductPreviewImage((prev: any) => ({
        ...prev,
        preview_image: newFileList[0]?.originFileObj as Blob,
      }));
    }
    console.log(newFileList[0].originFileObj);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <>
      <Upload
        action="https://api.escuelajs.co/api/v1/files/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        accept=".png, .jpeg, .svg, .jpg"
      >
        {fileList.length >= 5 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export const UploadProductPreviewImage: React.FC<{
  productId: string;
  setProductPreviewImage: React.Dispatch<
    React.SetStateAction<Partial<ProductRequestI>>
  >;
  refetch: () => void;
}> = ({ refetch, productId }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<File | undefined>();
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { token } = useAuthToken();
  const [updateProductImage, { isLoading }] =
    useUpdateProductPreviewImageMutation();

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    console.log({ file });
    setPreviewImage(file.originFileObj as File);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setPreviewImage(newFileList[0]?.originFileObj as File);
  };

  const handleUpdateImage = async () => {
    try {
      if (!previewImage) {
        message.error("Please select an image");
        return;
      }
      const res = await updateProductImage({
        productId,
        preview_image: previewImage as any,
        authToken: token as string,
      }).unwrap();
      message.success("Image updated successfully");
      refetch();
      setPreviewOpen(false);
    } catch (error) {
      message.error((error as any).data?.message ?? "An error occurred");
    }
  };

  return (
    <>
      <button
        style={{ border: 0, background: "none" }}
        onClick={() => setPreviewOpen(true)}
        type="button"
      >
        <div className="bg-primary cursor-pointer onClick text-white w-auto absolute top-2 right-2 rounded-md p-2 flex flex-row items-center">
          <p className="mr-2">Update image</p>
          <IoPencil />
        </div>
      </button>
      <Modal
        className="w-1/2"
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <Form className="mt-6">
          <Form.Item name="preview_image" className="flex flex-col">
            <h1 className="text-[14px] mb-3">Please pick a file</h1>
            <Upload
              action="https://api.escuelajs.co/api/v1/files/upload"
              listType="picture-card"
              fileList={fileList}
              maxCount={1}
              onPreview={handlePreview}
              onChange={handleChange}
              accept=".png, .jpeg, .svg, .jpg"
            >
              <button style={{ border: 0, background: "none" }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
            <div className="flex flex-row w-full items-right">
              <Button
                type="primary"
                className="my-3 ml-auto"
                disabled={!fileList.length}
                loading={isLoading}
                onClick={handleUpdateImage}
              >
                Update image
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
