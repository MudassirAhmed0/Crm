import Link from "next/link";
import React from "react";

const Alerts = () => {
  return (
    <div className="h-full w-[20vw] border20 bg-[#FFF]      pt-[1.40625vw] pb-[1.14583333333vw]">
      <div className="flex items-center gap-x-[0.625vw] pl-[1.35416666667vw]">
        <img
          src="/images/dashboard/icons/notification.svg"
          alt="notification"
          className="w-[2.5vw]"
        />
        <div className="flex flex-col">
          <span className="text12 font-[500] text-[#3B4555] t024 ">Alerts</span>
          <h5 className="text16 t032 text-[#0C1D37] font-[600] ">
            New Call Scheduled
          </h5>
        </div>
      </div>
      <h4 className="pl-[1.35416666667vw] text22 font-[600] t044 text-[#0C1D37] mt-[1.77083333333vw]">
        Your Next call is Scheduled with John Regarding Product
      </h4>
      <div className="bg-[#FAFCFE] pl-[1.35416666667vw] pt-[0.88541666666vw] mt-[1.51041666667vw]">
        <div className=" text14 font-[500] text-[#0C1D37] flex gap-x-[1.71875vw]">
          <div className="flex gap-x-[0.3125vw] items-center">
            <img
              src="/images/dashboard/icons/clock.svg"
              alt="clock"
              className="w-[1.25vw]"
            />
            <span className=" t028">3 Days</span>
          </div>
          <div className="flex gap-x-[0.3125vw] items-center">
            <img
              src="/images/dashboard/icons/meeting.svg"
              alt="meeting"
              className="w-[1.25vw]"
            />
            <span className=" t028">Meeting on Zoom</span>
          </div>
        </div>
        <div className="mt-[1.875vw] flex gap-x-[4.94791666667vw]">
          <div className="flex">
            <div className="mr-[-0.78125vw] w-[1.77083333333vw] h-[1.77083333333vw] flex justify-center items-center border-[#fff] border-[0.13119791666vw] rounded-[50%] overflow-hidden">
              <img
                src="/images/dashboard/icons/meeting/4.jpg"
                alt="meeting"
                className="w-full h-full"
              />
            </div>
            <div className="mr-[-0.72916666666vw] w-[1.77083333333vw] h-[1.77083333333vw] flex justify-center items-center border-[#fff] border-[0.13119791666vw] rounded-[50%] overflow-hidden">
              <img
                src="/images/dashboard/icons/meeting/3.jpg"
                alt="meeting"
                className="w-full h-full"
              />
            </div>
            <div className="mr-[-0.57291666666vw] w-[1.77083333333vw] h-[1.77083333333vw] flex justify-center items-center border-[#fff] border-[0.13119791666vw] rounded-[50%] overflow-hidden">
              <img
                src="/images/dashboard/icons/meeting/2.jpg"
                alt="meeting"
                className="w-full h-full"
              />
            </div>
            <div className="mr-[-0.67708333333vw] w-[1.77083333333vw] h-[1.77083333333vw] flex justify-center items-center border-[#fff] border-[0.13119791666vw] rounded-[50%] overflow-hidden">
              <img
                src="/images/dashboard/icons/meeting/1.jpg"
                alt="meeting"
                className="w-full h-full"
              />
            </div>
            <div className="  bg-[#E0E5F2] w-[1.77083333333vw] h-[1.77083333333vw] flex justify-center items-center border-[#fff] border-[0.13119791666vw] rounded-[50%]">
              <span className="block w-[0.52083333333vw] h-[0.52083333333vw] Dm text-[0.45911458333vw] font-[700] text-[#4318FF] tracking-[-0.00916666666vw]">
                18+
              </span>
            </div>
          </div>
          <Link
            href="/"
            className="bg-[#F57500] border16 py-[0.57291666666vw] px-[1.09375vw]"
          >
            <span className="block text14 font-[500] t028 text-white">
              Join Meeting
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
