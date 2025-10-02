"use client"
import { useState } from "react";
import YellowButton from "./Yellowbutton";
import Ourprocess from "./Ourprocess";
import Ourprocess2 from "./Ourprocess2";
import { stepsdata } from "./data";

const Manufacturingcategory = ({title="Manufacturing Machines", description="Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie. ", images=["/images/machine1.png", "/images/machine2.png", "/images/machine3.png", "/images/machine4.png","/images/machine1.png","/images/machine2.png"]}: {title: string, description: string, images: string[]}) =>
{
    return (
        <div className="flex flex-col gap-6 md:gap-[30px] py-6 md:py-[60px] justify-center w-full max-w-full">
            <h1 className="text-[22px] md:text-[30px] font-semibold">{title}</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-[60px] items-start md:items-center w-full">
                <p className="text-[15px] md:text-base flex-1">{description}</p>
                <div className="w-full md:w-auto mt-2 md:mt-0">
                    <YellowButton text="View All" link="/machines" />
                </div>
            </div>
            <div className="flex flex-row flex-nowrap overflow-x-auto md:overflow-x-scroll mt-6 md:mt-[40px] gap-4 md:gap-4 w-full scrollbar-thin scrollbar-thumb-gray-300 max-w-full">
                {
                    images.map((image, idx) => (
                        <div className="flex flex-col gap-2 items-center min-w-[300px] " key={idx}>
                            <img src={image} alt={title} width={300} height={200} className="w-full sm:w-[180px] md:w-[220px] lg:w-[300px] h-[140px] sm:h-[120px] md:h-[160px] lg:h-[200px] object-cover rounded-md" />
                            <p className="text-[14px] md:text-[16px] text-center">{title}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center gap-2 md:gap-[10px] mt-4 md:mt-[20px]"> 
                {
                    Array.from({length:4}).map((_,index) => (
                        <div key={index} className={`rounded-full border-[1px] border-[#FCD900] w-[10px] h-[10px] md:w-[15px] md:h-[15px] ${index===0?"bg-[#FCD900]":"bg-white"}`}></div>
                    ))
                }
            </div>
        </div>
    )
}

// const whatwedodata = { 
//     "Manufacturing Machines":{
//         title: "Manufacturing Machines",
//         description: "Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie. ",
//         images: ["/images/machine1.png", "/images/machine2.png", "/images/machine3.png", "/images/machine2.png","/images/machine1.png", "/images/machine2.png", "/images/machine3.png", "/images/machine2.png"]
//     },
//     "Raw Materials":{
//         title: "Sewing Machines",
//         description: "Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie. ",
//         images: ["/images/machine1.png", "/images/machine2.png", "/images/machine3.png", "/images/machine2.png","/images/machine1.png", "/images/machine2.png", "/images/machine3.png", "/images/machine2.png"]
//     }
// }

const Whatwedo = () => {
    // const Categories = [
    //     {title:"Manufacturing Machines",description:"Modern Processing Infrastructure",icon:"/images/one.png"},
    //     {title:"Raw Materials",description:"High-Quality Raw Material Sourcing",icon:"/images/two.png"},
    //     {title:"Packaging Machines",description:" Automated Packaging & Handling",icon:"/images/three.png"},
    //     {title:"Sewing Machines",description:"End-to-End Manufacturing Control",icon:"/images/four.png"},
    //     {title:"Customer Care",description:"Global Supply & Client Support",icon:"/images/five.png"}
    // ];
    const [selectedCategory, setSelectedCategory] = useState(stepsdata[0]);
    return (
        <div className = "flex flex-col text-black max-w-full">
            <div className="bg-gradient-to-b from-white/0 to-white/100 "></div>
            <div className=" md:min-h-[480px] bg-gray-200 px-4 md:px-8 lg:px-[60px] pt-20 md:pt-[100px] relative flex flex-col items-center gap-8 md:gap-[80px] justify-between" style={{backgroundImage: "url('/images/web.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="flex flex-col gap-3 md:gap-[20px] items-center  text-center md:items-start md:text-left w-full" >
                    <h1 className="text-[16px] md:text-[20px] opacity-30 font-bold uppercase">How We Do</h1>
                    <p className="text-[18px] md:text-[48px]/[60px] w-full md:w-[70%]"><span className="yellounderline font-bold">Optimized RC Pulses Processing</span>  with Advanced Machines, Quality Inputs, and Custom Packaging for Every Market Need</p>
                </div>
                <div className="w-full flex flex-nowrap gap-1 sm:gap-2 md:justify-between items-start md:gap-0 ">
                    {
                        stepsdata.map((category) => (
                            <div onClick={() => setSelectedCategory(category)} key={category.title} className={`flex flex-col items-center flex-1 sm:w-[90px] sm:h-[90px] md:min-w-1/6 md:h-[140px] lg:w-[200px] lg:h-[170px] justify-center gap-1 sm:gap-2 md:gap-[10px] p-1 sm:p-2 md:p-[20px] md:px-[25px] rounded-t-[4px] hover:cursor-pointer hover:bg-gray-300/70 transition-all duration-200 ${selectedCategory.title === category.title ? "hover:bg-white bg-white justify-center" : ""}`}>
                                <img src={category.icon} alt={category.title} width={28} height={28} className="w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px]" />
                                <p className={`text-center text-[9px] sm:text-[13px] md:text-[16px] ${selectedCategory.title === category.title ? "font-bold" : ""}`}>{category.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex gap-4 md:gap-[20px] px-4 md:px-8 lg:px-[60px]">
                <Ourprocess2 steps={selectedCategory.steps}/>
                {/* <Manufacturingcategory {...whatwedodata[selectedCategory.title as keyof typeof whatwedodata]} />*/}
            </div> 
        </div>
    )
}

export default Whatwedo;