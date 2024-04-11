import React from 'react'
import Link from 'next/link'

const CurrentPlan = () => {
    return (
        <div className='w-[69.613%] py-[1.171875vw] flex flex-col items-start'>
            <div className='flex gap-x-[0.9375vw] items-center'>
                <img src="/images/icons/basic-plan.svg" alt="plan" className='w-[3.75vw]' />
                <div className=''>
                    <span className='text18 text-[#667085] font-[500] block leading-[1.04166666667vw]'>Current Plan</span>
                    <h4 className='text-[#01223B] text24 font-[700]'>
                        Basic
                    </h4>
                </div>
            </div>
            <p className='text-[#667085] text18 mt-[0.625vw]'>
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <Link href='/' className='mt-[0.83333333333vw] text18 font-[500] text-white border12 bg-[#FE7239] py-[0.44270833333vw] px-[1.97916666667vw] upgrade_Btn block'>
                Upgrade
            </Link>
        </div>
    )
}

export default CurrentPlan
