"use client";
import Herosecond from "@/components/Herosecond";
import Ourclientsay from "@/components/Ourclientsay";
import Whatwemanufacture from "@/components/Whatwemanufacture";
import Image from "next/image";
import Productdetails from "@/components/Productdetails";
import { JSX, useState } from "react";
import { FaArrowRight } from "react-icons/fa";



export const Chooseuscard = ({src, title, description,index}: {src: string, title: string, description: string,index:number}) =>
    {
        return (
            <div className={`flex flex-col gap-[10px] border-b-[1px] border-black/20  py-[30px]   `}>
                <Image src={src} alt={title} width={50} height={50} />
                <h1 className="text-[20px] font-semibold">{title}</h1>
                <p className="text-[16px] w-[75%]">{description}</p>
            </div>
        )
    }



    export const Howwepackagedetails = ({title,packagedetails,description}:{title:JSX.Element,packagedetails:any[],description:string}) =>
    {
        return (
            <div className="flex flex-col gap-[30px] p-[60px]">
                {title}
                <p className="text-[16px]">{description}</p>
                <div className="grid grid-cols-2 gap-[80px] ">
                    {
                        packagedetails.map((item, index) => (
                            <Chooseuscard key={index} {...item} index={index} />
                        ))
                    }
                </div>
            </div>
        )
    }


  export const Whatisontheplate = ({title,description,bulletpoints,images,formachines}:{title:JSX.Element,description:string,bulletpoints:any[],images:any[],formachines:boolean}) =>
  {
    return (
      <div className="flex flex-col gap-[30px] p-[60px]">
        {title}
        <p>{description}</p>
        <div className={`grid ${formachines ? "grid-cols-3" : "grid-cols-4"} gap-[30px]`}>
            {
                bulletpoints.map((item,index)=>(
                    <div  className="flex items-center gap-[10px]" key={index}>
                        <Image src={item.icon} alt={item.title} width={30} height={30} />
                        <h1>{item.title}</h1>
                    </div>
                ))
            }
        </div>
        <div className={`grid  ${formachines?"grid-cols-2":"grid-cols-3"} gap-[20px] mt-3`}>
            {
                images.map((item,index)=>(
                    <Image src={item.src} alt={item.alt} width={407} height={394}  className="max-h-[394px] w-full rounded-[10px]"/>
                ))
            }
        </div>
      </div>
    )
  }

  const Moreproducts = ({steps,selectedStep,setSelectedStep}:{steps:any[],selectedStep:number,setSelectedStep:any}) =>
  {
    return (<div className="flex flex-col gap-[20px] p-[60px] bg-[#F5F5F5]">
        <h1 className="text-[48px]/[60px]">More <span className="font-bold">Products</span></h1>
        {   
            steps.map((step,index) => {
                return (
                    <div className={`flex justify-between items-center py-[25px] px-[40px] hover:cursor-pointer rounded-[8px]  ${selectedStep === index ? "bg-[#FCD900] text-black" : "hover:bg-[#ffe30029] transition-all duration-200 "}`} onClick={() => setSelectedStep(index)}>
                        <div key={index} className="flex gap-[20px] ">
                            <p className={`text-[#FCD900] text-[50px] font-bold ${selectedStep == index ? "text-black" : ""}`}>0{index + 1}</p>
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-semibold text-[20px] text-black">{step.title}</p>
                                <p className={`text-[#81848A] text-[16px] ${selectedStep == index ? "text-black" : ""}`}>{step.description}</p>
                            </div>

                        </div>
                        <FaArrowRight className={`text-[#81848A] text-[30px] ${selectedStep == index ? "text-black" : ""}`} />
                    </div>

                );
            })
        }

       </div>)
  }






 const Specificdal = () =>
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
        title:<h1 className="text-[48px]/[60px]">What is on the <span className="font-bold">Plate</span></h1>,
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
    title:<h1 className="text-[48px]/[60px]">How we <span className="font-bold">Package</span></h1>,
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
        <div className="flex flex-col bg-white text-black">
            <Herosecond title="Arhar Chilka Dal"/>
            <Productdetails paragraphs={productdetails.paragraphs} heroimage={productdetails.heroimage} />
            <Howwepackagedetails title={howwepackagedetails.title} packagedetails={howwepackagedetails.packagedetails} description={howwepackagedetails.description} />
            <Whatisontheplate formachines={false} {...whatisontheplatedetails}/>
            <Moreproducts steps={steps} selectedStep={selectedStep} setSelectedStep={setSelectedStep}/>
        </div>
    )
}

export default Specificdal;