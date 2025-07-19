import YellowButton from "./Yellowbutton";

const Explorefacility = () => {
    return (
        <div className="max-w-full text-black relative w-full h-[400px] md:h-[600px] lg:h-[750px] py-[30px] md:py-0 px-4 md:px-12 lg:px-[60px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/factory1.png')" }}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60   to-white/0"></div>
            
            {/* Content */}
            <div className="relative max-w-full md:max-w-[70%] lg:max-w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-[30px] h-full justify-center">
                <h1 className="text-[28px] md:text-[36px] lg:text-[48px]/[60px] ">Revolutionizing the Pulse Processing Industry</h1>
                <p className="text-[15px] md:text-[18px]/[30px] font-medium ">
                    At RC Dal, we are setting new standards in the Indian dal sector. Backed by an ultra-modern factory equipped with laser sorters, automated packaging lines, and real-time quality control systems, we ensure that every grain of dal meets the highest benchmarks in nutrition, hygiene, and taste.
                </p>
                <div className="w-full sm:w-auto">
                  <YellowButton text="Explore Facility" link="/machines" />
                </div>
            </div>
        </div>
    );
};

export default Explorefacility;