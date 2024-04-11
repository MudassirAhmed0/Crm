import React from 'react'
import Link from "next/link";

const Card = ({ card, index }) => {
    return (
        <Link href={`${card.href}`} key={index} className="setting_Card w-[17.0833333333vw] p-[0.83333333333vw] border12">
            <img src={`/images/setting/${index + 1}.svg`} alt="setting" className="w-[1.66666666667vw]" />
            <div className="mt-[1.35416666667vw]">
                <h4 className="text16 font-[600] text-[#0C1D37]">
                    {card.heading}
                </h4>
                <p className="mt-[0.3125vw] text14 text-[#3B4555]">  {card.p}</p>
            </div>
        </Link>
    )
}

export default Card
