"use client";
import { useEffect, useState, ChangeEvent } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

const Showdata = () => {
  const [userdata, setUserdata] = useState<User[]>([]);
  const [originalData, setOriginalData] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data: User[]) => {
        console.log(data);
        setUserdata(data);
        setOriginalData(data);
      });
  }, []);

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    if (!searchValue) {
      setUserdata(originalData);
      return;
    }

    const filteredData = originalData.filter((item) =>
      [item.firstName, item.lastName, item.email, item.phone, item.message]
        .join(" ")
        .toLowerCase()
        .includes(searchValue)
    );

    setUserdata(filteredData);
  };


  const sortby = (e:any) => {
    const sortValue = e.target.value;
    const sortedData = [...userdata].sort((a:any, b:any) => {
      if (sortValue === "asc") {
        return a.firstName.localeCompare(b.firstName);
      } else if (sortValue === "desc") {
        return b.firstName.localeCompare(a.firstName);
      } else if (sortValue === "date") {
        return new Date(a.createdAt || "").getTime() - new Date(b.createdAt || "").getTime();
      }
    });
    setUserdata(sortedData);
  }
  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Submitted Contact Data
      </h1>

      <input
        type="text"
        placeholder="Search"
        onChange={search}
        className="w-full p-2 border border-gray-200 rounded-lg"
      />
     <select onChange={sortby} className="w-full p-2 border border-gray-200 rounded-lg">
      <option value="asc">Sort by Name (A-Z)</option>
      <option value="desc">Sort by Name (Z-A)</option>
      <option value="date">Sort by Date</option>
     </select>
      {userdata.length === 0 ? (
        <p className="text-center text-gray-500">No data found.</p>
      ) : (
        userdata.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col gap-2"
          >
            <div className="flex flex-col md:flex-row md:gap-4">
              <h2 className="font-semibold text-lg md:text-xl text-black/80 mb-1 md:mb-0">
                <span className="text-black/80">Name:</span> {item.firstName} {item.lastName}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 text-sm md:text-base text-gray-700">
              <div className="flex-1">
                <span className="font-semibold">Email:</span> {item.email}
              </div>
              <div className="flex-1">
                <span className="font-semibold">Phone:</span> {item.phone}
              </div>
            </div>
            <div className="mt-2 text-gray-800 text-sm md:text-base">
              <span className="font-semibold">Message:</span> {item.message}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Showdata;
