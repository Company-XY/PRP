import React from "react";
import africana from "../../assets/africana.jpg";

const About = () => {
  const backgroundImageAfricana = {
    backgroundImage: `url(${africana})`,
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-pink">
      {/* Column 1 - Text Content */}
      <div className="md:w-1/2 p-8 bg-pink">
        <div className="flex flex-col h-full">
          <div className="mt-20">
            <h1 className="font-bold font-sans-600 text-black text-left text-xl ml-4 mb-8 md:ml-12 md:mb-10">
              About PRP
            </h1>
            <p className="text-black text-left text-base ml-4 mb-4 md:ml-12">
              Press Release Portal (PRP) is a revolutionary platform that
              empowers newsmakers across Africa with an intuitive, efficient,
              and accessible tool to disseminate news, reach target audiences,
              and connect with media outlets.
            </p>
            <p className="text-black text-left text-base ml-4 md:ml-12">
              Our vision is to establish PRP as the premier communication
              platform for Africa, enabling seamless news distribution, media
              engagement, and performance tracking for newsmakers, media
              outlets, and news consumers.
            </p>
            <p className="text-black text-left text-base ml-4 md:ml-12">
              Our mission is to democratize access to news distribution and
              enhance communication across Africa by providing a user-friendly
              platform that seamlessly connects newsmakers, media outlets, and
              news consumers, fostering a vibrant and informed African media
              landscape.
            </p>
            <p className="text-black text-left text-base ml-4 md:ml-12">
              We are committed to the core values of accessibility, credibility,
              efficiency, and scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Column 2 - Background Image */}
      <div
        className="md:w-1/2 bg-cover bg-center md:bg-contain scale-50"
        style={backgroundImageAfricana}
      ></div>
    </div>
  );
};

export default About;
