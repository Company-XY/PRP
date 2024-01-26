import React from "react";
import africana from "../../assets/africana.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-pink flex-wrap items-center py-10 px-2">
      {/* Column 1 - Text Content */}
      <div className="md:w-1/2 p-8 bg-pink">
        <div className="flex flex-col justify-center h-full">
          <div className="mt-20 md:mt-0 md:ml-12">
            <h1 className="font-bold text-3xl md:text-4xl text-black mb-6">
              About PRP
            </h1>
            <p className="text-base text-black mb-4">
              Press Release Portal (PRP) is a revolutionary platform that
              empowers newsmakers across Africa with an intuitive, efficient,
              and accessible tool to disseminate news, reach target audiences,
              and connect with media outlets.
            </p>
            <p className="text-base text-black mb-4">
              Our vision is to establish PRP as the premier communication
              platform for Africa, enabling seamless news distribution, media
              engagement, and performance tracking for newsmakers, media
              outlets, and news consumers.
            </p>
            <p className="text-base text-black mb-4">
              Our mission is to democratize access to news distribution and
              enhance communication across Africa by providing a user-friendly
              platform that seamlessly connects newsmakers, media outlets, and
              news consumers, fostering a vibrant and informed African media
              landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Column 2 - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={africana}
          alt="Africana"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
