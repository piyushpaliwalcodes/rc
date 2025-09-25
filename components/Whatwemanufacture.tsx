"use client"

import Image from "next/image";
import { FaStar } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md";
import YellowButton from "./Yellowbutton";
import Autoplay from "embla-carousel-autoplay";
import { daldetails } from './data';
import StarRating from "./Starrating";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// ------------------- Highlight Heading -------------------
// const Manufacturehighlight = () => {
//     return (
//         <div className="flex flex-col text-[18px] md:text-[20px] gap-2 md:gap-0">  
//            <h1 className="opacity-30 font-bold text-[14px] md:text-[20px]">WHAT WE MANUFACTURE</h1>
//            <p className="text-[24px] md:text-[48px]/[50px] ">
//                 Pure and Trusted Dal Products from<br/>
//                 <span className="yellounderline">RC Pulses.</span>
//            </p>
//            <p className="w-full md:w-[60%] text-[14px] md:text-[20px] mt-4">
//                 Starting from the planning of the product our customer wants; design, manufacturing, 
//                 software, mounting, installation & commissioning are made by us.
//            </p>
//         </div>
//     )
// }



// ------------------- Card Component -------------------
export const Manufacturecardwithimage = ({
    img, title, link,  rating, peoplerated, qualities,productlink
}: any) => {
    var src=img;
    return (
        <div className="flex flex-col w-[74%]  md:w-[400px] mx-auto border border-black/10 rounded-lg shadow-sm h-full bg-[#F9F9F9]">
            <div className="flex flex-col items-center ">
                <Image src={src} alt={title} width={430} height={280} className="w-full h-[160px] sm:h-[180px] md:max-h-[420px] md:h-[420px] rounded-md object-contain"/>
            </div>

            <div className="flex flex-col gap-2 items-start w-full p-[15px] bg-white">
                <p className="font-bold text-base sm:text-lg">{title}</p>
                <p>Net Weight: 30 Kg</p>
                <ul className="flex flex-wrap gap-1">
                    {qualities.map((item:any, index:number) => (
                        <li key={index} className="text-xs sm:text-sm text-black/50">
                            {item}{index < qualities.length - 1 && <span className="px-1 text-black/30">|</span>}
                        </li>
                    ))}
                </ul>
                <StarRating rating={rating} size="text-sm"  peoplerated={peoplerated} /> 
                <YellowButton text="View Details" link={productlink} className="min-w-full justify-center gap-2"/>
            </div>
        </div>
    )
}

// ------------------- Main Section -------------------
const Whatwemanufacture = () => {   
    return (
        <div className="flex flex-col p-4 py-6 md:p-[60px] gap-6 md:gap-10 text-black max-w-full">
            <div className="flex flex-col">
                <p className="uppercase tracking-widest text-black/40 text-[14px] md:text-[18px] font-bold">
                    WHAT WE MANUFACTURE
                </p>
                <div className="flex w-full justify-between items-center">
                    <p className="text-[26px] sm:text-[32px] md:text-[40px]">
                        Pure and Trusted Dal Products from <span className="font-bold">RC Pulses.</span>
                    </p>
                </div>
            </div>
            
            {/* Carousel */}
            <Carousel 
                className="w-full py-2 px-4 sm:px-4 sm:pl-6 md:pl-10 relative" 
                opts={{ align: "start", loop: true }}  
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent>
                    {daldetails.map((item, index) => (
                        <CarouselItem 
                            key={index} 
                            className="basis-full sm:basis-1/2 md:basis-1/3 shrink-0 flex justify-center"
                        >
                            <Manufacturecardwithimage {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="rounded-[4px] w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] z-10 cursor-pointer left-2 sm:left-3 md:-left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="rounded-[4px] w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] z-10 bg-[#FCD900] hover:cursor-pointer right-2 sm:right-3 md:-right-10 top-1/2 -translate-y-1/2" />
            </Carousel>
        </div>
    )
}

export default Whatwemanufacture;
