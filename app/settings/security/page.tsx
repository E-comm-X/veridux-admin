import React from "react"
import ButtonUI from "@/components/ButtonUI"
import Link from "next/link"
import StorageIcon from "@mui/icons-material/Storage"
import { Switch } from "antd"

export default function Page() {
  return (
    <main>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black font-bold">Settings</h2>
          <p className="font-normal text-base text-[#0000006E]">
            Welcome to the Security & Compliance section, where safeguarding
            your platform&apos;s integrity and user data is paramount.
          </p>
        </div>
        <div className="mt-2 ml-auto flex items-center gap-4">
          <div className="ml-auto">
            <button className="flex align-center justify-center text-center text-[#006FCF] bg-[#006FCF40] font-semibold  rounded px-4 py-2 ">
              Cancel
            </button>
          </div>
          <div className="ml-auto">
            <ButtonUI text="Save"></ButtonUI>
          </div>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div className="flex gap-4 flex-col md:flex-row bg-white items-center p-2 rounded ">
        <Link href="/setting" className="font-semibold text-sm  ">
          General
        </Link>
        <Link href="/setting/administrator" className="font-semibold text-sm ">
          User Management
        </Link>
        <Link href="/setting/security" className="font-semibold text-sm  ">
          Security & Compliance
        </Link>
        <Link
          href="/setting/fintech-service"
          className="font-semibold text-sm "
        >
          Fintech Services
        </Link>
        <Link href="/setting/support" className="font-semibold text-sm">
          Support
        </Link>
        <Link href="/setting/user-group" className="font-semibold text-sm">
          User Groups
        </Link>
      </div>
      {/* body */}
      <div className="parent bg-white border-[1px] rounded-lg mt-6 px-4 py-6 ">
        <div className="top flex flex-row justify-between items-center ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
              <p>icon</p>
            </div>
            <div>
              <h2 className="font-bold text-base">
                Two-Factor Authentication (2FA)
              </h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Strengthen your admin account&apos;s security with an extra
                layer of protection.
              </p>
            </div>
          </div>
          <Switch className="bg-[#000]" />
        </div>
        <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />

        <div className="bottom flex flex-row justify-between items-center mt-8 ">
          <div className="textContainer flex gap-4 ">
            <div className="iconContainer rounded-lg flex items-center bg-[#006FCF40] p-2 justify-center">
              <StorageIcon style={{ fill: "#006FCF" }} />
            </div>
            <div>
              <h2 className="font-bold text-base">User Data Protection</h2>
              <p className="font-normal text-sm text-[#00000099] ">
                Implement robust measures to protect user data
              </p>
            </div>
          </div>
          <Switch className="bg-[#000]" />
        </div>
      </div>
    </main>
  )
}
