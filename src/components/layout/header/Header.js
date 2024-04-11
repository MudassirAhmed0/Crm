import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-[#FFF] border border-b-[#F4F4F4] py-[0.83333333333vw] pl-[1.77083333333vw] pr-[2.39583333333vw] flex justify-between">
      <div>
        <h4 className="text20 text-[#0C1D37] font-[500] leading-[1.30208333333vw]">
          Welcome, Josh
        </h4>
        <span className="text12 text-[#3B4555] leading-[0.78125vw] block mt-[0.26041666666vw]">
          Last 7 Days Campaign Statistics
        </span>
      </div>
      <div className="flex gap-x-[1.25vw] items-center ">
        <div className="cursor-pointer relative w-[1.04166666667vw] h-[1.04166666667vw]">
          <Image fill src="/images/icons/notification.svg" alt="notification" />
        </div>
        <div className="flex cursor-pointer items-center">
          <div className="mr-[0.625vw] relative w-[2.08333333333vw] h-[2.08333333333vw]">
            <Image fill src="/images/topbar/user.jpg" alt="user" />
          </div>
          <div>
            <h5 className="text14 text-[#151924]">Josh Hazelwood</h5>
            <span className="block text12 text-[#444750] mt-[0.10416666666vw]">
              hazeljoshwood@mail.com
            </span>
          </div>
          <div className="relative w-[0.78125vw] h-[1.04166666667vw] ml-[0.15625vw]">
            <Image
              fill
              src="/images/icons/black-arrow-down.svg"
              alt="black-arrow-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
