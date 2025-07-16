import Herowithnav from "@/components/Herowithnav";
import Ourprocess from "@/components/Ourprocess";
import Greenery from "@/components/Greenery";
import Haveaquestion from "@/components/Haveaquestion";
import Withtractor from "@/components/Withtractor";

const Sustainability = () => {      
    return (
        <div className="flex flex-col bg-white text-white">
            <Herowithnav title="Smart and Innovative Manufacturing Process for the Sustainability and Green Future." description="With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries. With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries."/>
            <Ourprocess/>
            <Greenery/>
            <Haveaquestion/>
            <Withtractor/>
        </div>
    )
}

export default Sustainability;