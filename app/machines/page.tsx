"use client"

import Herosecond from "@/components/Herosecond";
import Image from "next/image";
import Productdetails from "@/components/Productdetails";
import Howwepackagedetails from "@/components/Howwepackagedetails";
import Whatisontheplate from "@/components/Whatisontheplate";
import Machinedetails from "@/components/Machinedetails";

import { FaArrowRight } from "react-icons/fa";
import Haveaquestion from "@/components/Haveaquestion";
import {useState} from "react"





const Needhelp = () => {


    
    return (
        <div className="relative flex flex-col p-[40px] rounded-[8px] overflow-hidden gap-[40px] md:max-w-[377px] " style={{
            backgroundImage: "url('/images/machinesmallbg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
        }}>
            <div className="absolute inset-0 bg-black/40" ></div>
            
            <div className="relative z-10 flex flex-col gap-[20px]">
                <h1 className="text-[#FCD900] text-[32px]/[60px] font-bold">RC Logo</h1>
                <div className="flex flex-col gap-[20px]">
                    <p className=" text-[40px]/[50px] font-bold">Need <span className="font-bold">Help!</span></p>
                    <p className="font-semibold">Got questions or need assistance with your Industry needs?</p>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <div className="flex gap-[20px] items-center">
                        <Image src="/images/call.png" alt="phone" width={50} height={50} />
                        <p className="text-[20px]/[20px] font-bold">+91 9876543210</p>
                    </div>
                    <div className="flex gap-[20px] items-center">
                        <Image src="/images/mail.png" alt="phone" width={50} height={50} />
                        <p className="text-[20px]/[20px] font-bold">info@domain.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Machines = () => {

    const machinecategories = [ 
        {
            title:"Cleaning",
           
        },
        {
            title:"Grading",
            
        },
        {
            title:"Packaging",
           
        },
        {
            title:"Drying",
           
        },
        {
            title:"Sieving",
        }
    ]



const categorywisedetails = {
    "Cleaning":{
        productdetails:{
            paragraphs:["Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.","Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise."],
            heroimage:"/images/robot.jpg",
        },
        howwepackagedetails:{
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
        },
        whatisontheplatedetails:{
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
            
        ]
    }
    },
    "Packaging":{
        productdetails:{
            paragraphs:["Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.","Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise."],
            heroimage:"/images/ourapproach.jpg",
        },
        howwepackagedetails:{
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
        },
        whatisontheplatedetails:{
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
            
        ]
    }
    },
    "Grading":{
        productdetails:{
            paragraphs:["Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.","Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise."],
            heroimage:"/images/aboutusbg.png",
        },
        howwepackagedetails:{
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
        },
        whatisontheplatedetails:{
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
            
        ]
    }
    },
    "Drying":{
        productdetails:{
            paragraphs:["Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.","Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise."],
            heroimage:"/images/factory1.png",
        },
        howwepackagedetails:{
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
        },
        whatisontheplatedetails:{
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
            
        ]
    }
    },
        "Sieving":{
        productdetails:{
            paragraphs:["Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.","Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise."],
            heroimage:"/images/robot.jpg",
        },
        howwepackagedetails:{
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
        },
        whatisontheplatedetails:{
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
            
        ]
    }
    },
    
}


const [selectedcategory,setselectedcategory] = useState<string>("Cleaning");


    return (
        <div className="flex flex-col bg-white">
            <Herosecond title="Manufacturing Solutions"/>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-0 p-4 md:p-[60px] w-full">
                {/*select category*/}
                <div className="flex flex-col w-full lg:w-auto bg-white min-w-0 md:min-w-[365px] gap-4 md:gap-[30px] mb-6 lg:mb-0">
                    <div className="flex flex-col rounded-[8px] border-[1px] border-[#EBEBEB]">
                        <div className="text-[16px] md:text-[20px] text-black/80 px-3 md:px-5 py-4 md:py-6 items-center text-center font-semibold bg-[#FCD900] rounded-t-[8px]">Machine Categories</div>
                        {machinecategories.map((item,index)=>(
                            <div key={index} onClick={()=>setselectedcategory(item.title)} className={`hover:bg-[#ffe30029] transition-all duration-200 flex ${selectedcategory==item.title?"bg-yellow-200":""} flex-col ${index==machinecategories.length-1?"rounded-b-[8px]":""} border-[1px] border-[#EBEBEB]`}>
                                <div className={`hover:cursor-pointer text-[16px] md:text-[20px] text-black/60 px-3 md:px-5 py-4 md:py-6 items-center flex justify-between`}>{item.title} <FaArrowRight className="-rotate-45"/></div>
                            </div>  
                        ))}
                    </div>
                    <div className="w-full max-w-full lg:max-w-[377px]">
                        <Needhelp/>
                    </div>
                </div>
                {/* machine details */}
                <div className="flex flex-col text-black w-full">
                    <Machinedetails paragraphs={categorywisedetails[selectedcategory as keyof typeof categorywisedetails].productdetails.paragraphs} heroimage={categorywisedetails[selectedcategory as keyof typeof categorywisedetails].productdetails.heroimage} />
                    <Howwepackagedetails title={categorywisedetails[selectedcategory as keyof typeof categorywisedetails].howwepackagedetails.title} packagedetails={categorywisedetails[selectedcategory as keyof typeof categorywisedetails].howwepackagedetails.packagedetails} description={categorywisedetails[selectedcategory as keyof typeof categorywisedetails].howwepackagedetails.description} />
                    <Whatisontheplate formachines={true} {...categorywisedetails[selectedcategory as keyof typeof categorywisedetails].whatisontheplatedetails}/>
                </div>
            </div>
            <Haveaquestion/>
        </div>
    )
}

export default Machines;