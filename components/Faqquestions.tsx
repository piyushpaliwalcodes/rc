import { ReactElement } from "react";
import { FaPlus } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { TbListDetails } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCookingPotLight } from "react-icons/pi";

// Define proper TypeScript interfaces
interface FAQItem {
    question: string
    answer: string
  }
  
  interface FaqquestionProps {
    question: string
    answer?: string|string[]
    selectedindex: number
    index: number
    icon?:React.ReactElement
    setSelectedindex: (index: number) => void
  }
  
  interface HaveaquestionProps {
    faqs?: FAQItem[]
  }
  

const Faqquestion = ({ question,icon, answer, selectedindex, index, setSelectedindex }: FaqquestionProps) => {
    return (
      <div className={`flex flex-col gap-2 md:gap-[10px] pt-4 md:pt-[20px] ${index==0?"":"border-t border-gray-300"} `}>
        <div className="flex justify-between items-center hover:cursor-pointer" onClick={() => setSelectedindex(selectedindex === index ? -1 : index)}>
          <div className=" flex gap-2 items-center text-[18px] md:text-[24px]/[30px] hover:cursor-pointer" >{icon} <span className={`${selectedindex === index ? "font-semibold" : ""}`}>{question}</span></div>
          <FaPlus
            className={`cursor-pointer transition-transform duration-300 ${
              selectedindex === index ? "rotate-45" : ""
            }`}
            onClick={() => setSelectedindex(selectedindex === index ? -1 : index)}
          />
        </div>
      
        <div
          className={`overflow-hidden transition-all duration-300  ${
            selectedindex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {Array.isArray(answer) ? (
            <ul className="list-disc pl-5 space-y-1 mt-2">
              {answer.map((item, i) => (
                <li key={i} className="text-[15px] md:text-base">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-[15px] md:text-base">{answer}</p>
          )}
        </div>
      </div>
    )
  }

  export default Faqquestion;