"use client"
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback } from 'react';

const Reviewcard = ({name,designation,review,profilesrc}:{name:string,designation:string,review:string,profilesrc:string}) =>
{
    return (
        <div className="flex flex-col gap-6 md:gap-[30px] mt-6 md:mt-[30px]">
            <p className="text-[16px] md:text-[20px] text-black/40 w-full md:w-[80%]">"{review}"</p>
            <div className="flex">
                {/* Profile card */}
                <div className="flex justify-between w-full">
                    <div className="flex gap-4 md:gap-[15px]">
                        <Image src={profilesrc} alt="profile" width={60} height={60} className="rounded-[10px]" />
                    <div className="flex flex-col gap-1 md:gap-[2px] justify-around">
                        <h1 className="text-[16px] md:text-[20px] ">{name}</h1>
                        <p className="text-[13px] md:text-[16px] text-black/30 "> {designation}</p>
                    </div></div>
                </div>
            </div>
        </div>
    )
}

const Ourclientsay = () =>
{
    const reviewdata = [
        {
            name:"John Doe",
            designation:"CEO",
            review:"The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
            profilesrc:"/images/teamperson.png"
        },
        {
            name:"John Doe",
            designation:"CEO",
            review:"The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
            profilesrc:"/images/teamperson.png"
        },
        {
            name:"John Doe",
            designation:"CEO",
            review:"The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
            profilesrc:"/images/teamperson.png"
        },
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="flex flex-col gap-6 md:gap-[30px] p-4 md:p-[60px] py-[60px] md:py-[100px] bg-[#F5F5F5] text-black" style={{backgroundImage: "url('/images/dottedbg.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="flex flex-col lg:grid lg:grid-cols-[2fr_3fr] gap-8 md:gap-[150px] w-full">
                <div className="mb-6 lg:mb-0 flex justify-center items-center hidden md:flex">
                    <Image src="/images/testimonial.png" alt="ourclientsay" width={400} height={400} className="w-[220px] h-[220px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain" />
                </div>
                <div className="flex flex-col gap-6 md:gap-[30px] justify-center w-full"> 
                    <div className="flex gap-2 md:gap-[5px] items-center"> 
                        <Image src="/images/setting.png" alt="setting" width={20} height={20} className="w-[20px] h-[20px] " /> 
                        <p className="font-manrope font-medium uppercase tracking-widest text-[14px] md:text-base">OUR CLIENT SAY</p>
                    </div>
                    <p className="text-[24px] md:text-[48px]/[60px] font-light">What our satisfied clients <br/> <span  className="font-semibold">are saying.</span></p>
                    {/* Embla Carousel Start */}
                    <div className="relative w-full">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {reviewdata.map((item,index)=>(
                                    <div className="min-w-0 flex-[0_0_100%]" key={index}>
                                        <Reviewcard {...item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        <div className="absolute right-2 bottom-2 flex gap-2 md:gap-[20px]">
                            <button onClick={scrollPrev} className="flex hover:cursor-pointer h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-[8px] bg-[#FCD900] items-center justify-center">
                                <FaArrowLeft />
                            </button>
                            <button onClick={scrollNext} className="flex hover:cursor-pointer h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-[8px] bg-[#FCD900] items-center justify-center">
                                <FaArrowRight/>
                            </button>
                        </div>
                    </div>
                    {/* Embla Carousel End */}
                </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-[10px] justify-between items-center mt-8 md:mt-[120px] w-full">
                {
                    Array.from({length:5}).map((item,index)=>(
                        <div className="flex items-center flex-1 justify-center"><Image src="/images/dummylogo.png" alt="ourclientsay" width={70} height={30} className="w-[60px] h-[24px] md:w-[170px] md:h-[48px] object-contain" /></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Ourclientsay;