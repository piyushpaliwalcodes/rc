import Herowithnav from "@/components/Herowithnav";
import Ourapproach from "@/components/Ourapproach";
import Howweachieve from "@/components/Howweachieve";
import Whychooseus from "@/components/Whychooseus";
import Meetourteam from "@/components/Meetourteam";
import Withtractor from "@/components/Withtractor";
import Partners from "@/components/Partners";

const Aboutus = () => {
    return (
        <div className="flex flex-col bg-white">
            <Herowithnav />
            <Howweachieve/>
            <Whychooseus/>
            <Meetourteam/>
            <Ourapproach />
            <Withtractor/>
            <Partners/>
        </div>
    )
}

export default Aboutus;