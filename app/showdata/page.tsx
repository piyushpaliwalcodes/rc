"use client"
import { useEffect, useState } from "react";



const Showdata = () => {

    const [userdata,setuserdata] = useState<any[]>([]);
 useEffect(()=>{
    const response = fetch("/api")
    .then(res=>res.json())
    .then(data=>{
        console.log(data); 
        setuserdata(data);
    })

    
 },[])

    return (
        <div className="flex flex-col gap-4">
            {userdata.map((item,index)=>(
                <div key={index}>
                    <h1>{item.firstName}</h1>
                    <h1>{item.lastName}</h1>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                    <p>{item.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Showdata;