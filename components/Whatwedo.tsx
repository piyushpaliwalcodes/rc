"use client"
import { useState } from "react";
import YellowButton from "./Yellowbutton";









const Manufacturingcategory = ({title="Manufacturing Machines", description="Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie. ", images=["/images/machine1.png", "/images/machine2.png", "/images/machine3.png", "/images/machine4.png"]}: {title: string, description: string, images: string[]}) =>
{
    return (<div className="flex flex-col gap-[30px] py-[60px] justify-center">
        <h1 className="text-[30px]">{title}</h1>
        <div className="flex gap-[200px]">
            <p>{description}</p>
            <YellowButton text="View All" link="/" />
        </div>
        <div className="flex justify-between mt-[40px]">
            {
                images.map((image) => (
                    <div className="flex flex-col gap-[10px]"><img src={image} alt={title} width={300} height={300} className=" w-[300px] h-[200px] object-cover " />
                       <p className="text-[16px] text-center">{title}</p>
                       </div>))
            }
        </div>
       <div className="flex justify-center gap-[10px] mt-[20px]"> 
        {
            Array.from({length:4}).map((_,index) => (
                <div className={`rounded-full bg-[#FCD900] border-[1px] border-[#FCD900] w-[15px] h-[15px]  ${index==0?"":"bg-white"}`}></div>
            ))
        }
       </div>
    </div>)
}


const whatwedodata = { 
    "Manufacturing Machines":{
        title: "Manufacturing Machines",
        description: "Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie. ",
        images: ["/images/machine1.png", "/images/machine2.png", "/images/machine3.png", "/images/machine2.png"]
    },
    "Raw Materials":{
        title: "Sewing Machines",
        description: "Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie. ",
        images: ["/images/machine1.png", "/images/machine2.png", "/images/machine3.png", "/images/machine2.png"]
    }
}


const Whatwedo = () => {
    const Categories = [{title:"Manufacturing Machines",icon:"/images/cashmachine.png"},{title:"Raw Materials",icon:"/images/fuel.png"},{title:"Packaging Machines",icon:"/images/idea.png"},{title:"Sewing Machines",icon:"/images/stack.png"},{title:"Customer Care",icon:"/images/headphone.png"}];
    const [selectedCategory, setSelectedCategory] = useState(Categories[0]);
    return (
        <div className = "flex flex-col">
            <div className="bg-gradient-to-b from-white/0 to-white/100 "></div>
            <div className="min-h-[680px] bg-gray-200 px-[60px] pt-[200px] relative flex flex-col items-center gap-[80px] justify-between" style={{backgroundImage: "url('/images/web.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                   <div className="flex flex-col gap-[20px]" >
                    <h1 className="text-[20px] opacity-30 font-bold">What We Do</h1>
                    <p className="text-[48px]/[60px] w-2/3">With our flexible production capacity and high technology, we produce customized solutions for your needs.</p>
                   </div>
                   <div className= "w-full flex gap-[15px] ">
                    {
                        Categories.map((category) => (
                            <div onClick={() => setSelectedCategory(category)} key={category.title} className={`flex flex-col items-center w-[200px] h-[170px] justify-center  items-center gap-[10px] p-[20px] px-[30px] rounded-t-[4px] hover:cursor-pointer  hover:bg-gray-300/70 transition-all duration-200 ${selectedCategory.title === category.title ? "hover:bg-white bg-white justify-center" : ""}`}>
                                <img src={category.icon} alt={category.title} width={60} height={60} />
                                <p className="text-center">{category.title}</p>
                            </div>
                        ))
                    }
                    </div>
            </div>
            <div className="flex gap-[20px] px-[60px]">
                <Manufacturingcategory {...whatwedodata[selectedCategory.title as keyof typeof whatwedodata]} />
            </div>
            
        </div>
    )
}

export default Whatwedo;