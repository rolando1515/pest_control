"use client";
import ServiceCard from "@/components/ServiceCard/serviceCard";
import AboutUs from "@/components/containers/aboutUs/AboutUs";
import ContactUs from "@/components/containers/contact/contact";
import Hero from "@/components/containers/hero/Hero";
import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <main>
      {/* our hero section  */}
      <Hero />
      {/* our service page  */}
      <div className="w-full z-50" id="services">
        <h1 className="capitalize text-center font-bold text-6xl py-10 text-Brand-BG">
          our services
        </h1>
        <div className="max-w-screen-2xl m-auto px-5 ">
          <ServiceCard />
        </div>
      </div>
      {/* About us page  */}
      <AboutUs />

      {/* our FAQ page  */}

      <Faq />

      {/* our contact page  */}
      <ContactUs />
    </main>
  );
}
