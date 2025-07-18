import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"


const Manufacturehighlight = () => {
    return (
        <div className="flex flex-col  text-[20px]">  
           <h1 className="opacity-30 font-bold">WHAT WE MANUFACTURE</h1>
           <p className="text-[48px] ">Pure and Healthy RC Products.</p>
           <p className="w-[60%]">Starting from the planning of the product our customer wants; design, manufacturing, software, mounting, installation & comissioning are made by us.</p>
        </div>
    )


}


const Manufacturecardwithimage = ({src, title, description, link}: {src: string, title: string, description: string, link: string}) =>
{
    return (
    <div className="flex flex-col w-[430px] gap-[15px] ">
        <Image src={src} alt={title} width={430} height={280}/>
        <h1 className="text-[24px] font-bold">{title}</h1>
        <p className="text-[20px]">{description}</p>
        <a href={link} className="flex items-center gap-[10px] hover:cursor-pointer hover:underline">Read More <FaArrowRight/>    
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
        <div className="flex flex-col p-[60px] gap-[60px] text-black max-w-full">
            <Manufacturehighlight />
            <div className="flex gap-[20px]">
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