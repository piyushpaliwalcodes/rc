"use client"
import Image from "next/image";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md";
import { useState } from "react"
import { Span } from "next/dist/trace";
import YellowButton from "./Yellowbutton";

const Manufacturehighlight = () => {
    return (
        <div className="flex flex-col text-[18px] md:text-[20px] gap-2 md:gap-0">  
           <h1 className="opacity-30 font-bold text-[14px] md:text-[20px]">WHAT WE MANUFACTURE</h1>
           <p className="text-[24px] md:text-[48px]/[50px] ">Pure and Trusted Dal Products from<br/>
            <span className="yellounderline"> RC Pulses.</span></p>
           <p className="w-full md:w-[60%] text-[14px] md:text-[20px] mt-4">Starting from the planning of the product our customer wants; design, manufacturing, software, mounting, installation & comissioning are made by us.</p>
        </div>
    )
}

// Custom Star Rating Component
const StarRating = ({ rating, size = "text-lg",peoplerated }: { rating: number; size?: string; peoplerated:string }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <FaStar key={`full-${i}`} className={`${size} text-yellow-400`} />
        );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        stars.push(
            <div key="half" className="relative">
                <FaStar className={`${size} text-gray-300`} />
                <FaStar 
                    className={`${size} text-yellow-400 absolute top-0 left-0 overflow-hidden`} 
                    style={{ clipPath: 'inset(0 50% 0 0)' }}
                />
            </div>
        );
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <FaStar key={`empty-${i}`} className={`${size} text-gray-300`} />
        );
    }
    
    return (
        <div className="flex items-center gap-1">
            <div className="flex">{stars}
            <span className="ml-2 text-sm text-gray-600">{rating}</span></div>
            <span className="font-semibold text-sm">({peoplerated})</span>
        </div>
    );
};

const Manufacturecardwithimage = ({src, title, description, link,quantity,rating,peoplerated,qualities}: {src: string, title: string, description: string, link: string,quantity:string,rating:number,peoplerated:string,qualities:string[]}) =>
{
    return (
    <div className="flex flex-col w-full md:w-[342px] gap-1 md:gap-[15px] p-[15px] border border-black/10 md:items-center ">
        <div className="flex flex-col items-center">
        <Image src={src} alt={title} width={430} height={280} className="w-full h-[180px] md:h-[280px]  rounded-md object-contain"/>
        <h1 className="text-[18px] md:text-[24px] font-bold">{title}</h1>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
        </div>



        <hr className="text-[2px] w-full text-black/10"/>
        
        <div className="flex flex-col gap-1 items-start w-full"> <StarRating rating={rating} size="text-lg" peoplerated={peoplerated}  /> <p className="text-sm">Manufactured by RC pulses</p> <p className="flex items-center text-sm text-black/50"><MdLocationPin className="inline"/><span className="text-black font-semibold">Madhya Pradesh </span> -khandwa</p>
        <div className="flex gap-1"><img src={"/images/graded.png"} className=""/><ul className="flex gap-1 " >{qualities.map((item,index)=>(<li className="text-sm text-black/50 ">{item}{index < qualities.length - 1 && <span className="px-1 text-black/30">|</span>}</li>))}</ul></div>
        </div>
      <YellowButton text="View Details" link="/" className="min-w-full justify-center"/>
    </div>
    )
}

const Whatwemanufacture = () =>
{   
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const manufacturedata = [
        {
            src:"/images/dalrc1.png",
            title:"Tiger Urad Dal",
            quantity: "30 kg",
            rating:4.6,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/images/dalrc2.png",
            title:"Urad Dal",
            quantity: "30 kg",
            rating:5,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
        {
            src:"/images/dalrc3.png",
            title:"Urad Dal",
            quantity: "30 kg",
            rating:4.6,
            peoplerated:"15",
            qualities:["High-yield","No black spots","Fully Sortexed"],
            description:"Starting from the cleaning of the grains prioritizing customer health; grading.",
            link:"/products/urad-dal"
        },
    ]

    const nextCard = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === manufacturedata.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? manufacturedata.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col p-4 py-6 md:p-[60px] gap-6 md:gap-[60px] text-black max-w-full">
            <Manufacturehighlight />
            
            {/* Navigation Container */}
            <div className="relative w-full">
                {/* Navigation Buttons */}
                <div className="hidden md:flex absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                    <button 
                        onClick={prevCard}
                        className="w-12 h-12 bg-white border border-gray-200 rounded-md flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Previous card"
                    >
                        <FaChevronLeft className="text-gray-600" />
                    </button>
                </div>
                
                <div className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                    <button 
                        onClick={nextCard}
                        className="w-12 h-12 bg-white border border-gray-200 rounded-md flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors duration-200 bg-primary-yellow"
                        aria-label="Next card"
                    >
                        <FaChevronRight className="text-gray-600" />
                    </button>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col mt-4 md:mt-0 md:flex-row gap-10 md:gap-[20px] md:justify-between w-full overflow-hidden">
                    {/* Desktop: Show all cards */}
                    <div className="hidden md:flex md:flex-row gap-10 md:gap-[25px] md:justify-center w-full">
                        {
                            manufacturedata.map((item, index) => (
                                <Manufacturecardwithimage key={index} {...item} />
                            ))
                        }
                    </div>
                    
                    {/* Mobile: Show single card with navigation */}
                    <div className="md:hidden w-full">
                        <Manufacturecardwithimage {...manufacturedata[currentIndex]} />
                        
                        {/* Mobile Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {manufacturedata.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                        index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300'
                                    }`}
                                    aria-label={`Go to card ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        {/* Mobile Navigation Buttons */}
                        <div className="flex justify-between items-center mt-4">
                            <button 
                                onClick={prevCard}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                <FaChevronLeft className="text-xs" />
                                Previous
                            </button>
                            <button 
                                onClick={nextCard}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            >
                                Next
                                <FaChevronRight className="text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatwemanufacture;