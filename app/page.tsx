import Summaries from "@/components/Summaries"
import TablesStats from "@/components/TablesStats"
import SaleByLocationSideBar from "@/components/SaleByLocationSideBar"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import { VendorStatistics } from "./VendorStatistics"
import { Button } from "@mui/material"
import { OverviewTab } from "./OverviewTab"

export default function Home() {
  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Overview</h2>
          <p className="font-normal text-base text-[#0000006E]">Today</p>
        </div>
        <div className="mt-2">
          <Button
            className="bg-primary capitalize"
            size="large"
            variant="contained"
            startIcon={<FilterAltIcon />}
          >
            Filter by Date
          </Button>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div>
        <div className="flex flex-col lg:flex-row gap-4 justify-items-stretch">
          <div className="flex flex-col gap-4 md:basis-[70%]">
            <Summaries />
            <VendorStatistics />
          </div>
          <div className="md:basis-[30%]">
            <SaleByLocationSideBar />
          </div>
        </div>
        <div className="bg-white my-5 p-[24px]">
          <OverviewTab />
        </div>
      </div>
    </main>
  )
}
