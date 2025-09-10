

const Machinecard = ({index,title,descr}:any) =>
    {
        return <div className={`flex flex-col gap-[10px] border-[1px] border-black p-4 md:p-[30px] rounded-[8px]  hover:bg-[#FCD900] hover:cursor-pointer hover:border-[#FABB05] `}>
                <h1 className="font-bold text-[40px]">0{index+1}</h1>
                <h1 className="text-[18px] md:text-[20px] font-semibold">{title}</h1>
                <p className="text-[15px] md:text-[16px]">{descr}</p>
            </div>
    }

    export default Machinecard;