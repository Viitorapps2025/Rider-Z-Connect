import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const VerifyOtp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://riderz-backend-ep.onrender.com/api/auth/verify-otp', {
        email,
        otp,
      });

      setMessage(response.data.message);
      setIsSuccess(response.data.success);

      if (response.data.success) {
      
        navigate('/'); //  home page route
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong. Please try again.';
      setMessage(errorMessage);
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-yellow-600">Verify OTP</h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-100">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-100  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the OTP"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-500 focus:outline-none"
          >
            Verify
          </button>
        </form>
        {message && (
          <div
            className={`mt-4 p-3 text-center text-sm rounded-md ${
              isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyOtp;
