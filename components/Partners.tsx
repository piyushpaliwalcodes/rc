import Image from "next/image";
const Partners = () =>
{
    return (
        <div className="flex flex-col gap-8 md:gap-[50px] p-4 md:p-[60px] text-black bg-[#F9F9F9]">
            <div className="flex flex-col">      
                <p className="text-black/40 font-semibold mb-2">PARTNERS</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 justify-between items-center">
                    <h1 className="text-black text-[28px] md:text-[50px]/[60px] leading-tight ">
                        Ask our <span className="yellounderline">happy customers</span> about our quality
                    </h1>
                    <div className="flex flex-col gap-2 md:gap-[10px]">
                        <p className="text-[15px] md:text-base">
                            We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
                        </p>
                        <h1 className="text-[16px] md:text-[20px] font-semibold">John Doe, CEO</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 w-full">
                {
                    Array.from({length:6}).map((_,index)=>(
                        <div key={index} className="w-[90px] h-[90px] md:w-[174px] md:h-[174px] bg-yellow-100 rounded-full flex-shrink-0 flex items-center justify-center">
                            {/* <Image src="/images/partner1.png" alt="partner" width={174} height={174} /> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Partners;