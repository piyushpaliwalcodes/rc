import Image from "next/image";
import Navbar from "@/components/Navbar";
import Whoweare from "@/components/Whoweare";
import Howweachieve from "@/components/Howweachieve";

export default function Home() {
  return (
    <div className="bg-white flex flex-col font-roboto min-h-[100vh] text-black">
      <Navbar/>
      <Whoweare/>
      <Howweachieve/>
    </div>
  );
}
