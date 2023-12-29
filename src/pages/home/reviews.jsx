import React from 'react';
import Avatar from "../../assets/avatar.svg"

const Card = ({ title, description }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center items-center h-48">
        <img
          className="rounded-full bg-grey w-24 h-24 object-cover"
          src={Avatar}
          alt="Avatar"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-center text-xl mb-2">{title}</div>
        <p className="text-gray text-center">&ldquo;{description}&rdquo;</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className='h-screen bg-pink'>
      <div className="text-black text-center">
        <span className="text-4xl font-bold">Reviews</span>
        <p className="text-sm mt-3">
          Sustainable Growth: Achieve steady and <br /> sustainable growth with our innovative solutions.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Card
          title="John Doe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Reviews;
