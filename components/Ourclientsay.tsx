"use client"
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useState, useEffect } from 'react';
import Autoplay from "embla-carousel-autoplay";


const Reviewcard = ({name,designation,review}:{name:string,designation:string,review:string}) =>
{
    return (
        <div className="flex flex-col gap-6 md:gap-[30px] mt-4 md:mt-[30px]">
            <p className="text-[16px] md:text-[20px] text-black/40 w-full md:w-[80%]">"{review}"</p>
            <div className="flex">
                <div className="flex justify-between w-full">
                    <div className="flex gap-4 md:gap-[15px]">
                        <div className="flex flex-col gap-1 md:gap-[2px] justify-around">
                            <h1 className="text-[16px] md:text-[20px] font-bold text-black">-{name}</h1>
                            <p className="text-[13px] md:text-[16px] text-black/30 ">{designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Ourclientsay = () =>
{
    const reviewdata = [
        {
            image:"/images/client1.png",
            name:"D.S. Enterprises",
            designation:"Lucknow",
            review:"RC Pulses consistently delivers top-grade dal that meets our packaging and quality standards. Their operations are transparent and always on time."
        },
        {
            image:"/images/client2.png",
            name:"Vedansh Pulses",
            designation:"Indore",
            review:"From gota to split urad, RC Pulses ensures full traceability and grading precision. Our retail customers love the consistent quality",
        },
        {   
            image:"/images/client3.png",
            name:" Maheshkumar Babulal",
            designation:"Jaipur",
            review:"We’ve been sourcing polished urad dal from RC Pulses for over 5 years. Reliable supply and premium finish — every single time.",
        },
    ];

    const [selectedReview, setSelectedReview] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 5000, stopOnInteraction: false })] // 4s delay
      );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Update selectedReview when carousel changes
    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedReview(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect(); // set initial
    }, [emblaApi]);

    return (
        <div className="flex flex-col gap-6 md:gap-[30px] p-4 py-6 md:p-[60px] md:py-[100px] bg-[#F5F5F5] text-black" style={{backgroundImage: "url('/images/dottedbg.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="flex flex-col lg:grid lg:grid-cols-[2fr_3fr] gap-8 md:gap-[150px] w-full">
                
                {/* LEFT IMAGE */}
                <div className="mb-6 lg:mb-0 flex justify-center items-center hidden md:flex overflow-hidden">
                    <div className="h-fit border rounded-[8px] overflow-hidden">
                        <Image 
                            src={reviewdata[selectedReview].image} 
                            alt="ourclientsay" 
                            width={400} 
                            height={400} 
                            className="rounded-[8px] w-[220px] h-[220px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover" 
                        />
                    </div>
                </div>

                {/* RIGHT TEXT + CAROUSEL */}
                <div className="flex flex-col gap-4 md:gap-[30px] justify-center w-full"> 
                    <div className="flex gap-2 md:gap-[5px] items-center"> 
                        <Image src="/images/setting.png" alt="setting" width={20} height={20} className="w-[20px] h-[20px]" /> 
                        <p className="font-manrope font-medium uppercase tracking-widest text-[14px] md:text-base">OUR CLIENT SAY</p>
                    </div>
                    <p className="text-[24px] md:text-[48px]/[60px] font-light"> Trusted by India's Leading <br/> <span className="font-semibold yellounderline">Dal Distributors.</span></p>
                    <p className="w-[80%]">Our long-term relationships with reputed buyers across India are a reflection of our commitment to consistency, quality, and ethical sourcing.</p>
                    
                    {/* Embla Carousel */}
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
                </div>
            </div>
        </div>
    )
}

export default Ourclientsay;
