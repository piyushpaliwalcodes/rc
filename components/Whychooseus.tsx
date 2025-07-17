"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";




const Chooseuscard = ({src, title, description,index}: {src: string, title: string, description: string,index:number}) =>
{
    return (
        <div className={`flex flex-col gap-[10px] border-[1px] border-white/20 p-[30px] rounded-[8px] ${(index==1 || index==2)?"bg-white/20":""} `}>
            <Image src={src} alt={title} width={50} height={50} />
            <h1 className="text-[20px] font-semibold">{title}</h1>
            <p className="text-[16px]">{description}</p>
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

        <div className="flex   bg-black text-white">
            <div className="flex flex-col gap-[30px] p-[60px]">
                <div className="flex gap-[5px]"> <Image src="/images/setting.png" alt="setting" width={10} height={10} className="w-[20px] h-[20px] " /> <p className="font-manrope font-medium uppercase tracking-widest
                ">WHY CHOOSE US</p></div>
                <p className="text-[48px]/[60px]">How Consuming RC Dal <br/> <span  className="font-bold">Benfiting Consumers Health.</span></p>
                  <div className="grid grid-cols-2 gap-[30px]">
                    {
                        whychooseusdata.map((item, index) => (
                            <Chooseuscard key={index} {...item} index={index} />
                        ))
                    }
                </div>
                <p className="mt-[20px]">Let’s make something great work together. <span className="font-bold hover:cursor-pointer hover:underline text-[#FCD900]" onClick={() => router.push("/contactus")}>Contact Us</span></p>
            </div>
            <div className=" bg-gray-200 min-w-[588px]"></div>
        </div>
    )
}

export default Whychooseus;