import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const SidebarMenuItem = ({ sidebarFeature, i, currentSlug }) => {
  const dropdownContainer = useRef(null);
  const hanldeDropDown = () => {
    dropdownContainer?.current?.classList?.toggle("active");
  };

  if (sidebarFeature?.dropDownFeature) {
    return (
      <button
        ref={dropdownContainer}
        className={`${
          currentSlug.includes(sidebarFeature.value) ? " active" : ""
        }   dropdownContainer`}
      >
        <div
          onClick={hanldeDropDown}
          className={` ${
            currentSlug.includes("campaign") ? "active" : ""
          }  sideBar_Features`}
        >
          <div className="flex gap-x-[0.52083333333vw] items-end ">
            <div className="relative h-[1.04166666667vw] w-[1.04166666667vw]">
              <Image
                className="opacity-[0.70]"
                fill
                alt="grid"
                src={`/images/icons/sidebar/features/${i + 1}.svg`}
              />
            </div>
            <span className="text14 font-[400] text-opacity-[0.70] text-white">
              {sidebarFeature.text}
            </span>
          </div>

          <div className="relative h-[0.83333333333vw] w-[0.83333333333vw] dropdownChevron transition-all duration-300">
            <Image
              className="opacity-[0.70]"
              fill
              src="/images/icons/sidebar/sidebar-dropdown-chevron.svg"
              alt="chevron"
            />
          </div>
        </div>
        {sidebarFeature.dropDownFeature && (
          <div className={`  sideBar_Features_DropDown `}>
            {sidebarFeature.dropDownFeature.map((dropdownItem, index) => (
              <Link
                href={dropdownItem.href}
                key={index}
                className={`${
                  currentSlug == dropdownItem.href ? "active" : " "
                } sideBar_Features_DropDown_Item`}
              >
                <div className="relative h-[0.52083333333vw] w-[0.52083333333vw] rounded-[50%] bg-white"></div>
                <span className="text14 font-[400] text-white text-opacity-[0.70]">
                  {dropdownItem.text}
                </span>
              </Link>
            ))}
          </div>
        )}
      </button>
    );
  } else {
    return (
      <Link href={sidebarFeature.href}>
        <div
          className={` ${
            currentSlug == sidebarFeature.href ? "active" : " "
          }  sideBar_Features`}
        >
          <div className="flex gap-x-[0.52083333333vw] items-end ">
            <div className="relative h-[1.04166666667vw] w-[1.04166666667vw]">
              <Image
                className="opacity-[0.70]"
                fill
                alt="grid"
                src={`/images/icons/sidebar/features/${i + 1}.svg`}
              />
            </div>
            <span className="text14 font-[400] text-opacity-[0.70] text-white">
              {sidebarFeature.text}
            </span>
          </div>

          {sidebarFeature.number && (
            <div className="sideBar_Feature_number flex justify-center items-end text-white bg-[#FE7239] border6  px-[0.28645833333vw]">
              <span className="text12 font-[700] Inter  ">
                {sidebarFeature.number}
              </span>
            </div>
          )}
        </div>
      </Link>
    );
  }
};

export default SidebarMenuItem;
