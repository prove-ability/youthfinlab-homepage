"use client";

import { useState } from "react";

const Header = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between mx-auto px-4">
        <div className="flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Youthfinal</span>
          </a>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
        {/* 햄버거 메뉴 버튼 */}
        <button
          onClick={handleClick}
          className="md:hidden flex flex-col justify-center items-center"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
          ></span>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-14 left-0 right-0 bg-background border-b`}
      >
        <nav className="container mx-auto px-4 py-4">
          <a
            href="/about"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            About
          </a>
          <a
            href="/blog"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
