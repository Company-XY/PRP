import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Avatar from "../../assets/avatar.svg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Jane Doe",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="h-screen bg-pink">
      <div className="text-black text-center">
        <span className="text-4xl font-bold">Reviews</span>
        <p className="text-sm mt-3">
          Sustainable Growth: Achieve steady and <br /> sustainable growth with
          our innovative solutions.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Carousel
          autoPlay={true}
          interval={4000}
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          {/* Map over testimonials and render each one */}
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex justify-center items-center h-48">
                  <img
                    className="rounded-full bg-grey w-24 h-24 object-cover"
                    src={Avatar}
                    alt="Avatar"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-center text-xl mb-2">
                    {testimonial.name}
                  </div>
                  <p className="text-gray text-center">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
