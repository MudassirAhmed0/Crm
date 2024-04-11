import SettingsLayout from '@/components/setting/SettingsLayout'
import Buttons from '@/components/setting/plan-pricing/Buttons'
import CurrentPlan from '@/components/setting/plan-pricing/CurrentPlan'
import PricingDetailsCard from '@/components/setting/plan-pricing/PricingDetailsCard'
import PricingTexts from '@/components/setting/plan-pricing/PricingTexts'
import WhatsIncluded from '@/components/setting/plan-pricing/WhatsIncluded'


const pricingDetails = [
    {
        prize: "$79",
        heading: "Starter",
        p: "Unleash the power of automation.",
        ul: [
            { li: "Multi-step Zaps" },
            { li: "3 Premium Apps" },
            { li: "2 Users team" },
        ],
    },
    {
        prize: "$124",
        heading: "Growth",
        p: "Advanced tools to take your work to the next level.",
        ul: [
            { li: "Multi-step Zaps" },
            { li: "Unlimited Premium Apps" },
            { li: "50 Users team" },
            { li: "Shared Workspace" },
        ],
    },
    {
        tag: "MOST POPULAR",
        prize: "$205",
        heading: "Professional",
        p: "Automation plus enterprise-grade features.",
        ul: [
            { li: "Multi-step Zaps" },
            { li: "Unlimited Premium Apps" },
            { li: "Unlimited Users team" },
            { li: "Advanced Admin" },
            { li: "Custom Data Retention" },
        ],
    },


]


const PlansPricing = () => {
    return (
        <SettingsLayout>
            <div>
                <div className='flex justify-between overflow-hidden pl-[1.61458333333vw]  border border-[#ECEEF1] border18 Outfit'>
                    <CurrentPlan />
                    <WhatsIncluded />

                </div>
                <div className='flex justify-between items-end mt-[0.88541666666vw]'>
                    <PricingTexts />
                    <Buttons />

                </div>
                <div className='pricing_Details mt-[2.70833333333vw] flex items-stretch justify-between Outfit border29 px-[11.4583333333vw]'>
                    {
                        pricingDetails.map((pricingDetail, index) => (

                            <PricingDetailsCard pricingDetail={pricingDetail} index={index} key={index} />
                        ))
                    }
                </div>
            </div>

        </SettingsLayout>
    )
}

export default PlansPricing
