"use client";
import SidebarMainMenu from "./SidebarMainMenu";
import SidebarSubMenu from "./SidebarSubMenu";
import { useEffect, useState } from "react";

const SidebarMenu = () => {
  const [isSubMenuActive, setIsSubMenuActive] = useState(true);
  useEffect(() => {
    const sidebarSubMenu = document.getElementById("sidebarSubMenu");
    if (isSubMenuActive) {
      sidebarSubMenu.parentElement.style.maxHeight = "20vw";
    } else {
      sidebarSubMenu.parentElement.style.maxHeight = 0;
    }
  }, [isSubMenuActive]);
  return (
    <div className="mt-[1.35416666667vw] cursor-pointer w-full">
      <SidebarMainMenu setIsSubMenuActive={setIsSubMenuActive} />
      <SidebarSubMenu />
    </div>
  );
};

export default SidebarMenu;
