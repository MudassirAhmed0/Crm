import Image from "next/image";

const InfoCard = ({ info }) => {
  return (
    <div
      style={{ background: info.bg }}
      className={`   border20 w-[12.9166666667vw] flex gap-x-[1.04166666667vw] pl-[0.703125vw] py-[0.625vw] items-center`}
    >
      <div
        className={` 
      ${
        info?.circleColor ? "bg-[#F5F5F5]" : "bg-[#fff]"
      }    w-[2.91666666667vw] h-[2.91666666667vw] rounded-[50%]  flex justify-center items-center mb-[0.36458333333vw]`}
      >
        <div className="relative w-[1.71052083333vw] h-[1.71052083333vw]">
          <Image fill src={info.img} alt="analytic" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="block tracking-[0.01458333333vw] text14 font-[500] text-[#3B4555]">
          {info.heading}
        </span>
        <span className="block text-[#0C1D37] font-[600] text26 tracking-[-0.02708333333vw]">
          {info.score}
        </span>
        <div className="flex gap-x-[0.20833333333vw] mt-[0.26041666666vw] leading-[1.04166666667vw]">
          <span
            className={`${
              info?.report?.includes("+") ? "text-[#55A55E]" : "text-[#D22E41]"
            } block  text12 font-[700] tracking-[-0.0125vw] Dm`}
          >
            {info.report}
          </span>
          <span className="block text-[#3B4555] text12   tracking-[-0.0125vw]  ">
            since last week
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
