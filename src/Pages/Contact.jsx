//import React from "react";
import { BsGeoAltFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Card Container */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <div className="md:flex md:justify-between">
          {/* Form Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Write us</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2  focus:ring-yellow-600"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2  focus:ring-yellow-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2  focus:ring-yellow-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-yellow-600 text-white rounded hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-bold mb-6">Contact information</h2>
            <p className="mb-6">
              We&rsquo;re open for any suggestion or just to have a chat.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <BsGeoAltFill className="text-orange-500 mr-4" />
                <span>
                  <strong>Address:</strong> 198 West 21th Street, Suite 721 New York NY 10016
                </span>
              </li>
              <li className="flex items-center">
                <AiFillPhone className="text-orange-500 mr-4" />
                <span>
                  <strong>Phone:</strong> +1235 2355 98
                </span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-orange-500 mr-4" />
                <span>
                  <strong>Email:</strong> info@yoursite.com
                </span>
              </li>
              <li className="flex items-center">
                <FaExternalLinkAlt className="text-orange-500 mr-4" />
                <span>
                  <strong>Website:</strong> yoursite.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
