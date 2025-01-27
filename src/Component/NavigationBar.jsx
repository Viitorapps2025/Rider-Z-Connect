import { useState, useEffect, useRef } from 'react';
import '../Assets/CSS/Main.css'
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../Assets/white_logo_transparent_background.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenmobile, setIsDropdownOpenMobile] = useState(false);
  let timeoutId;

  const handleMouseEnterr = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setIsDropdownOpen(true);
  };

  const handleMouseLeavee = () => {
    // Start a timer to close the dropdown after 5 seconds
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };







  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const timeoutRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleDropdownMobile = () => {
    setIsDropdownOpenMobile((prev) => !prev);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);


  const handleScroll = () => {
    if (window.scrollY === 0) {
      setNavbarVisible(true); // Show top div only when scrolled to the top
    } else {
      setNavbarVisible(false); // Hide top div for any scroll position other than top
    }
  };



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 2000);
  };

  const menuItems = [
    { label: 'HOME', link: '/home', subOptions: [] },
    { label: 'ABOUT CLUB', link: '/about-club', subOptions: ['CLUB INFO', 'CLUB HISTORY', 'OUR MISSION', 'OUR MEMBERS'] },
    { label: 'RIDING REPORT', link: '/rides', subOptions: [] },
    { label: 'SHOP', link: '/shop', subOptions: [] },
    { label: 'RIDES', link: '/events', subOptions: [] },
    { label: 'MEDIA', link: '/media', subOptions: [] },
    { label: 'NEWS', link: '/news', subOptions: [] },
    { label: 'PAGES', link: '/pages', subOptions: ['Contact Us', 'FAQ'] },
    { label: 'FAQ', link: '/faq', subOptions: [] },
  ];


  return (
    <div className='mainnav'>
      <div
        className={`text-white p-3 w-full transition-all duration-300 ${navbarVisible ? 'block' : 'hidden'}`}
        style={{ backgroundColor: "#1d1d1d" }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* Left Section */}
          <div className="hidden md:flex text-sm items-center space-x-4">
            <span className="whitespace-nowrap">Welcome to our club!</span>
            <span className="text-yellow-500">•</span>
            <a
              href="mailto:admin@riderzconnect.com"
              className="hover:text-yellow-500 whitespace-nowrap"
            >
              admin@riderzconnect.com
            </a>
            <span className="text-yellow-500">•</span>
            {/* Social Icons */}
            {[
              { icon: <FaFacebookF />, label: "Facebook", href: "#" },
              { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
              { icon: <BsInstagram  />, label: "Instagram", href: "#" },
              { icon: <FaYoutube />, label: "YouTube", href: "#" },
              { icon: <RiTwitterXLine />, label: "Twitter", href: "#" },

           
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-yellow-500"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 md:absolute md:right-4 md:top-0 md:p-4
">
            {/* Search Icon */}
            <a href="#" className="text-yellow-500 hover:text-yellow-600">
              <FaSearch />
            </a>

            {/* Shopping Cart Icon */}
            <NavLink
              to="#"
              className="text-yellow-500 rounded-md hover:text-yellow-600 text-lg font-bold"
            >
              <FaShoppingCart />
            </NavLink>

            {/* User Icon with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterr}
              onMouseLeave={handleMouseLeavee}
            >
              {/* User Icon */}
              <NavLink
                to="#"
                className="text-yellow-500 rounded-md hover:text-yellow-600 text-lg font-bold"
                onClick={toggleDropdown} // Click handler for mobile
              >
                <FaUser />
              </NavLink>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                className="absolute top-full mt-2 w-48 bg-black z-20 shadow-lg rounded-lg left-0 md:right-0 md:left-auto"
                // style={{ maxWidth: "90vw" }} // Ensures dropdown fits within the screen
                >
                  <ul className="flex flex-col">
                    <li>
                      <NavLink
                        to="/signup"
                        className="block px-4 py-2 text-white hover:bg-yellow-600 hover:text-white"
                      >
                        Sign Up
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className="block px-4 py-2 text-white hover:bg-yellow-600 hover:text-white"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/edit-account"
                        className="block px-4 py-2 text-white hover:bg-yellow-600 hover:text-white"
                      >
                        Edit Your Account
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>


          </div>
        </div>
      </div>

      <nav
        className={`bg-black/60 opacity-90 text-white z-10 w-full fixed left-0 right-0 transition-all duration-300 ${navbarVisible ? 'top-15' : 'top-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex justify-between items-center h-20 md:h-20">
            <div className="flex-shrink-0 w-[50%] sm:w-[50%] md:w-[20%] lg:w-[11%] ">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className=" "
                />
              </NavLink>
            </div>

            {/* Center Section - Desktop Menu */}
            <div className="hidden lg:flex w-[70%] items-center justify-center space-x-4">
              <ul className="flex space-x-4">
                {menuItems.map((menu, index) => (
                  <li key={index} className="relative group" onMouseLeave={handleMouseLeave}>
                    <div className="flex items-center">
                      <NavLink
                        to={menu.link}
                        activeClassName="bg-gray-700"
                        className="text-white px-2 py-1 rounded-md text-sm font-medium hover:text-yellow-500"
                      >
                        {menu.label}
                      </NavLink>
                      {menu.subOptions.length > 0 && (
                        <IoMdArrowDropdown
                          className="ml-2 cursor-pointer text-lg"
                          onMouseEnter={() => handleMouseEnter(index)}
                        />
                      )}
                    </div>

                    {/* Sub-options */}
                    {menu.subOptions.length > 0 && activeDropdown === index && (
                      <ul
                        className="absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg w-40 flex flex-col"
                        onMouseLeave={handleMouseLeave}
                      >
                        {menu.subOptions.map((option, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={`${menu.link}/${option.toLowerCase().replace(/ /g, '-')}`}
                              activeClassName="bg-gray-600"
                              className="block px-4 py-2 text-sm text-white hover:text-yellow-600"
                            >
                              {option}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>


            {/* Mobile Menu - Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <span
                onClick={toggleMobileMenu}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl"
              >
                ☰
              </span>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`lg:hidden transition-all ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}
          >
            <div className="mt-2 rounded-md shadow-lg">
              <div className="py-1">
                {menuItems.map((menu, index) => (
                  <div key={index}>
                    <div
                      className="bg-black opacity-100 flex items-center justify-between px-4 py-2 hover:bg-gray-600"
                      onClick={() => toggleMobileDropdown(index)}
                    >
                      <NavLink
                        to={menu.link}
                        activeClassName="bg-gray-700"
                        className="text-white text-lg w-full block"
                        onClick={() => setMobileMenuOpen(false)} // Close menu on route change
                      >  <span className="block text-white text-lg">{menu.label}</span> </NavLink>
                      {menu.subOptions.length > 0 && (
                        <IoMdArrowDropdown className="text-lg text-white" />
                      )}
                    </div>
                    {/* Sub-options for Mobile */}
                    {menu.subOptions.length > 0 && activeMobileDropdown === index && (
                      <ul className="bg-gray-800 rounded-md shadow-lg">
                        {menu.subOptions.map((option, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={`${menu.link}/${option.toLowerCase().replace(/ /g, '-')}`}
                              activeClassName="bg-gray-600"
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                            >
                              {option}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <NavLink
                to="#"
                className="text-yellow-500 rounded-md hover:text-yellow-600 text-lg font-bold ml-8 "
              >
                <FaCartShopping />
              </NavLink>
              <div
                className="relative "
                onMouseEnter={handleMouseEnterr}
                onMouseLeave={handleMouseLeavee}
              >
                {/* User Icon */}
                <NavLink
                  to="#"
                  className="text-yellow-500  rounded-md hover:text-yellow-600 text-lg font-bold"
                  onClick={toggleDropdownMobile}
                >
                  <FaRegUser />
                </NavLink>

                {/* Dropdown Menu */}
                {isDropdownOpenmobile && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <ul className="flex flex-col">
                      <li>
                        <NavLink
                          to="/signup"
                          className="block px-4 py-2 text-white hover:bg-yellow-600 hover:text-white"
                        >
                          Sign Up
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/login"
                          className="block px-4 py-2 text-white hover:bg-yellow-600 hover:text-white"
                        >
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/edit-account"
                          className="block px-4 py-2 text-white hover:bg-yellow-600 hover:text-white"
                        >
                          Edit Your Account
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
