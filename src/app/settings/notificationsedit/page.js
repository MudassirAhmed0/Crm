import SettingsLayout from '@/components/setting/SettingsLayout'
import React from 'react'

const Notifications = () => {
    return (
        <SettingsLayout>
            <div className='border16 border border-[#ECEEF1]'>
                <h4 className='text20 font-[500] text-[#0C1D37] pl-[1.25vw]'>
                    Notifications Settings
                </h4>
                <ul className='text14 leading-[1.14583333333vw] text-[#0C1D3782]'>
                    <li className='px-[1.25vw]   py-[0.859375vw]'>
                        <span>
                            Notifications
                        </span>
                        <input type="radio" />
                    </li>
                </ul>
            </div>
        </SettingsLayout>
    )
}

export default Notifications
