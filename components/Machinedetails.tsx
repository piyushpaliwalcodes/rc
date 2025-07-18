import Image from "next/image";

const Machinedetails = ({paragraphs,heroimage}:{paragraphs:string[],heroimage:string}) =>
{
    return (
        <div className="flex flex-col p-4 md:px-[60px] gap-4 md:gap-[30px]">
            <Image src={heroimage} alt="heroimage" width={1000} height={1000} className="w-full h-[180px] md:h-auto object-cover rounded-md"/>
            <div className="flex flex-col gap-2 md:gap-[15px]">
                {paragraphs.map((paragraph,index)=>(
                    <p key={index} className="text-[15px] md:text-base">{paragraph}</p>
                ))}
            </div>
        </div>
    )
}

export default Machinedetails;