import Herowithnav from "@/components/Herowithnav";
import Ourprocess from "@/components/Ourprocess";
import Greenery from "@/components/Greenery";
import Haveaquestion from "@/components/Haveaquestion";
import Withtractor from "@/components/Withtractor";
import Corestrength from "@/components/Corestrength";
import Contributing from "@/components/Contributing";
import Initiative from "@/components/Initiatives";
import Sustainablegrowth from "@/components/Sustainablegrowth";

const Sustainability = () => {     
    
  const logoimages = ["/sustainable/haccp.png","/sustainable/iso.png","/sustainable/fssai.png",];

    
    return (
        <div className="flex flex-col bg-white text-white">
             <div
               className="h-[350px] flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-[30px] px-4 md:px-[60px] py-6 md:py-[60px] bg-[#F9F9F9] text-black"
               style={{
                 backgroundImage: "url('/sustainable/hero.png')",
                 backgroundSize: "cover",
                 backgroundPosition: "center"
               }}
             >
             <h1 className="text-[40px] max-w-[563px] text-white">Smart and Innovative Manufacturing Process for a <span className="font-bold text-[#FCD900]">Sustainable</span> Green Future.</h1>
             </div>

            <Contributing/>
            <Initiative/>
            <div className="flex flex-col gap-4 min-w-1/2 items-center px-4 md:px-[60px] py-[30px] relative text-black w-full">
            <img src="/sustainable/graph.png" /></div>
            <div className="flex flex-col gap-6 md:gap-[50px] px-4 md:px-[60px] py-6 md:py-[60px]  text-black items-center "></div>
            <Sustainablegrowth withcta={false}/>
            <div className="flex gap-[30px] px-4 md:px-[60px] py-[80px] items-center ">
              <div className="flex flex-col text-black gap-2">
                <h1 className="text-[40px] font-semibold">Certifications & Standards</h1>
                <p className="text-[18px] text-justify">We comply with ISO, HACCP, and FSSAI standards, ensuring global benchmarks, while pursuing advanced certifications like carbon neutrality to strengthen sustainable operations.</p>
              </div>
              {
logoimages.map((item)=>(<img className="w-[224px] " src={item}/>))
              }
            </div>
            <Haveaquestion/>
          
        </div>
    )
}

export default Sustainability;