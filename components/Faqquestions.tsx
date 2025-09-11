import { FaPlus } from "react-icons/fa";
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
    setSelectedindex: (index: number) => void
  }
  
  interface HaveaquestionProps {
    faqs?: FAQItem[]
  }
  

const Faqquestion = ({ question, answer, selectedindex, index, setSelectedindex }: FaqquestionProps) => {
    return (
      <div className="flex flex-col gap-2 md:gap-[10px] pt-4 md:pt-[20px] border-t border-gray-300">
        <div className="flex justify-between items-center hover:cursor-pointer" onClick={() => setSelectedindex(selectedindex === index ? -1 : index)}>
          <h1 className="text-[18px] md:text-[24px]/[30px] hover:cursor-pointer" >{question}</h1>
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