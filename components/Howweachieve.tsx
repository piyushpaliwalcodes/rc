

const Achieveitem = ({imagesrc,title,description}:any) =>
{
    return <div className="flex flex-col gap-[15px]">
          <img height={"60px"} width={"60px"} src={imagesrc} />
          <p className="text-[40px] font-bold">{title}</p>
         
          <p className="max-w-[60%] font-bold text-[#464646]">{description}</p>
          

          
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
            title:"40+ ",
            description:"TRUSTED MEMBERS",
        },
        {
            imagesrc:"/images/group.png",
            title:"40+ ",
            description:"TRUSTED MEMBERS",
        },
        {
            imagesrc:"/images/peoples.png",
            title:"40+ ",
            description:"TRUSTED MEMBERS",
        }
    ]
return (
    <div className='w-full px-[60px] flex  py-[60px] bg-[#F9F9F9]'>
         <div className="flex flex-col gap-[20px]">

            
                <p className="text-[16px] font-bold opacity-[30%]">HOW WE ACHIEVE</p>
                <div className="flex gap-[150px]"><p className="text-[40px]/[50px] min-w-[600px]">The Relentless Efforts And Achievements Of Our Farmers</p><div className="text-[18px] text-[#464646]">
            For almost 5 decades, the RC has dominated the integrated supply chain industry. Headquartered in Khandwa, Madhya Pradesh, India, we redefine supply chain management with precision, efficiency, and innovation. Our relentless commitment to excellence promises solutions.
            </div></div>
                
            
            <div className="flex justify-around pt-[60px]">
                { highlightsdata.map((item,index)=>
                (
                    <Achieveitem {...item} key={index}/>
                ))
     
}</div>     
        </div>
        
    </div>
    
   
   
)

}

export default Howweachieve;