import Image from "next/image";

const Contactus = () => {

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
        <div className="flex flex-col">
            <div className="flex p-[60px] py-[100px] gap-[30px] gap-[80px]">
            <div className="flex flex-col gap-[20px] w-[40%]">
                <h1 className="font-roboto text-[#81848A] text-[24px] font-bold">Contact Us</h1>
                <p className="text-[50px]/[60px] ">Get in touch <span className="font-bold">with us</span></p>
                <p className="text-[16px]/[20px] text-[#81848A]">Reach out for any inquiries, support, or to discuss how we can
                meet your industrial needs.</p>


                {/*Contact details */}
                <div className="flex flex-col gap-[30px]">
                    <div className="flex gap-[20px]">
                        <Image src="/images/contactphone.png" alt="call" width={60} height={60} />
                        <div className="flex flex-col gap-[5px] justify-center">
                            <h1 className="text-[20px]/[24px] ">Contact</h1>
                            <p className="text-[16px]/[20px] text-[#81848A]">+91 9876543210</p>
                        </div>
                        
                    </div>
                    <div className="w-[100%] h-[1px] bg-black/10"/>
                    <div className="flex gap-[20px]">
                        <Image src="/images/contactmail.png" alt="call" width={60} height={60} />
                        <div className="flex flex-col gap-[5px] justify-center">
                            <h1 className="text-[20px]/[24px] ">E-mail</h1>
                            <p className="text-[16px]/[20px] text-[#81848A]">info@domainname.com</p>
                        </div>
                        
                    </div>
                    <div className="w-[100%] h-[1px] bg-black/10"/>
                    <div className="flex gap-[20px]">
                        <Image src="/images/contactaddress.png" alt="call" width={60} height={60} />
                        <div className="flex flex-col gap-[5px] justify-center">
                            <h1 className="text-[20px]/[24px] ">Our Address</h1>
                            <p className="text-[16px]/[20px] text-[#81848A]">37 San Juan Lane Graaf Florisstraat 22A,3021 CH</p>
                        </div>
                        
                    </div>

                </div>
            </div>

            {/*Form*/}
            <div className="flex flex-col rounded-[8px] gap-[30px] flex-grow  shadow-md p-[30px]">
                <h1 className="text-[50px]/[30px] ">Contact <span className="font-bold">us</span></h1>
                <form action="" className="flex flex-col gap-[20px] text-[16px]/[20px] ">
                    <div className="flex gap-[10px]"><input type="text" placeholder="FirstName" className="w-[100%] h-[40px] rounded-[8px] border border-black/10 p-[10px] py-[28px]"/>
                    <input type="text" placeholder="LastName" className="w-[100%] h-[40px] rounded-[8px] border border-black/10 p-[10px] py-[28px]"/></div>
                    <input type="text" placeholder="Enter Your Email" className="w-[100%] h-[40px] rounded-[8px] border border-black/10 p-[10px] py-[28px]"/>
                    <input type="text" placeholder="Enter Your Phone Number" className="w-[100%] h-[40px] rounded-[8px] border border-black/10 p-[10px] py-[28px]"/>
                    <textarea placeholder="Enter Your Message" className="w-[100%] h-[100px] rounded-[8px] border border-black/10 p-[10px] py-[20px]"/>
                    <button className="border-[1px] border-[#FCD900] text-black font-bold text-[16px]/[20px] rounded-[8px] p-[10px] py-[18px] w-[300px] hover:bg-[#FCD900] hover:cursor-pointer transition-all duration-300">Submit</button>

                </form>
            </div>
        </div>
        <Image src="/images/contactusmap.png" alt="contactus" width={1000} height={600} className="w-full h-[200px] object-cover max-h-[200px]"/>
        </div>
        
    )
}

export default Contactus;