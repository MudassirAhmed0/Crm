import SettingsLayout from '@/components/setting/SettingsLayout'
import React from 'react'

const AccountSetting = () => {
    return (
        <SettingsLayout>
            <div>
                <div className='border16 border-[0.05208333333vw] border-[#ECEEF1]'>
                    <div className='py-[0.859375vw] border-b-[0.05208333333vw] border-[#ECEEF1]'>
                        <h4 className='text20 font-[500] text-[#0C1D37]'>
                            Account Settings
                        </h4>
                    </div>
                    <div className='  w-[96.840%] mx-[auto]'>
                        <div className='flex items-center gap-x-[0.46875vw] pt-[1.14583333333vw] pb-[0.9375vw] border-b-[0.05208333333vw] border-[#ECEEF1]'>
                            <div className='cursor-pointer relative w-[5vw]  h-[5vw] rounded-[6.14583333333vw] overflow-hidden'   >
                                <img src="/images/icons/profile.svg" alt="profile"
                                    className='w-full h-full'
                                />
                                <img src="/images/icons/edit.svg" alt="edit"
                                    className='z-[2] w-[1.04166666667vw] h-[1.04166666667vw] top-[50%]  left-[50%] transform translate-x-[-50%] translate-y-[-50%] absolute  2]'
                                />
                                <span className='w-full h-full top-0 left-0 absolute bg-[#00000082]'></span>
                            </div>
                            <span className='text12 text-[#C2C2C2]'>
                                Allowed JPG, GIF or PNG. Max size of 800K
                            </span>
                        </div>
                        <form >

                        </form>
                    </div>
                </div>
            </div>
        </SettingsLayout>
    )
}

export default AccountSetting
