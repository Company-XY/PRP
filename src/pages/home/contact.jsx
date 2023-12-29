import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white h-screen">
      <div className="text-black text-center">
        <span className="text-4xl font-bold">Contact Us</span>
        <p className="text-sm mt-3">
          Sustainable Growth: Achieve steady and <br /> sustainable growth with our innovative solutions.
        </p>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="border-2 border-red rounded-full bg-white shadow flex mt-4">
          <input
            type="text"
            placeholder="Enter your Email Here"
            className="w-full rounded-tl-full rounded-bl-full py-2 px-8"
          />
          <button className="bg-black rounded-full rounded-br-full hover:bg-gray py-2 px-6">
            <p className="font-semibold text-base text-white">Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
