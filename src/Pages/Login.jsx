import  { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {


 


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    // API call
    try {
      const response = await fetch(
        "https://riderz-backend-0e0d.onrender.com/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      const data = await response.json();
      setSuccessMessage("Login successful!");
      console.log("Login Response:", data);
      
    if (data.token) {
      localStorage.setItem("token", data.token);
    } else {
      throw new Error("No token received!");
    }
      // Handle the response as needed (e.g., save token, redirect)
    } catch (err) {
      setError(err.message || "An error occurred!");
      console.error("Login Error:", err);
    }

  };

  return (
    <div
      className="flex flex-col lg:flex-row min-h-screen text-white pt-10 lg:p-40"
      style={{
        backgroundImage:
          "url('https://c4.wallpaperflare.com/wallpaper/793/5/131/minimalism-digital-art-simple-background-cats-eyes-hd-wallpaper-preview.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {/* Left Section (Image for Desktop View) */}
      <div className="lg:w-1/2 flex items-center justify-center bg-black lg:border-y-2 lg:border-l-2 rounded-md">
        <img
          src="https://t4.ftcdn.net/jpg/01/35/08/59/360_F_135085967_K8tvXYKca02oD8X0zDkbl3V9N9Sonemy.webp"
          alt="Signup Illustration"
          className="w-full h-[30vh] lg:h-auto object-fill"
        />
      </div>

      {/* Right Section (Form) */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 lg:border-y-2 lg:border-r-2 rounded-md">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
          <p className="text-gray-400 text-center mb-6">Login to your account</p>
          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email Address
              </label>
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  id="email"
                  className="bg-transparent flex-1 focus:outline-none text-white"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-400 mb-2">
                Password
              </label>
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  id="password"
                  className="bg-transparent flex-1 focus:outline-none text-white"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Error and Success Messages */}
            {error && (
              <div className="mb-4 text-red-500 text-center">
                <p>{error}</p>
              </div>
            )}
            {successMessage && (
              <div className="mb-4 text-green-500 text-center">
                <p>{successMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none"
            >
              Login →
            </button>
            <a onClick={()=>window.open("/verifyuser")}>Forgot Password</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
