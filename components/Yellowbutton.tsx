import { FaArrowRight } from "react-icons/fa";

const YellowButton = ({text, link,className}: {text: string, link: string,className?: string}) => {
  return (
    <div className={`bg-[#FCD900] text-black w-[220px] px-[30px] py-[10px] flex items-center justify-between rounded-[4px] hover:cursor-pointer hover:bg-[#fcd900c2] transition-all duration-300 ${className}`}>
        <a href={link}>{text}</a>
        <FaArrowRight className='text-black'/>
    </div>
  )
}

export default YellowButton