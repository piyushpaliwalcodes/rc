

export const Valuecard = ({ value }:any) =>
{
    return <div className="flex gap-[20px] md:gap-[30px] items-start md:items-center">
    <img src={value?.image} alt={value?.heading || "icon"} className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"/>
    <div className="flex flex-col gap-[5px] w-[85%] md:w-[80%]">
        <h1 className="text-[16px] md:text-[18px] font-semibold">{value?.heading}</h1>
        <p className="text-[14px] md:text-[18px]">{value?.descr}</p>
    </div>

</div>
}

const Ourcorevalue = () =>
{
    const values = [
        {
            image:"/images/cbulb.png",
            heading:"Legacy of Four Generations: ",
            descr:"Carrying forward a century-old journey in pulses, blending tradition with modern agro-processing excellence."
        },
        {
            image:"/images/cthunder.png",
            heading:"Purity in Every Grain:",
            descr:"Direct farmer sourcing, advanced processing, and world-class packaging to ensure consistent quality and taste."
        },
        {
            image:"/images/clamp.png",
            heading:"Global Trust, Indian Roots:",
            descr:"From India’s kitchens to international markets, we stand for integrity, sustainability, and reliability."
        }
    ]
    return <div className="flex flex-col md:flex-row gap-[24px] md:gap-[30px] justify-between px-4 md:px-[60px] py-6 md:py-[60px] bg-[#F9F9F9] text-black items-start md:items-center">
        <div className="flex flex-col w-full md:w-[55%] gap-[20px] md:gap-[30px] order-1 md:order-none">
        <h1 className="text-[28px] md:text-[44px]">Our Core <span className="font-bold">Value</span></h1>
        
        <p className="text-[16px] md:text-[20px]">Our values define who we are and guide every decision we make:</p>
        <div className="flex flex-col gap-[24px] md:gap-[40px]">
        {
            values.map((value)=>
            (
               <Valuecard key={value.heading} value={value}/>
            ))
        }
        </div>
        
        </div>
        <img src="/images/corevalue.png" alt="Our core values illustration" className="w-full md:w-[45%] max-h-[700px] object-cover mt-4 md:mt-0"/>

    </div>
}


export default Ourcorevalue;