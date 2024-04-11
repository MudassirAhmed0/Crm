import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link href="/" className="flex items-center">
        <div className="w-[1.171875vw] h-[1.171875vw]  relative">
          <Image fill src="/images/icons/logo.svg" alt="logo" />
        </div>
        <span className="font-[600] text-white text-[0.83333333333vw]">
          CallVerse.io
        </span>
      </Link>
    </div>
  );
};

export default Header;
