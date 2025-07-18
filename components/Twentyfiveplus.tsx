import Image from "next/image";
import YellowButton from "./Yellowbutton";

const Highlight = () => {
    return (
        <div className="flex flex-col text-[18px] md:text-[20px] gap-2 md:gap-[20px]">  
           <h1 className="opacity-30 font-bold text-[14px] md:text-[20px]">ABOUT US</h1>
           <p className="text-[24px] md:text-[48px]/[60px] ">Proven quality through <br/>
           <span className="font-semibold">Industrial Innovation</span>
           </p>
           <p className="text-black/70 text-[14px] md:text-[16px]">At the heart of our operations is a commitment to delivering superior products
           through cutting-edge technology and innovative processes.</p>
        </div>
    )
}
const Twentyfiveplus = () => {
    const bulletpoints = [
        {title:"Sustainable Manufacturing",image:"/images/setting.png"},
        {title:"Advanced Technology",image:"/images/setting.png"},
        {title:"Quality Assurance",image:"/images/setting.png"},
        {title:"Customer Satisfaction",image:"/images/setting.png"},
    ]
    return (
        <div className="flex flex-col-reverse lg:flex-row w-full justify-between p-4 md:p-[60px] text-black gap-6 md:gap-0">
            <div className="flex justify-center w-full lg:w-auto">
                <Image src="/images/25+.png" alt="25plus" width={427} height={650} className="w-full max-w-[220px] md:max-w-[350px] lg:max-w-[600px] h-[180px] md:h-[220px] lg:h-[650px] object-contain flex-shrink-0 mx-auto mt-6 lg:mt-0"/>
            </div>
            <div className="w-full md:w-[633px] flex flex-col gap-6 md:gap-[30px] mx-auto">
                <Highlight/>
                <div className="flex flex-col md:flex-row gap-4 md:gap-[30px] justify-between w-full">
                    <div className="flex flex-col gap-2 md:gap-[10px] w-full md:w-auto">
                        {bulletpoints.map((bulletpoint,index)=>(
                            <div key={index} className="flex gap-2 md:gap-[8px] items-center">
                                <Image src={bulletpoint.image} alt={bulletpoint.title} width={40} height={40} className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] object-cover"/>
                                <p className="text-[14px] md:text-base">{bulletpoint.title}</p>
                            </div>
                        ))}
                        <YellowButton className="mt-4 md:mt-[30px] w-full" text='Contact Us' link='/contactus'/>
                    </div>
                    <div className="bg-[#F5F5F5] w-full md:w-[300px] rounded-[10px] mt-4 md:mt-0"> 
                        <Image src="/images/rating.png" alt="25plus" width={1000} height={1000} className="w-full h-auto object-cover rounded-[10px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Twentyfiveplus;