"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between mx-auto px-4">
        <div className="flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Youthfinal</span>
          </Link>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
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
          <Link
            href="/about"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
