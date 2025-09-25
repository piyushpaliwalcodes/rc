"use client";


import { JSX, useState } from "react";

import Whychooseus from "@/components/Whychooseus";
import Whatwemanufacture from "@/components/Whatwemanufacture";
import { daldetails } from "@/components/data";
import StarRating from "@/components/Starrating";
import YellowButton from "@/components/Yellowbutton";
import Faqquestion from "@/components/Faqquestions";
import { VscBook } from "react-icons/vsc";
import { TbListDetails } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCookingPotLight } from "react-icons/pi";




 const Specificdal = ({params}:{params:any}) =>
{


    const [selectedindex,setSelectedindex] = useState(-1);
  
  const dal = params?.specificdal;
  const dalDetails = daldetails.find((item)=>item.key===dal);

  const [selectedImage,setSelectedImage] = useState(0);

  const moredetails = [
    {   icon:<VscBook/>,
        ques:"Product Overview",
        ans:dalDetails?.overview
    },
    {
        icon:<TbListDetails/>,
        ques:"Product Details",
        ans:dalDetails?.productdetails
    },
    {
        icon:<IoMdCheckmark/>,
        ques:"Key Benefits",
        ans:dalDetails?.keybenefits
    },
    {   icon:<IoSettingsOutline/>,
        ques:"Specifications",
        ans:dalDetails?.specifications
    },
    {   icon:<PiCookingPotLight/>,
        ques:"How to Cook",
        ans:dalDetails?.cook
    }
  ]


    return (
        <div className="flex flex-col bg-white text-black gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row p-4 py-6 md:p-[60px] gap-6 md:gap-16 text-black w-full justify-between items-start">
                <div className="flex flex-col w-full md:max-w-[520px] gap-3 md:gap-5">
                    <img src={dalDetails?.fourimages[selectedImage]} alt={dalDetails?.title ?? "product image"} className="w-full max-w-[520px] h-auto md:h-[590px] object-cover border-[2px] border-blue"/>
                    <div className="flex flex-wrap gap-2 md:gap-4 w-full md:justify-start justify-between">
                        {
                            dalDetails?.fourimages?.map((image,index)=>(
                                <img key={`${dalDetails?.key}-thumb-${index}`} src={image} alt={`${dalDetails?.title ?? "product"} thumbnail ${index+1}`} className={`w-[70px] h-[70px] md:w-[120px] md:h-[120px] hover:cursor-pointer ${selectedImage==index?"border-[2px] border-black/50":"border-[2px] border-blue"}`} onClick={()=>setSelectedImage(index)}/>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col w-full md:min-w-[528px] gap-6 md:gap-[50px] mt-5">
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-[40px] font-semibold capitalize">{dalDetails?.title}</h1>
                        <p className="text-base md:text-[20px] font-bold">Net Weight: 30 KG</p>
                        <div className="flex w-full justify-between items-center gap-3 flex-wrap">
                            {dalDetails && <><StarRating rating={dalDetails?.rating} size="text-sm"  peoplerated={dalDetails?.peoplerated}/><YellowButton text="Enquire for order" link="/contactus"/></>}
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-[20px]">
                    {
                moredetails.map((item,index)=>(
                    <Faqquestion key={`faq-${index}`} question={item.ques} answer={item?.ans} icon={item?.icon} selectedindex={selectedindex} setSelectedindex={setSelectedindex} index={index}/>
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