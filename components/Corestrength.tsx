import Image from "next/image";

const Corestrength = ({sustainabilitydetails}:{sustainabilitydetails:any}) => {    
    return (
        <div className="flex flex-col p-4 md:p-[60px] text-black gap-6 md:gap-[50px]">
            <div className="flex flex-col gap-1 md:gap-[15px]">
                <p className="text-black/40 font-semibold mb-2">OUR APPROACH</p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0">
                    <h1 className="text-black text-[24px] md:text-[50px]/[60px] leading-tight w-full">
                        Foundation of excellences <br />
                        <span className="font-bold">in industry</span>
                    </h1>
                    <p className="text-black/60 w-full md:max-w-[40%] mt-4 md:mt-0 text-[15px] md:text-base">
                        We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 border-[1px] border-black/20 rounded-[10px] overflow-hidden">
                {
                    sustainabilitydetails.packagedetails.map((item:any, index:number) => (
                        <div
                            style={{
                                backgroundImage: index == 3 ? `url("/images/ourapproach.jpg")` : "",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            className={`flex flex-col gap-2 md:gap-[10px] ${index < 2 ? "border-b-[1px] border-black/10" : ""} p-4 md:p-[30px] py-[15px] md:py-[50px] ${index % 2 == 0 ? "md:border-r-[1px]" : ""} ${index == 3 ? "hidden md:flex" : ""}`}
                            key={index}
                        >
                            {index == 3
                                ? ""
                                : (
                                    <>
                                        <Image src={item.src} alt={item.title} width={50} height={50} className="" />
                                        <h1 className="text-[16px] md:text-[20px] font-semibold">{item.title}</h1>
                                        <p className="text-[14px] md:text-[16px] w-[90%] md:w-[75%] text-black/50">{item.description}</p>
                                    </>
                                )
                            }
                        </div>  
                    ))
                }
            </div>
        </div>
    );
};

export default Corestrength;