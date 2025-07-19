"use client";
import Herosecond from "@/components/Herosecond";
import Ourclientsay from "@/components/Ourclientsay";
import Whatwemanufacture from "@/components/Whatwemanufacture";
import Image from "next/image";
import Productdetails from "@/components/Productdetails";
import { JSX, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Howwepackagedetails from "@/components/Howwepackagedetails";
import Whatisontheplate from "@/components/Whatisontheplate";








    



  const Moreproducts = ({steps,selectedStep,setSelectedStep}:{steps:any[],selectedStep:number,setSelectedStep:any}) =>
  {
    return (
      <div className="flex flex-col gap-4 md:gap-[20px] p-4 md:p-[60px] bg-[#F5F5F5]">
        <h1 className="text-[24px] md:text-[48px]/[60px]">More <span className="font-bold">Products</span></h1>
        {   
            steps.map((step,index) => {
                return (
                    <div className={`flex flex-row justify-between items-center py-3 md:py-[25px] px-4 md:px-[40px] hover:cursor-pointer rounded-[8px]  ${selectedStep === index ? "bg-[#FCD900] text-black" : "hover:bg-[#ffe30029] transition-all duration-200 "}`} onClick={() => setSelectedStep(index)}>
                        <div key={index} className="flex gap-3 md:gap-[20px] items-center w-full">
                            <p className={`text-[#FCD900] text-[28px] md:text-[50px] font-bold ${selectedStep == index ? "text-black" : ""}`}>0{index + 1}</p>
                            <div className="flex flex-col gap-1 md:gap-[5px]">
                                <p className="font-semibold text-[16px] md:text-[20px] text-black">{step.title}</p>
                                <p className={`text-[#81848A] text-[12px] md:text-[16px] ${selectedStep == index ? "text-black" : ""}`}>{step.description}</p>
                            </div>
                        </div>
                        <FaArrowRight className={`text-[#81848A] text-[22px] md:text-[30px] ${selectedStep == index ? "text-black" : ""}`} />
                    </div>
                );
            })
        }
      </div>
    )
  }






 const Specificdal = ({params}:{params:any}) =>
{

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


    const whatisontheplatedetails = {
        title:<h1 className="text-[24px] md:text-[48px]/[60px] underline md:no-underline">What is on the <span className="font-bold">Plate</span></h1>,
        description:"Our Industrial Automation and Robotics planning and strategy services focus on designing tailored automation solutions that align with your business goals.",
        bulletpoints:[{
                title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        
    ],
    images:[
        {
            src:"/images/dal.png",
            alt:"Quality Assurance",
        },
        {
            src:"/images/dal.png",
            alt:"Quality Assurance",
        },
        {
            src:"/images/dal.png",
            alt:"Quality Assurance",
        },
        
    ]
    }

    const productdetails = {
        paragraphs:["Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.","Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise."],
        heroimage:"/images/robot.jpg",
    }

   const howwepackagedetails = {
    title:<h1 className="text-[24px] md:text-[48px]/[60px] underline md:no-underline">How we <span className="font-bold">Package</span></h1>,
    description:"Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable, thriving business.",
    packagedetails: [
        {
            src:"/images/tower.png",
            title:"Quality Assurance",
            description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
        },
        {
            src:"/images/plant.png",
            title:"Quality Assurance",
            description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
        },
        {
            src:"/images/bottles.png",
            title:"Quality Assurance",
            description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
        },
        {
            src:"/images/factory.png",
            title:"Quality Assurance",
            description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
        },
      
     ]
   }

    const [selectedStep, setSelectedStep] = useState(0);

    return (
        <div className="flex flex-col bg-white text-black gap-4 md:gap-0">
            <Herosecond title={params.specificdal} sublevel="Products" location={params.specificdal}/>
            <Productdetails paragraphs={productdetails.paragraphs} heroimage={productdetails.heroimage} />
            <Howwepackagedetails title={howwepackagedetails.title} packagedetails={howwepackagedetails.packagedetails} description={howwepackagedetails.description} />
            <Whatisontheplate formachines={false} {...whatisontheplatedetails}/>
            <Moreproducts steps={steps} selectedStep={selectedStep} setSelectedStep={setSelectedStep}/>
        </div>
    )
}

export default Specificdal;