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
           <div className="flex flex-col md:flex-row gap-6 md:gap-[30px] px-4 md:px-[60px] py-8 md:py-[80px] items-start md:items-center ">
             <div className="flex flex-col text-black gap-2 max-w-[720px]">
               <h1 className="text-[28px] md:text-[40px] font-semibold">Certifications & Standards</h1>
               <p className="text-[16px] md:text-[18px] text-justify">We comply with ISO, HACCP, and FSSAI standards, ensuring global benchmarks, while pursuing advanced certifications like carbon neutrality to strengthen sustainable operations.</p>
             </div>
             <div className="grid grid-cols-3  items-center justify-center md:justify-start gap-4 md:gap-[30px] w-full">
               {logoimages.map((item) => (
                 <img key={item} className="w-[140px] md:w-[224px] h-auto" src={item} alt="Certification logo" />
               ))}
             </div>
           </div>
            <Haveaquestion/>
          
        </div>
    )
}

export default Sustainability;