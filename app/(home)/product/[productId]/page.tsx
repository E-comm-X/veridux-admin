"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  CollapseProps,
  Image,
  Input,
  Modal,
  Select,
  message,
} from "antd";
import {
  UploadImage,
  UploadProductPreviewImage,
} from "@/components/UploadImage";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useUpdateProductPreviewImageMutation,
} from "@/services/product.service";
import { useAuthToken } from "@/hooks/useAuthToken";
import { ProductUpdateRequestI } from "@/interfaces/product";
import { useGetAllCategoriesQuery } from "@/services/category.service";
import { LoadingOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import { AddVariant } from "./AddVariant";
import { GoBack } from "@/components/GoBack";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import { Reviews } from "./Reviews";
import { IoPencil } from "react-icons/io5";

const reqData: ProductUpdateRequestI = {
  product_name: "",
  details: "",
  price: "",
  total_quantity: "",
  brand_name: "",
  package_size: "",
  authToken: "",
  product_categories_to_add: [],
  product_categories_to_remove: [],
  product_id: "",
};

const transformData = (data: { name: string; id: string }[]) => {
  const newData =
    data &&
    data?.map((data) => ({
      label: data.name,
      value: data.id,
    }));
  return newData;
};

export default function UpdateProduct() {
  const { productId } = useParams();
  const { token } = useAuthToken();
  const [formData, setFormData] = useState<ProductUpdateRequestI>({
    ...reqData,
    authToken: token as string,
    product_id: productId as string,
  });
  const [previewImageFormData, setPreviewImageFormData] = useState<{
    preview_image?: string | Blob | null;
  }>({ preview_image: null });

  const [toAddCat, setToAddCat] = useState<{ label: string; value: string }[]>(
    [],
  );

  const {
    data: product,
    isLoading: loadingProduct,
    refetch: refechProduct,
  } = useGetProductQuery({
    id: productId as string,
  });
  const { data: categories } = useGetAllCategoriesQuery(null);

  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        details: product.details as string,
        brand_name: product.brand_name as string,
        price: product.price as string,
        total_quantity: product.total_quantity as any,
        product_name: product.name as string,
        product_id: productId as string,
      }));
      const cat_ids = product.categories?.map((cat) => cat.id) as string[];
      const to_add = categories?.filter((cat) => {
        return !cat_ids.includes(cat.id);
      });
      setToAddCat(transformData(to_add as []));
    }
  }, [product, categories, productId]);

  const [updateProductMutation, { isLoading }] = useUpdateProductMutation();
  const [
    updateProductPreviewImage,
    { isLoading: updateProductPreviewImageIsLoading },
  ] = useUpdateProductPreviewImageMutation();
  const { refetch } = useGetAllProductsQuery(null);

  const updateProduct = async () => {
    try {
      if (
        formData.brand_name &&
        formData.price &&
        formData.product_name &&
        formData.total_quantity
      ) {
        await updateProductMutation(formData).unwrap();
        message.success("Product Updated Successfully");
        await refechProduct();
        await refetch();
      } else {
        message.warning("Please Fill All Fields");
      }
    } catch (error: any) {
      message.error(`Failed: ${error.data.message}`);
    }
  };
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Add Variant",
      children: <AddVariant product_id={productId as string} />,
    },
    {
      key: "2",
      label: "Reviews",
      children: (
        <p>
          <Reviews id={productId as string} />
        </p>
      ),
    },
  ];
  return (
    <>
      <GoBack />
      {loadingProduct ? (
        <div className="pt-3">
          <LoadingOutlined />
          <span className="pl-2">Loading... </span>
        </div>
      ) : (
        <main>
          {/* headeding */}
          <div className="md:flex justify-between align-center text-black">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl text-black font-bold">
                Update Product - {product?.name}
              </h2>
            </div>
          </div>
          <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
          {/* body */}
          <div className="parent bg-white rounded-lg py-10 px-8 mt-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <div className="right px-4 py-8   lg:basis-[489px] rounded-lg border-[1px] border-[#E0E2E7] flex flex-col ">
                <div className="mb-4 relative">
                  <Image.PreviewGroup preview={{}}>
                    <div className="grid grid-cols-3 relative">
                      <Image
                        src={product?.preview_image as string}
                        width={"100%"}
                        height={"10rem"}
                        className="object-cover rounded-lg relative"
                        alt=""
                      />
                      {[...(product?.sub_images as string[])].map(
                        (imgSrc, index) => (
                          <Image
                            key={index}
                            src={imgSrc}
                            width={"100%"}
                            height={"10rem"}
                            className="object-cover rounded-lg"
                            alt=""
                          />
                        ),
                      )}

                      <UploadProductPreviewImage
                        productId={product!._id}
                        refetch={refechProduct}
                        setProductPreviewImage={setPreviewImageFormData}
                      />
                    </div>
                  </Image.PreviewGroup>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="productname"
                    className="text-sm font-medium block mb-1"
                  >
                    Product Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter Product Name"
                    size="large"
                    value={formData.product_name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        product_name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor=""
                    className="text-sm font-medium block mb-1"
                    // placeholder=" Provide A Detail Description for the product..."
                  >
                    Product Description
                  </label>
                  <Input.TextArea
                    name=""
                    id=""
                    style={{ minHeight: "8rem" }}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        details: e.target.value,
                      }))
                    }
                  ></Input.TextArea>
                </div>
                <div className="mb-5">
                  <label htmlFor="" className="text-sm font-medium block mb-1">
                    Quantity
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter Quantity"
                    size="large"
                    value={formData.total_quantity}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        total_quantity: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="" className="text-sm font-medium block mb-1">
                    Brand Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter Brand Name"
                    size="large"
                    value={formData.brand_name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        brand_name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="" className="text-sm font-medium block mb-1">
                    Package size
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter Package size"
                    size="large"
                    value={formData.package_size}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        package_size: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div>
                {/* <div className="p-4  rounded-lg border-[1px] border-[#E0E2E7] ">
                  <h3 className="font-medium text-base mb-4">Product Image</h3>
                  <UploadImage setProductPreviewImage={setFormData} />
                </div> */}
                <Link href={`/product/${productId as string}/variants`}>
                  <Button type="link">
                    View variants{" "}
                    <span>
                      <CgArrowTopRight />
                    </span>
                  </Button>
                </Link>

                <Collapse items={items} defaultActiveKey={["2"]} />
              </div>
            </div>
            <div className="middle w-full md:w-[48%] mt-6">
              <h2 className="text-base font-semibold mb-4">Product Category</h2>
              <div className="rounded-lg border-[1px] border-[#E0E2E7] p-4">
                <div className="mb-5">
                  <label
                    htmlFor="category"
                    className="font-medium text-base mb-1 block mb-1"
                  >
                    Add to Categories:
                  </label>
                  <Select
                    placeholder="Add to Categories"
                    size="large"
                    className="w-full"
                    options={toAddCat}
                    value={formData.product_categories_to_add}
                    mode="multiple"
                    onChange={(value) => {
                      setFormData((prev) => {
                        if (true) {
                          return {
                            ...prev,
                            product_categories_to_add: value,
                          };
                        }
                      });
                    }}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="category"
                    className="font-medium text-base mb-1 block mb-1"
                  >
                    Remove from Categories:
                  </label>
                  <Select
                    placeholder="Remove from Categories"
                    size="large"
                    className="w-full"
                    options={transformData(product?.categories as [])}
                    value={formData.product_categories_to_remove}
                    mode="multiple"
                    onChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        product_categories_to_remove: value,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bottom basis-[50%] md:w-[48%]">
              <h2 className="text-base font-semibold mb-4 mt-4">Pricing</h2>
              <div className=" rounded-lg border-[1px] border-[#E0E2E7] flex justify-between gap-[1rem] p-6">
                <div>
                  <h3 className="font-medium text-lg">Price</h3>
                  <div className="flex items-center gap-4 border-[#C1C1C1] rounded border-[1px] mt-5  pr-10">
                    <div className="signContainer h-[50px] w-[50px] bg-[#A1A1A15E] rounded relative">
                      <span className="font-medium text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        $
                      </span>
                    </div>
                    <input
                      type="number"
                      className="w-[100%] font-medium text-xl border-0 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
                      placeholder=""
                      value={formData.price}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          price: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                {/* <div>
                  <h3 className="font-medium text-lg">Discount</h3>
                  <div className="flex items-center gap-4 border-[#C1C1C1] rounded border-[1px] mt-5  pr-10">
                    <div className="signContainer h-[50px] w-[50px] bg-[#A1A1A15E] rounded relative">
                      <span className="font-medium text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        $
                      </span>
                    </div>
                    <input
                      type="number"
                      className=" w-[100%] font-medium text-xl border-0 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
                      placeholder=""
                    />
                  </div>
                </div> */}
              </div>
              <div className="grid grid-cols-2 gap-[10px]">
                {/* Update Product */}
                <Button
                  onClick={updateProduct}
                  size="large"
                  className="mt-5 bg-primary block"
                  type="primary"
                  disabled={isLoading}
                >
                  {isLoading ? <LoadingOutlined /> : "Update Product"}
                </Button>
                {/* Hide Product */}
                <Button
                  size="large"
                  className="mt-5 block"
                  danger
                  disabled={isLoading}
                >
                  {isLoading ? <LoadingOutlined /> : "Hide Product"}
                </Button>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
