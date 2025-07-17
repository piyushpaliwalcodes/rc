import YellowButton from "./Yellowbutton";

const Explorefacility = () => {
    return (
        <div className=" text-black relative w-full h-[750px] px-[60px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/factory1.png')" }}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white to-white/0"></div>
            
            {/* Content */}
            <div className="relative max-w-1/2 flex flex-col gap-[30px] h-full justify-center">
                <h1 className="text-[48px]/[60px] ">Revolutionizing the Pulse Processing Industry</h1>
                <p className="text-[18px]/[30px] font-medium ">
                    At RC Dal, we are setting new standards in the Indian dal sector. Backed by an ultra-modern factory equipped with laser sorters, automated packaging lines, and real-time quality control systems, we ensure that every grain of dal meets the highest benchmarks in nutrition, hygiene, and taste.
                </p>
                <YellowButton text="Explore Facility" link="/machines" />
            </div>
        </div>
    );
};

export default Explorefacility;