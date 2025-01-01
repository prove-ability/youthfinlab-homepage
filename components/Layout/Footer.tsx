import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-[#2A2A2A] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* 회사 정보 */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-bold text-xl">유스핀랩</span>
            </Link>
            <div className="space-y-1.5 text-sm text-gray-300">
              <p>사업자번호 281-22-02031 · 대표 고진주</p>
              <p>비즈니스 문의 youthfinlab@gmail.com</p>
              <p>경기도 수원시 에듀타운로 102</p>
            </div>
          </div>

          {/* 메뉴 링크 */}
          <div className="flex flex-col md:flex-row gap-3">
            <Link
              href="https://blog.naver.com/youthfinlab"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              블로그
            </Link>
            <Link
              href="/customer-support"
              className="text-gray-300 hover:text-white transition-colors"
            >
              고객지원
            </Link>
            <Link
              href="/education-inquiry"
              className="text-gray-300 hover:text-white transition-colors"
            >
              교육문의
            </Link>
            {/* TODO: 링크 생성 후 적용 예정 */}
            {/* <Link
              href="/recruit"
              className="text-gray-300 hover:text-white transition-colors"
            >
              강사채용
            </Link> */}
          </div>
        </div>

        {/* 카피라이트 */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center md:text-left">
            Copyright © Youthfinal Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
