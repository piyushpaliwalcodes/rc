"use client"
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback } from 'react';

const Reviewcard = ({name,designation,review,profilesrc}:{name:string,designation:string,review:string,profilesrc:string}) =>
{
    return (
        <div className="flex flex-col gap-[30px] mt-[30px]">
            <p className="text-[20px] text-black/40 w-[80%]">" {review} "</p>
            <div className="flex">
                {/* Profile card */}
                <div className="flex justify-between w-full">
                    <div className="flex gap-[15px]">
                        <Image src={profilesrc} alt="profile" width={60} height={60} className="rounded-[10px]" />
                    <div className="flex flex-col gap-[2px] justify-around">
                        <h1 className="text-[20px] font-semibold">{name}</h1>
                        <p className="test-[16px] text-black/30 "> {designation}</p>
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
        <div className="flex flex-col gap-[30px] p-[60px] py-[100px] bg-[#F5F5F5] text-black">
       <div className="grid grid-cols-[2fr_3fr] gap-[150px] ">
        <div><Image src="/images/testimonial.png" alt="ourclientsay" width={500} height={500} /></div>
        <div className="flex flex-col gap-[30px] justify-center"> 
            <div className="flex gap-[5px]"> <Image src="/images/setting.png" alt="setting" width={10} height={10} className="w-[20px] h-[20px] " /> <p className="font-manrope font-medium uppercase tracking-widest
                ">OUR CLIENT SAY</p></div>
                <p className="text-[48px]/[60px] font-light">What our satisfied clients <br/> <span  className="font-bold">are saying.</span></p>
                {/* Embla Carousel Start */}
                <div className="relative">
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
                  <div className="absolute right-0 bottom-0 flex gap-[20px]">
                    <button onClick={scrollPrev} className="flex hover:cursor-pointer h-[56px] w-[56px] rounded-[8px] bg-[#FCD900] items-center justify-center">
                        <FaArrowLeft />
                    </button>
                    <button onClick={scrollNext} className="flex hover:cursor-pointer h-[56px] w-[56px] rounded-[8px] bg-[#FCD900] items-center justify-center">
                        <FaArrowRight/>
                    </button>
                  </div>
                </div>
                {/* Embla Carousel End */}
                </div>
                
       </div>
       <div className="flex gap-[10px] justify-around mt-[120px]">
        {
        Array.from({length:5}).map((item,index)=>(
            <div className="flex gap-[5px] items-center"><Image src="/images/dummylogo.png" alt="ourclientsay" width={200} height={400} className="w-auto" /></div>
       ))}
       </div>
       </div>

    )
}

export default Ourclientsay;