"use client"
import { Call, EmailOutlined } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"

export default function Auth() {
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

          <div className="flex flex-col w-full space-y-6 justify-center items-center">
            <Link
              href={"/auth/email"}
              className="flex w-full justify-center bg-[#F7F7F7] hover:bg-white rounded-[10px] hover:border-[#FF9900]"
            >
              <button
                type="button"
                className="group bg-base200 w-full rounded-md p-3 inline-flex space-x-3 ring-secondary400 border-secondary400
                                text-base800 hover:text-secondary400 hover:ring-1 hover:bg-transparent transition-all duration-100"
              >
                <div className="flex rounded-full p-2.5 justify-center items-center bg-white group-hover:bg-secondary100">
                  <EmailOutlined />
                </div>

                <div className="flex flex-col items-start">
                  <p className="font-semibold text-[15px]">Email</p>
                  <p className="font-light text-[14px]">Use email to log in</p>
                </div>
              </button>
            </Link>

            <Link
              href={"/auth/phone"}
              className="flex w-full justify-center bg-[#F7F7F7] hover:bg-white rounded-[10px] hover:border-[#FF9900]"
            >
              <button
                type="button"
                className="group bg-base200 w-full rounded-md p-3 inline-flex space-x-3 ring-secondary400 border-secondary400
                                text-base800 hover:text-secondary400 hover:ring-1 hover:bg-transparent transition-all duration-100"
              >
                <div className="flex rounded-full p-2 justify-center items-center bg-white group-hover:bg-secondary100">
                  <Call />
                </div>

                <div className="flex flex-col items-start">
                  <p className="font-semibold text-[15px]">Phone Number</p>
                  <p className="font-light text-[14px]">
                    Use phone number to log in
                  </p>
                </div>
              </button>
            </Link>
          </div>
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
