"use client";
import ClockIcon from "@/components/Icons/ClockIcon/clockIcon";
import LocationIcon from "@/components/Icons/LocationIcon/locationIcon";
import TelephoneIcon from "@/components/Icons/TelephoneIcon/telephoneIcon";

import { SetStateAction, useState } from "react";

const TopHeader = () => {
  // Step 1: State Management
  const [inputValue, setInputValue] = useState("");

  // Step 2: Event Handling
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  return (
    <main className="bg-Brand-BG w-full px-3 py-3 sm:py-0 fixed z-50 top-0">
      <div className="max-w-screen-2xl m-auto py-2">
        <div className="flex justify-between items-center">
          <ul className="list-none flex flex-row gap-2 w-full lg:w-1/2">
            <li className="flex gap-1 text-white text-xs md:text-sm">
              <TelephoneIcon />
              <span>123-345-3444</span>
            </li>

            <li className="flex gap-1 text-white text-xs md:text-sm">
              <ClockIcon />
              <span>Mon - Fri 8:00 - 18:00</span>
            </li>
            <li className="flex gap-1 text-white text-xs md:text-sm">
              <LocationIcon />
              <span>1234 Street Adress City, State 12345</span>
            </li>
          </ul>
          {/* searchbox  */}
          <div className="hidden lg:block w-50">
            {/* Step 3: Bind Input to State */}
            <input
              type="text"
              placeholder="Search...."
              className="input input-bordered w-full max-w-xs px-3 bg-white"
              value={inputValue} // Binding input to state
              onChange={handleInputChange} // Handling input change
            />
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default TopHeader;
