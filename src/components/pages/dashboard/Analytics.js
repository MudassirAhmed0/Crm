import InfoCard from "@/components/common/InfoCard";
import Image from "next/image";
import React from "react";

const analytics = [
  {
    heading: "Total Calls Made",
    score: "80",
    img: "/images/dashboard/analytic/1.svg",
    report: "+23",
    bg: "#EEFDFE"
  },
  {
    heading: "Answered Calls",
    score: "45",
    report: "+23",
    bg: "#F8EAEC",
    img: "/images/dashboard/analytic/2.svg"
  },
  {
    heading: "Not Answered",
    score: "35",
    report: "+23",
    bg: "#ECE3FB",
    img: "/images/dashboard/analytic/1.svg"
  },
  {
    heading: "Calls Bounced",
    score: "105",
    report: "-23",
    bg: "#fff",
    circleColor: " bg-[#F5F5F5]",
    img: "/images/dashboard/analytic/1.svg"
  },
  {
    heading: "Conversion Ratio",
    score: "2.5%",
    report: "-23",
    bg: "#fff",
    circleColor: " bg-[#F5F5F5]",
    img: "/images/dashboard/analytic/1.svg"
  },
  {
    heading: "Appointments Made",
    score: "105",
    report: "-23",
    bg: "#fff",
    circleColor: " bg-[#F5F5F5]",
    img: "/images/dashboard/analytic/1.svg"
  }
];
const Analytics = () => {
  return (
    <div>
      <h4 className="text-[#0C1D37] font-[600] text24">Analytics Overview</h4>
      <div className="flex items-stretch gap-x-[1.04166666667vw] mt-[0.78125vw]">
        {analytics.map((analytic, i) => (
          <InfoCard info={analytic} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Analytics;
