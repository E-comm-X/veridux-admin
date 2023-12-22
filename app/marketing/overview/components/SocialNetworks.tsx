"use client"
import { H3, Text } from "@/components/Typography"
import { TumblrIcon } from "@/icons"
import { FacebookRounded, Pinterest } from "@mui/icons-material"
import { Button } from "@mui/material"
import React from "react"
import { SocialNetworkCard } from "./SocialNetworkCard"

const socialNetworks: { title: string; text: string; icon: React.ReactNode }[] =
  [
    {
      title: "Facebook",
      text: "Keeping up with trends is faster and easier than ever. Share updates and photos, engage with friends and Pages, and stay connected to communities important",
      icon: <FacebookRounded className="text-primary" />,
    },
    {
      title: "Pinterest",
      text: "Pinterest is a social curation website for sharing and categorizing images found online. The site is described in its own content as a visual bookmarking",
      icon: <Pinterest className="text-[#E60023]" />,
    },
    {
      title: "Tumblr",
      text: "Tumblr lets you effortlessly share anything. Post text, photos, quotes, links, music, and videos from your browser, phone, desktop",
      icon: <TumblrIcon />,
    },
  ]

export const SocialNetworks = () => {
  return (
    <div className="bg-white border-[1px] md:p-[24px] p-[16px] rounded-[10px] h-full">
      <div>
        <H3>Social Networks</H3>
        <Text className="text-grey-500">
          Connect your socials to third-party applications so they can share
          information with each other.
        </Text>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px] mt-[24px]">
        {socialNetworks.map((socialNetwork, index) => (
          <SocialNetworkCard key={index} {...socialNetwork} />
        ))}
      </div>
      <div className="mt-[24px]">
        <Button
          variant="outlined"
          className="w-full"
          style={{ textTransform: "capitalize" }}
          size="large"
        >
          <Text className="font-[600]">Check all integrations</Text>
        </Button>
      </div>
    </div>
  )
}
