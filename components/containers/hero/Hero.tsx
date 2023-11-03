"use client";
import TelephoneIcon from "@/components/Icons/TelephoneIcon/telephoneIcon";
import HeoroImage from "@/public/project_pictures/pestcontrolpic.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="h-auto lg:h-screen relative px-7 mt-36 lg: " id="home">
      <Image
        fill
        src={HeoroImage}
        alt="pest control"
        className="w-full h-auto z-10 object-cover"
      />

      <div className="max-w-screen-2xl m-auto relative z-30 ">
        <div className="w-full flex items-center h-full ">
          <div className="my-32 lg:my-52 flex flex-col gap-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              TERMITECK
            </h2>
            <p className=" text-3xl text-white">
              We are your Pest Control Solution.
            </p>
            <div className="flex flex-row gap-1 items-center text-white">
              <TelephoneIcon />
              <a href="tel:+4733378901" className="font-bold text-xl">
                Call Us now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
