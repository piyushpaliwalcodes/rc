"use client";
import Image from "next/image";
import { useState } from "react";
const Ourprocess = () => {  
    const [selectedStep, setSelectedStep] = useState(0);
    const steps = [
        {
            title:"Cleaning & Grading",
            description:"We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.",
            image:"/images/machinewithmala.png"
        },
        {
            title:"Cleaning & Grading",
            description:"We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.",
            image:"/images/ourapproach.jpg"
        },
        {
            title:"Cleaning & Grading",
            description:"We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.",
            image:"/images/ourapproach.jpg"
        },
        {
            title:"Cleaning & Grading",
            description:"We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.",
            image:"/images/ourapproach.jpg"
        },
    ]
    return (
        <div className="flex flex-col justify-center px-4 py-6 md:px-[60px] md:py-[60px] bg-[#F5F5F5] gap-8 md:gap-[50px] text-black w-full max-w-full">
            <div className="flex flex-col gap-4 md:gap-[20px]">
                <div className="flex gap-2 md:gap-[5px] items-center"> 
                    <Image src="/images/setting.png" alt="setting" width={20} height={20} className="w-[20px] h-[20px] " /> 
                    <p className="font-manrope font-medium uppercase tracking-widest text-[14px] md:text-base">Our Processes</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 md:gap-[100px] items-start lg:items-end">
                    <p className="text-[24px] md:text-[48px]/[60px] font-light">Streamlined processes <br/><span className="font-bold">for optimal efficiency</span></p>
                    <p className="w-full lg:w-2/3 text-[15px] md:text-base">Our process is designed to maximize efficiency and quality at every stage of production. By integrating advanced technologies and best practices, we ensure seamless workflows.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-[150px] w-full items-center">
                <div className="w-full max-w-[400px] md:max-w-[600px] lg:w-[600px] flex-shrink-0 mx-auto lg:mx-0">
                    <Image src={steps[selectedStep].image} alt="process" width={800} height={1000} className="w-full h-auto hidden md:block" />
                </div>
                <div className="flex flex-col gap-4 md:gap-[20px] w-full">
                    {
                        steps.map((step,index) => (
                           <div className="flex flex-col gap-2 md:gap-[10px]"> <div key={index} className={`flex gap-4 md:gap-[20px] py-4 md:py-[25px] px-4 md:px-[25px] hover:cursor-pointer rounded-[8px]  ${selectedStep === index ? "bg-[#FCD900] text-black" : "hover:bg-[#ffe30029] transition-all duration-200 "}`} onClick={() => setSelectedStep(index)}>
                                <p className={`text-[#FCD900] text-[32px] md:text-[50px] font-bold ${selectedStep==index?"text-black":""}`}>0{index+1}</p>
                                <div className="flex flex-col gap-1 md:gap-[5px]">
                                    <p className="font-semibold text-[16px] md:text-[20px] text-black">{step.title}</p>
                                    <p className={`text-[#81848A] text-[14px] md:text-[16px] ${selectedStep==index?"text-black":""}`}>{step.description}</p>
                                </div>
                            </div>
                            {selectedStep == index && <Image src={steps[index].image} alt="line" width={100} height={100} className="w-full h-auto block md:hidden ease-in-out duration-300" />}    
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Ourprocess;