
import Image from "next/image";

const Imagecard = ({src,name,designation}:{src:string,name:string,designation:string}) =>
{
    return (
        <div className="w-[234px] flex flex-col gap-[10px]">
            <Image src={src} alt="team" width={234} height={234} className="rounded-[10px]" />
            <p className="text-center">{name},{designation}</p>
        </div>
    )
}

 const Highlight = () => {
    return (
        <div className="flex flex-col  text-[20px]">  
           <h1 className="opacity-30 font-bold">WHO MANAGE US</h1>
           <p className="text-[48px] ">Meet our team</p>
           <p className="w-[60%]">Starting from the cleaning of the grains prioritizing our customer health; grading, Hulling, Heating, De-skinning, Splitting, Sorting, Packing - all done in the supervision of our Experts.</p>
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
        <div className="flex flex-col gap-[60px] px-[60px] py-[60px]">
            <Highlight />
            <div className="flex justify-between">
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