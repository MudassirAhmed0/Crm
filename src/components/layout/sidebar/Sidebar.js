import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  return (
    <div className=" w-[14.8958333333vw] collapsed bg-[#12172A]">
      <div className="flex flex-col gap-y-[25.9259259259vh] Lexend     py-[1.25vw] px-[1.19791666667vw]">
        <div>
          <Header />
          <SidebarMenu />
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
};

export default Sidebar;
