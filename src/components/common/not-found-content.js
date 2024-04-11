import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundContent = ({ heading, desc, btn }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full border18 bg-[#fff] w-full">
      <div className="w-[18.75vw] h-[19.6354166667vw] relative">
        <Image src={"/images/icons/not-found.svg"} alt="Not FOund" fill />
      </div>
      <div className="w-[27.1354166667vw] text-center ">
        <h1 className="font-[600] text26 t044 text-[#0C1D37] mb-[1.05vw] mt-[2.48333333333vw]">
          {heading}
        </h1>
        <p className="text14 font-[500] t0084">{desc}</p>
        {btn?.text && (
          <div className="mt-[1.25vw]">
            <Link href="/" className="btn orangeBtn  ">
              {btn.text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFoundContent;
