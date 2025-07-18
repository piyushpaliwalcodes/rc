
import Image from "next/image";

const Imagecard = ({src,name,designation}:{src:string,name:string,designation:string}) =>
{
    return (
        <div className="w-full sm:w-[180px] md:w-[234px] flex flex-col gap-2 md:gap-[10px]">
            <Image src={src} alt="team" width={234} height={234} className="rounded-[10px] w-full h-[180px] md:h-[234px] object-cover" />
            <p className="text-center text-[14px] md:text-base">{name}, {designation}</p>
        </div>
    )
}

const Highlight = () => {
    return (
        <div className="flex flex-col text-[18px] md:text-[20px] gap-2 md:gap-0">  
           <h1 className="opacity-30 font-bold text-[14px] md:text-[20px]">WHO MANAGE US</h1>
           <p className="text-[24px] md:text-[48px] ">Meet our team</p>
           <p className="w-full md:w-[60%] text-[14px] md:text-[16px]">Starting from the cleaning of the grains prioritizing our customer health; grading, Hulling, Heating, De-skinning, Splitting, Sorting, Packing - all done in the supervision of our Experts.</p>
        </div>
    )
}

const Meetourteam = () => {
    const profiledata = [
        {src:"/images/teamperson.png",name:"John Doe",designation:"CEO"},
        {src:"/images/teamperson.png",name:"Jane Smith",designation:"CTO"},
        {src:"/images/teamperson.png",name:"Jim Beam",designation:"CFO"},
        {src:"/images/teamperson.png",name:"John Doe",designation:"CEO"},
        {src:"/images/teamperson.png",name:"Jane Smith",designation:"CTO"},
    ]
    return (
        <div className="flex flex-col gap-6 md:gap-[60px] px-4 md:px-[60px] py-6 md:py-[60px] text-black">
            <Highlight />
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-between gap-4 md:gap-0 w-full">
                {
                    profiledata.map((profile,index) => (
                        <Imagecard key={index} src={profile.src} name={profile.name} designation={profile.designation} />
                    ))
                }
            </div>
        </div>
    )
}

export default Meetourteam;