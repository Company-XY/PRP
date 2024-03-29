import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../store/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseUrl = "https://prp-server.onrender.com/api/v1";

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password === password2) {
      try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/auth/signup`, {
          role,
          username,
          email,
          password,
        });
        dispatch(setUser(response.data));
        navigate("/dashboard");
      } catch (error) {
        setError(
          error.response.data.error || "An error occurred during signup."
        );
        console.error("Signup error:", error.response.data);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full my-10 p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue">
          Sign up
        </h1>
        <form onSubmit={handleSignup} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-black"
            >
              Role
            </label>
            <select
              id="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="block w-full px-4 py-2 mt-2 text-grey bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="">Select Role</option>
              <option value="Newsmaker">Communications Practitioner</option>
              <option value="Newsroom">Newsroom</option>
            </select>
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-black"
            >
              Username
            </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-grey bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-grey bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-grey bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1 my-3">
            Password must be at least 8 characters long and include one
            uppercase letter, one lowercase letter, one digit, and one special
            character.
          </p>
          <div className="mb-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-grey bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {error && (
            <div className="text-red-600 text-center mt-4">{error}</div>
          )}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 border hover:border-none tracking-wide font-semibold text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-blue focus:outline-none focus:bg-blue"
            >
              {loading ? "Please Wait" : "Sign up"}
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-black">
          Already have an account ?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
