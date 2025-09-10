import YellowButton from "./Yellowbutton"

const Crafted = () =>
{
    return <div className="flex flex-col gap-6 md:gap-[50px] px-4 md:px-[60px] py-6 md:py-[60px]  text-black items-center bg-[#FFFCE8]">
        <div className="flex gap-[40px]">
            <div className="flex flex-col gap-[30px]">
                <h1 className="text-[40px]">Trusted for Generations, <span className="font-bold">Crafted for Today</span></h1>
                <p>Every grain tells a timeless story of purity, nutrition, and tradition. Handpicked with care and hygienically processed using advanced technology, our dals not only preserve authentic taste but also ensure superior quality, rich protein, and essential nutrients. With a perfect blend of heritage and modern processing, RC dals deliver wholesome nutrition, unmatched flavor, and the enduring trust of generations in every serving.</p>
                <YellowButton text="Explore Products" link="/products"/>
            </div>
            <img src="images/bori.png" className="max-w-[555px]"/>
        </div>
    </div>
                
}


export default Crafted;