import Herowithnav from "@/components/Herowithnav";
import Ourapproach from "@/components/Ourapproach";
import Howweachieve from "@/components/Howweachieve";
import Whychooseus from "@/components/Whychooseus";
import Meetourteam from "@/components/Meetourteam";
import Withtractor from "@/components/Withtractor";
import Partners from "@/components/Partners";
import Twentyfiveplus from "@/components/Twentyfiveplus";
import Aleadingbrand from "@/components/Aleadingbrand";
import Ourcorevalue from "@/components/Ourcorevalue";
import Legacyoftrust from "@/components/Legacyoftrust";
import Ourclientsay from "@/components/Ourclientsay";
import Momstrusted from "@/components/Momstrusted";
import YellowButton from "@/components/Yellowbutton";


const Aboutus = () => {
    return (
        <div className="flex flex-col bg-white">
            {/* <Herowithnav /> */}
            <Aleadingbrand/>
            <img className="w-full h-[720px]" src="/images/machinewithmala.png"/>
            <Ourcorevalue/>
            <Legacyoftrust/>
            <Whychooseus showimage={false}/>
            <Ourclientsay/>
            <Momstrusted/>
            <div className="flex flex-col p-4 py-6 md:p-[60px] gap-6 md:gap-[30px] text-black max-w-full items-center">
                <h1 className="text-[40px]">Smart and <span className="font-semibold">Sustainable Agriculture</span> for a Healthier Tomorrow</h1>
                <p className="w-[75%] text-center ">At RC Pulses, sustainability isn’t just a choice — it’s at the core of everything we do. Our agricultural practices are driven by innovation, transparency, and a commitment to environmental responsibility. From precision farming techniques to optimized water usage and soil health management, we work hand-in-hand with farmers to build a greener supply chain — one that supports both people and the planet.</p>
                <YellowButton className="min-w-[250px]" text="Sustainability Report" link="/sustainability"/>
                </div>
            

            {/* <Twentyfiveplus/>
            <Howweachieve/>
            <Ourapproach />
            
            <Partners/>
            <Meetourteam/>
            <Withtractor/> */}
            
        </div>
    )
}

export default Aboutus;