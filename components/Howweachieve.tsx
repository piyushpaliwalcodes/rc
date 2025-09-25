"use client"
import { highlightsdata } from "./data"
import { useEffect, useMemo, useRef, useState } from "react"
import { animate, useInView } from "framer-motion"

export const Achieveitem = ({imagesrc,title,description}: any) =>
{
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-20% 0px" })

    const { targetValue, suffix, prefix } = useMemo(() => {
        const trimmed = (title ?? "").toString().trim()
        const hasK = /k$/i.test(trimmed.replace(/\s+/g, "")) || /k\b/i.test(trimmed)
        const hasPlus = /\+$/.test(trimmed)
        const suffixStr = `${hasK ? "K" : ""}${hasPlus ? "+" : ""}`
        // Extract last number (handles ranges like 5-6K -> 6)
        const numberMatches = trimmed.match(/([0-9]+(?:\.[0-9]+)?)(?!.*[0-9])/)
        const rawNum = numberMatches ? parseFloat(numberMatches[1]) : 0
        const value = hasK ? Math.round(rawNum * 1000) : Math.round(rawNum)
        return { targetValue: value, suffix: suffixStr, prefix: "" }
    }, [title])

    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (!isInView) return
        const controls = animate(0, targetValue, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: latest => {
                setDisplayValue(Math.floor(latest))
            }
        })
        return () => controls.stop()
    }, [isInView, targetValue])

    const formatted = useMemo(() => {
        // Format with locale separators
        const formattedNumber = new Intl.NumberFormat(undefined).format(displayValue)
        return `${prefix}${formattedNumber}${suffix ? " " + suffix : ""}`
    }, [displayValue, prefix, suffix])

    return <div ref={containerRef} className="flex flex-col gap-[10px] md:gap-[15px] items-center min-w-[160px] md:min-w-[0]">
          <img height={"70px"} width={"70px"} src={imagesrc} />
          <p className="text-[24px] md:text-[40px] font-bold ">{formatted}</p>
          <p className="max-w-[90%] md:max-w-[60%] font-bold text-[#464646] text-center text-[14px] md:text-[15px] tracking-widest">{description}</p>
    </div>
}

const Howweachieve = () =>
{
    
return (
    <div className='w-full max-w-full px-4 md:px-8 lg:px-[60px] py-6 md:py-[80px] md:pb-[120px] bg-[#F9F9F9] text-black bg-[#FFFCE8]'>
         <div className="flex flex-col gap-1 md:gap-[10px]">
                <p className="text-[16px] md:text-[20px] font-bold opacity-[30%]">HOW WE ACHIEVE</p>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-[100px] items-end">
                    <p className="text-[22px] md:text-[32px] lg:text-[40px]/[50px] min-w-0 lg:min-w-[400px]">  <span className="font-bold">Driven by Systems,</span> <br/>
                    Sustained by People.</p>
                    <div className="text-[14px] md:text-[18px] text-[#464646] ">
                    At RC Pulses, our growth is built on more than numbers — it’s built on clarity, consistency, and collective effort. Every part of our ecosystem works in sync: from sourcing the best-quality pulses to processing them through precise, tech-enabled workflows. Behind every metric lies a team, a method, and a commitment to improve each day. That’s how we achieve — together.
                    </div>
                </div>
            <div className="grid grid-cols-5 overflow-x-auto md:overflow-x-visible pt-8 md:pt-[60px] gap-4 md:gap-0">
                { highlightsdata.map((item,index)=>(
                    <Achieveitem {...item} key={index}/>
                ))}
            </div>     
        </div>
    </div>
)
}

export default Howweachieve;