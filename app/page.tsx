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
import VideoPlayer from "@/components/Videoplayer";
export default function Home() {

  const faqs = [
    {
      question:"What industries do you serve?",
      answer:"We cater to food processing units, retail distributors, hotel and catering businesses (HORECA), and global exporters across the pulse and grain industry."
    },
    {
      question:"Do you provide private label packaging?",
      answer:"Yes, RC Pulses offers customized bulk and retail private label packaging solutions tailored for regional and international markets."
    },
    {
      question:"Are your products export-compliant?",
      answer:"Absolutely. All our pulses are processed under certifications like FSSAI, APEDA, and USFDA norms, meeting major global quality standards."
    }
    ,
    {
      question:"Can I source multiple product variants in one shipment?",
      answer:"Yes, we provide flexible order configurations, allowing mixed product loads across all SKUs — from Orid Gota to Polished Chilka Dal."
    }
  ]
  return (
    <div className="bg-white flex flex-col font-roboto min-h-[100vh] text-black max-w-full">
      
     
      <Explorefacility/>
      <Momstrusted/>
      <Whoweare/>
      <Whychooseus/>
      <Whatwedo/>
      <Howweachieve/>
      
      <VideoPlayer/>


      
      <Ourprocess/>
      
      <Whatwemanufacture/>
      <Ourclientsay/>
      {/* <Meetourteam/> */}
      <Greenery/>
      <Haveaquestion faqs={faqs}/>
      <Withtractor/>
      
      
      
      
    </div>
  );
}
