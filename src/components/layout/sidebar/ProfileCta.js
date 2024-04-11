"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ProfileCta = () => {
  const profile = useRef(null);
  return (
    <div
      ref={profile}
      className="border18 sideBar_Profile    pt-[1.25vw] pb-[0.9375vw]
        flex flex-col text-center items-center gap-y-[0.83333333333vw] relative"
    >
      <div
        onClick={() => profile.current.classList.add("hidden")}
        className="absolute h-[1.25vw] w-[1.25vw] top-[0.625vw] cursor-pointer right-[0.625vw]"
      >
        <Image fill src="/images/icons/sidebar/close.svg" alt="close" />
      </div>
      <div className="relative w-[4.79166666667vw] h-[4.79166666667vw]">
        <Image
          fill
          src="/images/icons/sidebar/percentage.svg"
          alt="percentage"
        />
      </div>
      <div>
        <h5 className="text14 font-[600] text-white">Complete your profile</h5>
        <span className="mt-[0.46875vw] block text-white text-opacity-[0.70] text12 leading-[0.78125vw]">
          Check 1 min video and begin use components like a pro
        </span>
      </div>
      <Link
        href="/"
        className="w-[10.4166666667vw] border12 py-[0.52083333333vw] bg-[#fff] transition-all duration-300 hover:bg-opacity-[0.6] "
      >
        <span className="text14 font-[500] text-[#0A1B39] block">
          My Profile
        </span>
      </Link>
    </div>
  );
};

export default ProfileCta;
