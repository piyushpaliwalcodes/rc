import YellowButton from "./Yellowbutton";
import Machinecard from "./Machinecard";
import { sustainabledata } from "./data";

const Sustainablegrowth = ({withcta=true}:{withcta?:boolean}) =>
{
    return  <div className="flex flex-col gap-6 md:gap-[50px] px-4 md:px-[60px] py-6 md:py-[60px]  text-black items-center bg-[#FFFCE8]">
    <div className="flex w-full flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 justify-between">
        <h1 className="text-2xl md:text-[40px] leading-tight">Our Path to <span className="font-bold">Sustainable Growth</span></h1>
        {withcta && <YellowButton text="Sustainability Report" link="/sustainability" className="w-full md:w-auto min-w-0 md:min-w-[250px]"/>}
    </div>
    <div className="flex w-full flex-col md:flex-row md:justify-between gap-4 md:gap-[30px]">
        {
            sustainabledata.map((item,index)=>(
                <Machinecard key={index} title={item.title} descr={item.descr} index={index}/>
            ))
        }
    </div>
            </div>
}

export default Sustainablegrowth