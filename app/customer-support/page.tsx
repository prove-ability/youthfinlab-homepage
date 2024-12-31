"use client";

import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import Accordion from "@/components/ui/Accordion";

export default function CustomerSupport() {
  return (
    <main>
      <Section background="gradient-primary" className="pt-24">
        <div className="max-w-3xl mx-auto">
          <Typography.H1 className="text-left text-foreground mb-6">
            고객지원
          </Typography.H1>
          <div className="space-y-2">
            <Typography.P className="text-left text-foreground">
              체계적인 단계별 과정으로 완성됩니다.
              <br />
              지금 경험해보세요!
            </Typography.P>
          </div>
        </div>
      </Section>

      <Section background="default">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* 교육 단계 */}
          <div>
            <Typography.H2 className="mb-8">교육 단계</Typography.H2>
            <ol className="space-y-8">
              <li className="space-y-2">
                <Typography.H4>1. 사전진단 및 분석</Typography.H4>
                <Typography.P className="text-muted-foreground">
                  교육 시작 전, 교육 대상의 필요 사항을 파악하여 맞춤에게 맞
                  맞는 맞춤형 교육을 설계합니다.
                </Typography.P>
              </li>
              <li className="space-y-2">
                <Typography.H4>2. 교육 설계</Typography.H4>
                <Typography.P className="text-muted-foreground">
                  교육 커리큘럼의 목표 설정과 주요 상과 지표를 반영한 플랜을
                  수립합니다.
                </Typography.P>
              </li>
              <li className="space-y-2">
                <Typography.H4>3. 교육 진행</Typography.H4>
                <Typography.P className="text-muted-foreground">
                  유스핀랩의 전문 강사진과 함께 실질적인 변화를 경험하세요.
                </Typography.P>
              </li>
              <li className="space-y-2">
                <Typography.H4>4. 결과 보고 및 사후 관리</Typography.H4>
                <Typography.P className="text-muted-foreground">
                  교육 대상자의 피드백 수집을 통해 체계적인 결과보고서를
                  전달하며 장기적 성장을 도모합니다.
                </Typography.P>
              </li>
            </ol>
          </div>

          {/* FAQ */}
          <div>
            <Typography.H2 className="mb-8">FAQ</Typography.H2>
            <Accordion type="single" collapsible className="w-full">
              <Accordion.Item value="item-1">
                <Accordion.Trigger className="text-left">
                  교육 관련 답변은 문의 후 얼마나 걸리나요?
                </Accordion.Trigger>
                <Accordion.Content>
                  <div className="space-y-4">
                    <Typography.P className="text-muted-foreground">
                      10:00 ~ 20:00 영업일 기준 2시간 이내로 안내를 드립니다.
                    </Typography.P>
                    <Typography.P className="text-muted-foreground">
                      유스핀랩은 고객님의 문의에 신속하고, 정확하게 응대하기
                      위해 최선을 다하고 있습니다. 😊
                    </Typography.P>
                    <div className="pl-4 space-y-2">
                      <Typography.P className="text-muted-foreground font-medium">
                        [운영시간]
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        - 운영시간: 평일 오전 10시부터 저녁 8시까지 운영되며, 이
                        시간 동안 접수 된 문의 사항은 2시간 이내로 답변 드리고
                        있습니다.
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        - 주말 및 공휴일 문의: 주말이나 공휴일에 접수된 문의는
                        영업일 기준으로 신속히 처리하여 안내 드립니다.
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        - 문의 방법: 홈페이지 문의하기 버튼을 통해 요청을
                        남겨주세요. 문의 접수 후, 담당자가 확인하여 세부 사항을
                        빠르게 안내 드립니다.
                      </Typography.P>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Trigger className="text-left">
                  커리큘럼을 확인하고 싶어요.
                </Accordion.Trigger>
                <Accordion.Content>
                  <div className="space-y-4">
                    <Typography.P className="text-muted-foreground">
                      교육 대상, 인원 등 상담 후 맞춤형 커리큘럼을 제안
                      드립니다.
                    </Typography.P>
                    <Typography.P className="text-muted-foreground">
                      유스핀랩에서는 모든 교육이 필요와 상황에 최적화될 수
                      있도록, 사전에 충분한 상담을 거쳐 맞춤형 커리큘럼을
                      설계하고 있습니다.
                    </Typography.P>
                    <div className="pl-4 space-y-2">
                      <Typography.P className="text-muted-foreground font-medium">
                        [커리큘럼 확인 및 설계 과정]
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        1. 사전 상담 진행
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        2. 맞춤형 커리큘럼 설계
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        3. 커리큘럼 제안서 제공
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        4. 체계적이고 구체적인 교육 계획
                      </Typography.P>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-3">
                <Accordion.Trigger className="text-left">
                  온라인으로도 교육이 가능한가요?
                </Accordion.Trigger>
                <Accordion.Content>
                  <div className="space-y-4">
                    <Typography.P className="text-muted-foreground">
                      네, 다양한 형태의 온라인 교육 방식을 제공하고 있습니다.
                    </Typography.P>
                    <div className="pl-4 space-y-2">
                      <Typography.P className="text-muted-foreground font-medium">
                        [온라인 교육 방식]
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        1. 라이브 스트리밍 강의
                        <br />
                        강사가 실시간으로 진행하는 온라인 강의로, 참여자간
                        실시간 소통이 가능합니다.
                      </Typography.P>
                      <Typography.P className="text-muted-foreground">
                        2. 녹화된 VOD 강의 제공
                        <br />
                        언제든 반복 학습이 가능한 녹화 강의를 제공합니다.
                      </Typography.P>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Section>
    </main>
  );
}
