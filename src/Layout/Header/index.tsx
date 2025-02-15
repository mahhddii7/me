

import { contextApi } from '@/context'
import { MouseEvent, useContext, useEffect, useState } from 'react'
import useWindowSize from '../../../hook/useWindowSize'
const Header = () => {
    const {isSmallScreen} = useWindowSize(false)
    const [w, setW] = useState(98)
    const [h, setH] = useState(40)
    const [x, setX] = useState(0)
    const context = useContext(contextApi)
    const [className, setClassName] = useState(0)
    const [activeMenu, setActiveMenu] = useState(false)
    const setAnimation = (e: MouseEvent, id: number) => {
        setH((e.target as HTMLButtonElement).clientHeight + 5)
        setW((e.target as HTMLButtonElement).clientWidth + 5)
        setX((e.target as HTMLButtonElement).offsetLeft - 3);
        setClassName(id)
    }

    useEffect(() => {
        setW(isSmallScreen ? 90 : 98)
    },[isSmallScreen])
    const setSection = (txt: keyof typeof context) => {
        context[txt]?.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    setTimeout(() => {
        setActiveMenu(true)
    }, 500);
    return (
        <div className={`max-w-fit bg-[#c8c8c8]/70 rounded-full header fixed z-50 p-3 left-2/4 -translate-x-2/4 backdrop-blur-sm ${activeMenu ? 'slid-down width-full' : ' -top-40'}`}>
            <ul className='flex items-center justify-between md:gap-6 relative'>
                <span className={`absolute transition-cub top-2/4 rounded-full bg-[#181818] opacity-50 -translate-y-1/2`} style={{ width: w + 'px', height: h + 'px', left: `calc(${x}px)` }} ></span>
                <li className={` flex-none text-sm whitespace-nowrap md:text-base text-black p-2 cursor-pointer z-20 ${className == 0 ? 'text-white' : 'text-black'}`} onClick={(e) => { setAnimation(e, 0); setSection('information') }}>information</li>
                <li className={` flex-none text-sm whitespace-nowrap md:text-base text-black p-2 cursor-pointer z-20 ${className == 1 ? 'text-white' : 'text-black'}`} onClick={(e) => { setAnimation(e, 1); setSection('skills') }}>skills</li>
                <li className={` flex-none text-sm whitespace-nowrap md:text-base text-black p-2 cursor-pointer z-20 ${className == 2 ? 'text-white' : 'text-black'}`} onClick={(e) => { setAnimation(e, 2); setSection('company') }}>company</li>
                <li className={` flex-none text-sm whitespace-nowrap md:text-base text-black p-2 cursor-pointer z-20 ${className == 3 ? 'text-white' : 'text-black'}`} onClick={(e) => { setAnimation(e, 3); setSection('contactUs') }}>contact us</li>
            </ul>
        </div >
    )
}

export default Header