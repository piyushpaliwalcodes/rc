"use client"

import { Valuecard } from "./Ourcorevalue"

const Scanqr = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 bg-primary-yellow  min-w-1/2 items-center px-4 py-[30px] relative">
           
           <img src="/images/qualityqr.png" alt="qr" className="w-full md:w-[149px] h-full" />
           <div className="flex flex-col gap-4 justify-between h-full w-1/2">
  <div className="gap-2 flex flex-col"><h1 className="text-[24px] md:text-[32px]/[32px]"><span className="font-bold">Scan QR </span>for Quality Reports</h1>
  <p className="text-xs">Know the safety standards followed by RC Mills</p></div>
  <p className="uppercase text-sm">*Get lab tested qulaity reports</p>
           </div>
           <img src="/images/motherson.png" alt="qr" className="absolute bottom-0 right-0 w-[250px] h-auto aspect-original" />

        </div>
    )
}




const Momstrusted = () => { 
   const values = [
    {
        image:"/images/cbulb.png",
        heading:"Lab-Certified Purity",
        descr:"Every batch tested for safety, hygiene, and nutrition."
    },
    {
        image:"/images/cthunder.png",
        heading:"Trusted by Moms",
        descr:"Generations of families rely on RC Mills for authentic taste."
    },
    {
        image:"/images/clamp.png",
        heading:"Farm-to-Table Freshness",
        descr:"Direct sourcing, advanced processing, and secure packaging."
    }
   ]
    return (
            <div className="flex flex-col p-4 py-6 md:p-[60px] gap-6 md:gap-[60px] text-black max-w-full bg-[#FFFCE8]">
            <div className="flex flex-col gap-4 md:gap-[20px]">
                <p className="text-[16px] md:text-[20px] font-bold text-black/30">WHY ALL MOM'S PREFER RC</p>
                <div className="flex gap-4 md:gap-[20px]">
                    <div className="flex flex-col gap-4 md:gap-[20px]">
                        <h1 className="text-[24px] md:text-[48px]/[60px]">Trusted by <span className="yellounderline">generations</span> of families</h1>
                <p className="text-[15px] md:text-[16px] text-black/70 w-full md:w-[80%]">
                    RC Dal has been the preferred choice for families across India, delivering consistent quality, 
                    nutritional value, and trust that mothers can rely on for their family's health and well-being.
                </p></div>
                <Scanqr/>
                </div>
                
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[30px]">
                {values.map((item,index)=>(
                    <Valuecard value={item}/>
                ))}
                
                
                
            </div>
        </div>
    )
}

export default Momstrusted;