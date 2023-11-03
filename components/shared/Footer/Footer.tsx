"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-Brand-BG w-full h-24 ">
      <div className="flex items-center justify-center lg:justify-between max-w-screen-2xl h-24 m-auto">
        <div className="flex gap-1 flex-col">
          <Link href="/">
            <h2 className="text-3xl text-white font-bold ">TermiTeck</h2>
            <p className="text-base text-white">Pest Solutions,LLC</p>
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex flex-row gap-4 font-bold text-white">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href="#about">About Us</Link>
            </li>
            <li>
              <Link href="#services">Service</Link>
            </li>
            <li>
              <Link href="#contact">Contact Us</Link>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
