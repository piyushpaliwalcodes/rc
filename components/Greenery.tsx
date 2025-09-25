import YellowButton from "./Yellowbutton";

const Greenery = () => {        
    return (
        <div className="relative flex flex-col p-4 py-8 md:p-[60px] md:h-[800px] min-h-[480px] items-center md:items-end justify-center" style={{backgroundImage: "url('/images/greenery.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 via-black/60 to-black/70"/>
            <div className="flex flex-col gap-4 md:gap-[40px] w-full md:w-[50%] text-white z-10 text-center md:text-left">
                <h1 className="text-[22px]/[30px] sm:text-[24px]/[34px] md:text-[50px]/[60px] font-semibold">Smart and Sustainable Agriculture for a Healthier Tomorrow</h1>
                <p className="text-[12px]/[22px] md:text-[16px]/[25px]">At RC Pulses, sustainability isn’t just a choice — it’s at the core of everything we do. Our agricultural practices are driven by innovation, transparency, and a commitment to environmental responsibility. From precision farming techniques to optimized water usage and soil health management, we work hand-in-hand with farmers to build a greener supply chain — one that supports both people and the planet.</p>
                <p className="text-[12px]/[22px] md:text-base">With a growing network of 200,000+ retail outlets and 65+ active branches, RC Pulses is not just a manufacturer — we are a future-focused, eco-conscious food brand empowering better nutrition through sustainable dal production.</p>
                <YellowButton text='Sustainability Report' link='/sustainability' className="gap-2 w-full sm:w-auto sm:min-w-[250px]"/>
            </div>
        </div>
    )
}

export default Greenery;