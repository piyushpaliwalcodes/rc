"use client"
import YellowButton from "./Yellowbutton"

const Whoweare = () => {    
    const features = [
       { iconsrc:"/images/panindia.png",
        title:"Supplies Pan-India & Export Ready",
        description:"Pulses delivered across India and key export hubs like UK, USA, Dubai."
    },
        {
            iconsrc:"/images/endtoend.png",
            title:"End-to-End In-house Processing",
            description:"Every stage from cleaning to packaging is done at our own facility."},
        {
            iconsrc:"/images/megafacility.png",
            title:"Mega Facility in Khandwa (M.P.)",
            description:"1+ acre modern plant with automated machines for precision pulse processing."
        },
    ]

  
  
  
  

    return (
        <div className='w-full max-w-full flex flex-col lg:flex-col gap-8 lg:gap-[40px] py-6 px-4 md:px-8 lg:px-[60px]  md:py-[100px] text-black bg-[#FFF9D487]'>
            <div className="flex flex-col max-w-full lg:max-w-full justify-between h-auto ">
                <div className="flex flex-col gap-4 md:gap-[20px]"> 
                    <div className="flex flex-col gap-2 md:gap-[30px]">
                        <p className="text-[16px] md:text-[20px] font-bold  text-black/30" >WHO WE ARE</p>
                       <div className="flex justify-between">
                        <p className="text-[24px] md:text-[32px] lg:text-[40px]/[50px] w-1/2 "> <span className="font-bold">RC Dal – </span>  India’s Trusted Brand <br/> for Pure and Premium Dals</p> <YellowButton text="About our Journey" link="/aboutus" className="max-h-[40px]"/></div> 
                    </div>
                    <p className="text-[15px] md:text-[20px] text-justify">
                    RC Dall, a leading name in India’s dal manufacturing industry, carries a legacy spanning over 50 years. Rooted in Khandwa, Madhya Pradesh, we ensure excellence at every step—from sourcing and processing to packaging—delivering purity, nutrition, and taste that generations of families and businesses trust with confidence.
                    </p>
                </div>
               
            </div>
            <div className="grid grid-cols-3 gap-6 md:gap-8 w-full max-w-full">
                {features.map((feature, index) => (
                    <div key={index} className="flex gap-3 md:gap-[15px] items-center">
                        <img  className="h-[48px] w-[48px] md:h-[65px] md:w-[65px] object-contain  " src={feature.iconsrc} alt={feature.title} />
                        <div className="flex flex-col">
                            <p className="text-[18px] md:text-[20px] font-bold ">{feature.title}</p>
                            <p className="text-[15px] md:text-[18px] opacity-[70%]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Whoweare