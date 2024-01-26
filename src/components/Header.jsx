import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-gradient-to-r from-grey to-black text-white py-3 px-10">
      <div>
        <Link to="/" className="text-xl font-bold ml-12">
          PRP
        </Link>
      </div>
      <ul className="flex space-x-10 mr-9">
        <li>
          <Link to="/" className="hover:text-gray">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray">
            Services
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
