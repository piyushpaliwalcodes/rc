import { Valuecard } from "./Ourcorevalue";


const Contributing = () =>
{

    const values = [
        {
            image:"/images/cbulb.png",
            heading:"Empowering Farmers",
            descr:"We work directly with farmers to provide training in eco-friendly farming methods, fair pricing, and access to better resources. This not only improves crop quality but also uplifts rural livelihoods."
        },
        {
            image:"/images/clamp.png",
            heading:"Green Processing",
            descr:"Our processing units adopt energy-efficient technologies, water recycling systems, and minimal waste practices. Every grain is handled with care to reduce carbon footprint and promote a sustainable green future."
        }
    ]

    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-[30px] px-4 md:px-[60px] py-6 md:py-[60px] bg-[#F9F9F9] text-black">
            <div className="flex flex-col gap-[30px] w-full md:w-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-[45px] leading-tight">
                We at RC Pulses:<br/> 
                <span className="font-bold">Contributing to Sustainability</span>
                </h1>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-base md:text-lg">At RC Pulses, sustainability is more than a promise.</h1>
                    <p className="text-justify text-sm md:text-base">it is our responsibility to future generations. From farm to factory, we ensure that every step of our journey is designed to protect the environment, empower farmers, and deliver healthier grains to households worldwide.</p>
                  
                   
                </div>
                <div className="flex flex-col gap-[30px]">
                    {values.map((value)=>(
                        <Valuecard key={value.heading} value={value}/>
                    ))
                }
                    </div>
            </div>
            <img src="/sustainable/collage.png" alt="Sustainability collage" className="w-full md:w-1/2 max-w-[600px] h-auto mt-6 md:mt-0 self-center md:self-auto" />
        </div>
    )
}


export default Contributing;