'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const sidebarFeatures = [
  {
    text: "Dashboard",
  },
  {
    text: "Current Campaigns",
    dropDownFeature: [
      {
        text: "All Campaigns",
      },
      {
        text: "Create Campaign",
      },
    ],
  },
  {
    text: "Leads Created",
  },
  {
    text: "Settings",
  },
]

const analytics = [
  {
    heading: "Total Calls Made",
    score: "80",
    report: "+23",
    green: true,
    bg: "#EEFDFE",
  },
  {
    heading: "Answered Calls",
    score: "45",
    report: "+23",
    green: true,
    bg: "#F8EAEC",
  },
  {
    heading: "Not Answered",
    score: "35",
    report: "+23",
    green: true,
    bg: "#ECE3FB",
  },
  {
    heading: "Calls Bounced",
    score: "105",
    report: "-23",

  },
  {
    heading: "Conversion Ratio",
    score: "2.5%",
    report: "-23",

  },
  {
    heading: "Appointments Made",
    score: "105",
    report: "-23",

  },
]


const page = () => {
  const [item, setItem] = useState(0)
  const handleClick = (i) => {
    setItem(i)
  }
  return (
    <>
      <div className='flex h-screen '>
        <div className='flex flex-col gap-y-[25.9259259259vh] Lexend w-[14.8958333333vw] overflow-scroll hideScroll h-full bg-[#12172A] py-[1.25vw] px-[1.19791666667vw]'>
          <div>
            <div className='flex justify-between'>
              <Link href='/' className='flex items-center'>
                <div className='w-[1.171875vw] h-[1.171875vw]  relative'>
                  <Image fill src='/images/icons/logo.svg' alt='logo' />

                </div>
                <span className='font-[600] text-white text-[0.83333333333vw]'>CallVerse.io</span>
              </Link>
            </div>
            <div className='mt-[1.35416666667vw] cursor-pointer w-full'>
              <div className='border14 border border-[#ffffff33]  bg-[#ffffff33] pl-[0.57291666666vw] pr-[1.09375vw] py-[0.46875vw] flex justify-between items-center'>
                <div className='flex gap-x-[0.57291666666vw] items-center'>
                  <div className='relative w-[2.08333333333vw] h-[2.08333333333vw]'>
                    <Image src='/images/icons/sidebar/sidebar-chevron-bblue.svg' fill alt='chevron' />
                  </div>
                  <div className='capitalize text14  text-white'>
                    <h5 className='font-[500]'>Chelly’s Cars</h5>
                    <span className='text-white text-opacity-[0.70] block mt-[0.20833333333vw]'>Automotive</span>
                  </div>
                </div>
                <div className='relative h-[0.83333333333vw] w-[0.83333333333vw]'>
                  <Image fill src='/images/icons/sidebar/sidebar-dropdown-chevron.svg' alt='chevron' />
                </div>
              </div>
              <div className='mt-[1.35416666667vw] flex flex-col gap-y-[0.625vw]'>
                {
                  sidebarFeatures.map((sidebarFeature, i) => (

                    <button key={i} onClick={() => { handleClick(i) }}>
                      <div className={`${i === item ? 'active' : ""} sideBar_Features`}>
                        <div className='flex gap-x-[0.52083333333vw] items-end '>
                          <div className='relative h-[1.04166666667vw] w-[1.04166666667vw]'>
                            <Image className='opacity-[0.70]' fill alt='grid' src={`/images/icons/sidebar/features/${i + 1}.svg`} />
                          </div>
                          <span className='text14 font-[400] text-opacity-[0.70] text-white'>
                            {sidebarFeature.text}
                          </span>
                        </div>
                        {sidebarFeature.dropDownFeature && <div className='relative h-[0.83333333333vw] w-[0.83333333333vw]'>
                          <Image className='opacity-[0.70]' fill src='/images/icons/sidebar/sidebar-dropdown-chevron.svg' alt='chevron' />
                        </div>}
                        {i === 2 &&
                          <div className='sideBar_Feature_number flex justify-center items-end text-white bg-[#FE7239] border6  px-[0.28645833333vw]'>
                            <span className='text12 font-[700] Inter  '>
                              2
                            </span>
                          </div>
                        }
                      </div>
                      {sidebarFeature.dropDownFeature &&
                        <div className={`   sideBar_Features_DropDown `}>
                          {
                            sidebarFeature.dropDownFeature.map((value, index) => (
                              <div key={index} className={`${index === 0 ? "active" : ""} sideBar_Features_DropDown_Item`}>
                                <div className='relative h-[0.52083333333vw] w-[0.52083333333vw] rounded-[50%] bg-white'>
                                </div>
                                <span className='text14 font-[400] text-white text-opacity-[0.70]'>
                                  {value.text}
                                </span>
                              </div>
                            ))
                          }
                        </div>
                      }
                    </button>

                  ))
                }

              </div>

            </div>
          </div>
          <div className='flex flex-col gap-y-[0.57291666666vw]'>
            <div className='border18 sideBar_Profile cursor-pointer pt-[1.25vw] pb-[0.9375vw]
                flex flex-col text-center items-center gap-y-[0.83333333333vw] relative'>
              <div className='absolute h-[1.25vw] w-[1.25vw] top-[0.625vw] right-[0.625vw]'>
                <Image fill src='/images/icons/sidebar/close.svg' alt='close' />
              </div>
              <div className='relative w-[4.79166666667vw] h-[4.79166666667vw]'>
                <Image fill src='/images/icons/sidebar/percentage.svg' alt='percentage' />

              </div>
              <div>
                <h5 className='text14 font-[600] text-white'>
                  Complete your profile
                </h5>
                <span className='mt-[0.46875vw] block text-white text-opacity-[0.70] text12 leading-[0.78125vw]'>Check 1 min video and begin use components like a pro</span>
              </div>
              <Link href='/' className='w-[10.4166666667vw] border12 py-[0.52083333333vw]'>
                <span className='text14 font-[500] text-[#0A1B39] block'>
                  My Profile
                </span>
              </Link>
            </div>
            <Link href='/' className='flex justify-between items-center py-[0.41666666666vw] pl-[0.57291666666vw] pr-[1.04166666667vw] border14 bg-[#55A55E] border border-[#55A55E]'>
              <div className='flex gap-x-[0.57291666666vw] items-center'>
                <div className='relative w-[2.08333333333vw] h-[2.08333333333vw]'>
                  <Image fill src='/images/icons/sidebar/share.svg' alt='share' />
                </div>
                <div>
                  <h5 className='text14 font-[500] text-white'>Share & Earn</h5>
                  <span className='mt-[0.20833333333vw] block text14 text-white text-opacity-[0.70]'>Refer A Friend! </span>
                </div>
              </div>
              <div className='relative w-[0.83333333333vw] h-[0.83333333333vw]'>
                <Image fill src='/images/icons/sidebar/right-chevron.svg' alt='chevron' />

              </div>
            </Link>
            <Link href='/' className='flex justify-between items-center py-[0.41666666666vw] pl-[0.57291666666vw] pr-[1.04166666667vw] border14 bg-[#ffffff33] border border-[#ffffff33]'>
              <div className='flex gap-x-[0.57291666666vw] items-center'>
                <div className='relative w-[2.08333333333vw] h-[2.08333333333vw]'>
                  <Image fill src='/images/icons/sidebar/help.svg' alt='help' />
                </div>
                <div>
                  <h5 className='text14 font-[500] text-white'>Help Center</h5>
                  <span className='mt-[0.20833333333vw] block text14 text-white text-opacity-[0.70]'>Answers Here </span>
                </div>
              </div>
              <div className='relative w-[0.83333333333vw] h-[0.83333333333vw]'>
                <Image fill src='/images/icons/sidebar/right-chevron.svg' alt='chevron' />

              </div>
            </Link>
          </div>
        </div>
        <div className='w-[85.1041666667vw] bg-[#F7F8FB]'>
          <div className='w-full bg-[#FFF] border border-b-[#F4F4F4] py-[0.83333333333vw] pl-[1.77083333333vw] pr-[2.39583333333vw] flex justify-between'>
            <div>
              <h4 className='text20 text-[#0C1D37] font-[500] leading-[1.30208333333vw]'>
                Welcome, Josh
              </h4>
              <span className='text12 text-[#3B4555] leading-[0.78125vw] block mt-[0.26041666666vw]'>
                Last 7 Days Campaign Statistics
              </span>
            </div>
            <div className='flex gap-x-[1.25vw] items-center '>
              <div className='cursor-pointer relative w-[1.04166666667vw] h-[1.04166666667vw]'>
                <Image fill src='/images/icons/notification.svg' alt='notification' />
              </div>
              <div className='flex cursor-pointer items-center'>
                <div className='mr-[0.625vw] relative w-[2.08333333333vw] h-[2.08333333333vw]'>
                  <Image fill src='/images/topbar/user.jpg' alt='user' />
                </div>
                <div>
                  <h5 className='text14 text-[#151924]'>Josh Hazelwood</h5>
                  <span className='block text12 text-[#444750] mt-[0.10416666666vw]'>hazeljoshwood@mail.com</span>
                </div>
                <div className='relative w-[0.78125vw] h-[1.04166666667vw] ml-[0.15625vw]'>
                  <Image fill src='/images/icons/black-arrow-down.svg' alt='black-arrow-down' />
                </div>
              </div>
            </div>
          </div>
          <div className='pt-[1.35416666667vw] w-[82.7083333333vw] mx-[auto]'>
            <div>
              <h4 className='text-[#0C1D37] font-[600] text24'>Analytics Overview</h4>
              <div className='flex items-stretch gap-x-[1.04166666667vw] mt-[0.78125vw]'>
                {
                  analytics.map((analytic, i) => (
                    <div key={i} style={{ background: analytic.bg ? analytic.bg : 'white' }} className={` cursor-pointer border20 w-[12.9166666667vw] flex gap-x-[1.04166666667vw] pl-[0.703125vw] py-[0.625vw] items-center`}>
                      <div className={`${i <= 2 ? "bg-[#FFFFFF]" : "bg-[#F5F5F5]"} w-[2.91666666667vw] h-[2.91666666667vw] rounded-[50%]  flex justify-center items-center mb-[0.36458333333vw]`}>
                        <div className='relative w-[1.71052083333vw] h-[1.71052083333vw]'>
                          <Image fill src={`/images/dashboard/analytic/${i == 1 ? '2' : '1'}.svg`} alt='analytic' />
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        <span className='block tracking-[0.01458333333vw] text14 font-[500] text-[#3B4555]'>{analytic.heading}</span>
                        <span className='block text-[#0C1D37] font-[600] text26 tracking-[-0.02708333333vw]'>{analytic.score}</span>
                        <div className='flex gap-x-[0.20833333333vw] mt-[0.26041666666vw] leading-[1.04166666667vw]'>
                          <span className={`${analytic.green ? "text-[#55A55E]" : "text-[#D22E41]"} block  text12 font-[700] tracking-[-0.0125vw] Dm`}>{analytic.report}</span>
                          <span className='block text-[#3B4555] text12   tracking-[-0.0125vw]  '>since last week</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='flex justify-between w-full h-[17.96875vw] mt-[1.35416666667vw]'>
              <div className='w-[52.96875vw] h-full border20 bg-[#fff]'>
                <h1 className='text-center w-full text-red-600 text-[5vw]'>Performance</h1>
              </div>
              <div className='h-full w-[28.75vw] bg-[#FFF] border20 Dm text14 leading-[1.25vw] tracking-[-0.01458333333vw]'>
                <div className='flex justify-between items-center pt-[0.98958333333vw] px-[1.25vw] '>
                  <h4 className='Dm text24 leading-[2.08333333333vw] font-[700] text-[#0C1D37] tracking-[-0.025vw]'>
                    Active Campaigns
                  </h4>
                  <button className='border10 bg-[#F4F7FE] flex justify-center items-center   w-[1.92708333333vw] h-[1.92708333333vw]'>
                    <div className='relative w-[1.25vw] h-[1.25vw]'>
                      <Image fill alt='button' src='/images/icons/button.svg' />
                    </div>
                  </button>
                </div>
                <div className='text-[#0C1D37]  font-[500] pt-[1.19791666667vw] pb-[0.3125vw] px-[1.61458333333vw] border-b-[0.05208333333vw] border-[#E9EDF7] flex justify-between'>
                  <div className='w-[7.55208333333vw]'>
                    <span className=' uppercase block   '>
                      NAME
                    </span>
                  </div>
                  <div className='w-[4.89583333333vw]'>
                    <span className=' uppercase block '>
                      STATUS
                    </span>
                  </div>
                  <div className='w-[4.42708333333vw]'>
                    <span className=' uppercase block   '>
                      DATE
                    </span>
                  </div>
                </div>
                <div className='font-[700] text-[#3B4555] px-[1.61458333333vw] pt-[0.88541666666vw] flex justify-between'>
                  <ul className='whitespace-nowrap capitalize w-[7.55208333333vw] flex flex-col gap-y-[1.30208333333vw]'>
                    <li >
                      <span>sales Outreach</span>
                    </li>
                    <li >
                      <span>Product Awareness</span>
                    </li>
                    <li >
                      <span>New Promo Campaign</span>
                    </li>
                    <li >
                      <span>Feedback Collection</span>
                    </li>
                  </ul>
                  <ul className='whitespace-nowrap capitalize w-[4.89583333333vw] flex flex-col gap-y-[1.30208333333vw]'>
                    <li className='flex gap-x-[0.26041666666vw]'>
                      <div className='relative w-[1.25vw] h-[1.25vw]'>
                        <Image fill src='/images/dashboard/campaigns/approved.svg' alt='status' />
                      </div>
                      <span>Approved</span>
                    </li>
                    <li className='flex gap-x-[0.26041666666vw]'>
                      <div className='relative w-[1.25vw] h-[1.25vw]'>
                        <Image fill src='/images/dashboard/campaigns/disable.svg' alt='status' />
                      </div>
                      <span>Disable</span>
                    </li>
                    <li className='flex gap-x-[0.26041666666vw]'>
                      <div className='relative w-[1.25vw] h-[1.25vw]'>
                        <Image fill src='/images/dashboard/campaigns/error.svg' alt='status' />
                      </div>
                      <span>Error</span>
                    </li>
                    <li className='flex gap-x-[0.26041666666vw]'>
                      <div className='relative w-[1.25vw] h-[1.25vw]'>
                        <Image fill src='/images/dashboard/campaigns/approved.svg' alt='status' />
                      </div>
                      <span>Approved</span>
                    </li>
                  </ul>
                  <ul className='whitespace-nowrap capitalize w-[4.42708333333vw] flex flex-col gap-y-[1.30208333333vw]'>

                    <li>
                      <span>
                        18 Apr 2024
                      </span>
                    </li>
                    <li>
                      <span>
                        18 Apr 2024
                      </span>
                    </li>
                    <li>
                      <span>
                        20 May 2024
                      </span>
                    </li>
                    <li>
                      <span>
                        12 Jul 2024
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex justify-between h-[17.7604166667vw] mt-[1.14583333333vw]'>
              <div className='h-full w-[40.4166666667vw] bg-[#FFF] border20 Dm text14 leading-[1.25vw] tracking-[-0.01458333333vw]'>
                <div className='flex justify-between items-center pt-[0.98958333333vw] px-[1.25vw] '>
                  <h4 className='Dm text24 leading-[2.08333333333vw] font-[700] text-[#0C1D37] tracking-[-0.025vw]'>
                    Contacts
                  </h4>
                  <button className='border10 bg-[#F4F7FE] flex justify-center items-center   w-[1.92708333333vw] h-[1.92708333333vw]'>
                    <div className='relative w-[1.25vw] h-[1.25vw]'>
                      <Image fill alt='button' src='/images/icons/button.svg' />
                    </div>
                  </button>
                </div>
                <div className='text-[#0C1D37]  font-[500] pt-[1.19791666667vw] pb-[0.3125vw] px-[1.61458333333vw] border-b-[0.05208333333vw] border-[#E9EDF7] flex justify-between'>
                  <div className='w-[4.94791666667vw]'>
                    <span className=' uppercase block   '>
                      NAME
                    </span>
                  </div>
                  <div className='w-[7.39583333333vw]'>
                    <span className=' uppercase block '>
                      STATUS
                    </span>
                  </div>
                  <div className='w-[7.29166666667vw]'>
                    <span className=' uppercase block   '>
                      DATE
                    </span>
                  </div>
                  <div className='w-[7.91666666667vw]'>
                    <span className=' uppercase block   '>
                      CAMPAIGN NAME.
                    </span>
                  </div>
                </div>
                <div className='font-[700] text-[#3B4555] px-[1.61458333333vw] pt-[0.88541666666vw] flex justify-between'>
                  <ul className='whitespace-nowrap capitalize w-[4.94791666667vw] flex flex-col gap-y-[1.30208333333vw]'>
                    <li >
                      <span>John Graber</span>
                    </li>
                    <li >
                      <span>Hazel Daley</span>
                    </li>
                    <li >
                      <span>Robert Half</span>
                    </li>
                    <li >
                      <span>Lindsey Meijer</span>
                    </li>
                  </ul>
                  <ul className='whitespace-nowrap capitalize w-[7.39583333333vw] flex flex-col gap-y-[1.30208333333vw]'>
                    <li className='flex gap-x-[0.26041666666vw]'>
                      <div className='relative w-[1.25vw] h-[1.25vw]'>
                        <Image fill src='/images/dashboard/campaigns/approved.svg' alt='status' />
                      </div>
                      <span>Appointment Set</span>
                    </li>
                    <li className='flex gap-x-[0.26041666666vw]'>
                      <div className='relative w-[1.25vw] h-[1.25vw]'>
                        <Image fill src='/images/dashboard/campaigns/disable.svg' alt='status' />
                      </div>
                      <span>Not Interested</span>
                    </li>
                    <li className='flex gap-x-[0.26041666666vw]'>
                      <div className='relative w-[1.25vw] h-[1.25vw]'>
                        <Image fill src='/images/dashboard/campaigns/error.svg' alt='status' />
                      </div>
                      <span>Calls Bounced</span>
                    </li>
                    <li className='flex gap-x-[0.26041666666vw]'>
                      <div className='relative w-[1.25vw] h-[1.25vw]'>
                        <Image fill src='/images/dashboard/campaigns/approved.svg' alt='status' />
                      </div>
                      <span>Appointment Set</span>
                    </li>
                  </ul>
                  <ul className='whitespace-nowrap capitalize w-[7.29166666667vw] flex flex-col gap-y-[1.30208333333vw]'>

                    <li>
                      <span>
                        18 Apr 2024 / 8:30pm
                      </span>
                    </li>
                    <li>
                      <span>
                        Not Set
                      </span>
                    </li>
                    <li>
                      <span>
                        Not Set
                      </span>
                    </li>
                    <li>
                      <span>
                        12 Jul 2024 / 4:30pm
                      </span>
                    </li>
                  </ul>
                  <ul className='whitespace-nowrap capitalize w-[7.91666666667vw] flex flex-col gap-y-[1.30208333333vw]'>


                    <li>
                      <span>
                        CallVerse Campaign #1
                      </span>
                    </li>
                    <li>
                      <span>
                        CallVerse Campaign #1
                      </span>
                    </li>
                    <li>
                      <span>
                        CallVerse Campaign #1
                      </span>
                    </li>
                    <li>
                      <span>
                        CallVerse Campaign #1
                      </span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
