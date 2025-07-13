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
export default function Home() {
  return (
    <div className="bg-white flex flex-col font-roboto min-h-[100vh] text-black">
      
     
      <Explorefacility/>
      <Whoweare/>
      <Howweachieve/>
      <Whatwedo/>
      <Ourprocess/>
      <Meetourteam/>
      <Withtractor/>
      <Haveaquestion/>
    </div>
  );
}
