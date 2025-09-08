import { highlightsdata } from "./data";
import { Achieveitem } from "./Howweachieve";
const Aleadingbrand = () =>
{
    return <div className="flex flex-col w-full h-[766px] py-[100px] px-[60px] gap-[30px] items-center bg-[#FBF9F4]">
      <div className="text-[64px]/[80px] text-center">A <span className="font-bold yellounderline">Leading Brand</span> in India's <br/>Dal Manufacturer's</div>
<p className="w-[70%] text-center">“RC Dall, a leading name in India’s dal manufacturing industry, carries a legacy of over 50 years. Rooted in Khandwa, Madhya Pradesh, we ensure excellence at every step—from sourcing and processing to packaging—delivering purity, nutrition, and taste that generations of families and businesses continue to rely upon confidently.”</p>
<div className="flex overflow-x-auto md:overflow-x-visible justify-start md:justify-around pt-8  gap-4 md:gap-0">
                { highlightsdata.map((item,index)=>(
                    <Achieveitem {...item} key={index}/>
                ))}
            </div>  
    </div>
}



export default Aleadingbrand;