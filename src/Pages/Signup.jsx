import  { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaEnvelope, FaLock, FaExclamationCircle, FaPhoneAlt, FaUser } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!email || !password || !fullname || !phone) {
      setError("Please fill in all fields.");
      return;
    }

    // API call
    try {
      const response = await fetch("https://riderz-backend-0e0d.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          fullname,
          phone,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Signup successful! Redirecting...");
        
        // Clear the input fields
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFullname("");
        setPhone("");

        // Redirect to the home page after a delay
        setTimeout(() => {
          navigate("/"); // Update with your home route
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white pt-10 lg:p-40"
      style={{
        backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/793/5/131/minimalism-digital-art-simple-background-cats-eyes-hd-wallpaper-preview.jpg')",
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
          <h1 className="text-3xl font-bold mb-4 text-center">Sign Up For Free</h1>
          <p className="text-gray-400 text-center mb-6">
            Quickly make your account in 1 minute
          </p>
          <form onSubmit={handleSignup}>
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-400 mb-2">
                Full Name
              </label>
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  id="fullname"
                  className="bg-transparent flex-1 focus:outline-none text-white"
                  placeholder="Enter your full name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
            </div>

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

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-400 mb-2">
                Confirm Password
              </label>
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  id="confirmPassword"
                  className="bg-transparent flex-1 focus:outline-none text-white"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-400 mb-2">
                Phone No.
              </label>
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
                <FaPhoneAlt className="text-gray-500 mr-2" />
                <input
                  type="text"
                  id="phone"
                  className="bg-transparent flex-1 focus:outline-none text-white"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-600 text-sm mt-2 flex items-center">
                <FaExclamationCircle className="mr-2" />
                <span>{error}</span>
              </p>
            )}

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-sm mt-2 flex items-center">
                <FaExclamationCircle className="mr-2" />
                <span>{success}</span>
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none"
            >
              Sign Up →
            </button>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
