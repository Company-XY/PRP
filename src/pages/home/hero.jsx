import africa from "../../assets/africa.jpg";

const Section1 = () => {
  const backgroundImage = {
    backgroundImage: `url(${africa})`,
  };

  return (
    <div className='h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-grey to-black'>
      {/* Navigation Bar */}
      <nav className="col-span-1 md:col-span-2 text-white flex justify-between items-center">
        {/* Logo */}
        <div>
          <span className="text-xl font-bold ml-12">PRP</span>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-10 mr-9">
          <li><a href="#" className="hover:text-gray">Home</a></li>
          <li><a href="#" className="hover:text-gray">About</a></li>
          <li><a href="#" className="hover:text-gray">Services</a></li>
          <li><a href="#" className="hover:text-gray">Contact</a></li>
        </ul>
      </nav>
      <div className="col-span-1 md:col-span-1" >
        <div className="flex flex-col h-full">
          <div className="mt-20">
            <h1 className="font-bold font-sans-600 text-white text-left text-7xl ml-12 mb-5">Press Release Portal</h1>
            <p className="text-white text-left text-lg ml-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span className="inline-block"/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="mt-12 ml-12 grid grid-cols-2">
            <div><button className="rounded-[10px] ring-offset-2 ring-1 mt-1 p-1 px-10"><p className="text-white ">Learn More..</p></button></div>
            <div><button className="rounded-[10px] bg-black p-2 px-12 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"><p className="text-white ">Join Now</p></button></div>
          </div>
        </div>
      </div>

      {/* Empty Column for Spacing */}
      <div className='col-span-1 md:col-span-1 bg-cover bg-center scale-75' style={backgroundImage}></div>
    </div>
  );
};

export default Section1;
