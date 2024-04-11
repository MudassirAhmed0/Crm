import Link from 'next/link'
import React from 'react'

const PricingDetailsCard = ({ pricingDetail, index }) => {
    return (
        <>

            <div className={`${index === 2 ? "active" : ""} w-[26.935%] text-[#848199] flex justify-center py-[1.04166666667vw] pricingDetail_Card`}>
                <div className={` w-[12.0833333333vw]   `}>
                    {pricingDetail.tag && <div className='  flex justify-end'>
                        <span className='   py-[0.3125vw] px-[0.96354166666vw] text10 tracking-[0.04338541666vw] text-white bg-[#5A1400] border12 uppercase'>{pricingDetail.tag}</span>
                    </div>}
                    <div className='flex flex-col justify-between h-full py-[1.04166666667vw]'>
                        <div>
                            <div>
                                <span className='text36 font-[700] text-[#231D4F]'>
                                    {pricingDetail.prize}
                                </span>
                                <span className='text18 font-[500]'>
                                    /month
                                </span>
                            </div>
                            <div className='mt-[1.04166666667vw]'>
                                <h4 className='text28 leading-[1.82291666667vw] font-[500] text-[#231D4F]'>
                                    {pricingDetail.heading}
                                </h4>
                                <p className='text15 h-[1.97916666667vw] font-[500] leading-[0.98958333333vw]'>
                                    {pricingDetail.p}
                                </p>
                            </div>
                            <ul className='mt-[1.25vw] flex flex-col gap-y-[0.57291666666vw] text15 font-[500]'>
                                {
                                    pricingDetail.ul.map((list, i) => (
                                        <li key={i} className='flex gap-x-[0.52083333333vw]'>
                                            <img src="/images/icons/gray-tick-prize.svg" alt="tick" className='gray w-[1.04166666667vw]' />
                                            <img src="/images/icons/white-tick-prize.svg" alt="tick" className='white w-[1.04166666667vw] hidden' />
                                            <span className='leading-[0.98958333333vw]'>
                                                {list.li}
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link href='/' className='mt-[1.25vw] text15 text-center py-[0.58854166666vw] block border12 text15 font-[500] text-white w-[10.78125vw] bg-[#12172A]'>
                            Choose plan
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingDetailsCard
