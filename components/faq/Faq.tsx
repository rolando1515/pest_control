const Faq = () => {
  return (
    <main className="bg-white px-5 py-20" id="faq">
      <div className="w-full  lg:max-w-screen-lg m-auto">
        <h2 className="text-center font-bold text-6xl mb-10 text-Brand-BG">
          FAQ
        </h2>

        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-bold">
              Are The Products Used For Pest Control Safe For Humans And Pets?
            </div>
            <div className="collapse-content">
              <p className="text-lg">
                Yes, the products we use for pest control are carefully selected
                to be safe for humans and pets. We prioritize the well-being of
                your family and animals. Our technicians are trained to apply
                these products responsibly, following industry best practices to
                minimize any potential risks. Additionally, we offer
                eco-friendly options and can discuss specific concerns you may
                have about the products used during our services. Your safety
                and the safety of your pets are our top priorities.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-bold">
              How Often Would I Need Service ?
            </div>
            <div className="collapse-content">
              <p className="text-lg">
                The frequency of pest control service depends on several
                factors, including the type of pests, the severity of the
                infestation, and the location of your property. For ongoing
                protection, many customers opt for regular, scheduled treatments
                on a quarterly basis. However, for more severe pest problems,
                monthly or bi-monthly services might be recommended initially.
                Our experienced technicians assess your specific situation and
                recommend a service plan tailored to your needs. Regular
                inspections and preventive treatments can help maintain a
                pest-free environment, ensuring long-term peace of mind for you
                and your family.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-bold">
              What Type Of Treatment Methods Do You Offer ?
            </div>
            <div className="collapse-content">
              <p className="text-lg">
                At Control, we employ a variety of advanced treatment methods to
                effectively address pest issues. Our approach includes a
                combination of environmentally friendly techniques, targeted
                chemical applications, and non-toxic solutions. We emphasize
                integrated pest management, which means we assess each situation
                individually and tailor our methods accordingly. This might
                involve barrier treatments, baiting systems, exclusion
                techniques, and ongoing monitoring to ensure the pests are
                eradicated and do not return. Rest assured, our experienced
                technicians are well-versed in the latest industry standards and
                employ the most suitable and safe methods to protect your home
                or business from pests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
