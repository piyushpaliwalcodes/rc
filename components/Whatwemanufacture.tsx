"use client"

import Image from "next/image";
import { FaStar } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md";
import YellowButton from "./Yellowbutton";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// ------------------- Highlight Heading -------------------
const Manufacturehighlight = () => {
    return (
        <div className="flex flex-col text-[18px] md:text-[20px] gap-2 md:gap-0">  
           <h1 className="opacity-30 font-bold text-[14px] md:text-[20px]">WHAT WE MANUFACTURE</h1>
           <p className="text-[24px] md:text-[48px]/[50px] ">
                Pure and Trusted Dal Products from<br/>
                <span className="yellounderline">RC Pulses.</span>
           </p>
           <p className="w-full md:w-[60%] text-[14px] md:text-[20px] mt-4">
                Starting from the planning of the product our customer wants; design, manufacturing, 
                software, mounting, installation & commissioning are made by us.
           </p>
        </div>
    )
}

// ------------------- Rating Component -------------------
const StarRating = ({ rating, size = "text-lg", peoplerated }: { rating: number; size?: string; peoplerated:string }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className={`${size} text-yellow-400`} />);
    }
    if (hasHalfStar) {
        stars.push(
            <div key="half" className="relative">
                <FaStar className={`${size} text-gray-300`} />
                <FaStar 
                    className={`${size} text-yellow-400 absolute top-0 left-0`}
                    style={{ clipPath: 'inset(0 50% 0 0)' }}
                />
            </div>
        );
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaStar key={`empty-${i}`} className={`${size} text-gray-300`} />);
    }
    
    return (
        <div className="flex items-center gap-1">
            <div className="flex">{stars}<span className="ml-2 text-sm text-gray-600">{rating}</span></div>
            <span className="font-semibold text-sm">({peoplerated})</span>
        </div>
    );
};

// ------------------- Card Component -------------------
const Manufacturecardwithimage = ({
    src, title, description, link, quantity, rating, peoplerated, qualities
}: {src: string, title: string, description: string, link: string, quantity: string, rating: number, peoplerated: string, qualities: string[]}) => {
    return (
        <div className="flex flex-col w-full md:w-[342px] gap-4 p-[15px] border border-black/10 rounded-lg shadow-sm h-full">
            <div className="flex flex-col items-center">
                <Image src={src} alt={title} width={430} height={280} className="w-full h-[180px] md:h-[280px] rounded-md object-contain"/>
                <h1 className="text-[18px] md:text-[24px] font-bold mt-2">{title}</h1>
                <p className="text-sm text-gray-600">Quantity: {quantity}</p>
            </div>

            <hr className="border-gray-200 w-full"/>

            <div className="flex flex-col gap-2 items-start w-full">
                <StarRating rating={rating} size="text-lg" peoplerated={peoplerated} /> 
                <p className="text-sm">Manufactured by RC Pulses</p> 
                <p className="flex items-center text-sm text-black/50">
                    <MdLocationPin className="inline mr-1"/>
                    <span className="text-black font-semibold">Madhya Pradesh</span> - Khandwa
                </p>
                <div className="flex gap-1 items-center">
                    <img src={"/images/graded.png"} alt="graded" />
                    <ul className="flex flex-wrap gap-1">
                        {qualities.map((item, index) => (
                            <li key={index} className="text-sm text-black/50">
                                {item}{index < qualities.length - 1 && <span className="px-1 text-black/30">|</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <YellowButton text="View Details" link={link} className="min-w-full justify-center"/>
        </div>
    )
}

// ------------------- Main Section -------------------
const Whatwemanufacture = () => {   
    const manufacturedata = [
        {
            src:"/dals/rc1.png",
            title:"Tiger Urad Dal",
            quantity: "30 kg",
            rating:4.6,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/dals/rc2.png",
            title:"Urad Dal",
            quantity: "30 kg",
            rating:5,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/dals/rc3.png",
            title:"Urad Dal",
            quantity: "30 kg",
            rating:4.6,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/dals/rc4.png",
            title:"Tiger Urad Dal",
            quantity: "30 kg",
            rating:4.6,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/dals/rc5.png",
            title:"Urad Dal",
            quantity: "30 kg",
            rating:5,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/dals/rc6.png",
            title:"Urad Dal",
            quantity: "30 kg",
            rating:4.6,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
    ]

    return (
        <div className="flex flex-col p-4 py-6 md:p-[60px] gap-10 text-black max-w-full">
            <Manufacturehighlight />
            
            {/* Carousel */}
            <Carousel className="w-full py-2" opts={{ align: "center" }}  plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
                <CarouselContent className="ml-20 mr-0 ">
                    {manufacturedata.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 pl-0  flex">
                            <Manufacturecardwithimage {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="rounded-[4px] w-[56px] h-[56px] left-1  z-10 cursor-pointer" />
                <CarouselNext className=" rounded-[4px] w-[56px] h-[56px]  right-1 z-10 bg-[#FCD900] hover:cursor-pointer" />
            </Carousel>
        </div>
    )
}

export default Whatwemanufacture;
