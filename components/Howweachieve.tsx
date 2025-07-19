

const Achieveitem = ({imagesrc,title,description}:any) =>
{
    return <div className="flex flex-col gap-[10px] md:gap-[15px] items-center min-w-[160px] md:min-w-[0]">
          <img height={"60px"} width={"60px"} src={imagesrc} />
          <p className="text-[24px] md:text-[40px] font-bold">{title}</p>
         
          <p className="max-w-[90%] md:max-w-[60%] font-bold text-[#464646] text-center text-[14px] md:text-base">{description}</p>
    </div>
}

const Howweachieve = () =>
{
    const highlightsdata = [
        {
            imagesrc:"/images/partner.png",
            title:"40+ ",
            description:"TRUSTED MEMBERS",
        }
        ,
        {
            imagesrc:"/images/cash.png",
            title:"40+ ",
            description:"TRUSTED MEMBERS",
        },
        {
            imagesrc:"/images/peoples.png",
            title:"3800+ ",
            description:"MT/MONTHS GOOD HANDLING",
        },
        {
            imagesrc:"/images/group.png",
            title:"2800+ ",
            description:"CRORE INR TURNOVER",
        },
        {
            imagesrc:"/images/peoples.png",
            title:"40+ ",
            description:"TRUSTED MEMBERS",
        }
    ]
return (
    <div className='w-full max-w-full px-4 md:px-8 lg:px-[60px] py-6 md:py-[60px] bg-[#F9F9F9] text-black'>
         <div className="flex flex-col gap-4 md:gap-[20px]">
                <p className="text-[16px] md:text-[20px] font-bold opacity-[30%]">HOW WE ACHIEVE</p>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-[150px]">
                    <p className="text-[22px] md:text-[32px] lg:text-[40px]/[50px] min-w-0 lg:min-w-[600px]">The Relentless Efforts And <span className="yellounderline">Achievements</span> Of Our Farmers</p>
                    <div className="text-[14px] md:text-[18px] text-[#464646]">
                        For almost 5 decades, the RC has dominated the integrated supply chain industry. Headquartered in Khandwa, Madhya Pradesh, India, we redefine supply chain management with precision, efficiency, and innovation. Our relentless commitment to excellence promises solutions.
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