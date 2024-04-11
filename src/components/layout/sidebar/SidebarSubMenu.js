"use client";
import SidebarMenuItem from "./SidebarMenuItem";
import { usePathname } from "next/navigation";

const sidebarFeatures = [
  {
    text: "Dashboard",
    href: "/"
  },
  {
    text: "Current Campaigns",
    value: "campaign",
    dropDownFeature: [
      {
        text: "All Campaigns",
        href: "/campaigns"
      },
      {
        text: "Create Campaign",
        href: "/create-campaign"
      }
    ]
  },
  {
    number: "2",
    text: "Leads Created",
    href: "/leads"
  },
  {
    text: "Settings",
    href: "/settings"
  }
];

const SidebarSubMenu = () => {
  const pathname = usePathname();
  return (
    <div className=" max-h-[0] overflow-hidden transition-all duration-[500ms] mt-[1.35416666667vw]">
      <div className={` flex flex-col gap-y-[0.625vw]   `} id="sidebarSubMenu">
        {sidebarFeatures.map((sidebarFeature, i) => (
          <SidebarMenuItem
            sidebarFeature={sidebarFeature}
            key={i}
            i={i}
            currentSlug={pathname}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarSubMenu;
