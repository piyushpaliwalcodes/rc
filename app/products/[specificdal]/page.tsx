"use client";

import { JSX, useState } from "react";

import Whychooseus from "@/components/Whychooseus";
import Whatwemanufacture from "@/components/Whatwemanufacture";




 const Specificdal = ({params}:{params:any}) =>
{
  
  

    const [selectedStep, setSelectedStep] = useState(0);

    return (
        <div className="flex flex-col bg-white text-black gap-4 md:gap-0">
           <Whychooseus showimage={false} yellowbg={true}/>
           <Whatwemanufacture/>
        </div>
    )
}

export default Specificdal;