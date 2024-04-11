import Link from "next/link";
import ProfileCta from "./ProfileCta";
import Image from "next/image";
import SidebarBtn from "./SidebarBtn";

const SidebarFooter = () => {
  return (
    <div className="flex flex-col gap-y-[0.57291666666vw]">
      <ProfileCta />
      <SidebarBtn
        heading="Share & Earn"
        desc="Refer A Friend!"
        img="/images/icons/sidebar/share.svg"
        isGreen
      />
      <SidebarBtn
        heading="Help Center"
        desc=" Answers Here"
        img="/images/icons/sidebar/help.svg"
      />
    </div>
  );
};

export default SidebarFooter;
