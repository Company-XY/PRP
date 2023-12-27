import React from 'react';
import { FaHeadphones, FaChartLine } from 'react-icons/fa';
import { IoFlash } from 'react-icons/io5';

const Features = () => {
  return (
    <div className="bg-white p-4">
      <div>
        <span className="text-4xl font-bold text-center block mt-10 mb-10">Features</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-10">
        {/* Headphones Icon */}
        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-black p-4">
            <FaHeadphones size={32} color="green" />
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">Communication</span>
          </div>
          <p className="text-sm mt-2">
            High-Quality Sound: Immerse yourself <br />in a world of crystal-clear audio with our premium headphones.
          </p>
        </div>

        {/* Flash Icon */}
        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-black p-4">
            <IoFlash size={32} color="yellow" />
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">Fast</span>
          </div>
          <p className="text-sm mt-2">
            Flash Speed: Experience lightning-fast <br />performance and responsiveness with our cutting-edge flash technology.
          </p>
        </div>

        {/* Growth Icon */}
        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-black p-4">
            <FaChartLine size={32} color="green" />
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">Growth</span>
          </div>
          <p className="text-sm mt-2">
            Sustainable Growth: Achieve steady and <br /> sustainable growth with our innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
