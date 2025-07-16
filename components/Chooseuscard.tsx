import Image from "next/image";

const Chooseuscard = ({src, title, description,index}: {src: string, title: string, description: string,index:number}) =>
    {
        return (
            <div className={`flex flex-col gap-[10px] border-b-[1px] border-black/20  py-[30px]   `}>
                <Image src={src} alt={title} width={50} height={50} />
                <h1 className="text-[20px] font-semibold">{title}</h1>
                <p className="text-[16px] w-[75%]">{description}</p>
            </div>
        )
    }


    export default Chooseuscard;