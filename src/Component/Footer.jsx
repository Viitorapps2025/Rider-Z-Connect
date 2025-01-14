import { BsFacebook } from "react-icons/bs";
import logo from "../Assets/white_logo_transparent_background.png";
import {  FaLinkedin , FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import { ImGoogle2 } from "react-icons/im";
// import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black/95 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="text-center text-gray-400">
          <p>Copyright © 2025. All Rights Reserved.</p>
        </div>

        {/* Middle Section (Logo) */}
        <div className="text-center">
          <img src={logo} alt="Logo" className="mx-auto h-32" />
        </div>

        {/* Right Section (Social Media) */}
        <div className="flex justify-center lg:justify-end items-center space-x-4">
          <h1 className="font-bold text-md">SOCIAL MEDIA</h1>
          <div className="">
            <a href="https://www.facebook.com/share/1BBhLWTa26/" target="_blank" rel="noopener noreferrer">
              <BsFacebook className=" text-xl text-white"/>
            </a>
          </div>
          <div className="">
            <a href="https://www.instagram.com/riderzconnect_ind" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram  className=" text-xl text-white"/>
            </a>
          </div>
          <div className="">
            <a href="https://www.linkedin.com/company/viitorapps-technovation-pvt-ltd/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className=" text-xl text-white"/>
            </a>
          </div>
          <div className="">
            <a href="https://www.youtube.com/@riderzconnect_ind" target="_blank" rel="noopener noreferrer">
              <FaYoutube className=" text-xl text-white"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
