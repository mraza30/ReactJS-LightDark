import React from 'react'
import bgReact from '../assets/reactBg.png'
import bgReactL from '../assets/reactBgL.png'
export default function Main(props) {
    let textColor, bgColor, BgIcon
    if (props.isDark) {
        textColor = 'text-white'
        bgColor = ' bg-gray-800'
        BgIcon = bgReactL
    }
    else {
        textColor = 'text-black'
        bgColor = ' bg-white'
        BgIcon = bgReact
    }
    return (
        <div className={textColor + bgColor + ' font-inter px-2 pt-9 h-full relative -z-10'}>
            <h1 className='font-bold text-2xl tracking-tight'>Fun facts about React</h1>
            <ul className='tracking-tight leading-10 list-outside list-disc pl-5'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <div className='absolute right-0 top-20' style={{ zIndex: -1 }}>
                <img src={BgIcon} alt="" />
            </div>

        </div>
    )
}
