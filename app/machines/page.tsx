"use client"

import Herosecond from "@/components/Herosecond";
import Image from "next/image";
import Productdetails from "@/components/Productdetails";
import Howwepackagedetails from "@/components/Howwepackagedetails";
import Whatisontheplate from "@/components/Whatisontheplate";
import Machinedetails from "@/components/Machinedetails";

import { FaArrowRight } from "react-icons/fa";
import Haveaquestion from "@/components/Haveaquestion";
import {useState} from "react"
import VideoPlayer from "@/components/Videoplayer";
import YellowButton from "@/components/Yellowbutton";
import Sustainablegrowth from "@/components/Sustainablegrowth";







const Endtoend = () =>
{
    return <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-[50px] px-4 md:px-[60px] py-6 md:py-[60px] text-black">
    <Image src="/images/machine.png" alt="RC Dal Mills machinery" width={650} height={447} className="w-full max-w-[650px] h-auto md:h-[447px] object-cover" />
    <div className="flex flex-col gap-[20px] md:gap-[35px] w-full md:w-[600px] text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-[40px]">🌾 RC Dal Mills 
       <span className="font-bold"> – End-to-End Dal Processing Workflow</span> </h1>
       <p className="w-full md:w-[90%] text-start">At RC Dal Mills, we follow a state-of-the-art, fully mechanized process to ensure that every grain of dal reaching our customers is pure, hygienic, and of the highest quality. Our workflow combines advanced technology with strict quality control at each stage.</p>
       <ol className="flext text-start list-decimal list-inside space-y-2" type="1">
       <li>Direct procurement from farmers ensures freshness and fair trade.</li>
       <li>Fully automated machines minimize manual handling, keeping hygiene at the highest standard.</li>
       <li>Multi-stage quality control at every step of the process.</li>
       <li>Eco-friendly practices like by-product utilization (husks for cattle feed).</li>
       <li>Wide distribution network ensuring timely delivery to customers</li>
       </ol>
    </div>
</div>
}

// const Needhelp = () => {


    
//     return (
//         <div className="relative flex flex-col p-[40px] rounded-[8px] overflow-hidden gap-[40px] md:max-w-[377px] " style={{
//             backgroundImage: "url('/images/machinesmallbg.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
            
//         }}>
//             <div className="absolute inset-0 bg-black/40" ></div>
            
//             <div className="relative z-10 flex flex-col gap-[20px]">
//                 <h1 className="text-[#FCD900] text-[32px]/[60px] font-bold">RC Logo</h1>
//                 <div className="flex flex-col gap-[20px]">
//                     <p className=" text-[40px]/[50px] font-bold">Need <span className="font-bold">Help!</span></p>
//                     <p className="font-semibold">Got questions or need assistance with your Industry needs?</p>
//                 </div>
//                 <div className="flex flex-col gap-[15px]">
//                     <div className="flex gap-[20px] items-center">
//                         <Image src="/images/call.png" alt="phone" width={50} height={50} />
//                         <p className="text-[20px]/[20px] font-bold">+91 9876543210</p>
//                     </div>
//                     <div className="flex gap-[20px] items-center">
//                         <Image src="/images/mail.png" alt="phone" width={50} height={50} />
//                         <p className="text-[20px]/[20px] font-bold">info@domain.com</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const Machines = () => {







const [selectedcategory,setselectedcategory] = useState<string>("Cleaning");


    return (
        <div className="flex flex-col bg-white">
            <VideoPlayer/>
            <Endtoend/>
           <Sustainablegrowth/>
            <Haveaquestion/>
        </div>
    )
}

export default Machines;