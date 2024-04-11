import Card from "@/components/setting/Card";
import React from "react";

const settingCardData = [
  {
    heading: "Account Settings",
    p: "Provide personal details and how we can reach you",
    href: "/settings/acount-settings"
  },
  {
    heading: "Login & security",
    p: "Update your password and secure your account",
    href: "/"
  },
  {
    heading: "Billing & Payments",
    p: "Review payments, payouts, coupons, and gift cards",
    href: "/settings/plans-pricing"
  },
  {
    heading: "Imported Contacts List",
    p: "Manage taxpayer information and tax documents",
    href: "/"
  },
  {
    heading: "Notifications",
    p: "Choose notification preferences and how you want to be contacted",
    href: "/settings/notifications",

  },
  {
    heading: "Privacy Policy & Terms of Service",
    p: "Manage your personal data, connected services, and data sharing settings",
    href: "/"
  },
  {
    heading: "Share & Earn",
    p: "You have $0 referral credits and coupon. Learn more.",
    href: "/"
  },
  {
    heading: "Campaign Defaults",
    p: "Set some Default Parameters for the all upcoming campaigns",
    href: "/"
  }
];

const Settings = () => {
  return (
    <>
      <div className="h-full bg-white border18 w-[99%]">
        <div className="flex items-start flex-wrap      gap-x-[12vw] gap-y-[3.38541666667vw] py-[2.1875vw] px-[3.125vw]">
          {settingCardData.map((card, index) => (
            <Card card={card} key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Settings;
