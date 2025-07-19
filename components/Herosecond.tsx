import { JSX } from "react";

const Herosecond = ({title,location,sublevel}:{title:string,location:string,sublevel?:string}) =>
{
    return (
        <div className="flex flex-col gap-2 md:gap-[10px] justify-center items-start p-4 md:p-[60px] h-[220px] md:h-[400px] lg:h-[529px] relative" style={{backgroundImage: "url('/images/productsbg.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/20 flex flex-col gap-2 md:gap-[10px] justify-center items-start p-4 md:p-[60px]">
                <h1 className="text-[28px] md:text-[48px] lg:text-[70px]/[80px] text-white">{title}</h1>
                <p className="text-[14px] md:text-[20px] flex gap-2 md:gap-[10px] text-white pl-1 md:pl-2">Home <ul className="flex gap-2 md:gap-[10px] list-disc list-inside ">{sublevel?<li className="">{sublevel}</li>:null}<li className="text-[#FCD900]">{location}</li></ul></p>
            </div>
        </div>
    )
}

export default Herosecond;