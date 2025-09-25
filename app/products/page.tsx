import Herosecond from "@/components/Herosecond";
import Momstrusted from "@/components/Momstrusted";
import Ourclientsay from "@/components/Ourclientsay";
import Ourprocess from "@/components/Ourprocess";
import Whatwemanufacture, { Manufacturecardwithimage } from "@/components/Whatwemanufacture";
import Whoweare from "@/components/Whoweare";
import { daldetails } from "@/components/data";
import Ourprocess2 from "@/components/Ourprocess2";
import VideoPlayer from "@/components/Videoplayer";
    const Products = () =>
{
    return (
        <div className="flex flex-col bg-white w-full">
            {/* <Herosecond title="Our Products" location="Our Products"/> */}
            <div className="flex flex-col p-4 py-6 md:p-[60px] gap-8 md:gap-10 text-black max-w-7xl w-full mx-auto">
                <div className="flex flex-col gap-1 md:gap-2">
                    <h1 className="font-semibold text-sm md:text-base tracking-wide">OUR PREMIUM SELECTION</h1>
<h1 className="text-2xl sm:text-3xl md:text-[40px] leading-snug md:leading-[1.2]">Discover the finest range of RC Pulses <br className="hidden md:block"/>
<span className="font-bold">— Trusted  for purity, taste, and nutrition.</span></h1></div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-y-12">
{
    daldetails.map(({ key, ...rest }) => (
        <Manufacturecardwithimage key={key} {...rest} />
    ))
}
</div>

            </div>
<Whoweare/>
<VideoPlayer/>
<Momstrusted/>
<Ourclientsay/>
            {/* <Whatwemanufacture/>
            <Ourclientsay/> */}
        </div>
    )
}

export default Products;