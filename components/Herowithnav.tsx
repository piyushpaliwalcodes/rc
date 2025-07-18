

const Herowithnav = ({title="Smart and Innovative Manufacturing Process for the Sustainability and Green Future.",description="With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries. With more than 200,000 Retail outlets across 65+ branches, Ramlal Champalal (RC) is one of the largest Distribution House & Logistics services providers for various industries."}:{title?:string,description?:string}) =>
{
    return (
        <>
        <div className="h-[320px] md:h-[500px] lg:h-[655px] max-h-[655px] flex items-center justify-center relative bg-top" style={{ backgroundImage: "url('/images/aboutusbg.png')", backgroundSize: "cover", backgroundPosition: "top"}}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="flex flex-col gap-4 md:gap-[40px] w-full max-w-full md:w-[700px] lg:w-[900px] z-10 px-4">
                <h1 className="text-[22px] md:text-[32px] lg:text-[45px]/[60px] text-center">{title}</h1>
                <p className="text-[14px] md:text-[16px] text-center">{description}</p>
            </div>
        </div>
        </>
    )
}

export default Herowithnav;