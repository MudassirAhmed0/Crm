import NotFoundContent from "@/components/common/not-found-content";

const Campaigns = () => {
  return (
    <>
      <NotFoundContent
        heading={" No Campaign"}
        desc={` Oops, you don’t have any campaigns created yet, click below to  get started!`}
        btn={{ text: "Create Campaign" }}
      />
    </>
  );
};

export default Campaigns;
