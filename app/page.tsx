import Image from "next/image";
import Navbar from "@/components/Navbar";
import Whoweare from "@/components/Whoweare";
import Howweachieve from "@/components/Howweachieve";
import Explorefacility from "@/components/Explorefacility";
import Whatwedo from "@/components/Whatwedo";

export default function Home() {
  return (
    <div className="bg-white flex flex-col font-roboto min-h-[100vh] text-black">
      
      <Navbar/>
      <Explorefacility/>
      <Whoweare/>
      <Howweachieve/>
      <Whatwedo/>
    </div>
  );
}
