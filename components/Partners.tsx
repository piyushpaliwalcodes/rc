import Image from "next/image";
const Partners = () =>
{
    return (
        <div className="flex flex-col gap-[30px]">
            <div className="flex">      <p className="text-yellow-500 font-semibold mb-2">OUR APPROACH</p>
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-white text-[50px]/[60px]  leading-tight">
        Empowering sustainable <br />
        <span className="font-bold">growth in industry</span>
      </h1>
      <p className="text-white max-w-md mt-4 md:mt-0">
      We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
      </p>
    </div></div>
       <div className="flex ">
        <div className="w-[174px] h-[174px] bg-primary-yellow/50 rounded-full">
        <Image src="/images/partner1.png" alt="partner" width={174} height={174} />
        </div>
       </div>
        </div>
    )
}


export default Partners;