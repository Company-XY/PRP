import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-pink text-blue font-semibold py-3 px-10">
      <div>
        <Link to="/" className="text-xl font-bold ml-12">
          PRP
        </Link>
      </div>
      <ul className="flex space-x-10 mr-9">
        <li>
          <Link to="/" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
