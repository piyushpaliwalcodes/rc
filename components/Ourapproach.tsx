"use client";

import { useState } from "react";
import Image from "next/image";
const Selectioncard = ({carddata,selected,setSelected}:{carddata:any,selected:string,setSelected:any}) =>
{


    return (
        <div className="flex flex-col rounded-[16px]">
             <div className="grid grid-cols-3 rounded-t-[16px] shadow-lg">
                {Object.keys(carddata).map((key,index)=>(
                    <div key={key} className={`flex w-full items-center justify-center bg-white gap-[10px] p-[20px] ${selected==key?"bg-primary-yellow":""} ${index==0?"rounded-tl-[16px]":""} ${index==2?"rounded-tr-[16px]":""} cursor-pointer`} onClick={()=>setSelected(key)}>
                        <img src={carddata[key].src} alt={key} className="w-[40px] h-[40px]" />
                        <p className="text-black text-[16px]">{carddata[key].title}</p>
                    </div>
                ))} 
             </div>
             <div className="flex p-[60px] px-[80px] bg-white  rounded-b-[16px] border-[1px] border-black/30 gap-[60px]">
                <div className="flex flex-col gap-[30px] text-black justify-center">
                    <p className="text-[16px] text-black/50 ">{carddata[selected].description}</p>
                    <ul className="flex flex-col gap-[10px]">
                        {carddata[selected].bulletpoints.map((bulletpoint:any,index:number)=>(
                            <li key={index} className="flex items-center gap-[10px]">
                                <img src={bulletpoint.icon} alt={bulletpoint.titile} className="w-[20px] h-[20px]" />
                                <p className="text-[16px]">{bulletpoint.titile}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image className="w-[100%] h-[100%]" src={carddata[selected].heroimage} alt={selected} width={545} height={340} />
             </div>
        </div>
    )
}


const Ourapproach = () =>
{


    const datecards = {
   "In 1920 - Planning":{
     planetitle:"Planning",
     boldtitle:"started",
     description:"Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress."
   ,heroimage:"/images/ourapproach.jpg",
   bulletpoints:[
    {titile:"Quality Control System",icon:"/images/setting.png"},
    {titile:"Quality Control System",icon:"/images/setting.png"},
    {titile:"Quality Control System",icon:"/images/setting.png"},
    
   ]
   },
   "In 1922 - Journey Started":{
    planetitle:"Journey Started",
    boldtitle:"started",
    description:"Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress."
   ,heroimage:"/images/ourapproach.jpg",
   bulletpoints:[
    {titile:"Quality Control System",icon:"/images/setting.png"}, 
    {titile:"Quality Control System",icon:"/images/setting.png"},
   ]
   },
   "In 1924 - Innovation":{
    planetitle:"Innovation",
    boldtitle:"started",
    description:"Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress."
   ,heroimage:"/images/ourapproach.jpg",
   bulletpoints:[
    {titile:"Quality Control System",icon:"/images/setting.png"}, 
    {titile:"Quality Control System",icon:"/images/setting.png"},     
   ]},
   "In 1930 - Global Reach":{
    planetitle:"Global Reach",
    boldtitle:"started",
    description:"Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress."
   ,heroimage:"/images/ourapproach.jpg",
   bulletpoints:[
    {titile:"Quality Control System",icon:"/images/setting.png"}, 
    {titile:"Quality Control System",icon:"/images/setting.png"}, 
   ]},
   "In 1935 - Global Reach":{
    planetitle:"Global Reach",
    boldtitle:"started",
    description:"Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress."
   ,heroimage:"/images/ourapproach.jpg",
   bulletpoints:[
    {titile:"Planning",icon:"/images/setting.png"}, 
    {titile:"Planning",icon:"/images/setting.png"}, 
   ]},
}
   


   
   const carddata = {
    ourmission: {
        title:"Our Mission",
        src:"/images/eye.png",
        description:"Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.",
        heroimage:"/images/ourapproach.jpg",
        bulletpoints:[{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"}]
    },
    ourvision: {
        title:"Our Vision",
        src:"/images/eye.png",
        description:"Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.",
        heroimage:"/images/ourapproach.jpg",
        bulletpoints:[{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"}]
    },
    ourvalues: {
        title:"Our Values",
        src:"/images/eye.png",
        description:"Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.",
        heroimage:"/images/ourapproach.jpg",
        bulletpoints:[{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"},{titile:"Sustainable Manufacturing Practices",icon:"/images/setting.png"}]
    },
 
   }

    const [selected,setSelected] = useState("ourmission");
    // 1. Define the type for the keys
    type DateCardKey = keyof typeof datecards;
    // 2. Use the type for selecteddate
    const [selecteddate, setSelecteddate] = useState<DateCardKey>("In 1920 - Planning");
    return (
       <div className="w-full bg-white ">
  {/* Hero Section */}
  <div
    className="w-full h-[540px] flex flex-col justify-center px-8 pb-[60px] " 
    style={{
      backgroundImage: "url('/images/ourapproach.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <p className="text-yellow-500 font-semibold mb-2">OUR APPROACH</p>
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-white text-[50px]/[60px]  leading-tight">
        Empowering sustainable <br />
        <span className="font-bold">growth in industry</span>
      </h1>
      <p className="text-white max-w-md mt-4 md:mt-0">
      We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
      </p>
    </div>
  </div>


  {/* Floating Card */}
  <div className="max-w-5xl mx-auto -mt-30 bg-white rounded-2xl shadow-lg  relative z-10">
    {/* Place your Selectioncard and other content here */}
    <Selectioncard carddata={carddata} selected={selected} setSelected={setSelected} />
  </div>


  <div className="flex flex-col p-[60px]">
  <p className="text-yellow-500 font-semibold mb-2">OUR APPROACH</p>
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-black text-[50px]/[60px]  leading-tight">
      Foundation of excellences <br />
        <span className="font-bold">in industry</span>
      </h1>
      <p className="text-black/60 max-w-md mt-4 md:mt-0">
      We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
      </p>
  </div>
  <div className="flex mt-[60px]">
    <div className="flex flex-col rounded-[8px] bg-white border-[1px] border-[#EBEBEB] min-w-[365px] ">
        {Object.keys(datecards).map((key,index)=>(
            <div key={key} className={`flex flex-col ${index==0?"rounded-t-[8px]":""} ${index==Object.keys(datecards).length-1?"rounded-b-[8px]":""}   border-[1px] border-[#EBEBEB]`}>
                <div onClick={()=>setSelecteddate(key as DateCardKey)} className={`hover:cursor-pointer text-[20px] text-black/80 px-5 py-6 items-center text-center font-semibold ${selecteddate==key?"bg-primary-yellow":""}`}>{key}</div>
            </div>  
        ))}
    </div>

    {/* Right Side */}
    <div className="flex  gap-[30px] p-[60px]">
         <div className="flex flex-col gap-[30px]">
         <div className="flex gap-[10px] text-[50px]/[60px]">
            <p className="text-black/80">{datecards[selecteddate].planetitle}</p>
            <p className="text-black/80 font-bold">{datecards[selecteddate].boldtitle}</p>
        </div>
        <p className="text-[16px] text-black/60">{datecards[selecteddate].description}</p>
        {
            datecards[selecteddate].bulletpoints.map((bulletpoint:any,index:number)=>(
                <div key={index} className="flex gap-[10px] items-center">
                    <img src={bulletpoint.icon} alt={bulletpoint.titile} className="w-[24px] h-[24px]" />
                    <p className="text-[20px] text-black/80">{bulletpoint.titile}</p>
                </div>
            ))
        }
         </div>
        
        <Image src={datecards[selecteddate].heroimage} alt={selecteddate} width={420} height={340} className="h-auto w-[420px] max-w-[420px] object-cover rounded-[8px]" />
    </div>
  </div>
  </div>
  </div>

    )

}


export default Ourapproach;