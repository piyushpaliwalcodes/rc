import Chooseuscard from "./Chooseuscard"
import { JSX } from "react";

const Howwepackagedetails = ({title,packagedetails,description}:{title:JSX.Element,packagedetails:any[],description:string}) =>
    {
        return (
            <div className="flex flex-col gap-4 md:gap-[30px] p-4 md:p-[60px]">
                {title}
                <p className="text-[15px] md:text-[16px]">{description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[80px] ">
                    {
                        packagedetails.map((item, index) => (
                            <Chooseuscard key={index} {...item} index={index} />
                        ))
                    }
                </div>
            </div>
        )
    }

export default Howwepackagedetails;