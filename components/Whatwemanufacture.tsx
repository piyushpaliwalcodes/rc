import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

const Manufacturehighlight = () => {
    return (
        <div className="flex flex-col text-[18px] md:text-[20px] gap-2 md:gap-0">  
           <h1 className="opacity-30 font-bold text-[14px] md:text-[20px]">WHAT WE MANUFACTURE</h1>
           <p className="text-[24px] md:text-[48px] ">Pure and Healthy RC Products.</p>
           <p className="w-full md:w-[60%] text-[14px] md:text-[16px]">Starting from the planning of the product our customer wants; design, manufacturing, software, mounting, installation & comissioning are made by us.</p>
        </div>
    )
}

const Manufacturecardwithimage = ({src, title, description, link}: {src: string, title: string, description: string, link: string}) =>
{
    return (
    <div className="flex flex-col w-full md:w-[430px] gap-2 md:gap-[15px] ">
        <Image src={src} alt={title} width={430} height={280} className="w-full h-[180px] md:h-[280px] object-cover rounded-md"/>
        <h1 className="text-[18px] md:text-[24px] font-bold">{title}</h1>
        <p className="text-[14px] md:text-[20px]">{description}</p>
        <a href={link} className="flex items-center gap-[6px] md:gap-[10px] text-[14px] md:text-base hover:cursor-pointer hover:underline">Read More <FaArrowRight/>    
        </a>
    </div>
    )
}

const Whatwemanufacture = () =>
{   
    const manufacturedata = [
        {
            src:"/images/machine1.png",
            title:"Urad Dal",
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/images/machine1.png",
            title:"Urad Dal",
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/images/machine1.png",
            title:"Urad Dal",
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
    ]
    return (
        <div className="flex flex-col p-4 md:p-[60px] gap-6 md:gap-[60px] text-black max-w-full">
            <Manufacturehighlight />
            <div className="flex flex-col md:flex-row gap-4 md:gap-[20px] w-full">
                {
                    manufacturedata.map((item, index) => (
                        <Manufacturecardwithimage key={index} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Whatwemanufacture;