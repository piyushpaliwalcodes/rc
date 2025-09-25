"use client";
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { daldetails } from "./data";


const Dalcard = ({title,description,points,image,spoon}:any) =>
{
  return <div className="relative border border-[#FCD900] rounded-[8px] flex flex-col items-center w-full md:w-11/12 lg:w-2/3 p-4 md:p-5 md:min-h-[520px] ">
        <div className="w-full md:w-3/4 md:pl-[100px] flex flex-col gap-[16px] md:gap-[20px]"> 
        <img src={image} alt="" className="md:absolute md:left-0 md:-translate-x-1/2 md:h-[470px] hidden md:block" />
          <img src={image} alt="" className="w-[160px] h-auto self-center md:hidden" />
          <h1 className="font-bold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center md:text-left">{title}</h1>
          <p className="text-[14px]/[20px] md:text-[16px]/[22px] justified text-center md:text-left">{description}</p>
          <div className="flex flex-col gap-[12px] md:gap-[20px] w-full md:w-[80%]">
            {points.map((point:any)=>(
                <div className="flex flex-col">
                    <h1 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold">{point.heading}</h1>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px]">{point.descr}</p>
                </div>
            ))}
          </div>
          </div>
         
          
          <img src={spoon} alt="" className="absolute right-0 translate-x-1/2 hidden md:block md:w-[420px] lg:w-[800px]" />
  </div>
}

const Productcomponent = () =>
{

    const [selectedal,setSelectedDal] = useState<number>(0);
  
    return <div className='w-full max-w-full flex flex-col lg:flex-col gap-6 lg:gap-[40px] py-6 px-4 md:px-8 lg:px-[60px]  md:py-[100px] text-black  overflow-hidden'>
        <div className="flex flex-col ">
        <p className=" uppercase tracking-widest text-black/40 text-[12px] md:text-[18px] font-bold">PRODUCTS</p>
        <div className="flex w-full items-start md:items-center justify-between gap-4 flex-col md:flex-row"><p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px]">RC Pulses - <span className="font-bold">Premium Products</span></p>
         <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
            {
                daldetails.map((item,index)=>(
                    <div
                        className={`p-2 sm:p-3 rounded-full bg-[#F5F5F5] h-fit hover:cursor-pointer hover:scale-110   hover:bg-[#FFF9D487] ${index == selectedal ? " border border-[#FABB05] bg-[#FFF9D487] p-2 sm:p-3" : ""}`}
                        onClick={() => setSelectedDal(index)}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className={`w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] ${index == selectedal ? "w-[44px] h-[44px] sm:w-[60px] sm:h-[60px]" : ""}`}
                        />
                    </div>
                ))
}
</div></div>
        </div>
       
<div className="w-full flex items-center justify-center mt-[20px] md:mt-[30px]">

<Dalcard image={daldetails[selectedal].img} spoon={daldetails[selectedal].spoon} title={daldetails[selectedal].title} description={daldetails[selectedal].details} points={daldetails[selectedal].points}/>
</div>
    </div>
}



export default Productcomponent;