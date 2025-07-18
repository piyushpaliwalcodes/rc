import Image from "next/image";
import { JSX } from "react";

const Whatisontheplate = ({title,description,bulletpoints,images,formachines}:{title:JSX.Element,description:string,bulletpoints:any[],images:any[],formachines:boolean}) =>
    {
      return (
        <div className="flex flex-col gap-4 md:gap-[30px] p-4 md:p-[60px]">
          {title}
          <p className="text-[15px] md:text-base">{description}</p>
          <div className={`grid grid-cols-1 ${formachines ? "md:grid-cols-3" : "md:grid-cols-4"} gap-3 md:gap-[30px]`}>
              {
                  bulletpoints.map((item,index)=>(
                      <div  className="flex items-center gap-2 md:gap-[10px]" key={index}>
                          <Image src={item.icon} alt={item.title} width={30} height={30} />
                          <h1 className="text-[15px] md:text-base">{item.title}</h1>
                      </div>
                  ))
              }
          </div>
          <div className={`grid grid-cols-1 ${formachines?"md:grid-cols-2":"md:grid-cols-3"} gap-2 md:gap-[20px] mt-3`}>
              {
                  images.map((item,index)=>(
                      <Image key={index} src={item.src} alt={item.alt} width={407} height={394}  className="max-h-[180px] md:max-h-[394px] w-full rounded-[10px] object-cover"/>
                  ))
              }
          </div>
        </div>
      )
    }

export default Whatisontheplate;