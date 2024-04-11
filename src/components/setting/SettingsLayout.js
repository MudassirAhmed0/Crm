import React from 'react'
import Link from 'next/link'

const SettingsLayout = ({ children }) => {
    return (
        <div className='bg-white p-[1.25vw] h-full'>
            <Link href='/settings' className='block w-[1.66666666667vw] pb-[1.25vw]'>
                <img src="/images/icons/setting-back.svg" alt="back"
                    className='w-full'
                />
            </Link>
            {children}
        </div>
    )
}

export default SettingsLayout
