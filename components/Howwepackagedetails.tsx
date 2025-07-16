import Chooseuscard from "./Chooseuscard"
import { JSX } from "react";

const Howwepackagedetails = ({title,packagedetails,description}:{title:JSX.Element,packagedetails:any[],description:string}) =>
    {
        return (
            <div className="flex flex-col gap-[30px] p-[60px]">
                {title}
                <p className="text-[16px]">{description}</p>
                <div className="grid grid-cols-2 gap-[80px] ">
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