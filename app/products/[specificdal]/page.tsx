"use client";


import { JSX, useState } from "react";

import Whychooseus from "@/components/Whychooseus";
import Whatwemanufacture from "@/components/Whatwemanufacture";
import { daldetails } from "@/components/data";
import StarRating from "@/components/Starrating";
import YellowButton from "@/components/Yellowbutton";
import Faqquestion from "@/components/Faqquestions";





 const Specificdal = ({params}:{params:any}) =>
{


    const [selectedindex,setSelectedindex] = useState(-1);
  
  const dal = params?.specificdal;
  const dalDetails = daldetails.find((item)=>item.key===dal);

  const [selectedImage,setSelectedImage] = useState(0);

  const moredetails = [
    {
        ques:"📖 Product Overview",
        ans:dalDetails?.overview
    },
    {
        ques:"🏭 Product Details",
        ans:dalDetails?.productdetails
    },
    {
        ques:"✅ Key Benefits",
        ans:dalDetails?.keybenefits
    },
    {
        ques:"⚙️ Specifications",
        ans:dalDetails?.specifications
    },
    {
        ques:"🍲 How to Cook",
        ans:dalDetails?.cook
    }
  ]


    return (
        <div className="flex flex-col bg-white text-black gap-4 md:gap-0">
            <div className="flex  p-4 py-6 md:p-[60px] gap-40 text-black min-w-full justify-between items-start " >
                <div className="flex flex-col min-w-[522px] gap-[20px]">
                    <img src={dalDetails?.fourimages[selectedImage]} className="w-[520px] h-[590px] border-[2px] border-blue"/>
                    <div className="flex justify-between w-full">
                        {
                            dalDetails?.fourimages?.map((image,index)=>(
                                <img src={image} className={`w-[120px] h-[120px] hover:cursor-pointer ${selectedImage==index?"border-[2px] border-black/50 ":" border-[2px] border-blue"}`} onClick={()=>setSelectedImage(index)}/>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col min-w-[528px] gap-[50px] mt-5">
                    <div className="flex flex-col"><h1 className="text-[28px] md:text-[40px] font-semibold capitalize">{dalDetails?.title}</h1>
                <p>Net Weight: 30 KG</p>
                <div className="flex w-full justify-between items-end">
                    {dalDetails && <><StarRating rating={dalDetails?.rating} size="text-sm"  peoplerated={dalDetails?.peoplerated}/><YellowButton text="Exquire for order" link="/contactus"/></>}</div></div>
                    
                    <div className="flex flex-col gap-[20px]">
                    {
                moredetails.map((item,index)=>(
                    <Faqquestion question={item.ques} answer={item?.ans} selectedindex={selectedindex} setSelectedindex={setSelectedindex} index={index}/>
                ))
            }
                    </div>
                    
                    </div>
            </div>
           
           <Whychooseus showimage={false} yellowbg={true}/>
           <Whatwemanufacture/>
        </div>
    )
}

export default Specificdal; 