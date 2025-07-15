'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import YellowButton from './Yellowbutton'
import Link from 'next/link'

const Navbar = () => {

    const [selected, setSelected] = useState('Home')
    const navItems = [
        {name: 'Home', link: '/'},
        {name: 'About Us', link: '/aboutus'},
        {name: 'Products', link: '/products'},
        {name: 'Machines', link: '/machines'},
        {name: 'Sustainability', link: '/sustainability'},
    ]
  return (
    <div className='sticky top-0 z-50 py-[10px] w-full flex justify-between items-center bg-white text-black px-[60px] border-b border-[#CCCCCC]'>
        <Logo/>
        <ul className='flex gap-[40px]'>
            {navItems.map((item) => (
                <li key={item.name} onClick={() => setSelected(item.name)} className={`cursor-pointer  hover:text-[#FCD900] transition-all duration-100 ${selected === item.name ? 'text-[#FCD900] font-bold' : 'text-black'}`}>
                    <Link href={item.link}>{item.name}</Link>
                </li>
            ))}
        </ul>
        <YellowButton text='Contact Us' link='https://www.google.com'/>
    </div>
  )
}

export default Navbar