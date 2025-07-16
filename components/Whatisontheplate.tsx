import Image from "next/image";
import { JSX } from "react";

const Whatisontheplate = ({title,description,bulletpoints,images,formachines}:{title:JSX.Element,description:string,bulletpoints:any[],images:any[],formachines:boolean}) =>
    {
      return (
        <div className="flex flex-col gap-[30px] p-[60px]">
          {title}
          <p>{description}</p>
          <div className={`grid ${formachines ? "grid-cols-3" : "grid-cols-4"} gap-[30px]`}>
              {
                  bulletpoints.map((item,index)=>(
                      <div  className="flex items-center gap-[10px]" key={index}>
                          <Image src={item.icon} alt={item.title} width={30} height={30} />
                          <h1>{item.title}</h1>
                      </div>
                  ))
              }
          </div>
          <div className={`grid  ${formachines?"grid-cols-2":"grid-cols-3"} gap-[20px] mt-3`}>
              {
                  images.map((item,index)=>(
                      <Image src={item.src} alt={item.alt} width={407} height={394}  className="max-h-[394px] w-full rounded-[10px]"/>
                  ))
              }
          </div>
        </div>
      )
    }

    export default Whatisontheplate;