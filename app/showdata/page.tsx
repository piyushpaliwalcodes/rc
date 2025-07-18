"use client";
import { useEffect, useState, useCallback, useMemo } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

interface SubscribedUser {
  email: string;
  createdAt?: string;
}

const Showdata = () => {
  const [originalData, setOriginalData] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedTab, setSelectedTab] = useState<"contact" | "subscribed">("contact");
  const [subscribedUsers, setSubscribedUsers] = useState<SubscribedUser[]>([]);
  const [subLoading, setSubLoading] = useState(false);
  const [subError, setSubError] = useState<string | null>(null);

  // Fetch data
  useEffect(() => {
    setLoading(true);
    fetch("/api")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data: User[]) => {
        setOriginalData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Fetch subscribed users when tab is selected
  useEffect(() => {
    if (selectedTab === "subscribed" && subscribedUsers.length === 0) {
      setSubLoading(true);
      fetch("/api/subscribedusers")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch subscribed users");
          return res.json();
        })
        .then((data: SubscribedUser[]) => {
          setSubscribedUsers(data);
          setSubLoading(false);
        })
        .catch((err) => {
          setSubError(err.message);
          setSubLoading(false);
        });
    }
  }, [selectedTab, subscribedUsers.length]);

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = useState(searchValue);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchValue), 300);
    return () => clearTimeout(handler);
  }, [searchValue]);

  // Filtered and sorted data with date filter
  const filteredData = useMemo(() => {
    let data = originalData;
    if (debouncedSearch) {
      const search = debouncedSearch.toLowerCase();
      data = data.filter((item) =>
        [item.firstName, item.lastName, item.email, item.phone, item.message]
          .join(" ")
          .toLowerCase()
          .includes(search)
      );
    }
    // Date filtering
    if (fromDate) {
      const from = new Date(fromDate);
      data = data.filter((item) => new Date(item.createdAt) >= from);
    }
    if (toDate) {
      const to = new Date(toDate);
      // Add 1 day to include the 'to' date fully
      to.setDate(to.getDate() + 1);
      data = data.filter((item) => new Date(item.createdAt) < to);
    }
    // Sorting
    if (sortValue === "asc") {
      data = [...data].sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortValue === "desc") {
      data = [...data].sort((a, b) => b.firstName.localeCompare(a.firstName));
    } else if (sortValue === "ascdate") {
      data = [...data].sort(
        (a, b) =>
          new Date(a.createdAt || "").getTime() -
          new Date(b.createdAt || "").getTime()
      );
    } else if (sortValue === "descdate") {
      data = [...data].sort(
        (a, b) =>
          new Date(b.createdAt || "").getTime() -
          new Date(a.createdAt || "").getTime()
      );
    }
    return data;
  }, [originalData, debouncedSearch, sortValue, fromDate, toDate]);

  // Handlers
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value),
    []
  );
  const handleSort = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setSortValue(e.target.value),
    []
  );

  // Delete all
  const deleteAll = useCallback(() => {
    fetch("/api", { method: "DELETE" }).then(() => {
      setOriginalData([]);
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 p-2 md:p-4 w-full max-w-full mx-auto text-white">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold focus:outline-none ${
            selectedTab === "contact"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSelectedTab("contact")}
        >
          Contact Data
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold focus:outline-none ${
            selectedTab === "subscribed"
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSelectedTab("subscribed")}
        >
          Subscribed Users
        </button>
      </div>

      {/* Tab Content */}
      {selectedTab === "contact" ? (
        <div className="flex flex-col gap-6 p-2 md:p-4 w-full max-w-full mx-auto text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Submitted Contact Data
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between w-full" >
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearch}
              className="w-full md:w-1/3 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Search contact data"
            />
            <select
              onChange={handleSort}
              value={sortValue}
              className="w-full md:w-[200px] p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Sort contact data"
            >
              <option value="asc">Sort by Name (A-Z)</option>
              <option value="desc">Sort by Name (Z-A)</option>
              <option value="ascdate">Sort by Date (Oldest)</option>
              <option value="descdate">Sort by Date (Newest)</option>
            </select>
            </div>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : filteredData.length === 0 ? (
            <p className="text-center text-gray-500">No data found.</p>
          ) : (
            <div className="flex flex-col gap-4 text-black" >
              {/* Card layout for mobile/tablet */}
              <div className="flex flex-col gap-4 lg:hidden ">
                {filteredData.map((item, index) => (
                  <div
                    key={item.email + item.createdAt + index}
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
                    <div className="flex flex-col md:flex-row md:gap-4 text-sm md:text-base text-black/80">
                      <span className="font-semibold">Date:</span>{" "}
                      {new Date(item.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              {/* Table layout for large screens */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left font-semibold">Name</th>
                      <th className="py-3 px-4 text-left font-semibold">Email</th>
                      <th className="py-3 px-4 text-left font-semibold">Phone</th>
                      <th className="py-3 px-4 text-left font-semibold">Message</th>
                      <th className="py-3 px-4 text-left font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={item.email + item.createdAt + index} className="border-t">
                        <td className="py-2 px-4">{item.firstName} {item.lastName}</td>
                        <td className="py-2 px-4">{item.email}</td>
                        <td className="py-2 px-4">{item.phone}</td>
                        <td className="py-2 px-4">{item.message}</td>
                        <td className="py-2 px-4">{new Date(item.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full">
          {subLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : subError ? (
            <p className="text-center text-red-500">{subError}</p>
          ) : subscribedUsers.length === 0 ? (
            <p className="text-center text-gray-500">No subscribed users found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[300px] w-full border border-gray-200 bg-white rounded-lg shadow-sm text-black">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left font-semibold">Email</th>
                    <th className="py-3 px-4 text-left font-semibold">Subscribed At</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribedUsers.map((user, idx) => (
                    <tr key={user.email + (user.createdAt || "") + idx} className="border-t">
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">
                        {user.createdAt
                          ? new Date(user.createdAt).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Showdata;
