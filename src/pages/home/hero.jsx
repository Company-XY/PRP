import africa from "../../assets/africa.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  const backgroundImage = {
    backgroundImage: `url(${africa})`,
  };

  return (
    <div className="h-[90dvh] grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-grey to-black">
      <div className="col-span-1 md:col-span-1">
        <div className="flex flex-col h-full">
          <div className="mt-20">
            <h1 className="font-bold font-sans-600 text-white text-left text-7xl ml-12 mb-5">
              Empowering Africa's Media Landscape{" "}
              <span className="hidden">With PRP</span>
            </h1>
            <p className="text-white text-left text-lg ml-12">
              Revolutionize the way news is disseminated across Africa with PRP.{" "}
              <span className="inline-block" />
              Our platform empowers communication professionals, enriches media
              engagement and ensures access to credible information.
            </p>
          </div>
          <div className="mt-12 ml-12 flex justify-start space-x-5">
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
