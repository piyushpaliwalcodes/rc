"use client"
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

const YellowButton = ({text, link,className}: {text: string, link: string,className?: string}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(link)} className={`bg-[#FCD900] text-black w-[160px] md:w-[220px] px-[20px] md:px-[30px] py-[10px] flex items-center justify-between rounded-[4px] hover:cursor-pointer hover:bg-[#fcd900c2] transition-all duration-300 ${className}`}>
        <a className="text-sm md:text-base whitespace-nowrap">{text}</a>
        <FaChevronRight className='text-black'/>
    </div>
  )
}

export default YellowButton