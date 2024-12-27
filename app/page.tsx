import Typography from "@/components/Typography";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* 미션 */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <Typography.H1 className="text-[#A5A6F6] mb-8">
            Our mission
          </Typography.H1>
          <div className="space-y-4">
            <Typography.H4>
              유스핀랩은 자녀의 미래에
              <br />
              부가 따를 수 있게 한다는 미션을 수행합니다.
            </Typography.H4>
          </div>
        </div>
      </section>

      {/* 레모네이드 스탠드 */}
      <section className="py-24 bg-[#F9F7F4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Typography.H2 className="mb-4">
                미국 가정 경제 교육의 시작,
                <br />
                유스핀랩 스토리
              </Typography.H2>
              <Typography.P className="text-gray-600">
                미국에는 아이들이 직접 경제활동을 체험하며 돈과 윤리를 배우고,
                자신스럽게 돈과 경제개념을 익히는 가장 교육 문화가 있습니다.
              </Typography.P>
            </div>
            <div className="space-y-4">
              <Image
                src="https://placehold.co/800x500/F4F4F4/666666.png?text=YouthFinLab+Kids"
                alt="유스핀랩 교육을 받는 아이들"
                width={800}
                height={500}
                className="rounded-lg w-full"
              />
              <Image
                src="https://placehold.co/800x500/F4F4F4/666666.png?text=YouthFinLab+Story"
                alt="유스핀랩 교육 현장"
                width={800}
                height={500}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 우리나라는 어떤가요? */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://placehold.co/800x800/F4F4F4/666666.png?text=Parent+and+Child"
                alt="부모와 자녀가 대화하는 모습"
                width={800}
                height={800}
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <Typography.H2 className="mb-6">
                우리나라는 어떤가요?
              </Typography.H2>
              <div className="space-y-4">
                <Typography.P className="text-gray-600">
                  학교에서는 가치중심적, 실질적인 금융경제 교육을 전달지
                  어려웠습니다. 그렇게 배우고 자라 부모가 되고 나니, 아이에게
                  어떻게 가르쳐야할지 막막합니다.
                </Typography.P>
                <Typography.Blockquote>
                  "우리 집은 부자이기고 돈은 어디에서 왜 버는거야?" "네
                  아이만큼은 돈 걱정 없이 살면 좋겠어요."
                </Typography.Blockquote>
                <Typography.P className="text-gray-600">
                  좋은 교육을 시작으로, 자녀의 경제적 목표를 발견하고 경제적
                  자유를 누리는 가정이 될 수 있도록, 유스핀랩이 가족 금융
                  라이프스타일을 이끌어 나가겠습니다.
                </Typography.P>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 언론보도 */}
      <section className="py-24 bg-[#A5A6F6]">
        <div className="container mx-auto px-4">
          <Typography.H2 className="text-center text-white mb-12">
            언론보도
          </Typography.H2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "[인터뷰] 아이들 경제교육 전도사 이민혁 대표를...",
                date: "2024.01.23",
                image:
                  "https://placehold.co/400x250/F4F4F4/666666.png?text=News+1",
              },
              {
                title: "에듀테크, 프라이빗츠 A 투자 유치...누적 투자금 ...",
                date: "2024.01.20",
                image:
                  "https://placehold.co/400x250/F4F4F4/666666.png?text=News+2",
              },
              {
                title: "[웹툰형 만화] 아인의 머니트리 대한 '머니, 향은...",
                date: "2024.01.15",
                image:
                  "https://placehold.co/400x250/F4F4F4/666666.png?text=News+3",
              },
              {
                title: "신한투자증권, 원숭이도 '돈한' 돈에 이런이 교육...",
                date: "2024.01.12",
                image:
                  "https://placehold.co/400x250/F4F4F4/666666.png?text=News+4",
              },
              {
                title: "경찰교육 여론조사, 다음 효과적인 학습 경험 제...",
                date: "2024.01.10",
                image:
                  "https://placehold.co/400x250/F4F4F4/666666.png?text=News+5",
              },
              {
                title: "7인 초등학생 돈줄기가 '재린', 아이들 선택받은 ...",
                date: "2024.01.05",
                image:
                  "https://placehold.co/400x250/F4F4F4/666666.png?text=News+6",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="w-full"
                />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                  <Typography.P className="font-medium line-clamp-2">
                    {news.title}
                  </Typography.P>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-white px-6 py-2 rounded-full">
              더보기
            </button>
          </div>
        </div>
      </section>

      {/* 투자 및 제휴 문의 */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <Typography.H2 className="mb-12">투자 및 제휴 문의</Typography.H2>
          <div className="inline-block bg-[#A5A6F6] rounded-2xl p-8 text-white">
            <div className="space-y-4">
              <p className="text-lg">Email</p>
              <p className="text-2xl font-bold">hello@youthfinlab.com</p>
              <p className="text-lg mt-4">전화번호</p>
              <p className="text-2xl font-bold">123-1234-1234</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
