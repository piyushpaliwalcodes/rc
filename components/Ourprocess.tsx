"use client";
import Image from "next/image";
import { useState } from "react";
const Ourprocess = () => {  



    const [selectedStep, setSelectedStep] = useState(0);
    const steps = [
        {
            title:"Cleaning & Grading",
            description:"We begin by thoroughly assessing your requirements and objectives to develop a tailored approach."
        },
        {
            title:"Cleaning & Grading",
            description:"We begin by thoroughly assessing your requirements and objectives to develop a tailored approach."
        },
        {
            title:"Cleaning & Grading",
            description:"We begin by thoroughly assessing your requirements and objectives to develop a tailored approach."
        },
        {
            title:"Cleaning & Grading",
            description:"We begin by thoroughly assessing your requirements and objectives to develop a tailored approach."
        },
    ]
    return (
        <div className="flex flex-col   justify-center px-[60px] py-[60px] bg-[#F5F5F5] gap-[50px] text-black">
            <div className="flex flex-col gap-[20px]"><div className="flex gap-[5px]"> <Image src="/images/setting.png" alt="setting" width={10} height={10} className="w-[20px] h-[20px] " /> <p className="font-manrope font-medium uppercase tracking-widest
                ">Our Processes</p></div>
            <div className="flex gap-[100px] items-end"> <p className="text-[48px]/[60px] ">Streamlined processes <span className="font-bold">for optimal efficiency</span></p>
            <p className="w-2/3">Our process is designed to maximize efficiency and quality at every stage
of production. By integrating advanced technologies and best practices,
we ensure seamless workflows.</p></div></div>
            
<div className="flex gap-[150px]">
<Image src="/images/machinewithmala.png" alt="process" width={800} height={1000} className="w-[600px]" />
<div className="flex flex-col gap-[20px]">
                    {
                        steps.map((step,index) => (
                            <div key={index} className={`flex gap-[20px] py-[25px] px-[25px] hover:cursor-pointer rounded-[8px]  ${selectedStep === index ? "bg-[#FCD900] text-black" : "hover:bg-[#ffe30029] transition-all duration-200 "}`} onClick={() => setSelectedStep(index)}>
                                <p className={`text-[#FCD900] text-[50px] font-bold ${selectedStep==index?"text-black":""}`}>0{index+1}</p>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="font-semibold text-[20px] text-black">{step.title}</p>
                                    <p className={`text-[#81848A] text-[16px] ${selectedStep==index?"text-black":""}`}>{step.description}</p>
                                </div>
                            </div>
                        ))
                    }

                   </div>
</div>
            
           
          
        </div>
    )
}

export default Ourprocess;