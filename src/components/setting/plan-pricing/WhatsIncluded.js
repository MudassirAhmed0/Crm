import React from 'react'
const includes = [
    {
        text: "All analytics features",
    },
    {
        text: "Up to 250,000 tracked visits",
    },
    {
        text: "Normal support",
    },
    {
        text: "Up to 3 team members",
    },
]
const WhatsIncluded = () => {
    return (
        <div className='bg-[#FFF1EB] w-[23.406%] flex justify-center items-center py-[1.171875vw]'>
            <div className='w-[13.8541666667vw]'>
                <h5 className='text-[#FE7239] text18 font-[600] leading-[1.04166666667vw]'>
                    What’s included
                </h5>
                <ul className='text18 text-[#667085] mt-[1.61458333333vw] flex flex-col gap-y-[0.83333333333vw]'>
                    {
                        includes.map((include, i) => (
                            <li key={i} className='flex items-center gap-x-[0.72916666666vw]'>
                                <img src="/images/icons/include-chevron.svg" alt="chevron" className='w-[1.35416666667vw]' />
                                <span className='block leading-[1.04166666667vw]'>
                                    {include.text}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default WhatsIncluded
