import Image from "next/image";
const Partners = () =>
{
    return (
        <div className="flex flex-col gap-[50px] p-[60px] text-black">
            <div className="flex flex-col">      
                <p className="text-primary-yellow font-semibold mb-2">OUR APPROACH</p>
    <div className="grid grid-cols-2 justify-between items-center">
      <h1 className="text-black text-[50px]/[60px] leading-tight ">
        Ask our happy customers about our quality
      </h1>
      <div className="flex flex-col gap-[10px]">
         <p className="  ">
      We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
      </p>
      <h1 className="text-[20px] font-semibold">John Doe, CEO</h1>
      </div>
     
    </div></div>
       <div className="flex justify-between">
        {
            Array.from({length:6}).map((_,index)=>(
                <div key={index} className="w-[174px] h-[174px] bg-yellow-100 rounded-full">
                    {/* <Image src="/images/partner1.png" alt="partner" width={174} height={174} /> */}
                </div>
            ))
        }
        
       </div>
        </div>
    )
}


export default Partners;