import Image from "next/image";
import YellowButton from "./Yellowbutton";

const Highlight = () => {
    return (
        <div className="flex flex-col  text-[20px] gap-[20px]">  
           <h1 className="opacity-30 font-bold">About us</h1>
           <p className="text-[48px]/[60px] ">Proven quality through <br/>
           <span className="font-bold">Industrial Innovation</span>
           </p>
           <p className="text-black/70 text-[16px]">At the heart of our operations is a commitment to delivering superior products
           through cutting-edge technology and innovative processes.</p>
        </div>
    )


}
const Twentyfiveplus = () => {

    const bulletpoints = [
        {title:"Sustainable Manufacturing",image:"/images/setting.png"},
        {title:"Sustainable Manufacturing",image:"/images/setting.png"},
        {title:"Sustainable Manufacturing",image:"/images/setting.png"},
        {title:"Sustainable Manufacturing",image:"/images/setting.png"},
    ]

    return (
        <div className="flex w-full justify-between p-[60px] text-black">
            
            <Image src="/images/25+.png" alt="25plus" width={427} height={650} className="w-[600px] max-w-[600px] h-[650px] object-contain flex-grow"/>
            <div className="w-[633px] flex flex-col gap-[30px]">
                <Highlight/>
                <div className="flex gap-[30px] justify-between">
                <div className="flex flex-col gap-[10px]">
                    {bulletpoints.map((bulletpoint,index)=>(
                        <div key={index} className="flex gap-[5px] items-center">
                            <Image src={bulletpoint.image} alt={bulletpoint.title} width={40} height={40} className="w-[30px] h-[30px] object-cover"/>
                            <p>{bulletpoint.title}</p>
                        </div>
                    ))}
                    <YellowButton className="mt-[20px] w-full" text='Contact Us' link='/contactus'/>
                </div>
                <div className="bg-[#F5F5F5] w-[300px] rounded-[10px]"> 
                    <Image src="/images/rating.png" alt="25plus" width={1000} height={1000} className="w-full h-auto object-cover rounded-[10px]"/>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Twentyfiveplus;