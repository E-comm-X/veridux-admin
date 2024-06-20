"use client"
import { GoBack } from "@/components/GoBack"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useGetAllStoresQuery } from "@/services/store.service"
import { useParams } from "next/navigation"
import { LoadingOutlined } from "@ant-design/icons"
import { Avatar, Divider, Image, Rate } from "antd"
import { StorefrontOutlined } from "@mui/icons-material"
import { MdLocationOn, MdVerified } from "react-icons/md"
import { CgTime } from "react-icons/cg"
import moment from "moment"
import { ProductsTable } from "../ProductsTable"
import { Reviews } from "./Reviews"
import { UpdateStore } from "./UpdateStore"
import { StoreI } from "@/interfaces/store"

const StorePage = () => {
  const { store_id } = useParams()
  const { token: authToken } = useAuthToken() as { token: string }
  const { data, isLoading, refetch } = useGetAllStoresQuery({
    authToken,
    store_id: store_id as string,
  })
  const store = data?.slice(0)[0]

  return (
    <main>
      <GoBack />
      {isLoading ? (
        <div className="flex gap-1 items-center mt-5">
          <LoadingOutlined />
          <span>Loading Page</span>
        </div>
      ) : (
        <>
          <div className="md:flex justify-between align-center text-black">
            <div className="flex flex-col gap-2">
              <h2 className="md:text-2xl text-lg text-black font-bold flex items-center gap-2">
                <span>{store?.name}</span>{" "}
                {store?.is_activated && (
                  <MdVerified className="text-green-500" />
                )}
              </h2>
              <div>
                <Rate
                  value={store?.rating as number}
                  disabled
                  className="md:flex-xl text-blue-400"
                  allowHalf
                />
              </div>
              <p className="font-normal text-base text-[#0000006E]">Today</p>
            </div>
            <UpdateStore store={store as StoreI} refetch={refetch} />
          </div>
          <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
          <div>
            <div>
              <Avatar
                className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-md bg-primary/20"
                src={store?.logo}
              >
                <StorefrontOutlined className="text-[5rem] text-primary" />
              </Avatar>
            </div>
            <div className="my-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CgTime className="text-primary text-2xl" />
                <p>Created {moment(store?.createdAt).format("LL LT")}</p>
              </div>
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-primary text-2xl" />
                <p>{store?.address}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="md:text-xl text-lg mb-3 font-semibold">
              Store Products
            </h2>
            <ProductsTable />
          </div>
          <Divider />
          <Reviews id={store_id as string} />
        </>
      )}
    </main>
  )
}

export default StorePage
