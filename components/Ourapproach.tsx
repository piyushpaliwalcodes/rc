"use client";

import { useState } from "react";
import Image from "next/image";
const Selectioncard = ({carddata,selected,setSelected}:{carddata:any,selected:string,setSelected:any}) =>
{
    const keys = Object.keys(carddata);
    return (
        <div className="flex flex-col rounded-[16px]">
            <div className="grid grid-cols-3 gap-0 rounded-t-[16px] shadow-lg">
                {keys.map((key,index)=>(
                    <div
                        key={key}
                        className={`flex w-full items-center justify-center bg-white gap-2 md:gap-[10px] p-3 md:p-[20px] text-[15px] md:text-[16px] min-h-[48px] md:min-h-0 transition-all duration-200
                            ${selected==key ? "bg-primary-yellow" : ""}
                            ${index===0 ? "rounded-tl-[16px] md:rounded-tl-[16px] md:rounded-tr-none" : ""}
                            ${index===keys.length-1 ? "rounded-tr-[16px] md:rounded-tr-[16px] md:rounded-tl-none" : ""}
                            cursor-pointer`}
                        onClick={()=>setSelected(key)}
                    >
                        <img src={carddata[key].src} alt={key} className="w-[22px] h-[22px] md:w-[40px] md:h-[40px]" />
                        <p className="text-black text-[15px] md:text-[16px] whitespace-nowrap">{carddata[key].title}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row p-4 md:p-[60px] px-4 md:px-[80px] bg-white rounded-b-[16px] border-[1px] border-black/30 gap-6 md:gap-[60px]">
                <div className="flex flex-col gap-4 md:gap-[30px] text-black justify-center">
                    <p className="text-[15px] md:text-[16px] text-black/50 ">{carddata[selected].description}</p>
                    <ul className="flex flex-col gap-2 md:gap-[10px]">
                        {carddata[selected].bulletpoints.map((bulletpoint:any,index:number)=>(
                            <li key={index} className="flex items-center gap-2 md:gap-[10px]">
                                <img src={bulletpoint.icon} alt={bulletpoint.titile} className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                                <p className="text-[15px] md:text-[16px]">{bulletpoint.titile}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image className="w-full md:w-[100%] h-auto" src={carddata[selected].heroimage} alt={selected} width={545} height={340} />
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
    type DateCardKey = keyof typeof datecards;
    const [selecteddate, setSelecteddate] = useState<DateCardKey>("In 1920 - Planning");
    return (
       <div className="w-full bg-white ">
  {/* Hero Section */}
  <div
    className="w-full h-[320px] md:h-[540px] flex flex-col justify-center px-4 md:px-8 md:pb-[60px] md:px-[60px] relative" 
    style={{
      backgroundImage: "url('/images/ourapproach.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute top-0 left-0 w-full h-full bg-black/30"/>
    <div className="flex flex-col z-10 gap-4 md:gap-0">
    <p className="text-yellow-500 font-semibold mb-2">OUR APPROACH</p>
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <h1 className="text-white text-[28px] md:text-[50px]/[60px] leading-tight">
        Empowering sustainable <br />
        <span className="font-bold">growth in industry</span>
      </h1>
      <p className="text-white max-w-md mt-4 md:mt-0 text-[15px] md:text-base">
      We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
      </p>
    </div>
    </div>
  </div>

  {/* Floating Card */}
  <div className="max-w-5xl mx-2 my-6 md:mx-auto md:my-0 mt-10 md:-mt-30 bg-white rounded-2xl shadow-lg relative z-10 px-2 md:px-0">
    <Selectioncard carddata={carddata} selected={selected} setSelected={setSelected} />
  </div>

  <div className="flex flex-col p-4 md:p-[60px] gap-6 md:gap-0">
    <p className="text-yellow-500 font-semibold mb-2">OUR APPROACH</p>
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <h1 className="text-black text-[28px] md:text-[50px]/[60px] leading-tight">
      Foundation of excellences <br />
        <span className="font-bold">in industry</span>
      </h1>
      <p className="text-black/60 max-w-md mt-4 md:mt-0 text-[15px] md:text-base">
      We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
      </p>
    </div>
    <div className="flex flex-col md:flex-row mt-6 md:mt-[60px] gap-6 md:gap-0">
      <div className="flex flex-col rounded-[8px] bg-white border-[1px] border-[#EBEBEB] min-w-[220px] md:min-w-[365px] ">
        {Object.keys(datecards).map((key,index)=>(
            <div key={key} className={`flex flex-col ${index==0?"rounded-t-[8px]":""} ${index==Object.keys(datecards).length-1?"rounded-b-[8px]":""} border-[1px] border-[#EBEBEB]`}>
                <div onClick={()=>setSelecteddate(key as DateCardKey)} className={`hover:cursor-pointer text-[16px] md:text-[20px] text-black/80 px-3 md:px-5 py-4 md:py-6 items-center text-center font-semibold ${selecteddate==key?"bg-primary-yellow":""}`}>{key}</div>
            </div>  
        ))}
      </div>
      {/* Right Side */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-[30px] p-4 md:p-[60px] w-full">
         <div className="flex flex-col gap-4 md:gap-[30px] w-full">
           <div className="flex gap-2 md:gap-[10px] text-[28px] md:text-[50px]/[60px]">
              <p className="text-black/80">{datecards[selecteddate].planetitle}</p>
              <p className="text-black/80 font-bold">{datecards[selecteddate].boldtitle}</p>
          </div>
          <p className="text-[15px] md:text-[16px] text-black/60">{datecards[selecteddate].description}</p>
          {
              datecards[selecteddate].bulletpoints.map((bulletpoint:any,index:number)=>(
                  <div key={index} className="flex gap-2 md:gap-[10px] items-center">
                      <img src={bulletpoint.icon} alt={bulletpoint.titile} className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
                      <p className="text-[15px] md:text-[20px] text-black/80">{bulletpoint.titile}</p>
                  </div>
              ))
          }
         </div>
        <Image src={datecards[selecteddate].heroimage} alt={selecteddate} width={420} height={340} className="h-auto w-full md:w-[420px] max-w-[420px] object-cover rounded-[8px]" />
      </div>
    </div>
  </div>
</div>
    )
}

export default Ourapproach;