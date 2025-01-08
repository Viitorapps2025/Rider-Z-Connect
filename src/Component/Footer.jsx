import { BsFacebook } from "react-icons/bs";
import logo from "../Assets/white_logo_transparent_background.png";
import { FaTwitterSquare } from "react-icons/fa";
import { ImGoogle2 } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="bg-black/95 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="text-center text-gray-400">
          <p>Copyright © 2019. All Rights Reserved.</p>
        </div>

        {/* Middle Section (Logo) */}
        <div className="text-center">
          <img src={logo} alt="Logo" className="mx-auto h-32" />
        </div>

        {/* Right Section (Social Media) */}
        <div className="flex justify-center lg:justify-end items-center space-x-4">
          <h1 className="font-bold text-md">SOCIAL MEDIA</h1>
          <div className="bg-black h-10 w-10 flex items-center justify-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <BsFacebook className=" text-xl text-white"/>
            </a>
          </div>
          <div className="bg-black h-10 w-10 flex items-center justify-center">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare  className=" text-xl text-white"/>
            </a>
          </div>
          <div className="bg-black h-10 w-10 flex items-center justify-center">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <ImGoogle2 className=" text-xl text-white"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
