import YellowButton from "./Yellowbutton";
import Machinecard from "./Machinecard";
import { sustainabledata } from "./data";

const Sustainablegrowth = () =>
{
    return  <div className="flex flex-col gap-6 md:gap-[50px] px-4 md:px-[60px] py-6 md:py-[60px]  text-black items-center bg-[#FFFCE8]">
    <div className="flex justify-between w-full">
        <h1 className="text-[40px]">Our Path to <span className="font-bold">Sustainable Growth</span></h1>
         <YellowButton text="Sustainability Report" link="/sustainability" className="min-w-[250px]"/>
    </div>
    <div className="flex justify-between gap-[30px]">
        {
            sustainabledata.map((item,index)=>(
                <Machinecard title={item.title} descr={item.descr} index={index}/>
            ))
        }
    </div>
            </div>
}

export default Sustainablegrowth