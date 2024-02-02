import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://prp-server.onrender.com/api/v1";

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${baseUrl}/forgot_password`, {
        email,
      });
      console.log(response.data);
    } catch (error) {
      setError(
        error.response.data.message ||
          "An error occurred during password reset."
      );
      console.error("Password reset error:", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue">
          Forgot Password
        </h1>
        <form onSubmit={handleForgotPassword} className="mt-6">
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
          {error && (
            <div className="text-red-600 text-center mt-4">{error}</div>
          )}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide font-semibold text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-blue focus:outline-none focus:bg-blue"
            >
              {loading ? "Please Wait" : "Reset Password"}
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-black">
          Remembered your password?{" "}
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

export default ForgotPassword;
