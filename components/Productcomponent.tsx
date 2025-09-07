"use client";
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";



const Dalcard = ({title,description,points,image,spoon}:any) =>
{
  return <div className="relative border border-[#FCD900] rounded-[8px] flex flex-col items-center w-2/3 p-5">
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
    const daldetails = [
        {
            img:"/dals/rc1.png",
            spoon:"/dals/4.png",
            title:"SILVER ORID CHILIKA DAL",
            details:"An affordable yet quality choice, SILVER Orid Chilka Dal offers balanced taste, 100% sortex-cleaned grains, and dependable nutrition for everyday meals.",
            points:[
                {
                    heading:"💰 Cost-Effective Choice",descr:"Great value without compromising on quality."
                },
                {
                    heading:" ✅ 100% Sortex Cleaned",
                    descr:"Ensuring purity, hygiene, and consistency in every grain."
                },
                {
                    heading:"🥗 Balanced Taste",
                    descr:"Ideal for daily cooking with reliable flavor and nutrition."
                }
            ]
        },
        {
            img:"/dals/rc3.png",
            spoon:"/dals/2.png",
            title:"PAAN CHAAP URAD DAL",
            details:"A premium dal trusted by traders, PAAN CHAAP Urad Dal is ready for both retail shelves and wholesale markets, offering purity and reliability.",
            points:[
                {
                    heading:"🏆 Premium Quality",descr:"Carefully graded and hygienically processed for best results."
                },
                {
                    heading:"🛒 Retail & Wholesale Ready",
                    descr:"Trusted choice for both household and bulk buyers."
                },
                {
                    heading:"🌿 Pure & Authentic",
                    descr:"Naturally processed to deliver clean and safe nutrition."
                }
            ]
        },
        {
            img:"/dals/rc6.png",
            spoon:"/dals/3.png",
            title:"BLACK HORSE URAD POLISH",
            details:"BLACK HORSE Urad Dal stands out with its shiny finish and superior soaking ability, ensuring quick cooking and rich taste.",
            points:[
                {
                    heading:"✨ Shiny Polished Finish",descr:"Premium appearance with refined quality"
                },
                {
                    heading:"💧 Strong Soaking Ability",
                    descr:"Absorbs water well for faster and tastier cooking."
                },
                {
                    heading:"🥘 Enhanced Cooking Performance",
                    descr:"Ideal for dishes that require smooth texture and flavor"
                }
            ]
        },
        {
            img:"/dals/rc5.png",
            spoon:"/dals/2.png",
            title:"KHANDWA URAD DAL/GOTA",
            details:"Celebrating regional heritage, KHANDWA Urad Dal / Gota is renowned for its authenticity, purity, and traditional taste. Hygienically packed to preserve food safety and unmatched quality.",
            points:[
                {
                    heading:" 🍛 Authentic Heritage Quality",descr:"Renowned gota quality from Khandwa, trusted by generations."
                },
                {
                    heading:"🛡 Safe & Hygienic",
                    descr:"Processed and packed under strict food-safe conditions."
                },
                {
                    heading:"🥣 Wholesome Cooking Experience",
                    descr:"Perfect for traditional recipes, delivering purity and nutrition."
                }
            ]
        },
      
        {
            img:"/dals/rc4.png",
            spoon:"/dals/4.png",
            title:"GOLD ORID CHILIKA DAL",
            details:"A premium graded skin-on dal with high protein and robust aroma, GOLD Orid Chilka Dal is crafted for those who value quality and nutrition.",
            points:[
                {
                    heading:"🥇 Premium Grading",descr:"Carefully selected grains with skin intact."
                },
                {
                    heading:"💪 High in Protein",
                    descr:"Delivers strength and balanced nutrition in every serving."
                },
                {
                    heading:"🌸 Robust Aroma",
                    descr:"Enhances the richness and flavor of traditional recipes."
                }
            ]
        },
        {
            img:"/dals/rc2.png",
            spoon:"/dals/1.png",
            title:"TIGER ORID DAL",
            details:"Rich in protein, TIGER Orid Dal is a fully sortex-cleaned, high-yield dal with no black spots, offering unmatched purity and taste.",
          





            points:[
                {
                    heading:"💪 Protein Rich",descr:"Retains nutrients and protein for daily health."
                },
                {
                    heading:"🌱 Pure & Spotless",
                    descr:"100% sortex-cleaned, free from black spots."
                },
                {
                    heading:"🌾 High Yield",
                    descr:"Trusted choice for consistent quality and quantity."
                }
            ]
        }
    ]
    return <div className='w-full max-w-full flex flex-col lg:flex-col gap-8 lg:gap-[40px] py-6 px-4 md:px-8 lg:px-[60px]  md:py-[100px] text-black  overflow-hidden'>
        <p className="font-manrope font-medium uppercase tracking-widest text-[14px] md:text-base">PRODUCTS</p>
        <div className="flex w-full justify-between items-center"><p className="text-[40px]">RC Pulses - <span className="font-bold">PREMIUM PRODUCTS</span></p>
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
<div className="w-full flex items-center justify-center mt-[30px]">

<Dalcard image={daldetails[selectedal].img} spoon={daldetails[selectedal].spoon} title={daldetails[selectedal].title} description={daldetails[selectedal].details} points={daldetails[selectedal].points}/>
</div>
    </div>
}



export default Productcomponent;