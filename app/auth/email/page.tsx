"use client"
import { Button, Form, Input } from "antd"
import Image from "next/image"
import { useLogin } from "@/hooks/useLogin"
import { useState } from "react"
import { LoadingOutlined } from "@ant-design/icons"

export default function EmailLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, isLoading } = useLogin({ email, password })
  return (
    <div className={`container bg-white h-screen mx-auto`}>
      <div className="flex flex-col items-center justify-between h-full px-6 rounded-md md:py-14 md:px-12">
        <div className="flex flex-col items-center justify-between my-auto w-full md:w-1/2">
          <div className="flex space-x-2">
            <Image
              src={"/logo.svg"}
              width={120}
              height={30}
              alt="Veridux Logo"
            />
            {/* <h1 className="text-center leading-[-0.16px] font-bold text-[28px] text-secondary400 uppercase md:text-[32px]">
                            moma stores
                        </h1> */}
          </div>

          <h2 className="text-center font-semibold text-[24px] mt-10 md:text-[40px]">
            Welcome back
          </h2>

          <p className="text-center font-semibold text-base500 text-[14px] mb-8">
            Log into your account to proceed
          </p>

          <form
            className="flex flex-col w-full space-y-6 justify-center"
            onSubmit={async (e) => {
              e.preventDefault()
              await login()
            }}
          >
            <div className="w-full">
              <label htmlFor="">Email</label>
              <Input
                type="email"
                size="large"
                className="w-full py-3"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <Input.Password
                size="large"
                className="w-full py-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              size="large"
              className="w-full py-3 bg-primary"
              type="primary"
              htmlType="submit"
            >
              {isLoading ? <LoadingOutlined /> : "Log In"}
            </Button>
          </form>
        </div>

        <div className="flex w-full items-start text-base500 text-[14px] justify-between md:text-[16px] md:items-center">
          <button>Privacy Policy</button>
          <p className="max-w-[150px] text-end md:max-w-full">
            All Rights Reserved © 2024
          </p>
        </div>
      </div>
    </div>
  )
}
