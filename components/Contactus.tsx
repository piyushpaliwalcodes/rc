"use client"
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contactus = () => {
    

    const {register,handleSubmit,formState:{errors},reset} = useForm({
        defaultValues:{
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            message:"",
            createdAt:new Date().toISOString()
        }
    });
   

    const handleSubmitform = async (data:any) => {
        console.log(data);
        const response = await fetch("/api",{
            method:"POST",
            body:JSON.stringify(data),
        })
        const responseData = await response.json();
        console.log(responseData);
        if(response.ok){
            console.log(response);
            toast.success("Data submitted successfully");
            reset();
            
        }else{
            console.log(response);
            toast.error("Data submission failed");
        }
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row px-4 py-8 md:px-8 md:py-12 lg:px-[60px] lg:py-[100px] gap-8 lg:gap-[80px]">
                {/* Contact Details */}
                <div className="flex flex-col gap-5 w-full lg:w-[40%]">
                    <h1 className="font-roboto text-[#81848A] text-[20px] md:text-[24px] font-bold">Contact Us</h1>
                    <p className="text-[28px] md:text-[50px]/[60px] ">Get in touch <span className="font-bold">with us</span></p>
                    <p className="text-[15px] md:text-[16px]/[20px] text-[#81848A]">Reach out for any inquiries, support, or to discuss how we can
                    meet your industrial needs.</p>
                    {/*Contact details */}
                    <div className="flex flex-col gap-5 md:gap-[30px]">
                        <div className="flex gap-4 md:gap-[20px]">
                            <Image src="/images/contactphone.png" alt="call" width={60} height={60} />
                            <div className="flex flex-col gap-[5px] justify-center">
                                <h1 className="text-[18px] md:text-[20px]/[24px] ">Contact</h1>
                                <p className="text-[15px] md:text-[16px]/[20px] text-[#81848A]">+91 9876543210</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-black/10"/>
                        <div className="flex gap-4 md:gap-[20px]">
                            <Image src="/images/contactmail.png" alt="call" width={60} height={60} />
                            <div className="flex flex-col gap-[5px] justify-center">
                                <h1 className="text-[18px] md:text-[20px]/[24px] ">E-mail</h1>
                                <p className="text-[15px] md:text-[16px]/[20px] text-[#81848A]">info@domainname.com</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-black/10"/>
                        <div className="flex gap-4 md:gap-[20px]">
                            <Image src="/images/contactaddress.png" alt="call" width={60} height={60} />
                            <div className="flex flex-col gap-[5px] justify-center">
                                <h1 className="text-[18px] md:text-[20px]/[24px] ">Our Address</h1>
                                <p className="text-[15px] md:text-[16px]/[20px] text-[#81848A]">37 San Juan Lane Graaf Florisstraat 22A,3021 CH</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Form*/}
                <div className="flex flex-col rounded-[8px] gap-5 md:gap-[30px] w-full shadow-md p-4 md:p-[30px]">
                    <h1 className="text-[28px] md:text-[50px]/[30px] ">Contact <span className="font-bold">us</span></h1>
                    <form action="" className="flex flex-col gap-4 md:gap-[20px] text-[15px] md:text-[16px]/[20px] " onSubmit={handleSubmit(handleSubmitform)}>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-[30px]">
                            <div className="flex flex-col gap-[px] w-full">
                                <input type="text" placeholder="FirstName" {...register("firstName", { required: "*First name is required" })} className="w-full h-[40px] rounded-[8px] border border-black/10 p-[10px] py-[18px] md:py-[30px]"/>
                                {errors.firstName && <p className="text-red-500 text-[12px] md:text-[13px] pl-1">{errors.firstName.message}</p>}
                            </div>
                            <div className="flex flex-col gap-[5px] w-full">
                                <input type="text" placeholder="LastName" {...register("lastName",{required:"*Last name is required"})} className="w-full h-[40px] rounded-[8px] border border-black/10 p-[10px] py-[18px] md:py-[30px]"/>
                                {errors.lastName && <p className="text-red-500 text-[12px] md:text-[13px] pl-1">{errors.lastName.message}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <input type="text" placeholder="Enter Your Email" {...register("email",{required:"*Email is required",pattern:{
                                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message:"*Invalid email address"
                            }})} className="w-full h-[40px] rounded-[8px] border border-black/10 p-[10px] py-[18px] md:py-[30px]"/>
                            {errors.email && <p className="text-red-500 text-[12px] md:text-[13px] pl-1">{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <input type="text" placeholder="Enter Your Phone Number" {...register("phone",{required:"*Phone number is required",pattern:{
                                value:/^\d{10}$/,
                                message:"*Invalid phone number,must be 10 digits"
                            }})} className="w-full h-[40px] rounded-[8px] border border-black/10 p-[10px] py-[18px] md:py-[30px]"/>
                            {errors.phone && <p className="text-red-500 text-[12px] md:text-[13px] pl-1">{errors.phone.message}</p>}
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <textarea placeholder="Enter Your Message" {...register("message",{required:"*Message is required"})} className="w-full h-[100px] rounded-[8px] border border-black/10 p-[10px] py-[14px] py-[18px]"/>
                            {errors.message && <p className="text-red-500 text-[12px] md:text-[13px] pl-1">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="border-[1px] border-[#FCD900] text-black font-bold text-[15px] md:text-[16px]/[20px] rounded-[8px] p-[10px] py-[14px] w-full md:w-[300px] hover:bg-[#FCD900] hover:cursor-pointer transition-all duration-300">Submit</button>
                    </form>
                </div>
            </div>
            <Image src="/images/contactusmap.png" alt="contactus" width={1000} height={600} className="w-full h-[160px] md:h-[200px] object-cover max-h-[200px]"/>
        </div>
    )
}

export default Contactus;