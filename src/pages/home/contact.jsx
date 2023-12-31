import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white h-full">
      <div className="text-black text-center">
        <span className="text-4xl font-bold">Contact Us</span>
        <p className="text-sm mt-3">
          Sustainable Growth: Achieve steady and <br /> sustainable growth with our innovative solutions.
        </p>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="border-3 rounded-full bg-white shadow flex mt-4">
          <input
            type="text"
            placeholder="Enter your Email Here"
            className="w-full rounded-full py-2 px-8"
          />
          <button className="bg-black rounded-full hover:bg-gray py-2 px-6">
            <p className="font-semibold text-base text-white">Submit</p>
          </button>
        </div>
      </div>
      <div class="w-full p-5 my-6 ml-10 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-gradient-to-r from-grey to-black">
			<div class="flex">
				<h1 class="font-bold text-white text-3xl">Talk To Us</h1>
			</div>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
        </div>
				<div class="my-4">
					<textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div class="my-2 w-1/2 lg:w-1/4">
					<button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Send Message
          </button>
				</div>
			</div>

			<div
				class="w-full mr-1 mb-8 lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl bg-gradient-to-r from-grey to-black">
				<div class="flex flex-col text-white">
					<h1 class="font-bold text-2xl my-4">Drop in at our office</h1>
					<p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						tincidunt arcu diam,
						eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
					</p>

					<div class="flex my-4 w-2/3 lg:w-1/2">
						<div class="flex flex-col">
							<i class="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Main Office</h2>
              <p class="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <i class="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Call Us</h2>
              <p class="text-gray-400">Tel: xxx-xxx-xxx</p>
              <p class="text-gray-400">Fax: xxx-xxx-xxx</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
