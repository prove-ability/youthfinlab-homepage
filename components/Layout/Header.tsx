"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Button from "@/components/ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between mx-auto px-4">
        <div className="flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">유스핀랩</span>
          </Link>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {/* 블로그는 외부링크 */}
          <Link href="https://blog.naver.com/youthfinlab" target="_blank">
            블로그
          </Link>
          <Link href="/customer-support">고객지원</Link>
          <Button asChild>
            <Link href="/education-inquiry">교육문의</Link>
          </Button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground relative"
            aria-label="Toggle theme"
          >
            <div className="relative w-4 h-4">
              <Sun className="absolute inset-0 h-4 w-4 transition-transform scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute inset-0 h-4 w-4 transition-transform scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
            </div>
          </button>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="mr-4 p-2 rounded-md hover:bg-accent hover:text-accent-foreground relative"
            aria-label="Toggle theme"
          >
            <div className="relative w-4 h-4">
              <Sun className="absolute inset-0 h-4 w-4 transition-transform scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute inset-0 h-4 w-4 transition-transform scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
            </div>
          </button>
          <button
            onClick={handleClick}
            className="flex flex-col justify-center items-center"
          >
            <span
              className={`bg-black dark:bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-black dark:bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-black dark:bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
            ></span>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-14 left-0 right-0 bg-background border-b`}
      >
        <nav className="container mx-auto px-4 py-4">
          <Link
            href="https://blog.naver.com/youthfinlab"
            target="_blank"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            블로그
          </Link>
          <Link
            href="/customer-support"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            고객지원
          </Link>
          <Link
            href="/education-inquiry"
            className="block py-2 text-sm hover:text-gray-600 transition-colors"
          >
            교육문의
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
