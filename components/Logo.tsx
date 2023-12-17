import React from "react"
import Image from "next/image"

export const Logo = () => {
  return (
    <div className="w-[135px] h-[27px] mb-[1rem]">
      <Image
        src={"/veridux.svg"}
        width={135}
        height={27}
        alt={"Veridux Logo"}
      />
    </div>
  )
}
