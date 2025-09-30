"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageCarousel from "./ImageCarousel";

const Chooseuscard = ({src, title, description,index}: {src: string, title: string, description: string,index:number}) =>
{
    return (
        <div className={`flex flex-col gap-[10px] border-[1px] border-black p-4 md:p-[30px] rounded-[8px]  hover:bg-[#FCD900] hover:cursor-pointer hover:border-[#FABB05] `}>
            <div className="border w-fit rounded-full p-2 bg-white  border-black"><Image src={src} alt={title} width={50} height={50}  /></div>
            <h1 className="text-[18px] md:text-[20px] font-semibold">{title}</h1>
            <p className="text-[15px] md:text-[16px]">{description}</p>
        </div>
    )
}

const Whychooseus = ({showimage,yellowbg}:{showimage?:boolean,yellowbg?:boolean}) =>
{
    const router = useRouter();
    const whychooseusdata = [
        {
            src:"/images/hands.png",
            title:"Advanced Quality Control",
            description:"Every batch passes through multi-stage checks to meet the highest industry standards for safety, purity, and hygiene."
        },
        {
            src:"/images/box.png",
            title:"Farm-to-Pack Transparency",
            description:"From sourcing pulses directly from trusted farmers to processing in-house — we ensure full traceability and consistency."
        },
        {
            src:"/images/heart.png",
            title:"Clean, Nutrient-Rich Pulses",
            description:"Processed with zero additives, our pulses retain natural protein, fiber, and minerals essential for everyday health."
        },
        {
            src:"/images/globe.png",
            title:"Global Export Compliance",
            description:"We follow stringent compliance for international food safety standards — including USFDA, FSSAI, and APEDA norms. "
        },
    ]

    const carouselImages = [
        "/images/client1.png",
        "/images/client2.png",
        "/images/client3.png",
        
    ]

    return (
        <div className={`flex flex-col lg:flex-row ${yellowbg?"bg-[#FFFCE8]":"bg-[#FFF2ED]"}  text-black max-w-full`}>
            <div className="flex flex-col gap-6 md:gap-[20px] p-4 py-6 md:p-[60px] w-full lg:w-auto">
                <div className="flex gap-2 md:gap-[5px] items-center"> 
                   
                    <p className="font-manrope font-bold uppercase tracking-widest text-[14px] md:text-base">WHY CHOOSE US</p>
                </div>
                <p className="text-[24px] md:text-[48px]/[60px]">Why Choosing RC Pulses Means <br/> <span  className="font-bold yellounderline">Choosing Better Health.</span></p>
                <p>We believe great dal begins with integrity — from sourcing to processing. Here’s how RC Pulses ensures unmatched quality, nutrition, and reliability in every grain we deliver.</p>
                <div className={`${showimage?"grid grid-cols-1 md:grid-cols-2":"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"} gap-4 md:gap-[30px]`}>
                    {
                        whychooseusdata.map((item, index) => (
                            <Chooseuscard key={index} {...item} index={index} />
                        ))
                    }
                </div>
                {/* <p className="mt-4 md:mt-[20px] text-sm md:text-base">Let’s make something great work together. <span className="font-bold hover:cursor-pointer hover:underline text-[#FCD900]" onClick={() => router.push("/contactus")}>Contact Us</span></p> */}
            </div>
            {/*For image carousel this is */}
            <div className={`${showimage?"hidden md:block":"hidden"} bg-gray-200 min-h-[120px] lg:min-h-0 w-full lg:min-w-[588px] lg:w-[588px] h-[180px] lg:h-auto`}>
                <ImageCarousel 
                    images={carouselImages} 
                    autoPlayDelay={4000}
                    className="w-full h-full"
                />
            </div>
        </div>
    )
}

export default Whychooseus;