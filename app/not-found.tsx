import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <Section className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative w-[280px] h-[280px] mx-auto mb-8">
          <Image
            src="/error/404.png"
            alt="404 에러 이미지"
            fill
            priority
            className="object-contain"
          />
        </div>
        {/* <Typography.H1 className="text-6xl font-bold mb-4">404</Typography.H1> */}
        <Typography.H2 className="border-none">
          페이지를 찾을 수 없습니다
        </Typography.H2>
        <Typography.P className="text-muted-foreground">
          요청하신 페이지가 삭제되었거나 잘못된 경로입니다.
        </Typography.P>
        <div className="pt-4">
          <Link href="/">
            <Button size="lg">홈으로 돌아가기</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
