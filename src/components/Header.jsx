import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../store/Slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-pink text-blue font-semibold py-3 px-10">
      <div>
        <Link to="/" className="text-xl font-bold ml-12">
          PRP
        </Link>
      </div>
      {user ? (
        <ul className="flex space-x-10 mr-9">
          <li>
            <div
              onClick={handleLogout}
              className="hover:underline cursor-pointer"
            >
              Logout
            </div>
          </li>
        </ul>
      ) : (
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
      )}
    </nav>
  );
};

export default Header;
