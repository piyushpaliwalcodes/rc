import Image from "next/image";
import Yellowbutton from "./Yellowbutton";
const Withtractor = ()=>
{

    return (
        <div className = "flex gap-[50px] px-[60px] py-[60px] text-black">
            <Image src = "/images/tractor.png" alt = "tractor" width = {500} height = {500} className = "min-w-[768px]" />
            <div className="flex flex-col gap-[80px] justify-center">
            <div className="flex flex-col gap-[30px]">
                <h1 className="text-[48px]/[60px]">Revolutionizing the Manufacturing Process.</h1>
                <p>With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries. With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics.</p>
            </div>
            <Yellowbutton text="View All" link="/" />
            </div>
                

        </div>
    )
}

export default Withtractor;