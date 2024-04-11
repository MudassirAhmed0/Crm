import Image from "next/image";
import Link from "next/link";

const SidebarBtn = ({ heading, desc, img, isGreen }) => {
  return (
    <Link
      href="/"
      className={`flex group justify-between items-center py-[0.41666666666vw] pl-[0.57291666666vw] pr-[1.04166666667vw] border14  border ${
        isGreen
          ? " border-[#55A55E] bg-[#55A55E]"
          : " border-[#ffffff33] bg-[#ffffff33]"
      }`}
    >
      <div className="flex gap-x-[0.57291666666vw] items-center">
        <div className="relative w-[2.08333333333vw] h-[2.08333333333vw]">
          <Image fill src={img} alt={heading} />
        </div>
        <div>
          <h5 className="text14 font-[500] text-white">{heading}</h5>
          <span className="mt-[0.20833333333vw] block text14 text-white text-opacity-[0.70]">
            {desc}
          </span>
        </div>
      </div>
      <div className="relative w-[0.83333333333vw] h-[0.83333333333vw] transition-all group-hover:translate-x-[0.25vw]">
        <Image
          fill
          src="/images/icons/sidebar/right-chevron.svg"
          alt="chevron"
        />
      </div>
    </Link>
  );
};

export default SidebarBtn;
