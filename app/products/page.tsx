import Herosecond from "@/components/Herosecond";
import Ourclientsay from "@/components/Ourclientsay";
import Whatwemanufacture from "@/components/Whatwemanufacture";
    const Products = () =>
{
    return (
        <div className="flex flex-col bg-white">
            <Herosecond title="Our Products" location="Our Products"/>
            <Whatwemanufacture/>
            <Ourclientsay/>
        </div>
    )
}

export default Products;