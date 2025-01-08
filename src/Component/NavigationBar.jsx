import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../Assets/white_logo_transparent_background.png";
import { IoMdArrowDropdown } from "react-icons/io";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setNavbarVisible(false);
      else setNavbarVisible(true);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    { label: 'MEDIA', link: '/media', subOptions: ['Photos', 'Videos'] },
    { label: 'NEWS', link: '/news', subOptions: [] },
    { label: 'PAGES', link: '/pages', subOptions: ['Contact Us', 'FAQ'] },
  ];

  return (
    <div className="bg-white">
      <nav
        className={`bg-black/60 opacity-90 text-white z-50 fixed w-full top-0 left-0 transition-all duration-300 ${navbarVisible ? 'translate-y-0' : '-translate-y-28'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex justify-between items-center h-20 md:h-32">
            <div className="flex-shrink-0 w-[50%] sm:w-[50%] md:w-[20%] lg:w-[15%]">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-24 sm:h-16 md:h-20 lg:h-28 w-auto rounded-lg"
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

            <div className="hidden lg:flex">
              <NavLink
                to="/signup"
                activeClassName="bg-yellow-600"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 text-sm font-medium"
              >
                JOIN THE CLUB
              </NavLink>
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
                      <span className="block text-white text-lg">{menu.label}</span>
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
