"use client";
import Image from "next/image";
import { useState } from "react";
const Ourprocess2 = ({steps}:any) => {  
    const [selectedStep, setSelectedStep] = useState(0);

    return (
        <div className="flex flex-col justify-center  py-6 md:py-[60px]  gap-8 md:gap-[50px] text-black w-full max-w-full">
            {/* <div className="flex flex-col gap-4 md:gap-[20px]">
                
                <div className="flex flex-col lg:flex-row gap-4 md:gap-[100px] items-start lg:items-center w-full ">
                    <p className="text-[24px] md:text-[48px]/[60px] font-light md:w-[80%]">RC Mills Offers <span className="font-bold">Modern Processing Infrastructure</span>  at every Stage <br/></p>
                    <p className="w-full lg:w-2/3 text-[15px] md:text-[20px] w-full text-justify">Our process is designed to maximize efficiency and quality at every stage of production. By integrating advanced technologies and best practices, we ensure seamless workflows.</p>
                </div>
            </div> */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-[80px] w-full items-start">
                
                <div className="flex flex-col gap-4 md:gap-[20px] w-full">
                    {
                        steps.map((step:any,index:number) => (
                           <div className="flex flex-col gap-2 md:gap-[10px]"> <div key={index} className={`flex gap-4 md:gap-[20px] py-4 md:py-[25px] px-4 md:px-[25px] hover:cursor-pointer rounded-[8px]  ${selectedStep === index ? "bg-[#FCD900] text-black" : "hover:bg-[#ffe30029] transition-all duration-200 "}`} onClick={() => setSelectedStep(index)}>
                                <p className={`text-[#FCD900] text-[32px] md:text-[50px] font-bold ${selectedStep==index?"text-black":""}`}>0{index+1}</p>
                                <div className="flex flex-col gap-1 md:gap-[5px]">
                                    <p className="font-semibold text-[16px] md:text-[20px] text-black">{step.name}</p>
                                    <p className={`text-[#81848A] text-[14px] md:text-[16px] ${selectedStep==index?"text-black":""}`}>{step.description}</p>
                                </div>
                            </div>
                            {selectedStep == index && <Image src={steps[index].img} alt="process step" width={400} height={300} className="w-full h-auto block md:hidden ease-in-out duration-300" />}    
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-start gap-4 w-full max-w-[400px] md:max-w-[600px] lg:w-[600px] flex-shrink-0 mx-auto lg:mx-0">
                    {/* <h1 className="text-xl font-bold">Heading</h1> */}
                    <Image src={steps[selectedStep].img} alt="process" width={606} height={1000} className="w-full h-auto hidden md:block" />
                </div>
            </div>
        </div>
    )
}

export default Ourprocess2;