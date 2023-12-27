import React from 'react';
import africana from "../../assets/africana.jpg";

const About = () => {
  const backgroundImageAfricana = {
    backgroundImage: `url(${africana})`,
  };

  return (
    <div className='h-screen flex flex-col md:flex-row bg-pink'>
      {/* Column 1 - Text Content */}
      <div className="md:w-1/2 p-8 bg-pink">
        <div className="flex flex-col h-full">
          <div className="mt-20">
            <h1 className="font-bold font-sans-600 text-black text-left text-xl ml-4 mb-8 md:ml-12 md:mb-10">About PRP</h1>
            <p className="text-black text-left text-base ml-4 mb-4 md:ml-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span className="inline-block"/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-black text-left text-base ml-4 md:ml-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span className="inline-block"/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="mt-6 ml-4 md:ml-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><button className="rounded-[10px] ring-offset-2 ring-1 mt-1 p-1 px-6 md:px-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><p className="text-black ">Contact Us</p></button></div>
            <div><button className="rounded-[10px] bg-black p-2 px-6 md:px-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray duration-300"><p className="text-white ">Join Now</p></button></div>
          </div>
        </div>
      </div>

      {/* Column 2 - Background Image */}
      <div className='md:w-1/2 bg-cover bg-center md:bg-contain scale-50' style={backgroundImageAfricana}></div>
    </div>
  );
};

export default About;
