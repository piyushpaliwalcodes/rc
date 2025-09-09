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

const Aboutus = () => {
    return (
        <div className="flex flex-col bg-white">
            {/* <Herowithnav /> */}
            <Aleadingbrand/>
            <img className="w-full h-[720px]" src="/images/machinewithmala.png"/>
            <Ourcorevalue/>
            <Legacyoftrust/>
            <Twentyfiveplus/>
            <Howweachieve/>
            <Ourapproach />
            <Whychooseus/>
            <Partners/>
            <Meetourteam/>
            <Withtractor/>
            
        </div>
    )
}

export default Aboutus;