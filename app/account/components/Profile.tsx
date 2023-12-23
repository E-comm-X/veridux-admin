"use client"
import { H2, H3, H5, Text } from "@/components/Typography"
import { Edit } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Avatar } from "antd"
import React from "react"

export const Profile = () => {
  return (
    <div>
      <H3 className="mb-[2rem]">My Profile</H3>
      <div className="rounded-[27px] border-[1px] md:p-[24px] p-[16px] flex md:flex-row flex-col justify-between md:items-center mb-[2rem] gap-3">
        <div className="flex gap-[17px] items-center">
          <Avatar src="/avatar.png" size={118} />
          <div>
            <H2>Olivia Carter</H2>
            <Text className="text-grey-500">Super Admin</Text>
            <Text className="text-grey-500 font-semibold">
              Nigeria,Edo State
            </Text>
          </div>
        </div>
        <Button
          className="font-bold capitalize"
          variant="outlined"
          endIcon={<Edit />}
          size="large"
        >
          Edit
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
                Olivia
              </Text>
            </div>
            <div>
              <Text className="text-grey-500">Email Address</Text>
              <Text className="text-gret-500 font-bold capitalize">
                Olivia@mail.com
              </Text>
            </div>
          </div>

          <div className="md:mb-[2rem]">
            <div>
              <Text className="text-grey-500">Last Name</Text>
              <Text className="text-gret-500 font-bold capitalize mb-[1rem]">
                Carter
              </Text>
            </div>
            <div>
              <Text className="text-grey-500">Phone</Text>
              <Text className="text-gret-500 font-bold capitalize">
                +23458583928393
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
