"use client"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import YellowButton from "./Yellowbutton"
import Faqquestion from "./Faqquestions"

// Define proper TypeScript interfaces
interface FAQItem {
  question: string
  answer: string
  icon?:React.ReactElement
}



interface HaveaquestionProps {
  faqs?: FAQItem[]
}



const Haveaquestion = ({ faqs }: HaveaquestionProps) => {
  // Default FAQ data if none provided
  const defaultFaqs: FAQItem[] =  [
    {
      question:"What industries do you serve?",
      answer:"We cater to food processing units, retail distributors, hotel and catering businesses (HORECA), and global exporters across the pulse and grain industry."
    },
    {
      question:"Do you provide private label packaging?",
      answer:"Yes, RC Pulses offers customized bulk and retail private label packaging solutions tailored for regional and international markets."
    },
    {
      question:"Are your products export-compliant?",
      answer:"Absolutely. All our pulses are processed under certifications like FSSAI, APEDA, and USFDA norms, meeting major global quality standards."
    }
    ,
    {
      question:"Can I source multiple product variants in one shipment?",
      answer:"Yes, we provide flexible order configurations, allowing mixed product loads across all SKUs — from Orid Gota to Polished Chilka Dal."
    },
    {
      question:"How to reach out to RC Pulses?",
      answer:"You can easily reach RC Pulses through our website’s contact section, or connect with us directly at +91 9425326237 / 7271271236. You may also visit our of9ice at Moghat Road, Khandwa, or our factory at Mokalgaon Road, Dondwada, Khandwa."
    }
  ]

  // Use provided faqs or default to our predefined ones
  const faqData = faqs || defaultFaqs
  const [selectedindex, setSelectedindex] = useState(-1)

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-[30px] px-4 md:px-[60px] py-6 md:py-[60px] bg-[#F9F9F9] text-black">
      <div className="flex flex-col gap-4 md:gap-[30px]" >
        <div className="flex flex-col ">
          <h1 className="text-[24px] md:text-[48px]/[60px]">Have a <span className="yellounderline">Question?</span> </h1>
          <h1 className="text-[24px] md:text-[48px]/[60px]"> We are here to help.</h1>
          
        </div>
        <p className="w-full md:w-[85%] text-[15px] md:text-base">From product sourcing to international delivery, RC Pulses is committed to offering full support to every customer. Whether you're a wholesaler, exporter, or retail brand — we've got answers for you.</p>
        <YellowButton text="Contact Us" link="/contactus"/>
      </div>
      <div className="flex flex-col gap-4 md:gap-[30px]">
        <div className="flex flex-col gap-3 md:gap-[20px]">
          {
            faqData.map((faq: FAQItem, index: number) => (
              <Faqquestion 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                selectedindex={selectedindex} 
                index={index} 
                icon={faq.icon}
                setSelectedindex={setSelectedindex}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Haveaquestion 