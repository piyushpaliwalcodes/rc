"use client"

import { useEffect, useState } from 'react'



const Steps = ({text,isselected}:any) =>
{
  return <div  className={`${isselected?"bg-[#FCD900]":"bg-[#FBF9F4] border border-[#969393]/40"} text-wrap font-semibold relative overflow-hidden text-black w-full text-center py-[12px] md:py-[20px] flex items-center justify-between rounded-[4px] transition-all duration-300 z-10`}>
  {isselected && (
      <span className="pointer-events-none absolute inset-0 rounded-[4px] overflow-hidden">
        <span className="absolute -inset-x-2 -inset-y-6 opacity-80 [background:radial-gradient(75%_55%_at_50%_30%,_rgba(255,255,255,0.95),_rgba(255,255,255,0)_60%)] [animation:sweep_2.6s_linear_infinite]" />
        <span className="absolute -inset-x-2 -inset-y-6 opacity-50 [background:radial-gradient(75%_55%_at_50%_30%,_rgba(255,255,255,0.85),_rgba(255,255,255,0)_60%)] [animation:sweep_2.6s_linear_infinite] [animation-delay:700ms]" />
      </span>
  )}
  <p className="relative z-10 w-full text-[10px] md:text-sm lg:text-base  text-center px-1 md:px-2">{text}</p>
  
</div>
}
export default function VideoPlayer() {
  const [isMuted, setIsMuted] = useState(true)
  const [selectestep,setSelectedStep] = useState(0);

  const toggleMute = () => {
    const iframe = document.getElementById('vimeo-player') as HTMLIFrameElement
    if (iframe && iframe.contentWindow) {
      // Toggle mute state
      setIsMuted(!isMuted)
      // Send message to Vimeo player
      iframe.contentWindow.postMessage(
        `{"method":"setVolume","value":${isMuted ? 1 : 0}}`, 
        '*'
      )
    }
  }

  const stepscontent = [
    "01 Cleaning and Draining","02 De-husking & splitting","03 Polishing & Sorting","04 Packaging & Dispatching"
  ]

  // Auto-advance selected step every ~40 seconds
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSelectedStep((prev) => (prev + 1) % stepscontent.length)
    }, 43000)
    return () => window.clearInterval(intervalId)
  }, [stepscontent.length])

  return (
    <div className="relative flex flex-col gap-[20px] md:gap-[60px] w-full px-4 md:px-[60px] py-[30px] md:py-[60px] bg-[#FBF9F4]">
      {/* 
        The iframe is not taking full width because:
        - "min-w-full" only sets the minimum width, not the actual width.
        - "h-full" requires a parent with explicit height, which may not be set.
        - By default, iframes are inline and need "w-full" for width: 100%.
        - For responsive aspect ratio, wrap in a container with aspect-[16/9] or similar.
      */}
      <div className="flex flex-col gap-3 md:gap-[20px] items-center  text-center md:items-start md:text-left w-full" >
                    <h1 className="text-[16px] md:text-[20px] text-black/60 tracking-widest font-bold">OUR PROCESS</h1>
                    <p className="text-[18px] md:text-[48px]/[60px] w-full md:w-[70%]">Streamlined process for <span className="yellounderline font-bold">Optimal efficiency</span></p>
                </div>
      <div className="w-full aspect-video relative bg-black overflow-hidden rounded-[8px]">
        <iframe
          id="vimeo-player"
          src="https://player.vimeo.com/video/1114819389?autoplay=1&muted=1&loop=1&controls=0&background=1"
          className="w-full h-full absolute top-0 left-0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="RC Company Video"
        />
        {/* Custom Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.31-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.31-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>
      </div>
      <div className="flex gap-2 md:gap-0 md:justify-between relative items-center">
        {stepscontent.map((step,index)=>(
          <Steps key={step} text={step} isselected={selectestep==index}/>
        ))}
        <hr className="hidden md:block absolute top-1/2 border-t border-[2px] w-full border-dotted border-gray-400 z-0" />
      </div>
      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
      
      
    </div>
  )
}