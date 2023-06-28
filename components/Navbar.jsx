"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const Navbar = ({ fontColor, fontSize, fontWeight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [tappedMenu, setTappedMenu] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const timeoutRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (hovered) => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
    setHoveredLink(hovered);
  };
  const hideSubmenu = () => {
    setIsOpen(false);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(hideSubmenu, 400);
  };

  const links = [
    {
      name: "Home",
      link: "/",
      submenu: false,
    },
    {
      name: "About",
      link: "/",
      hasSubmenu: true,
      submenu: [
        {
          name: "About",
          link: "/",
        },
        {
          name: "About Owner",
          link: "/",
        },
      ],
    },
    {
      name: "Classes",
      link: "/",
      hasSubmenu: true,
      submenu: [
        {
          name: "Striking",
          link: "/",
        },
        {
          name: "Fitness",
          link: "/",
        },
        {
          name: "Kids",
          link: "/",
        },
        {
          name: "Results based",
          link: "/",
        },
      ],
    },
    {
      name: "Schedule",
      link: "/",
      submenu: false,
    },
    {
      name: "Coaches",
      link: "/",
      submenu: false,
    },
    {
      name: "FAQ",
      link: "/",
      submenu: false,
    },
    {
      name: "Contact",
      link: "/",
      submenu: false,
    },
  ];
  useEffect(() => {
    console.log(isOpen, "submenu");
  }, [isOpen]);
  return (
    <nav className="bg-black">
      {/*This is menu section for mobile view */}
      {isOpen && (
        <div className="absolute font-nav gap-y-6 md:hidden  py-6  flex flex-col items-center bg-darkblack top-16 text-white  w-screen animate-fade-in">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.hasSubmenu ? (
                <div
                  className="text-center"
                  onClick={() => {
                    setTappedMenu(tappedMenu === link.name ? null : link.name);
                    setShowSubmenu(!showSubmenu);
                  }}
                >
                  <button
                    className={`text-md ${
                      tappedMenu === link.name ? "animate-pulse" : ""
                    }`}
                  >
                    {link.name.toUpperCase()}
                  </button>
                  {showSubmenu && tappedMenu === link.name && (
                    <div className="flex flex-col mt-2 text-sm gap-y-2 py-2 bg-lightyellow w-screen text-darkblack items-center transition-all duration-100">
                      {link.submenu.map((submenuItem, index) => (
                        <a key={index} href={submenuItem.link} className="">
                          {submenuItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a href={link.link} className="text-md">
                  {link.name.toUpperCase()}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 md:py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-x-10 h-16 justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 hidden md:block">
              <Image
                height={50}
                width={183}
                priority
                src={"/images/logo.png"}
                alt="Logo"
              />
            </div>
            <div className="flex-shrink-0 md:hidden ">
              <Image
                height={50}
                width={100}
                priority
                src={"/images/logo.png"}
                alt="Logo"
              />
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M19.354 18.354l-4.708-4.708 4.708-4.708a.5.5 0 0 0-.708-.708l-4.708 4.708-4.708-4.708a.5.5 0 0 0-.708.708l4.708 4.708-4.708 4.708a.5.5 0 0 0 .708.708l4.708-4.708 4.708 4.708a.5.5 0 0 0 .708-.708z" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className=" flex  space-x-4">
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  {link.hasSubmenu ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(link.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button className="hover:bg-customblack hover:text-white px-3 py-2 rounded-md text-nav font-nav focus:outline-none">
                        {link.name.toUpperCase()}
                      </button>
                      {isOpen && hoveredLink === link.name ? (
                        <div className="absolute  hidden mt-2 w-48 bg-customblack rounded-md overflow-hidden shadow-lg  md:block">
                          {link.submenu.map((submenuItem, index) => (
                            <a
                              key={index}
                              href={submenuItem.link}
                              className="block px-4 py-2 font-nav text-md text-white hover:bg-lightyellow hover:text-customblack"
                            >
                              {submenuItem.name}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.link}
                      className="hover:bg-customblack hover:text-white px-3 py-2 rounded-md text-nav font-nav"
                    >
                      {link.name.toUpperCase()}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="hidden md:block ">
            <Button
              text="GET 1 WEEK TRIAL PASS"
              isLink={true}
              to=""
              fill={true}
              size="sm"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
