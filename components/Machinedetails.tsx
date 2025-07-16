import Image from "next/image";

const Machinedetails = ({paragraphs,heroimage}:{paragraphs:string[],heroimage:string}) =>
{
    return (
        <div className="flex flex-col px-[60px] gap-[30px]">
            <Image src={heroimage} alt="heroimage" width={1000} height={1000} className="w-full h-auto object-cover"/>
            <div className="flex flex-col gap-[15px]">
                {paragraphs.map((paragraph,index)=>(
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            
        </div>
    )
}

export default Machinedetails;