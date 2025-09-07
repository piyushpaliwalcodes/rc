

const Achieveitem = ({imagesrc,title,description}:any) =>
{
    return <div className="flex flex-col gap-[10px] md:gap-[15px] items-center min-w-[160px] md:min-w-[0]">
          <img height={"70px"} width={"70px"} src={imagesrc} />
          <p className="text-[24px] md:text-[40px] font-bold ">{title}</p>
         
          <p className="max-w-[90%] md:max-w-[60%] font-bold text-[#464646] text-center text-[14px] md:text-base tracking-widest">{description}</p>
    </div>
}

const Howweachieve = () =>
{
    const highlightsdata = [
        {
            imagesrc:"/images/a1.png",
            title:"40000+ ",
            description:"SQUARE FEET-AREA",
        }
        ,
        {
            imagesrc:"/images/a2.png",
            title:"40+ ",
            description:"TRUSTED PARTNERS",
        },
        {
            imagesrc:"/images/a3.png",
            title:"5-6K ",
            description:"QUINTALS/MONTH GOODS HANDLING",
        },
        {
            imagesrc:"/images/a4.png",
            title:"50+ ",
            description:"CRORE INR TURNOVER",
        },
        {
            imagesrc:"/images/a5.png",
            title:"30+ ",
            description:"TEAM MEMBERS",
        }
    ]
return (
    <div className='w-full max-w-full px-4 md:px-8 lg:px-[60px] py-6 md:py-[60px] bg-[#F9F9F9] text-black bg-[#FFFCE8]'>
         <div className="flex flex-col gap-4 md:gap-[20px]">
                <p className="text-[16px] md:text-[20px] font-bold opacity-[30%]">HOW WE ACHIEVE</p>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-[100px] items-end">
                    <p className="text-[22px] md:text-[32px] lg:text-[40px]/[50px] min-w-0 lg:min-w-[400px]">  <span className="font-bold">Driven by Systems</span> <br/>
                    Sustained by People.</p>
                    <div className="text-[14px] md:text-[18px] text-[#464646] ">
                    At RC Pulses, our growth is built on more than numbers — it’s built on clarity, consistency, and collective effort. Every part of our ecosystem works in sync: from sourcing the best-quality pulses to processing them through precise, tech-enabled workflows. Behind every metric lies a team, a method, and a commitment to improve each day. That’s how we achieve — together.
                    </div>
                </div>
            <div className="flex overflow-x-auto md:overflow-x-visible justify-start md:justify-around pt-8 md:pt-[60px] gap-4 md:gap-0">
                { highlightsdata.map((item,index)=>(
                    <Achieveitem {...item} key={index}/>
                ))}
            </div>     
        </div>
    </div>
)
}

export default Howweachieve;