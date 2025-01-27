import { useState } from "react";
import ClubInfo from "../Component/Clubinfo"; 
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // Modal message state
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
    agree: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Reset errors before validation
    setFormErrors({
      name: "",
      email: "",
      message: "",
      agree: "",
    });

    // Validate fields
    let valid = true;
    let errors = {};

    if (!formData.name) {
      valid = false;
      errors.name = "Name is required";
    }

    if (!formData.email) {
      valid = false;
      errors.email = "Email is required";
    }

    if (!formData.message) {
      valid = false;
      errors.message = "Message is required";
    }

    if (!formData.agree) {
      valid = false;
      errors.agree = "You must agree to the terms";
    }

    if (!valid) {
      setFormErrors(errors);
      setIsSubmitting(false);
      setModalMessage("Please fill all the fields");
      return;
    }

    try {
      // Make a POST request to the backend API
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setModalMessage("Successful");
        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          message: "",
          agree: false,
        });
      } else {
        setModalMessage("An error occurred.");
      }
    } catch (error) {
      setModalMessage("An error occurred while sending your message.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="relative z-10">
        <ClubInfo
          name="Contact Us"
          background="https://www.adventurush.com/wp-content/uploads/2022/06/Overview-Image-3-1024x427.jpg"
        />
        <div className="text-white py-20 px-5" style={{ backgroundColor: "#1d1d1d" }}>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
            {/* Contact Information Card */}
            <div className="flex-1 bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-5">Contact Information</h3>
              <div className="space-y-6">
                {/* Head Office */}
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-yellow-600 text-2xl md:text-3xl" />
                  <div>
                    <h4 className="text-lg font-bold">HEAD OFFICE</h4>
                    <p>PLOT NO 15, DLF PHASE 2, GURUGRAM, HARYANA-122002</p>
                  </div>
                </div>

                {/* Call Support */}
                <div className="flex items-start space-x-4">
                  <FaPhoneAlt className="text-yellow-600 text-2xl md:text-3xl" />
                  <div>
                    <h4 className="text-lg font-bold">CALL SUPPORT</h4>
                    <p>+91 9818855952</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-yellow-600 text-2xl md:text-3xl" />
                    <div>
                      <h4 className="text-lg font-bold">EMAIL US</h4>
                      <a
                        href="mailto:admin@riderzconnect.com"
                        className="hover:text-yellow-500"
                      >
                        admin@riderzconnect.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-4 mt-10 ml-10">
                  <a
                    href="https://www.facebook.com/share/1BBhLWTa26/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook className="text-xl text-white hover:text-yellow-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/riderzconnect_ind"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram className="text-xl text-white hover:text-yellow-500" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/viitorapps-technovation-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-xl text-white  hover:text-yellow-500" />
                  </a>
                  <a
                    href="https://www.youtube.com/@riderzconnect_ind"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-xl text-white  hover:text-yellow-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="flex-1 bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-5">Send Us a Message</h3>
              <p className="mb-5">
                If you have any questions or need more information, please use the
                form below to send us a message.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <label htmlFor="agree" className="text-sm">
                    I agree that my submitted data is being collected and stored.
                    For further details on handling user data, see our Privacy
                    Policy.
                  </label>
                </div>
                {formErrors.agree && (
                  <p className="text-red-500 text-sm">{formErrors.agree}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-2 bg-yellow-600 text-white font-bold rounded-md hover:bg-yellow-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="text-green-600 ">
            <h2 className="text-2xl font-bold">{modalMessage}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
