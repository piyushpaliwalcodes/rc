"use client"
import YellowButton from "./Yellowbutton"

const Whoweare = () => {    
    

    const features = [
       { iconsrc:"/images/globalexport.png",
        title:"Supplies Pan-India & Export Ready",
        description:"All over the world"
    },
        {
            iconsrc:"/images/jar.png",
            title:"End-to-End In-house Processing",
            description:"From Cleaning to final packaging"},
        {
            iconsrc:"/images/bullseye.png",
            title:"Mega Facility in Khandwa (M.P.)",
            description:"Spanning 2+ acres"
        },
        
        
    ]
    return (
        <div className='w-full px-[60px] flex gap-[150px] py-[60px]'>
            <div className="flex flex-col max-w-[710px] justify-between h-[400px]">
                <div className="flex flex-col gap-[20px]"> 
                    <div className="flex flex-col gap-[20px]">
                        <p className="text-[20px] font-bold opacity-[30%]">WHO WE ARE</p>
                        <p className="text-[40px]/[50px] ">RC Dal – India’s Trusted Name in Pulse Manufacturing</p>
                    </div>
               <p className="text-[16px]">
                With roots in Khandwa, Madhya Pradesh, and a legacy spanning generations, RC Dal is a flagship brand under RC Group—renowned for agricultural excellence and ethical trade. We manage the entire value chain: from sourcing directly from farmers to processing, polishing, grading, and packaging pulses under one roof..
                </p></div>
                <div className="flex gap-[60px]"><YellowButton text="Read More" link="/" /> <div className="h-full justify-center items-center"><a href="/" className="text-[16px] flex items-center  underline h-full ">Quality Certificate</a></div>
                </div>
            </div>
            <div className="flex flex-col justify-around">
                {features.map((feature, index) => (
                    <div key={index} className="flex gap-[10px]">
                        <img  className="h-[60px] w-[60px] object-contain" src={feature.iconsrc} alt={feature.title} />
                        <div className="flex flex-col">
                            <p className="text-[24px] ">{feature.title}</p>
                            <p className="text-[20px] opacity-[70%]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Whoweare