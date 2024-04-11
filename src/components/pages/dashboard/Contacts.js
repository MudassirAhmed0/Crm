import Image from "next/image";
import React from "react";

const table = [
  {
    name: "John Graber",
    status: {
      img: "/images/dashboard/campaigns/approved.svg",
      text: "Appointment Set"
    },
    date: "18 Apr 2024 / 8:30pm",
    campaignNamge: "CallVerse Campaign #1"
  },

  {
    name: "Hazel Daley",
    status: {
      img: "/images/dashboard/campaigns/disable.svg",
      text: "Not Interested"
    },
    date: "Not Set",
    campaignNamge: "CallVerse Campaign #1"
  },
  {
    name: "Robert Half",
    status: {
      img: "/images/dashboard/campaigns/error.svg",
      text: "Calls Bounced"
    },
    date: "Not Set",
    campaignNamge: "CallVerse Campaign #1"
  },
  {
    name: "Lindsey Meijer",
    status: {
      img: "/images/dashboard/campaigns/approved.svg",
      text: "Appointment Set"
    },
    date: "12 Jul 2024 / 4:30pm",
    campaignNamge: "CallVerse Campaign #1"
  }
];

const Contacts = () => {
  return (
    <div className="h-full w-[40.4166666667vw] bg-[#FFF] border20 Dm text14 leading-[1.25vw] tracking-[-0.01458333333vw]">
      <div className="flex justify-between items-center pt-[0.98958333333vw] px-[1.25vw] ">
        <h4 className="Dm text24 leading-[2.08333333333vw] font-[700] text-[#0C1D37] tracking-[-0.025vw]">
          Contacts
        </h4>
        <button className="border10 bg-[#F4F7FE] flex justify-center items-center   w-[1.92708333333vw] h-[1.92708333333vw]">
          <div className="relative w-[1.25vw] h-[1.25vw]">
            <Image fill alt="button" src="/images/icons/button.svg" />
          </div>
        </button>
      </div>

      <div className="font-[700] text-[#3B4555]  pt-[0.88541666666vw] flex justify-between">
        <ul className=" w-full capitalize     flex flex-col gap-y-[1.30208333333vw]">
          <li className="flex justify-between text-[#0C1D37]  uppercase font-[500] px-[1.61458333333vw] pb-[0.3125vw] border-b-[0.05208333333vw] border-[#E9EDF7]  ">
            <span className="truncate w-[4.94791666667vw]   ">Name</span>
            <div className="flex gap-x-[0.26041666666vw] w-[7.39583333333vw] truncate   ">
              Status
            </div>
            <span className="truncate w-[7.329166666667vw]   ">Date</span>
            <span className="truncate w-[8.21666666667vw]   ">
              CAMPAIGN NAME.
            </span>
          </li>
          {table?.map((item, index) => (
            <li className="flex justify-between px-[1.61458333333vw]">
              <span className="truncate w-[4.94791666667vw]">{item?.name}</span>
              <div className="flex gap-x-[0.26041666666vw] w-[7.39583333333vw] truncate">
                <div className="relative w-[1.25vw] h-[1.25vw]">
                  <Image fill src={item?.status?.img} alt="status" />
                </div>
                <span>{item?.status?.text}</span>
              </div>
              <span className="truncate w-[7.329166666667vw]">
                {item?.date}
              </span>
              <span className="truncate w-[8.21666666667vw]">
                {item?.campaignNamge}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
