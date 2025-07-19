import Image from "next/image";
import Yellowbutton from "./Yellowbutton";
const Withtractor = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[50px] px-4 md:px-[60px] py-6 md:py-[60px] text-black items-center lg:items-start w-full">
            <Image src="/images/tractor.png" alt="tractor" width={500} height={500} className="w-full max-w-[350px] md:max-w-[700px] h-auto mb-6 lg:mb-0" />
            <div className="flex flex-col gap-6 md:gap-[80px] justify-center w-full">
                <div className="flex flex-col gap-4 md:gap-[30px]">
                    <h1 className="text-[24px] md:text-[48px]/[60px]">Revolutionizing the <span className="yellounderline">Manufacturing</span> Process.</h1>
                    <p className="text-[15px] md:text-base">With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries. With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics.</p>
                </div>
                <Yellowbutton text="View All" link="/machines" />
            </div>
        </div>
    )
}

export default Withtractor;