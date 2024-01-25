import React from "react";
import { FaHeadphones, FaChartLine } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";

const Features = () => {
  return (
    <div className="bg-white p-4">
      <div>
        <span className="text-4xl font-bold text-center block mt-10 mb-10">
          Features
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-10">
        {/* Press Release Creation and Management */}
        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-black p-4">
            <FaHeadphones size={32} color="green" />
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">
              Simplify Your News Distribution Experience with PRP
            </span>
          </div>
          <p className="text-sm mt-2">
            PRP offers a user-friendly platform that empowers communication
            professionals to easily create and manage press releases. With our
            intuitive interface, you can upload multimedia assets, schedule
            releases, and maintain version control for consistent and
            professional communication.
          </p>
        </div>

        {/* Algorithmic Triage System */}
        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-black p-4">
            <IoFlash size={32} color="yellow" />
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">Algorithmic Triage System</span>
          </div>
          <p className="text-sm mt-2">
            Experience lightning-fast performance and responsiveness with our
            cutting-edge algorithmic triage system that prioritizes messages for
            distribution based on factors like source reputation and historical
            accuracy.
          </p>
        </div>

        {/* Advanced Content Analysis */}
        <div className="text-center flex flex-col items-center">
          <div className="rounded-full bg-black p-4">
            <FaChartLine size={32} color="green" />
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">Advanced Content Analysis</span>
          </div>
          <p className="text-sm mt-2">
            Enhance news wire functionality with advanced content analysis
            tools, including natural language processing and multimedia
            verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
