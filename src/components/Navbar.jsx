import React, { useEffect, useState } from 'react'
import { menulinks } from '../helper/helper'

import PetsIcon from '@mui/icons-material/Pets';
import { Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)



    return (
        <nav className={color ?
            'fixed top-0 left-0 flex justify-between w-full py-5 px-16 max-sm:px-8 items-center bg-white duration-300 z-20 '
            :
            'fixed top-0 left-0 flex justify-between w-full py-5 px-16 max-sm:px-8 items-center text-white duration-300 z-20 max-lg:bg-white'}
        >
            <div className={!isMobile && color ? 'flex  gap-2  text-black ' : 'flex gap-2  text-white max-lg:text-black '}>
                <PetsIcon sx={{ fontSize: 40 }} />
                <h3 className='text-[2rem] font-semibold'>CleanDog</h3>
            </div>
            <div className={isMobile ? " max-lg:absolute max-lg:flex-col max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:h-72 max-lg:bg-slate-700 max-lg:overflow-hidden max-lg:shadow-lg text-black max-lg:text-center" : "flex gap-8 text-white max-lg:hidden"}>
                {menulinks.map((link, index) => {
                    return (
                        <div key={index} className={!isMobile && color ? 'text-black' : 'text-white'}>
                            <a className='relative cursor-pointer text-center text-2xl max-lg:block max-lg:mt-3 hover:text-sky-500 duration-300' href={link.href}>{link.name}</a>
                        </div>
                    )
                })}

            </div>
            <div className="text-black hidden max-lg:block" onClick={() => setIsMobile(!isMobile)} >
                {<Hamburger toggled={isMobile} toggle={setIsMobile} />}
            </div>
        </nav>
    )
}

export default Navbar