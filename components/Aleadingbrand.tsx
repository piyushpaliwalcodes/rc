import { highlightsdata } from "./data";
import { Achieveitem } from "./Howweachieve";
const Aleadingbrand = () =>
{
    return <div className="flex flex-col w-full h-auto py-12 md:py-[100px] px-4 sm:px-6 md:px-[60px] gap-6 md:gap-[30px] items-center bg-[#FBF9F4]">
      <div className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px]/[80px] text-center leading-tight">A <span className="font-semibold yellounderline">Leading Brand</span> in India's <br className="hidden sm:block"/>Dal Manufacturer's</div>
<p className="w-full max-w-2xl sm:max-w-3xl md:max-w-[70%] text-center text-sm sm:text-base px-2 sm:px-0">“RC Dall, a leading name in India’s dal manufacturing industry, carries a legacy of over 50 years. Rooted in Khandwa, Madhya Pradesh, we ensure excellence at every step—from sourcing and processing to packaging—delivering purity, nutrition, and taste that generations of families and businesses continue to rely upon confidently.”</p>
<div className="grid overflow-x-auto md:overflow-x-visible grid-cols-2 sm:grid-cols-3 md:grid-cols-5 pt-8  gap-4 md:gap-6">
                { highlightsdata.map((item,index)=>(
                    <Achieveitem {...item} key={index}/>
                ))}
            </div>  
    </div>
}



export default Aleadingbrand;