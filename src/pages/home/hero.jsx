import africa from "../../assets/africa.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  const backgroundImage = {
    backgroundImage: `url(${africa})`,
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-grey to-black">
      <div className="col-span-1 md:col-span-1">
        <div className="flex flex-col h-full">
          <div className="mt-20">
            <h1 className="font-bold font-sans-600 text-white text-left text-7xl ml-12 mb-5">
              Press Release Portal
            </h1>
            <p className="text-white text-left text-lg ml-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <span className="inline-block" />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mt-12 ml-12 grid grid-cols-2 px-5">
            <div>
              <button className="rounded-[10px] ring-offset-2 ring-1 mt-1 p-1 px-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <p className="text-white ">Learn More..</p>
              </button>
            </div>
            <Link to="/signup">
              <button className="rounded-[10px] bg-black p-2 px-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray duration-300">
                <p className="text-white ">Join Now</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="col-span-1 md:col-span-1 bg-cover bg-center scale-75"
        style={backgroundImage}
      ></div>
    </div>
  );
};

export default Hero;
