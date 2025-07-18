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
        <div className='w-full max-w-full flex flex-col lg:flex-row gap-8 lg:gap-[150px] px-4 md:px-8 lg:px-[60px] py-8 md:py-[60px] text-black'>
            <div className="flex flex-col max-w-full lg:max-w-[710px] justify-between h-auto lg:h-[400px]">
                <div className="flex flex-col gap-4 md:gap-[20px]"> 
                    <div className="flex flex-col gap-2 md:gap-[20px]">
                        <p className="text-[16px] md:text-[20px] font-bold  text-black/30" >WHO WE ARE</p>
                        <p className="text-[28px] md:text-[32px] lg:text-[40px]/[50px]  ">RC Dal – <span className="yellounderline">India’s Trusted</span> <br/>Name in Pulse Manufacturing</p>
                    </div>
                    <p className="text-[15px] md:text-[16px]">
                        With roots in Khandwa, Madhya Pradesh, and a legacy spanning generations, RC Dal is a flagship brand under RC Group—renowned for agricultural excellence and ethical trade. We manage the entire value chain: from sourcing directly from farmers to processing, polishing, grading, and packaging pulses under one roof..
                    </p>
                </div>
                <div className="flex  gap-4 md:gap-[30px] mt-4 md:mt-0 items-center">
                    <YellowButton text="About Our Journey" link="/aboutus" />
                    <div className="h-full flex items-center justify-center">
                        <a href="/" className="text-[15px] md:text-[16px] flex items-center underline h-full ">Quality Certificates</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-around gap-6 md:gap-8 w-full max-w-full">
                {features.map((feature, index) => (
                    <div key={index} className="flex gap-3 md:gap-[10px] items-center">
                        <img  className="h-[48px] w-[48px] md:h-[60px] md:w-[60px] object-contain" src={feature.iconsrc} alt={feature.title} />
                        <div className="flex flex-col">
                            <p className="text-[18px] md:text-[24px] ">{feature.title}</p>
                            <p className="text-[15px] md:text-[20px] opacity-[70%]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Whoweare