import Image from "next/image";
import { ServiceText } from "./data";

const serviceCard = () => {
  return (
    <div className=" py-10">
      <div className="  flex flex-col lg:flex-row gap-8 ">
        {ServiceText.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col gap-4 items-center  px-2  rounded ">
              <Image
                width={400}
                height={400}
                src={item.image}
                alt="pest control"
              />
              <h2 className="text-black text-3xl font-bold text-center">
                {item.title}
              </h2>
              <p className="text-black text-lg text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default serviceCard;
