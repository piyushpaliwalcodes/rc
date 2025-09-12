import Contactus from "@/components/Contactus";
import Herosecond from "@/components/Herosecond";
import Image from "next/image";
import Crafted from "@/components/Crafted";

const Contact = () => {

    const contactdetails = {
        "Contact":{
            number:"+91 9876543210",
            image:"/images/call.png",
        },
        "Email":{
            number:"info@domainname.com",
            image:"/images/call.png",
        },
        "Our Address":{
            number:"37 San Juan Lane Graaf Florisstraat 22A,3021 CH",
            image:"/images/call.png",
        },
        
    }
    return (
        <div className="flex flex-col bg-white text-black">
        
        <Contactus/>
        <iframe
  width="600"
  height="600"
  style={{ border: 0 }}   // ✅ correct: object, not string
  loading="eager"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.0265731581817!2d76.25268857534485!3d21.817904160207362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd81148f5b3e473%3A0xce9a3134412f9a09!2sDONDWADA!5e0!3m2!1sen!2sin!4v1757668361943!5m2!1sen!2sin"className="w-full">
</iframe>
        <Crafted/>
        </div>
        
    )
}

export default Contact;