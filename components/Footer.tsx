"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Mailinput = ({register,handleSubmit,handleSubscribe,errors}:{register:any,handleSubmit:any,handleSubscribe:any,errors:any}) =>
{
    return (
        <div className="rounded-[10px] border border-[#D9D9D9] flex w-full  md:w-[90%] justify-between items-center pl-1">
            <input type="text" placeholder="Enter your email to subscribe our Newsletter." className="text-[13px] p md:text-[15px]/[25px] placeholder:text-[#676767] placeholder:font-bold pl-2 md:pl-4 w-full md:w-[350px] py-[8px] rounded-[10px] border-none outline-none flex items-center" {...register("email",{required:"*Email is required",pattern:{
                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"*Invalid email address"
            }})} />
            <button className="bg-[#FCD900] text-[13px] md:text-[14px]/[25px] text-black px-2 md:px-[25px] py-[5px] rounded-[10px] hover:cursor-pointer font-bold whitespace-nowrap h-full" onClick={handleSubmit(handleSubscribe)}>Subscribe Now</button>
        </div>
    )
}
const Footer = () =>
{
    const socialmediaimages = [
       "/images/facebook.png",
       "/images/insta.png",
       "/images/linkedin.png",
       "/images/x.png",
    ]

    const links = {
        "Quick Links": [
            "About Us",
            "Products",
            "Infrastructure",
            "Our Process",
            "Certificates",
            "Sustainability"
        ],
        "Legal": [
            "Privacy Policy",
            "Terms & Conditions"
        ],
    }

    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            email:"",
        }
    });
    const handleSubscribe = async (data:any) => {
        const response = await fetch("/api/subscribedusers",{   
            method:"POST",
            body:JSON.stringify(data),
        })
        const responseData = await response.json();
        console.log(responseData);
        if(response.ok){
            toast.success("Data submitted successfully");
        }else{
            toast.error("Data submission failed");
        }
    }   

    return (
        <div className="flex flex-col bg-[#291004] p-4 md:p-[60px] gap-6 md:gap-[40px]">
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-[60px] w-full">
                <div className="flex flex-col gap-6 md:gap-[30px] w-full md:w-[45%]">
                    <h1 className="text-[#FCD900] font-semibold">RC LOGO</h1>
                    <p className="text-[22px] md:text-[45px]/[60px]">Stay updated with the latest agricultural manufacturing and its Industry insights.</p>
                    <div className="flex flex-col gap-1 md:gap-[5px]">
                        <Mailinput register={register} handleSubmit={handleSubmit} handleSubscribe={handleSubscribe} errors={errors}/>
                        {errors.email && <p className="text-red-500 text-[13px] md:text-base">{errors.email.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-[55%] mt-6 md:mt-0 gap-6 md:gap-0">
                    {Object.keys(links).map((key,index) => (
                        <div key={index} className="flex flex-col gap-4 md:gap-[30px]">
                            <h1 className="text-[#969393] text-[18px] md:text-[24px]/[30px]">{key}</h1>
                            <ul className="flex flex-col text-[14px] md:text-[16px]/[30px]">
                                {links[key as keyof typeof links].map((link,index) => (
                                    <li key={index} className="hover:cursor-pointer hover:text-[#FCD900]">{link}</li>
                                ))} 
                            </ul>
                        </div>
                    ))}
                    <div className="flex flex-col gap-4 md:gap-[30px]" >
                        <h1 className="text-[#969393] text-[18px] md:text-[24px]/[30px]">Follow Us</h1>
                        <div className="flex gap-3 md:gap-[15px]">
                            {socialmediaimages.map((image,index) => (
                                <img src={image} alt="social media" key={index} className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] hover:cursor-pointer hover:scale-110 transition-all duration-300" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-[#7B7370] text-[13px] md:text-[16px]/[25px]">@2025 RC. All Right Reserved.</p>
        </div>
    )
}

export default Footer;