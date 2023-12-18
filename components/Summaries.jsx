import React from "react";
import Image from "next/image"

import { sumDetails } from "@/data/sumData";

const Summary = ({ icon, title, id, date, value, percentage, prev }) => {
  return (
    <div className="  rounded-lg gap-4 bg-white px-2 py-4 pr-4 flex  text-black border-2 border-[#00000026]">
      <div className="rounded-md bg-[#006FCF21] h-15 w-15 self-start flex align-center justify-center p-2">
      {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-xs font-normal text-[#0000005C]">{date}</p>
        <h4 className="text-xl font-semibold ">{value}</h4>
        <p className="text-[#0000005c]">
          <span className="text-[#36CF00]">{percentage}%</span> vs {prev}
        </p>
      </div>
    </div>
  );
};
function Summaries() {
  return (
    <div className="flex flex-col lg:flex-row gap-4" >
      {sumDetails.map((item) => (
        <Summary
          key={item.id}
          icon = {item.icon}
          value={item.value}
          date={item.date}
          title={item.title}
          percentage={item.percentage}
          prev= {item.prev}
        />
      ))}
    </div>
  );
}

export default Summaries;
