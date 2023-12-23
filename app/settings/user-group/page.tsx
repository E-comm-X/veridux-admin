import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function UserGroupHome() {
  return (
    <main className="text-[#000000A1] flex items-center justify-center gap-4 flex-col ">
      <Image width={486.59} height={497.14} src="/20944201.jpg" alt="" />
      <h3 className="font-semibold text-lg ">Permission Groups Management</h3>
      <p className="font-normal">
        Streamline permission control by creating and managing permission
        groups.
      </p>
      <Link href="/settings/user-group/create-usergroup">
        <button className="text-center rounded-lg py-6 px-4 bg-[#000000] text-white outline-none">
          Create User Group
        </button>
      </Link>
    </main>
  )
}
