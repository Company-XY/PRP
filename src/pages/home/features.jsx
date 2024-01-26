import React from "react";
import africana from "../../assets/africana.jpg";

const Features = () => {
  return (
    <div className="bg-white py-8 px-10">
      <section className="flex flex-wrap items-center p-10 my-4">
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 uppercase font-bold">Effortless</p>
          <h2 className="font-semibold text-3xl my-4">
            Simplify Your News Distribution Experience with PRP
          </h2>
          <p className="text-gray-700 leading-8">
            PRP offers a user-friendly platform that empowers communication
            professionals to easily create and manage press releases. With our
            intuitive interface, you can upload multimedia assets, schedule
            releases, and maintain version control for consistent and
            professional communication.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={africana}
            alt="Africana"
            className="w-full md:max-w-md rounded-md"
          />
        </div>
      </section>
      <section className="flex flex-wrap items-center p-10 my-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={africana}
            alt="Africana"
            className="w-full md:max-w-md rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 uppercase font-bold">Fast</p>
          <h2 className="font-semibold text-3xl my-4">
            Save time and gain valuable insight with our powerful analytics
            tools.
          </h2>
          <p className="text-gray-700 leading-8">
            Our platform empowers communication professionals by providing a
            user-friendly interface for crafting compelling press releases. With
            features such as multimedia asset uploads, version control, and
            scheduled releases, you can streamline your communication efforts
            and ensure consistent and professional messaging. Additionally, our
            performance analytics and reporting tools offer detailed insights
            into press release distribution, media coverage, audience
            engagement, and campaign performance, enabling you to make
            data-driven decisions and optimize your communication strategy.
          </p>
        </div>
      </section>
      <section className="flex flex-wrap items-center p-10 my-4">
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 uppercase font-bold">Value</p>
          <h2 className="font-semibold text-3xl my-4">
            Empower Your Media Journey with PRP's Essential Features and
            Valuable News
          </h2>
          <p className="text-gray-700 leading-8">
            As a media practitioner, PRP offers you free access to essential
            features and valuable news to revolutionize your media journey.
          </p>
          <ul className="text-gray-700 leading-8 list-disc pl-6 mt-4">
            <li>Craft compelling press releases effortlessly</li>
            <li>Build valuable connections with media outlets</li>
            <li>
              Prioritize credibility with multi-level verification process
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={africana}
            alt="Africana"
            className="w-full md:max-w-md rounded-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Features;
