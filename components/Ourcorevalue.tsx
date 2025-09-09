



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
    return <div className="flex gap-[30px] justify-between  px-4 md:px-[60px] py-6 md:py-[60px] bg-[#F9F9F9] text-black items-center">
        <div className="flex flex-col w-[45%] gap-[30px]">
        <h1 className="text-[44px]">Our Core <span className="font-bold">Value</span></h1>
        
        <p className="text-[24px]">Our values define who we are and guide every decision we make:</p>
        <div className="flex flex-col gap-[40px]">
        {
            values.map((value)=>
            (
                <div className="flex gap-[30px] items-center">
                    <img src={value.image} className="w-[48px] h-[48px]"/>
                    <div className="flex flex-col gap-[5px] w-[80%]">
                        <h1 className="text-[18px] font-semibold">{value.heading}</h1>
                        <p className="text-[18px]">{value.descr}</p>
                    </div>
                </div>
            ))
        }
        </div>
        
        {}</div>
        <img src="/images/corevalue.png" className="w-[40%]"/>

    </div>
}


export default Ourcorevalue;