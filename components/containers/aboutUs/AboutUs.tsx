const AboutUs = () => {
  return (
    <div className=" w-full px-5 py-20 bg-Brand-BG" id="about">
      <div className="w-full lg:w-2/4  m-auto">
        <h2 className="text-center text-6xl text-white mb-10">About Us </h2>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-center font-bold text-3xl text-white">
              Our Family, Your Shield
            </h2>
            <p className="text-lg mt-5 text-white  ">
              Here at TermiTek, we are not just a business; we are a family. For
              generations, we have been safeguarding homes and businesses from
              the nuisance of pests. Our journey began with a simple mission: to
              create pest-free environments where families could thrive and
              businesses could flourish. Today, we carry forward this legacy of
              excellence, ensuring your peace of mind in every service we
              provide.
            </p>
          </div>
          <div>
            <h2 className="text-center font-bold text-3xl text-white">
              Expertise You Can Trust
            </h2>
            <p className="text-lg mt-5 text-white ">
              With years of experience under our belt, we understand pests
              inside out. Our team comprises skilled technicians who are not
              only experts in the latest pest control techniques but also
              genuinely care about your well-being. We invest in continuous
              training to stay ahead of the curve, offering you cutting-edge
              solutions tailored to your unique needs.
            </p>
          </div>
          <div>
            <h2 className="text-center font-bold text-3xl text-white">
              Personalized Approach
            </h2>
            <p className="text-lg mt-5 text-white ">
              At TermiTek, we believe in personalized service. We know that
              every pest problem is unique, and one-size-fits-all solutions just
              dont cut it. Thats why we take the time to assess your situation
              thoroughly before crafting a customized pest control plan. Whether
              youre dealing with pesky insects, rodents, or any other unwelcome
              guests, we have the expertise to handle it effectively.
            </p>
          </div>
        </div>
        {/* this is about div */}
      </div>
    </div>
  );
};

export default AboutUs;
