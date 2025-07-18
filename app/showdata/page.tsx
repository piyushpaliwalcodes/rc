"use client"
import { useEffect, useState } from "react";

const Showdata = () => {
    const [userdata, setuserdata] = useState<any[]>([]);
    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setuserdata(data);
            });
    }, []);

    return (
        <div className="flex flex-col gap-6 p-4 md:p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Submitted Contact Data</h1>
            {userdata.length === 0 ? (
                <p className="text-center text-gray-500">No data found.</p>
            ) : (
                userdata.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col gap-2">
                        <div className="flex flex-col md:flex-row md:gap-4">
                            <h2 className="font-semibold text-lg md:text-xl text-primary mb-1 md:mb-0">{item.firstName} {item.lastName}</h2>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-8 text-sm md:text-base text-gray-700">
                            <div className="flex-1"><span className="font-semibold">Email:</span> {item.email}</div>
                            <div className="flex-1"><span className="font-semibold">Phone:</span> {item.phone}</div>
                        </div>
                        <div className="mt-2 text-gray-800 text-sm md:text-base">
                            <span className="font-semibold">Message:</span> {item.message}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Showdata;