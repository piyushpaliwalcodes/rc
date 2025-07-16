'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import YellowButton from './Yellowbutton'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {

    const router = useRouter()
    const pathname = usePathname()
    const [selected, setSelected] = useState(pathname.split('/')[1])


    useEffect(() => {
        setSelected(pathname.split('/')[1])
    }, [pathname])

    const navItems = [
        {name: 'Home', link: '/', key: ''},
        {name: 'About Us', link: '/aboutus', key: 'aboutus'},
        {name: 'Products', link: '/products', key: 'products'},
        {name: 'Machines', link: '/machines', key: 'machines'},
        {name: 'Sustainability', link: '/sustainability', key: 'sustainability'},
    ]
  return (
    <div className='sticky top-0 z-50 py-[10px] w-full flex justify-between items-center bg-white text-black px-[60px] border-b border-[#CCCCCC]'>
        <Logo/>
        <ul className='flex gap-[40px]'>
            {navItems.map((item) => (
                <li key={item.name} className={`cursor-pointer  hover:text-[#FCD900] transition-all duration-100 ${selected === item.key ? 'text-[#FCD900] font-bold' : 'text-black'}`}>
                    <Link href={item.link}>{item.name}</Link>
                </li>
            ))}
        </ul>
        <YellowButton text='Contact Us' link='https://www.google.com'/>
    </div>
  )
}

export default Navbar