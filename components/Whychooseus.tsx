"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const Chooseuscard = ({src, title, description,index}: {src: string, title: string, description: string,index:number}) =>
{
    return (
        <div className={`flex flex-col gap-[10px] border-[1px] border-white/20 p-4 md:p-[30px] rounded-[8px] ${(index==1 || index==2)?"bg-white/20":""} `}>
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
            title:"Quality Assurance",
            description:"Streamlining processes through cutting-edge technology."
        },
        {
            src:"/images/plant.png",
            title:"Quality Assurance",
            description:"Ensuring the highest quality standards in every product."
        },
        {
            src:"/images/bottles.png",
            title:"Quality Assurance",
            description:"Ensuring the highest quality standards in every product."
        },
        {
            src:"/images/factory.png",
            title:"Quality Assurance",
            description:"Ensuring the highest quality standards in every product."
        },
    ]

    return (
        <div className="flex flex-col lg:flex-row bg-black text-white max-w-full">
            <div className="flex flex-col gap-6 md:gap-[30px] p-4 md:p-[60px] w-full lg:w-auto">
                <div className="flex gap-2 md:gap-[5px] items-center"> 
                    <Image src="/images/setting.png" alt="setting" width={20} height={20} className="w-[20px] h-[20px] " /> 
                    <p className="font-manrope font-medium uppercase tracking-widest text-[14px] md:text-base">WHY CHOOSE US</p>
                </div>
                <p className="text-[24px] md:text-[48px]/[60px]">How Consuming RC Dal <br/> <span  className="font-bold">Benfiting Consumers Health.</span></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[30px]">
                    {
                        whychooseusdata.map((item, index) => (
                            <Chooseuscard key={index} {...item} index={index} />
                        ))
                    }
                </div>
                <p className="mt-4 md:mt-[20px]">Let’s make something great work together. <span className="font-bold hover:cursor-pointer hover:underline text-[#FCD900]" onClick={() => router.push("/contactus")}>Contact Us</span></p>
            </div>
            <div className="bg-gray-200 min-h-[120px] lg:min-h-0 w-full lg:min-w-[588px] lg:w-[588px] h-[180px] lg:h-auto"></div>
        </div>
    )
}

export default Whychooseus;