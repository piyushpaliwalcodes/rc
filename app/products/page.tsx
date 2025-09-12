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
        <div className="flex flex-col bg-white">
            {/* <Herosecond title="Our Products" location="Our Products"/> */}
            <div className="flex flex-col p-4 py-6 md:p-[60px] gap-10 text-black max-w-full">
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">OUR PREMIUM SELECTION</h1>
<h1 className="text-[40px]">Discover the finest range of RC Pulses <br/>
<span className="font-bold">— Trusted  for purity, taste, and nutrition.</span></h1></div>

<div className="grid grid-cols-3 gap-y-12">
{
    daldetails.map((details)=>(
        <Manufacturecardwithimage {...details} />
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