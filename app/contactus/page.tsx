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
        <Image src="/images/contactusmap.png" alt="contactus" width={1000} height={600} className="w-full h-auto object-cover"/>
        <Crafted/>
        </div>
        
    )
}

export default Contact;