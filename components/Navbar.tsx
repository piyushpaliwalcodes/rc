'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import YellowButton from './Yellowbutton'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const navItems = [
        {name: 'Home', link: '/', key: ''},
        {name: 'About Us', link: '/aboutus', key: 'aboutus'},
        {name: 'Products', link: '/products', key: 'products'},
        {name: 'Machines', link: '/machines', key: 'machines'},
        {name: 'Sustainability', link: '/sustainability', key: 'sustainability'},
    ];

    // Initialize selected to the current path segment if it matches a nav item key
    const initialKey = (() => {
        const currentKey = pathname.split('/')[1];
        return navItems.some(item => item.key === currentKey) ? currentKey : '';
    })();
    const [selected, setSelected] = useState(initialKey);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const newKey = pathname.split('/')[1];
        const isValidKey = navItems.some(item => item.key === newKey);
        if (isValidKey) {
            setSelected(newKey);
        }
        // If not valid, do not update selected
    }, [pathname]);

    // Close sidebar on route change
    useEffect(() => {
        setSidebarOpen(false);
    }, [pathname]);

    return (
        <div className='sticky top-0 z-50 py-[10px] w-full flex justify-between items-center bg-white text-black px-4 md:px-[60px] border-b border-[#CCCCCC]'>
            <Logo/>
            {/* Desktop Nav */}
            <ul className='hidden md:flex gap-[40px]'>
                {navItems.map((item) => (
                    <li key={item.name} className={`cursor-pointer hover:text-[#FCD900] transition-all duration-100 ${selected === item.key ? 'text-[#FCD900] font-bold' : 'text-black'}`}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <div className='hidden md:block'>
                <YellowButton text='Contact Us' link='/contactus'/>
            </div>
            {/* Hamburger for mobile */}
            <button className='md:hidden text-2xl p-2' onClick={() => setSidebarOpen(true)} aria-label="Open menu">
                <FaBars />
            </button>
            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)}></div>
                    {/* Sidebar */}
                    <div className="relative bg-white w-[75vw] max-w-xs h-full shadow-lg p-6 flex flex-col gap-8 animate-slide-in-left">
                        <button className="absolute top-4 right-4 text-2xl" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                            <FaTimes />
                        </button>
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <ul className='flex flex-col gap-6'>
                            {navItems.map((item) => (
                                <li key={item.name} className={`cursor-pointer hover:text-[#FCD900] transition-all duration-100 ${selected === item.key ? 'text-[#FCD900] font-bold' : 'text-black'}`}>
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className='mt-auto'>
                            <YellowButton text='Contact Us' link='/contactus'/>
                        </div>
                    </div>
                </div>
            )}
            <style jsx global>{`
                @keyframes slide-in-left {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
                .animate-slide-in-left {
                    animation: slide-in-left 0.3s cubic-bezier(0.4,0,0.2,1);
                }
            `}</style>
        </div>
    )
}

export default Navbar