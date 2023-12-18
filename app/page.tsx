import Image from "next/image";
import ButtonUI from "@/components/ButtonUI";
import Summaries from "@/components/Summaries";
import TablesStats from "@/components/TablesStats";
import SaleByLocationSideBar from "@/components/SaleByLocationSideBar";
import Charts from "@/components/Charts";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
export default function Home() {
  return (
    <main>
      <div className="md:flex justify-between align-center text-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-black font-bold">Overview</h2>
          <p className="font-normal text-base">Today</p>
        </div>
        <div className="mt-2">
          <ButtonUI text="Filter by Date">
            <FilterAltIcon />
          </ButtonUI>
        </div>
      </div>
      <hr className="h-px mt-4 mb-4 bg-gray-200 border-0 " />
      <div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-4">
            <Summaries />
            <Charts />
          </div>
          <div>
            <SaleByLocationSideBar />
          </div>
        </div>
        <TablesStats />
      </div>
    </main>
  );
}
