"use client";
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { daldetails } from "./data";


const Dalcard = ({title,description,points,image,spoon}:any) =>
{
  return <div className="relative border border-[#FCD900] rounded-[8px] flex flex-col items-center w-2/3 p-5 min-h-[520px]">
        <div className="w-3/4 pl-[100px] flex flex-col gap-[20px]"> 
        <img src={image} alt="" className="absolute left-0 -translate-x-1/2 h-[470px]" />
          <h1 className="font-bold text-[40px]">{title}</h1>
          <p className="text-[16px]/[22px] justified">{description}</p>
          <div className="flex flex-col gap-[20px] w-[80%]">
            {points.map((point:any)=>(
                <div className="flex flex-col">
                    <h1 className="text-[24px] font-bold">{point.heading}</h1>
                    <p className="text-[18px]">{point.descr}</p>
                </div>
            ))}
          </div>
          </div>
         
          
          <img src={spoon} alt="" className="absolute right-0 translate-x-1/2  w-[800px]" />
  </div>
}

const Productcomponent = () =>
{

    const [selectedal,setSelectedDal] = useState<number>(0);
  
    return <div className='w-full max-w-full flex flex-col lg:flex-col gap-8 lg:gap-[40px] py-6 px-4 md:px-8 lg:px-[60px]  md:py-[100px] text-black  overflow-hidden'>
        <div className="flex flex-col ">
        <p className=" uppercase tracking-widest text-black/40 text-[14px] md:text-[18px] font-bold">PRODUCTS</p>
        <div className="flex w-full justify-between items-center"><p className="text-[40px]">RC Pulses - <span className="font-bold">Premium Products</span></p>
         <div className="flex gap-3 items-center">
            {
                daldetails.map((item,index)=>(
                    <div
                        className={`p-3 rounded-full bg-[#F5F5F5] h-fit hover:cursor-pointer hover:scale-110   hover:bg-[#FFF9D487] ${index == selectedal ? " border border-[#FABB05] bg-[#FFF9D487] p-3" : ""}`}
                        onClick={() => setSelectedDal(index)}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className={`w-[32px] h-[32px] ${index == selectedal ? "w-[60px] h-[60px]" : ""}`}
                        />
                    </div>
                ))
}</div></div>
        </div>
       
<div className="w-full flex items-center justify-center mt-[30px]">

<Dalcard image={daldetails[selectedal].img} spoon={daldetails[selectedal].spoon} title={daldetails[selectedal].title} description={daldetails[selectedal].details} points={daldetails[selectedal].points}/>
</div>
    </div>
}



export default Productcomponent;