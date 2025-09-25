
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
      
      <div
        className="min-w-full relative flex flex-col items-center justify-end min-h-[180px] md:justify-center min-w-[100vw] md:min-h-[667px] bg-cover bg-center bg-no-repeat px-4 py-6 md:p-[60px] md:px-[60px]"
        style={{ backgroundImage: "url('./images/rchero.png')" }}
      >
        {/* 
          The button appears to "get out of padding" on desktop because:
          - On mobile, the container is a flexbox with padding (py-4 px-4), so the button is padded and centered.
          - On md+ screens, the container becomes `md:absolute md:bottom-[38%] md:block md:w-full`, so it is absolutely positioned relative to the parent, and the parent's padding no longer constrains it.
          - The px-4/py-4 padding is still present, but absolute positioning removes it from the normal flow, so it can overlap or escape the padded area of the parent.

          To keep the button within the padded area on all screen sizes, avoid absolute positioning, or ensure the parent has enough padding and relative positioning.
        */}
        <div className="w-fit md:w-full flex md:mt-20 justify-center md:justify-start py-4 px-4 ">
          <YellowButton text="Explore Products" link="/products" className="text-xs w-[180px] md:text-base " />
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
