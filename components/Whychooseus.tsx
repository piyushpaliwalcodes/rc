"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const Chooseuscard = ({src, title, description,index}: {src: string, title: string, description: string,index:number}) =>
{
    return (
        <div className={`flex flex-col gap-[10px] border-[1px] border-white/20 p-4 md:p-[30px] rounded-[8px]  ${(index==1 || index==2)?"md:bg-white/10":""} `}>
            <Image src={src} alt={title} width={50} height={50} />
            <h1 className="text-[18px] md:text-[20px] font-semibold">{title}</h1>
            <p className="text-[15px] md:text-[16px]">{description}</p>
        </div>
    )
}

const Whychooseus = () =>
{
    const router = useRouter();
    const whychooseusdata = [
        {
            src:"/images/tower.png",
            title:"Advanced Quality Control",
            description:"Every batch passes through multi-stage checks to meet the highest industry standards for safety, purity, and hygiene."
        },
        {
            src:"/images/plant.png",
            title:"Farm-to-Pack Transparency",
            description:"From sourcing pulses directly from trusted farmers to processing in-house — we ensure full traceability and consistency."
        },
        {
            src:"/images/bottles.png",
            title:"Clean, Nutrient-Rich Pulses",
            description:"Processed with zero additives, our pulses retain natural protein, fiber, and minerals essential for everyday health."
        },
        {
            src:"/images/factory.png",
            title:"Global Export Compliance",
            description:"We follow stringent compliance for international food safety standards — including USFDA, FSSAI, and APEDA norms. "
        },
    ]

    return (
        <div className="flex flex-col lg:flex-row bg-[#222222]  text-white max-w-full">
            <div className="flex flex-col gap-6 md:gap-[30px] p-4 py-6 md:p-[60px] w-full lg:w-auto">
                <div className="flex gap-2 md:gap-[5px] items-center"> 
                    <Image src="/images/setting.png" alt="setting" width={20} height={20} className="w-[20px] h-[20px] " /> 
                    <p className="font-manrope font-medium uppercase tracking-widest text-[14px] md:text-base">WHY CHOOSE US</p>
                </div>
                <p className="text-[24px] md:text-[48px]/[60px]">Why Choosing RC Pulses Means <br/> <span  className="font-bold">Choosing Better Health.</span></p>
                <p>We believe great dal begins with integrity — from sourcing to processing. Here’s how RC Pulses ensures unmatched quality, nutrition, and reliability in every grain we deliver.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[30px]">
                    {
                        whychooseusdata.map((item, index) => (
                            <Chooseuscard key={index} {...item} index={index} />
                        ))
                    }
                </div>
                <p className="mt-4 md:mt-[20px] text-sm md:text-base">Let’s make something great work together. <span className="font-bold hover:cursor-pointer hover:underline text-[#FCD900]" onClick={() => router.push("/contactus")}>Contact Us</span></p>
            </div>
            {/*For image this is */}
            <div className="hidden md:block bg-gray-200 min-h-[120px] lg:min-h-0 w-full lg:min-w-[588px] lg:w-[588px] h-[180px] lg:h-auto"><img src="/images/whychooseushero.png" alt="why choose us" className="w-full h-full object-cover" /></div>
        </div>
    )
}

export default Whychooseus;