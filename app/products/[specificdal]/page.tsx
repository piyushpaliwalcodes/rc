import Herosecond from "@/components/Herosecond";
import Ourclientsay from "@/components/Ourclientsay";
import Whatwemanufacture from "@/components/Whatwemanufacture";
import Image from "next/image";
import Productdetails from "@/components/Productdetails";
import { JSX } from "react";


const Chooseuscard = ({src, title, description,index}: {src: string, title: string, description: string,index:number}) =>
    {
        return (
            <div className={`flex flex-col gap-[10px] border-b-[1px] border-black/20  py-[30px]   `}>
                <Image src={src} alt={title} width={50} height={50} />
                <h1 className="text-[20px] font-semibold">{title}</h1>
                <p className="text-[16px] w-[75%]">{description}</p>
            </div>
        )
    }



    const Howwepackagedetails = ({title,packagedetails,description}:{title:JSX.Element,packagedetails:any[],description:string}) =>
    {
        return (
            <div className="flex flex-col gap-[30px] p-[60px]">
                {title}
                <p className="text-[16px]">{description}</p>
                <div className="grid grid-cols-2 gap-[80px] ">
                    {
                        packagedetails.map((item, index) => (
                            <Chooseuscard key={index} {...item} index={index} />
                        ))
                    }
                </div>
            </div>
        )
    }


  const Whatisontheplate = ({title,description,bulletpoints,images}:{title:JSX.Element,description:string,bulletpoints:any[],images:any[]}) =>
  {
    return (
      <div className="flex flex-col gap-[30px] p-[60px]">
        {title}
        <p>{description}</p>
        <div className="grid grid-cols-4 gap-[30px]">
            {
                bulletpoints.map((item,index)=>(
                    <div  className="flex items-center gap-[10px]" key={index}>
                        <Image src={item.icon} alt={item.title} width={30} height={30} />
                        <h1>{item.title}</h1>
                    </div>
                ))
            }
        </div>
        <div className="flex gap-[20px] mt-3">
            {
                images.map((item,index)=>(
                    <Image src={item.src} alt={item.alt} width={407} height={394}  className="max-h-[394px] rounded-[10px]"/>
                ))
            }
        </div>
      </div>
    )
  }






 const Specificdal = () =>
{



    const whatisontheplatedetails = {
        title:<h1 className="text-[48px]/[60px]">What is on the <span className="font-bold">Plate</span></h1>,
        description:"Our Industrial Automation and Robotics planning and strategy services focus on designing tailored automation solutions that align with your business goals.",
        bulletpoints:[{
                title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        {
            title:"Quality Assurance",
            icon:"/images/setting.png",
        },
        
    ],
    images:[
        {
            src:"/images/dal.png",
            alt:"Quality Assurance",
        },
        {
            src:"/images/dal.png",
            alt:"Quality Assurance",
        },
        {
            src:"/images/dal.png",
            alt:"Quality Assurance",
        },
        
    ]
    }

    const productdetails = {
        paragraphs:["Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.","Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you’re launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise."],
        heroimage:"/images/robot.jpg",
    }

   const howwepackagedetails = {
    title:<h1 className="text-[48px]/[60px]">How we <span className="font-bold">Package</span></h1>,
    description:"Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable, thriving business.",
    packagedetails: [
        {
            src:"/images/tower.png",
            title:"Quality Assurance",
            description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
        },
        {
            src:"/images/plant.png",
            title:"Quality Assurance",
            description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
        },
        {
            src:"/images/bottles.png",
            title:"Quality Assurance",
            description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
        },
        {
            src:"/images/factory.png",
            title:"Quality Assurance",
            description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
        },
      
     ]
   }

    return (
        <div className="flex flex-col bg-white text-black">
            <Herosecond title="Arhar Chilka Dal"/>
            <Productdetails paragraphs={productdetails.paragraphs} heroimage={productdetails.heroimage} />
            <Howwepackagedetails title={howwepackagedetails.title} packagedetails={howwepackagedetails.packagedetails} description={howwepackagedetails.description} />
            <Whatisontheplate {...whatisontheplatedetails}/>
        </div>
    )
}

export default Specificdal;