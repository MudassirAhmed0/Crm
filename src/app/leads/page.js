import NotFoundContent from "@/components/common/not-found-content";
import React from "react";

const Leads = () => {
  return (
    <>
      <NotFoundContent
        heading={" No Leads Created"}
        desc={` Sorry, no leads have been created yet. Check your campaigns performance and ensure it is fully optimized/running.`}
      />
    </>
  );
};

export default Leads;
