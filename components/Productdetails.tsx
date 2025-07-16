import Image from "next/image";

const Productdetails = ({paragraphs,heroimage}:{paragraphs:string[],heroimage:string}) =>
{
    return (
        <div className="flex flex-col p-[60px] gap-[30px]">
            <h1 className="text-[48px]/[60px]">Arhar Chilka Dal</h1>
            <div className="flex flex-col gap-[15px]">
                {paragraphs.map((paragraph,index)=>(
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <Image src={heroimage} alt="heroimage" width={1000} height={1000} className="w-full h-auto object-cover"/>
        </div>
    )
}

export default Productdetails;