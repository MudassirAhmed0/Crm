import ActiveCampaigns from "@/components/pages/dashboard/ActiveCampaigns";
import Alerts from "@/components/pages/dashboard/Alerts";
import Analytics from "@/components/pages/dashboard/Analytics";
import Calendar from "@/components/pages/dashboard/Calendar";
import Contacts from "@/components/pages/dashboard/Contacts";
import PerformanceChart from "@/components/pages/dashboard/PerformanceChart";

const page = () => {
  return (
    <div>
      <Analytics />
      <div className="flex justify-between w-full h-[17.96875vw] mt-[1.35416666667vw]">
        <PerformanceChart />
        <ActiveCampaigns />
      </div>
      <div className="flex justify-between h-[17.7604166667vw] mt-[1.14583333333vw]">
        <Contacts />
        <Alerts />
        <Calendar />
      </div>
    </div>
  );
};

export default page;
