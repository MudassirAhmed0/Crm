import Image from "next/image";

const table = [
  {
    name: "sales Outreach",
    status: {
      img: "/images/dashboard/campaigns/approved.svg",
      text: "Approved"
    },
    date: "18 Apr 2024"
  },

  {
    name: "Product Awareness",
    status: {
      img: "/images/dashboard/campaigns/disable.svg",
      text: "Disable"
    },
    date: "18 Apr 2024"
  },
  {
    name: "New Promo Campaign",
    status: {
      img: "/images/dashboard/campaigns/error.svg",
      text: "Error"
    },
    date: "20 May 2024"
  },
  {
    name: "Feedback Collection",
    status: {
      img: "/images/dashboard/campaigns/approved.svg",
      text: "Approved"
    },
    date: "12 Jul 2024"
  }
];

const ActiveCampaigns = () => {
  return (
    <div className="h-full w-[28.75vw] bg-[#FFF] border20 Dm text14 leading-[1.25vw] tracking-[-0.01458333333vw]">
      <div className="flex justify-between items-center pt-[0.98958333333vw] px-[1.25vw] ">
        <h4 className="Dm text24 leading-[2.08333333333vw] font-[700] text-[#0C1D37] tracking-[-0.025vw]">
          Active Campaigns
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
            <span className="truncate w-[7.62208333333vw]   ">Name</span>
            <div className="flex gap-x-[0.26041666666vw] w-[4.89583333333vw] truncate   ">
              Status
            </div>
            <span className="truncate w-[4.52708333333vw]   ">Date</span>
          </li>
          {table?.map((item, index) => (
            <li className="flex justify-between px-[1.61458333333vw]">
              <span className="truncate w-[7.62208333333vw]">{item?.name}</span>
              <div className="flex gap-x-[0.26041666666vw] w-[4.89583333333vw] truncate">
                <div className="relative w-[1.25vw] h-[1.25vw]">
                  <Image fill src={item?.status?.img} alt="status" />
                </div>
                <span>{item?.status?.text}</span>
              </div>
              <span className="truncate w-[4.52708333333vw]">{item?.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActiveCampaigns;
