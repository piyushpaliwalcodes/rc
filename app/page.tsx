import Image from "next/image";
import Navbar from "@/components/Navbar";
import Whoweare from "@/components/Whoweare";
import Howweachieve from "@/components/Howweachieve";
import Explorefacility from "@/components/Explorefacility";
import Whatwedo from "@/components/Whatwedo";
import Ourprocess from "@/components/Ourprocess";
import Meetourteam from "@/components/Meetourteam";
import Withtractor from "@/components/Withtractor";
import Haveaquestion from "@/components/Haveaquestion";
import Whatwemanufacture from "@/components/Whatwemanufacture";
import Whychooseus from "@/components/Whychooseus";
import Ourclientsay from "@/components/Ourclientsay";
import Greenery from "@/components/Greenery";
import Momstrusted from "@/components/Momstrusted";
export default function Home() {
  return (
    <div className="bg-white flex flex-col font-roboto min-h-[100vh] text-black max-w-full">
      
     
      <Explorefacility/>
      <Momstrusted/>
      <Whoweare/>
      <Whychooseus/>
      <Whatwedo/>
      <Howweachieve/>
      
      <Ourprocess/>
      
      <Whatwemanufacture/>
      <Ourclientsay/>
      <Meetourteam/>
      <Greenery/>
      <Haveaquestion/>
      <Withtractor/>
      
      
      
      
    </div>
  );
}
