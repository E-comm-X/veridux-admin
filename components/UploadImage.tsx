"use client"
import React, { useState } from "react"
import { PlusOutlined } from "@ant-design/icons"
import { Modal, Upload } from "antd"
import type { RcFile, UploadProps } from "antd/es/upload"
import type { UploadFile } from "antd/es/upload/interface"
import { ProductRequestI } from "@/interfaces/product"

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

export const UploadImage: React.FC<{
  setProductPreviewImage: React.Dispatch<React.SetStateAction<ProductRequestI>>
}> = ({ setProductPreviewImage }) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [previewTitle, setPreviewTitle] = useState("")
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    )
  }

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    if (newFileList.length >= 1) {
      setProductPreviewImage((prev) => ({
        ...prev,
        preview_image: newFileList[0]?.originFileObj as Blob,
      }))
    }
    console.log(newFileList[0].originFileObj)
  }

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )
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
  )
}
