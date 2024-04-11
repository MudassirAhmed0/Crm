import Image from "next/image";
import React from "react";

const SidebarMainMenu = ({ setIsSubMenuActive }) => {
  return (
    <div
      onClick={(tar) => {
        setIsSubMenuActive((prev) => !prev);
        tar.target.classList.toggle("active");
      }}
      className="border14 border border-[#ffffff33]  sidebarMainMenu active  bg-[#ffffff33] pl-[0.57291666666vw] pr-[1.09375vw] py-[0.46875vw] flex justify-between items-center"
    >
      <div className="flex gap-x-[0.57291666666vw] items-center pointer-events-none">
        <div className="relative w-[2.08333333333vw] h-[2.08333333333vw]">
          <Image
            src="/images/icons/sidebar/sidebar-chevron-bblue.svg"
            fill
            alt="chevron"
          />
        </div>
        <div className="capitalize text14  text-white">
          <h5 className="font-[500]">Chelly’s Cars</h5>
          <span className="text-white text-opacity-[0.70] block mt-[0.20833333333vw]">
            Automotive
          </span>
        </div>
      </div>
      <div className="relative h-[0.83333333333vw] transition-all duration-300 w-[0.83333333333vw] pointer-events-none sidebarMainMenuChevron">
        <Image
          fill
          src="/images/icons/sidebar/sidebar-dropdown-chevron.svg"
          alt="chevron"
        />
      </div>
    </div>
  );
};

export default SidebarMainMenu;
