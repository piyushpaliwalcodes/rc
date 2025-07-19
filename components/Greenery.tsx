import YellowButton from "./Yellowbutton";

const Greenery = () => {        
    return (
        <div className="relative flex flex-col p-4 py-6 md:p-[60px]  md:h-[800px] items-end justify-center" style={{backgroundImage: "url('/images/greenery.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"/>
            <div className="flex flex-col gap-4 md:gap-[40px] w-full md:w-[40%] text-white z-10 ">
                <h1 className="text-[24px] md:text-[50px]/[60px] ">Smart and Innovative Agricultural Process for the Sustainability and Green Future.</h1>
                <p className="text-[14px] md:text-[16px]/[25px] ">With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries. With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries.</p>
                <YellowButton text='Contact Us' link='/contactus'/>
            </div>
        </div>
    )
}

export default Greenery;