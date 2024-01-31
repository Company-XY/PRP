import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly bg-gradient-to-l from-grey to-black text-white">
      <div className="bg-gray-100 p-8 mx-4 text-center">
        <div className="flex flex-col items-center">
          <MdEmail size={48} className="text-blue-500" />
          <h3 className="text-lg font-semibold mt-2 mb-1">Email Us</h3>
        </div>
        <p className="text-gray-700">info@prp.com</p>
      </div>

      <div className="bg-gray-100 p-8 mx-4 text-center">
        <div className="flex flex-col items-center">
          <MdPhone size={48} className="text-blue-500" />
          <h3 className="text-lg font-semibold mt-2 mb-1">Call Us</h3>
        </div>
        <p className="text-gray-700">+1234567890</p>
      </div>

      <div className="bg-gray-100 p-8 mx-4">
        <div className="flex flex-col items-center">
          <MdLocationOn size={48} className="text-blue-500" />
          <h3 className="text-lg font-semibold mt-2 mb-1">Visit Us</h3>
        </div>
        <p className="text-gray-700">123 Street, Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Contacts;
