
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
import { Image } from "next/image";
import YellowButton from "@/components/Yellowbutton";
import Productcomponent from "@/components/Productcomponent";
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
      
      <div
        className="w-full relative flex flex-col items-center justify-center min-h-[300px] md:min-h-[667px] bg-cover bg-center p-4 py-6 md:p-[60px]"
        style={{ backgroundImage: "url('./images/rchero.png')" }}
      >
        <div className="py-8 px-[] absolute bottom-7 left-15">
          <YellowButton text="Explore Products" link="/products" />
        </div>
      </div>
      {/* <Explorefacility/> */}
      {/* <Momstrusted/> */}
      
      <Whoweare/>
      <Productcomponent/>
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
