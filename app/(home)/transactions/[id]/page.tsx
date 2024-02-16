"use client"
import React from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuthToken } from "@/hooks/useAuthToken"
import { useGetTransactionInfoQuery } from "@/services/transactions.service"
import { LoadingOutlined, UserOutlined } from "@ant-design/icons"
import { H3 } from "@/components/Typography"
import { ArrowBack } from "@mui/icons-material"
import moment from "moment"
import { Card, Tag, Avatar } from "antd"
import Link from "next/link"

const Page = () => {
  const { id } = useParams()
  const router = useRouter()
  const { token } = useAuthToken()
  const { data, isLoading } = useGetTransactionInfoQuery({
    authToken: token as string,
    transaction_id: id as string,
    // reference: id as string,
  })
  console.log(data)
  return (
    <div>
      <div className="flex items-center gap-4">
        <div onClick={router.back} className="cursor-pointer">
          <ArrowBack />
        </div>
        <div>
          <H3>Transaction Details</H3>
          <small>
            {moment().format("LL")}. {moment().format("LT")}
          </small>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-3">
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <>
            <Card
              className="col-span-1"
              title={
                <p className="flex justify-between items-center">
                  <span>User Details</span>
                </p>
              }
            >
              <div className="flex flex-col gap-1 capitalize">
                <p className="flex items-center gap-3 mb-5">
                  <Avatar
                    size={44}
                    icon={<UserOutlined />}
                    src={data?.user?.profile_picture}
                  />
                  <span>
                    {data?.user?.firstname} {data?.user?.lastname}
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <strong>Email:</strong> {data?.user?.email}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Phone:</strong> {data?.user?.phone_number}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Role:</strong> {data?.user?.role}
                </p>
                <p className="flex justify-between items-center">
                  <strong>ID:</strong> {data?.user?.id}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Account Reference:</strong>{" "}
                  {data?.user?.account_reference}
                </p>
              </div>
            </Card>
            <Card
              className="md:col-span-2 lg:col-span-3"
              title={
                <p className="flex justify-between items-center">
                  <span>Expense Details</span>
                  <Tag
                    color={
                      data?.status == "success"
                        ? "success"
                        : data?.status == "pending"
                        ? "warning"
                        : "error"
                    }
                    className="capitalize"
                  >
                    {data?.status}
                  </Tag>
                </p>
              }
            >
              <div className="flex flex-col gap-1 capitalize">
                <p className="flex justify-between items-center">
                  <strong>Transaction ID:</strong> {data?._id}
                </p>

                <p className="flex justify-between items-center">
                  <strong>Transaction Type:</strong>{" "}
                  {data?.type.replaceAll("_", " ")}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Payment Provider:</strong>{" "}
                  {data?.payment_provider.replaceAll("_", " ")}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Kind:</strong> {data?.kind}
                </p>

                <p className="flex justify-between items-center">
                  <strong>Payment Method:</strong>{" "}
                  <span className="uppercase">{data?.payment_method}</span>
                </p>
                <p className="flex justify-between items-center">
                  <strong>Total Amount:</strong>{" "}
                  {Intl.NumberFormat("en-US", {
                    currency: "NGN",
                    style: "currency",
                  }).format(data?.total_amount as number)}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Amount Payable:</strong>
                  {Intl.NumberFormat("en-US", {
                    currency: "NGN",
                    style: "currency",
                  }).format(data?.amount_payable as number)}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Transaction Fee:</strong>{" "}
                  {Intl.NumberFormat("en-US", {
                    currency: "NGN",
                    style: "currency",
                  }).format(data?.transaction_fee as number)}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Currency:</strong> {data?.currency}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Reference:</strong> {data?.reference}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Invoice:</strong> {data?.invoice || "N/A"}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Date:</strong> {moment(data?.createdAt).format("LL")}
                </p>
                <p className="flex justify-between items-center">
                  <strong>Time:</strong> {moment(data?.createdAt).format("LT")}
                </p>
                {data?.extra_info?.parent_transaction && (
                  <>
                    <p className="flex justify-between items-center">
                      <strong>Linked To:</strong>{" "}
                      <Link
                        href={`/transactions/${data?.extra_info?.parent_transaction}`}
                        className="text-primary underline"
                      >
                        {data?.extra_info?.parent_transaction}
                      </Link>
                    </p>
                    <p className="flex justify-between items-center">
                      <strong>Referral Bonus:</strong>{" "}
                      {Intl.NumberFormat("en-US", {
                        currency: "NGN",
                        style: "currency",
                      }).format(data?.extra_info?.referral_bonus as number) ||
                        "N/A"}
                    </p>
                  </>
                )}
              </div>
            </Card>
          </>
        )}
      </div>

      {/* <div className="mt-7">
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div> */}
    </div>
  )
}

export default Page
