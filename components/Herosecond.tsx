import { JSX } from "react";

const Herosecond = ({title}:{title:string}) =>
{
    return (
        <div className="flex flex-col gap-[10px] justify-center items-start p-[60px] h-[529px] relative" style={{backgroundImage: "url('/images/productsbg.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/20 flex flex-col gap-[10px] justify-center items-start p-[60px]">
            <h1 className="text-[70px]/[80px] text-white">{title}</h1>
            <p className="text-[20px] flex gap-[10px] text-white pl-2">Home <ul className="flex gap-[10px] list-disc list-inside text-[#FCD900]"><li className="">Our Products</li></ul></p>
            </div>
        </div>
    )
}

export default Herosecond;