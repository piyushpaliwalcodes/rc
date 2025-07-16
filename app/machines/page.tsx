import Herosecond from "@/components/Herosecond";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";




const Needhelp = () => {
    return (
        <div className="relative flex flex-col p-[40px] rounded-[8px] overflow-hidden gap-[40px] max-w-[377px] " style={{
            backgroundImage: "url('/images/machinesmallbg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
        }}>
            <div className="absolute inset-0 bg-black/40" ></div>
            
            <div className="relative z-10 flex flex-col gap-[20px]">
                <h1 className="text-[#FCD900] text-[32px]/[60px] font-bold">RC Logo</h1>
                <div className="flex flex-col gap-[20px]">
                    <p className=" text-[40px]/[50px] font-bold">Need <span className="font-bold">Help!</span></p>
                    <p className="font-semibold">Got questions or need assistance with your Industry needs?</p>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <div className="flex gap-[20px] items-center">
                        <Image src="/images/call.png" alt="phone" width={50} height={50} />
                        <p className="text-[20px]/[20px] font-bold">+91 9876543210</p>
                    </div>
                    <div className="flex gap-[20px] items-center">
                        <Image src="/images/mail.png" alt="phone" width={50} height={50} />
                        <p className="text-[20px]/[20px] font-bold">info@domain.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Machines = () => {

    const machinecategories = [ 
        {
            title:"Cleaning",
           
        },
        {
            title:"Grading",
            
        },
        {
            title:"Packaging",
           
        },
        {
            title:"Drying",
           
        },
        {
            title:"Sieving",
        }
    ]
    return (
        <div className="flex flex-col bg-white">
            <Herosecond title="Manufacturing Solutions"/>
            <div className="flex p-[60px]">



                {/*select category*/}
            <div className="flex flex-col  bg-white  min-w-[365px] gap-[30px] ">
            <div className="flex flex-col rounded-[8px] border-[1px] border-[#EBEBEB]" >
            <div className="text-[20px] text-black/80 px-5 py-6 items-center text-center font-semibold bg-[#FCD900] rounded-t-[8px]">Machine Categories</div>
        {machinecategories.map((item,index)=>(
            <div key={index} className={`flex flex-col ${index==machinecategories.length-1?"rounded-b-[8px]":""}   border-[1px] border-[#EBEBEB]`}>
                <div className={`hover:cursor-pointer text-[20px] text-black/60 px-5 py-6 items-center   flex justify-between`}>{item.title} <FaArrowRight className="-rotate-45"/></div>
            </div>  
        ))}
            </div>
                <Needhelp/>
    </div>
            </div>
        </div>
    )
}

export default Machines;