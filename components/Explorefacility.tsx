import YellowButton from "./Yellowbutton";

const Explorefacility = () => {
    return (
        <div className="max-w-full text-black relative w-full h-[400px] md:h-[600px] lg:h-[750px] py-[30px] md:py-0 px-4 md:px-12 lg:px-[60px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/homenew.png')" }}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60   to-white/0"></div>
            
            {/* Content */}
            <div className="relative max-w-full md:max-w-[60%] lg:max-w-[35%] flex flex-col gap-4 md:gap-6 lg:gap-[15px] h-full justify-center text-white">
                <h1 className="text-[28px] md:text-[36px] lg:text-[40px]/[50px] ">"Parampara aur Vishwas ki  <span className="font-bold">Asli Pehchaan</span>"</h1>
                <p className="text-[15px] md:text-[18px]/[30px] font-medium ">
                “With a legacy of over 50 years, RC Pulses delivers premium-quality pulses, crafted with modern precision and traditional trust—nourishing homes locally and building a strong footprint in global markets.”
                </p>
                <div className="w-full sm:w-auto mt-6">
                  <YellowButton text="Explore Products" link="/machines" />
                </div>
            </div>
        </div>
    );
};

export default Explorefacility;