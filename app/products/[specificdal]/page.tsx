"use client";

import { JSX, useState } from "react";






 const Specificdal = ({params}:{params:any}) =>
{
  
  

    const [selectedStep, setSelectedStep] = useState(0);

    return (
        <div className="flex flex-col bg-white text-black gap-4 md:gap-0">
           <div className={`flex f gap-[10px] border-b-[1px] border-black/20  py-[15px] md:py-[30px]   `}>
           <div></div>
           <div className="flex flex-col"></div>
           </div>
        </div>
    )
}

export default Specificdal;