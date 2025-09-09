import Herowithnav from "@/components/Herowithnav";
import Ourprocess from "@/components/Ourprocess";
import Greenery from "@/components/Greenery";
import Haveaquestion from "@/components/Haveaquestion";
import Withtractor from "@/components/Withtractor";
import Corestrength from "@/components/Corestrength";

const Sustainability = () => {     
    
    
    const sustainabilitydetails = {
        
        packagedetails: [
            {
                src:"/images/tower.png",
                title:"Quality Assurance",
                description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
            },
            {
                src:"/images/plant.png",
                title:"Quality Assurance",
                description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
            },
            {
                src:"/images/bottles.png",
                title:"Quality Assurance",
                description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
            },
            {
                src:"/images/factory.png",
                title:"Quality Assurance",
                description:"Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery."
            },
          
         ]
       }
    
    return (
        <div className="flex flex-col bg-white text-white">
           
            <Haveaquestion/>
          
        </div>
    )
}

export default Sustainability;