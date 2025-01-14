import  { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";

const VerifyUser = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication token is missing. Please log in again.");
      return;
    }

    try {
      const response = await axios.patch(
        "https://riderz-backend-0e0d.onrender.com/api/auth/send-verification-code",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      setSuccessMessage(response.data.message || "Verification code sent successfully.");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "An error occurred.");
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
      <div className="lg:w-1/2 flex items-center justify-center bg-black lg:border-y-2 lg:border-l-2 rounded-md">
        <img
          src="https://t4.ftcdn.net/jpg/01/35/08/59/360_F_135085967_K8tvXYKca02oD8X0zDkbl3V9N9Sonemy.webp"
          alt="Signup Illustration"
          className="w-full h-[30vh] lg:h-auto object-fill"
        />
      </div>

      <div className="lg:w-1/2 flex items-center justify-center p-6 lg:border-y-2 lg:border-r-2 rounded-md">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-center">Verify Email</h1>
          <p className="text-gray-400 text-center mb-6">Send verification code to your email</p>
          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;
