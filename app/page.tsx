"use client";

import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* 미션 */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <Typography.H1 className="text-primary mb-8">
            모두를 위한
            <br />
            금융의 시작
          </Typography.H1>
          <div className="space-y-4">
            <Typography.H4>
              금융 지식이 만드는 큰 변화
              <br />
              금융교육 전문기업 유스핀랩과 함께하세요
            </Typography.H4>
          </div>
          <div className="flex justify-center">
            <Button color="">자세히 보기</Button>
          </div>
        </div>
      </section>
      {/* 섹션 1: 건강한 금융경제 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <Typography.H2 className="text-2xl font-bold border-none">
                건강한 금융경제
                <br />
                모두가 누릴 수 있는 지식
              </Typography.H2>
              <Typography.P className="text-gray-600 text-sm">
                금융교육은 더이상 선택이 아닌,
                <br />
                누구나 반드시 알아야 할 삶의 필수 지식입니다.
                <br />
                유스핀랩에서 건강한 금융생활을 위해 시작해 보세요
              </Typography.P>
            </div>
            <div className="flex-1">
              <Image
                src="https://placehold.co/800x500/F4F4F4/666666.png?text=Money+Management"
                alt="돈 관리 이미지"
                width={800}
                height={500}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 2: 체계적인 금융교육 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1 space-y-4">
              <Typography.H2 className="text-2xl font-bold border-none">
                체계적인 금융교육
                <br />
                프로그램 설계
              </Typography.H2>
              <Typography.P className="text-gray-600 text-sm">
                모두를 만족시키는 교육은
                <br />
                시작부터 끝까지 소통하며, 철저한 분석에서
                <br />
                최적의 프로그램을 설계합니다.
              </Typography.P>
            </div>
            <div className="flex-1">
              <Image
                src="https://placehold.co/800x500/F4F4F4/666666.png?text=Daily+Tips"
                alt="일상 팁 이미지"
                width={800}
                height={500}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 3: 동등하게 누릴 수 있는 금융 교육 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <Typography.H2 className="text-2xl font-bold border-none">
                동등하게 누릴 수 있는
                <br />
                금융 교육
              </Typography.H2>
              <Typography.P className="text-gray-600 text-sm">
                청소년, 지역아동센터, 자립지원청년
                <br />
                사회적 배려가 필요한 모든 이들을 위한
                <br />
                맞춤형 금융지원 교육을 시행합니다.
              </Typography.P>
            </div>
            <div className="flex-1">
              <Image
                src="https://placehold.co/800x500/F4F4F4/666666.png?text=Shopping+Tips"
                alt="쇼핑 팁 이미지"
                width={800}
                height={500}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 우리나라는 어떤가요? */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div>
              <Typography.H2 className="mb-6 text-center">
                오직 금융교육만을 제공합니다.
              </Typography.H2>
              <div className="space-y-4">
                <Typography.P className="text-gray-600">
                  금융교육에만 전념하는 금융경제교육 전문 유스핀랩은 수업도구 및
                  교보재 지원, 교수모형 개발 등 실생활 중심의 흥미로운 교육으로
                  금융의 더 나은 가치를 전달합니다.
                </Typography.P>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 파트너사 로고 섹션 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Typography.H2 className="text-center mb-12">
            함께하는 파트너
          </Typography.H2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16">
            {[
              "서울시 중구청",
              "YWCA",
              "국민대학교",
              "청소년금융교육협의회",
              "부경대학교",
              "BNK부산은행",
              "하나증권",
              "안국약품",
              "KEB하나은행",
              "IBK행복나눔재단",
              "화성시문화재단",
              "서민금융진흥원",
            ].map((partner) => (
              <div key={partner} className="flex items-center justify-center">
                <Typography.P className="text-gray-500 text-center text-sm font-medium">
                  {partner}
                </Typography.P>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 교육 문의 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Typography.H2 className="mb-8">교육 문의하기</Typography.H2>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => (window.location.href = "/contact")}
          >
            문의하기
          </Button>
        </div>
      </section>
    </main>
  );
}
