
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
    },
    {
      question:"How to reach out to RC Pulses?",
      answer:"You can easily reach RC Pulses through our website’s contact section, or connect with us directly at +91 9425326237 / 7271271236. You may also visit our of9ice at Moghat Road, Khandwa, or our factory at Mokalgaon Road, Dondwada, Khandwa."
    }
  ]
  return (
    <div className="bg-white flex flex-col font-roboto h-fit md:min-h-[100vh] text-black max-w-full">
      
      {/* 
        Show different background images for mobile and desktop using two divs with responsive classes.
        - Mobile: visible on small screens, hidden on md+
        - Desktop: hidden on small, visible on md+
        Add additional background properties for mobile (e.g., backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center')
      */}
      {/* Mobile Hero */}
      <div
        className="block md:hidden min-w-full relative flex flex-col items-center justify-end h-[700px] px-4 py-6 relative"
        style={{
          backgroundImage: "url('./images/mobilehero.jpeg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#fff" // fallback color if needed
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center min-w-full">
          <YellowButton text="Explore Products" link="/products" className="text-[12px] w-fit" />
        </div>
      </div>
      {/* Desktop Hero */}
      <div
        className="hidden md:flex min-w-full relative flex-col items-center justify-center min-h-[667px] bg-cover bg-center bg-no-repeat p-[60px] px-[60px]"
        style={{ backgroundImage: "url('./images/rchero.png')" }}
      >
        <div className="min-w-full flex mt-20 justify-start py-4">
          <YellowButton text="Explore Products" link="/products" className="w-[180px] text-base" />
        </div>
      </div>
      {/* <Explorefacility/> */}
      {/* <Momstrusted/> */}
      
      <Whoweare/>
      <Productcomponent/>
      <Whychooseus showimage={true}/>
      <Whatwedo/>
      <VideoPlayer/>
      <Whatwemanufacture/>
      <Howweachieve/>
      
      


      
      {/* <Ourprocess/> */}
      
      
      <Ourclientsay/>
      {/* <Meetourteam/> */}
      <Greenery/>
      <Haveaquestion faqs={faqs}/>
      {/* <Withtractor/> */}
      
      
      
      
    </div>
  );
}
