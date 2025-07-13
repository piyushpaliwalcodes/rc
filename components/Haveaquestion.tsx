"use client"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"



const Faqquestion = ({question, answer,selectedindex,index,setSelectedindex}: {question: string, answer: string,selectedindex: number,index: number,setSelectedindex: (index: number) => void}) =>
{
    return (
        <div className="flex flex-col gap-[10px] pt-[20px] border-t border-gray-300">
        <div className="flex justify-between items-center">
          <h1 className="text-[24px]/[30px]">{question}</h1>
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
          <p className="mt-2">{answer}</p>
        </div>
      </div>
      
    )
}

const Haveaquestion = () =>
{

    const faqquestions = [
        {
            question: "What industries do you serve?",
            answer: "With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries."
        },
        {
            question: "What industries do you serve?",
            answer: "With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries."
        },
        {
            question: "What industries do you serve?",
            answer: "With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries."
        },
        
    ]

    const [selectedindex,setSelectedindex] = useState(-1);
    return (
        <div className="grid grid-cols-[40fr_50fr] gap-[30px] px-[60px] py-[60px] bg-[#F9F9F9]">
            <div className="flex flex-col gap-[30px]" >
                <div className="flex flex-col ">
                <h1 className="text-[48px]/[60px]">Have a Question? </h1>
                <h1 className="text-[48px]/[60px]"> We are here to answer.</h1>
                </div>
                <p className="w-[85%]">With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries.</p>
            </div>
            <div className="flex flex-col gap-[30px]">
                <h1 className="text-[24px]/[30px] font-bold">What industries do you serve?</h1>
                <p>With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries.</p>
                <div className="flex flex-col gap-[20px]">
                {
                    faqquestions.map((question,index) => (
                        <Faqquestion key={index} question={question.question} answer={question.answer} selectedindex={selectedindex} index={index} setSelectedindex={setSelectedindex}/>
                    ))
                }
                </div>
               
            </div>
        </div>
    )
}

export default Haveaquestion;