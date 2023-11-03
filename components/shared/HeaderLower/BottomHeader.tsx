"use client";
import Logo from "@/components/Icons/Logo/logo";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="shadow-md w-full bg-white fixed top-14 sm:top-9 lg:top-16 z-50  "
      id="home"
    >
      <div className="max-w-screen-2xl m-auto px-5 lg:px-0">
        <nav className=" md:flex items-center justify-between  py-4  ">
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <div className="flex items-center ">
              <Link className="font-bold text-2xl" href={"/"}>
                <Logo />
              </Link>
              <div className="flex flex-col gap-0">
                <span className="text-3xl text-Brand-BG">TermiTeck</span>
                <span className="text-base text-Brand-BG ">
                  Pest Solutions,LLC
                </span>
              </div>
            </div>
          </div>

          <div className="text-3xl absolute right-5 top-5 cursor-pointer lg:hidden">
            <button
              className="focus:outline-none w-8 h-8 overflow-hidden "
              onClick={handleClick}
            >
              <span
                className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6 ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6  my-0.5 ${
                  isOpen
                    ? "-translate-x-5 opacity-0"
                    : "translate-x-0  opacity-100"
                }`}
              ></span>
              <span
                className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6 rounded-sm  ${
                  isOpen ? " -rotate-45 -translate-y-1" : "translate-y-1"
                } `}
              ></span>
            </button>
          </div>

          <ul
            className={`w-full z-50 bg-white  pb-12 absolute   lg:flex md:items-center lg:pb-0 lg:static   lg:z-auto  lg:w-auto lg:pl-0 py-2 transition-all duration-500 ease top-24 ${
              isOpen ? " left-0" : " -left-full "
            }`}
          >
            <li
              onClick={() => setIsOpen(false)}
              className=" bg-white flex flex-col gap-3 lg:bg-transparent lg:flex-row md:ml-8 text-xl md:my-0 "
            >
              <Link className="mx-5 text-Brand-BG text-2xl" href={"/"}>
                Home
              </Link>
              <Link className="mx-5 text-Brand-BG text-2xl" href={"/#about"}>
                About us
              </Link>
              <Link className="mx-5 text-Brand-BG text-2xl" href={"/#services"}>
                Services
              </Link>
              <Link className="mx-5 text-Brand-BG text-2xl" href={"/#contact"}>
                Contact Us
              </Link>
              <Link className="mx-5 text-Brand-BG text-2xl" href={"/#faq"}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
