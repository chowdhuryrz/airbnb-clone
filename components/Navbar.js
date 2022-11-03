import Image from "next/image";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar({ placeholder }) {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearch("");
  };
  const searches = () => {
    router.push({
      pathname: "/search",
      query: {
        location: search,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
  };
  return (
    <>
      <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div className="relative flex itmes-center h-10 cursor-pointer my-auto">
          <Link href="/">
            <Image
              src="https://links.papareact.com/qd3"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </Link>
        </div>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm placeholder-gray-400">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder || "Start your search"}
            className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600"
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2" />
        </div>
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a Host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
        {search && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              mindDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                min={1}
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>
            <div className="flex">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button onClick={searches} className="flex-grow text-red-400">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;