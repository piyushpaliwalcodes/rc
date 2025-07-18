import Image from "next/image";

const Productdetails = ({paragraphs,heroimage}:{paragraphs:string[],heroimage:string}) =>
{
    return (
        <div className="flex flex-col p-4 md:p-[60px] gap-4 md:gap-[30px]">
            <h1 className="text-[24px] md:text-[48px]/[60px]">Arhar Chilka Dal</h1>
            <div className="flex flex-col gap-2 md:gap-[15px]">
                {paragraphs.map((paragraph,index)=>(
                    <p key={index} className="text-[15px] md:text-base">{paragraph}</p>
                ))}
            </div>
            <Image src={heroimage} alt="heroimage" width={1000} height={1000} className="w-full h-[180px] md:h-auto object-cover rounded-md"/>
        </div>
    )
}

export default Productdetails;