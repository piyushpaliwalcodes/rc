"use client";
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";



const Dalcard = ({title,description,points}:any) =>
{
  return <div className="relative border border-[#FCD900] rounded-2 flex flex-col items-center">
          <p>{title}</p>
          <p>{description}</p>
          <div className="flex flex-col">
            {points.map((point)=>(
                <div className="flex flex-col">
                    <h1>{point.heading}</h1>
                    <p>{point.descr}</p>
                </div>
            ))}
          </div>
  </div>
}

const Productcomponent = () =>
{

    const [selectedal,setSelectedDal] = useState<number>(0);
    const daldetails = [
        {
            img:"/dals/rc1.png",
            spoon:"/dals/1.png",
            title:"TIGER ORID DAL",
            details:"Packed with protein and natural nutrition, TIGER Orid Dal is hygienically processed and quality-checked to deliver your family unmatched purity, taste, and health in every serving.",
            points:[
                {
                    heading:"💪 Rich in Protein",descr:"Expertly processed pulses that retain essential nutrients and protein for a healthy diet."
                },
                {
                    heading:"🌱 No Harmful Fertilizers",
                    descr:"Naturally grown with care—safe, pure, and completely chemical-free."
                },
                {
                    heading:"🍲 Wholesome Daily Nutrition",
                    descr:"Graded pulses rich in protein and fiber, providing balanced nutrition for everyday meals."
                }
            ]
        },
        {
            img:"/dals/rc2.png",
            spoon:"/dals/2.png",
            title:"TIGER ORID DAL",
            details:"Packed with protein and natural nutrition, TIGER Orid Dal is hygienically processed and quality-checked to deliver your family unmatched purity, taste, and health in every serving.",
            points:[
                {
                    heading:"💪 Rich in Protein",descr:"Expertly processed pulses that retain essential nutrients and protein for a healthy diet."
                },
                {
                    heading:"🌱 No Harmful Fertilizers",
                    descr:"Naturally grown with care—safe, pure, and completely chemical-free."
                },
                {
                    heading:"🍲 Wholesome Daily Nutrition",
                    descr:"Graded pulses rich in protein and fiber, providing balanced nutrition for everyday meals."
                }
            ]
        },
        {
            img:"/dals/rc3.png",
            spoon:"/dals/3.png",
            title:"TIGER ORID DAL",
            details:"Packed with protein and natural nutrition, TIGER Orid Dal is hygienically processed and quality-checked to deliver your family unmatched purity, taste, and health in every serving.",
            points:[
                {
                    heading:"💪 Rich in Protein",descr:"Expertly processed pulses that retain essential nutrients and protein for a healthy diet."
                },
                {
                    heading:"🌱 No Harmful Fertilizers",
                    descr:"Naturally grown with care—safe, pure, and completely chemical-free."
                },
                {
                    heading:"🍲 Wholesome Daily Nutrition",
                    descr:"Graded pulses rich in protein and fiber, providing balanced nutrition for everyday meals."
                }
            ]
        },
        {
            img:"/dals/rc4.png",
            spoon:"/dals/4.png",
            title:"TIGER ORID DAL",
            details:"Packed with protein and natural nutrition, TIGER Orid Dal is hygienically processed and quality-checked to deliver your family unmatched purity, taste, and health in every serving.",
            points:[
                {
                    heading:"💪 Rich in Protein",descr:"Expertly processed pulses that retain essential nutrients and protein for a healthy diet."
                },
                {
                    heading:"🌱 No Harmful Fertilizers",
                    descr:"Naturally grown with care—safe, pure, and completely chemical-free."
                },
                {
                    heading:"🍲 Wholesome Daily Nutrition",
                    descr:"Graded pulses rich in protein and fiber, providing balanced nutrition for everyday meals."
                }
            ]
        },
        {
            img:"/dals/rc5.png",
            spoon:"/dals/5.png",
            title:"TIGER ORID DAL",
            details:"Packed with protein and natural nutrition, TIGER Orid Dal is hygienically processed and quality-checked to deliver your family unmatched purity, taste, and health in every serving.",
            points:[
                {
                    heading:"💪 Rich in Protein",descr:"Expertly processed pulses that retain essential nutrients and protein for a healthy diet."
                },
                {
                    heading:"🌱 No Harmful Fertilizers",
                    descr:"Naturally grown with care—safe, pure, and completely chemical-free."
                },
                {
                    heading:"🍲 Wholesome Daily Nutrition",
                    descr:"Graded pulses rich in protein and fiber, providing balanced nutrition for everyday meals."
                }
            ]
        },
        {
            img:"/dals/rc6.png",
            spoon:"/dals/6.png",
            title:"TIGER ORID DAL",
            details:"Packed with protein and natural nutrition, TIGER Orid Dal is hygienically processed and quality-checked to deliver your family unmatched purity, taste, and health in every serving.",
            points:[
                {
                    heading:"💪 Rich in Protein",descr:"Expertly processed pulses that retain essential nutrients and protein for a healthy diet."
                },
                {
                    heading:"🌱 No Harmful Fertilizers",
                    descr:"Naturally grown with care—safe, pure, and completely chemical-free."
                },
                {
                    heading:"🍲 Wholesome Daily Nutrition",
                    descr:"Graded pulses rich in protein and fiber, providing balanced nutrition for everyday meals."
                }
            ]
        }
    ]
    return <div className='w-full max-w-full flex flex-col lg:flex-col gap-8 lg:gap-[40px] py-6 px-4 md:px-8 lg:px-[60px]  md:py-[100px] text-black '>
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
<Dalcard title={daldetails[selectedal].title} description={daldetails[selectedal].details} points={daldetails[selectedal].points}/>
    </div>
}



export default Productcomponent;