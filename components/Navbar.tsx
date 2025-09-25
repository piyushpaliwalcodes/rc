'use client'
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import YellowButton from './Yellowbutton'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const navItems = [
        {name: 'Home', link: '/', key: ''},
        {name: 'About Us', link: '/aboutus', key: 'aboutus'},
        {name: 'Products', link: '/products', key: 'products'},
        {name: 'Machines', link: '/machines', key: 'machines'},
        {name: 'Sustainability', link: '/sustainability', key: 'sustainability'},
        {name: 'Contact Us',link:'/contactus',key:'contactus'}
    ];

    // Initialize selected to the current path segment if it matches a nav item key
    const initialKey = (() => {
        const currentKey = pathname.split('/')[1];
        return navItems.some(item => item.key === currentKey) ? currentKey : '';
    })();
    const [selected, setSelected] = useState(initialKey);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);

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

    // Make lower navbar fixed on scroll
    useEffect(() => {
        const updateNavMeasurements = () => {
            if (navRef.current) {
                setNavHeight(navRef.current.offsetHeight);
            }
        };

        const handleScroll = () => {
            setIsFixed(window.scrollY > 108);
        };

        updateNavMeasurements();
        handleScroll();
        window.addEventListener('resize', updateNavMeasurements);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('resize', updateNavMeasurements);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    	<div className='flex flex-col text-black  bg-[#FFFCE8]'>
	    	{/* Desktop top bar */}
	    	<div className='bg-[#FFFCE8] md:flex hidden justify-between px-4 md:px-[60px] md:h-[108px] min-h-[72px] items-center flex-wrap md:flex-nowrap gap-4'>
	    	<Logo className="w-[88px] h-[88px] lg:w-[102px] lg:h-[102px]" />
	    	<div className='flex items-center flex-wrap md:flex-nowrap gap-4'>
	   	   <div className="flex items-center gap-3">
	   	   	<BsTelephone className='text-xl lg:text-2xl'/>
	   	   	<div className="flex flex-col leading-tight">
	   	   	<p className='text-sm lg:text-base'>+ 91 9425326237</p>
	   	   	<p className='text-sm lg:text-base'>+ 91 7217217236</p></div>
	   	   	</div>
	   	   	<hr className='hidden lg:block w-[60px] rotate-90 font-bold text-[#FCD900]'/>
	   	   	<div className="flex items-center gap-3">
	   	   	<CiLocationOn className='text-2xl'/>
	   	   	<div className="flex flex-col leading-tight max-w-[260px] lg:max-w-none">
	   	   	<p className='text-sm lg:text-base'>Office Address: Moghat Road, Khandwa </p>
	   	   	<p className='text-sm lg:text-base'>Factory Address: Mokalgoan Road, Dondwada, Khandwa</p></div>
	   	   	</div>

	   	  
	   	 	</div>
	   		
	   	 	</div>

	   	{/* Mobile compact top bar */}
	   	<div className='bg-[#FFFCE8] hidden md:hidden flex items-center justify-between px-4 py-2'>
	   		<Logo className="w-[64px] h-[64px]" />
	   		<div className='flex items-center gap-4'>
	   			<a href='tel:+919425326237' aria-label="Call us" className='p-2 rounded-full border border-[#FCD900]'>
	   				<BsTelephone className='text-xl' />
	   			</a>
	   			<Link href='/contactus' aria-label="Our addresses" className='p-2 rounded-full border border-[#FCD900]'>
	   				<CiLocationOn className='text-2xl' />
	   			</Link>
	   		</div>
	   	</div>

            {isFixed && <div style={{ height: navHeight }} />}
            <div ref={navRef} className={`${isFixed ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : 'sticky top-0 z-50'} py-[10px] w-full flex justify-between items-center bg-white text-black px-4 md:px-[60px]  border-b border-[#CCCCCC]`}>
            
	    	{/* Desktop/Nav bar - sub navbar responsive. On mobile shows hamburger */}
            <div className='hidden md:flex items-center gap-6'>
                {isFixed && (
                    <Logo className="w-[48px] h-[48px]" />
                )}
                <ul className='flex gap-[40px]'>
                    {navItems.map((item) => (
                        <li key={item.name} className={`hover:cursor-pointer hover:text-[#FCD900] transition-all duration-100 ${selected === item.key ? 'text-[#FCD900] font-bold' : 'text-black'}`}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div className='hidden md:block'>
            <Link href="/contactus" className=''>Contact Us</Link>
            </div> */}
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
                            <Logo className="w-[102px] h-[102px]" />
                        </div>
                        <ul className='flex flex-col gap-6'>
	   	    			{navItems.map((item) => (
	   	    				<li key={item.name} className={`hover:cursor-pointer hover:text-[#FCD900] transition-all duration-100 ${selected === item.key ? 'text-[#FCD900] font-bold' : 'text-black'}`}>
	   	    					<Link href={item.link} onClick={() => setSidebarOpen(false)}>{item.name}</Link>
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
        </div>
        
    )
}

export default Navbar