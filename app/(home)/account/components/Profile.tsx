"use client"
import { H2, H3, H5, Text } from "@/components/Typography"
import { Edit, Save } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Avatar, Skeleton, Input, message } from "antd"
import React, { useEffect } from "react"
import { useGetUserDataQuery } from "@/services/auth.service"
import { useAuthToken } from "@/hooks/useAuthToken"
import {
  UserOutlined,
  CloudUploadOutlined,
  LoadingOutlined,
} from "@ant-design/icons"
import { UserDataI } from "@/interfaces/User"
import { useUpdateProfileMutation } from "@/services/profile.service"

export const Profile = () => {
  const { token } = useAuthToken()
  const { data, isLoading, refetch } = useGetUserDataQuery({
    authToken: token as string,
  })
  const [img, setImg] = React.useState<string>("")
  const [userData, setUserData] = React.useState<UserDataI>(data as UserDataI)
  const [file, setFile] = React.useState<File | null>(null)
  const [editImg, setEditImg] = React.useState<boolean>(false)
  const [mutate, { isLoading: updating }] = useUpdateProfileMutation()
  const updateProfile = async () => {
    const { firstname, lastname, email, phone_number } = userData
    try {
      const response = await mutate({
        ...{ firstname, lastname, email, phone_number, profile_picture: file },
        authToken: token as string,
      }).unwrap()
      message.success(`Profile updated`)
      setEditImg(false)

      await refetch()
    } catch (error: any) {
      console.log(error)
      message.error(error?.data?.message)
    }
  }
  useEffect(() => {
    if (data) {
      setUserData({ ...data })
    }
  }, [data])
  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editImg) {
      setFile(e.target.files![0])
      if (e.target.files) {
        setUserData((prev) => ({
          ...prev,
          profile_picture: URL.createObjectURL(e.target.files![0]),
        }))
      }
    }
  }
  return (
    <div>
      <H3 className="mb-[2rem]">My Profile</H3>
      <div className="rounded-[27px] border-[1px] md:p-[24px] p-[16px] flex md:flex-row flex-col justify-between md:items-center mb-[2rem] gap-3">
        {isLoading ? (
          <Skeleton active />
        ) : (
          <div className="flex gap-[17px] items-center ">
            <div className="relative">
              {editImg && (
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={changeImage}
                  className="hidden"
                  accept=".jpg,.jpeg,.png, .svg"
                />
              )}
              <label htmlFor="image">
                <Avatar
                  src={userData?.profile_picture}
                  size={118}
                  icon={<UserOutlined />}
                  className={
                    editImg ? "cursor-pointer hover:bg-[rgba(0,0,0,0.4)]" : ""
                  }
                />
              </label>
              {editImg && (
                <CloudUploadOutlined className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-primary cursor-pointer" />
              )}
            </div>
            <div>
              {editImg ? (
                <div className="flex gap-3 mb-2">
                  <Input
                    placeholder="first name"
                    value={userData?.firstname}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        firstname: e.target.value,
                      }))
                    }
                  />
                  <Input
                    placeholder="last name"
                    value={userData?.lastname}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        lastname: e.target.value,
                      }))
                    }
                  />
                </div>
              ) : (
                <H2 className="capitalize">
                  {userData?.firstname} {userData?.lastname}
                </H2>
              )}
              <Text className="text-grey-500 capitalize">{data?.role}</Text>
              <Text className="text-grey-500 font-semibold">
                Nigeria, Lagos
              </Text>
            </div>
          </div>
        )}
        <Button
          className="font-bold capitalize"
          variant="outlined"
          endIcon={editImg ? <Save /> : <Edit />}
          size="large"
          onClick={async () => {
            if (editImg) {
              await updateProfile()
              // setEditImg(false)
            } else {
              setEditImg(true)
            }
          }}
          // onClick={updateProfile}
        >
          {updating ? <LoadingOutlined /> : <>{editImg ? "Save" : "Edit"}</>}
        </Button>
      </div>

      <div className="rounded-[27px] border-[1px] md:p-[24px] p-[16px] mb-[2rem]">
        <div className="flex justify-between items-center mb-[1rem]">
          <H5>Personal Information</H5>
          <Button
            className="font-bold capitalize"
            variant="outlined"
            endIcon={<Edit />}
            size="large"
          >
            Edit
          </Button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[1rem]">
          <div className="md:mb-[2rem]">
            <div>
              <Text className="text-grey-500">First Name</Text>
              <Text className="text-gret-500 font-bold capitalize mb-[1rem]">
                {data?.firstname}
              </Text>
            </div>
            <div>
              <Text className="text-grey-500">Email Address</Text>
              <Text className="text-gret-500 font-bold lowercase">
                {data?.email}
              </Text>
            </div>
          </div>

          <div className="md:mb-[2rem]">
            <div>
              <Text className="text-grey-500">Last Name</Text>
              <Text className="text-gret-500 font-bold capitalize mb-[1rem]">
                {data?.lastname}
              </Text>
            </div>
            <div>
              <Text className="text-grey-500">Phone</Text>
              <Text className="text-gret-500 font-bold capitalize">
                {data?.phone_number}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[27px] border-[1px] md:p-[24px] p-[16px] mb-[2rem]">
        <div className="flex justify-between items-center mb-[1rem]">
          <H5>Personal Information</H5>
          <Button
            className="font-bold capitalize"
            variant="outlined"
            endIcon={<Edit />}
            size="large"
          >
            Edit
          </Button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[1rem]">
          <div className="md:mb-[2rem]">
            <div>
              <Text className="text-grey-500">Country</Text>
              <Text className="text-gret-500 font-bold capitalize">
                Nigeria
              </Text>
            </div>
          </div>

          <div className="md:mb-[2rem]">
            <div>
              <Text className="text-grey-500">Status</Text>
              <Text className="text-gret-500 font-bold capitalize">---</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
