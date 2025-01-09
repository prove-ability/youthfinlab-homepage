import { redirect } from "next/navigation";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { BlogPost } from "../types";
import { Metadata } from "next";

async function getBlogPosts() {
  const res = await fetch("https://www.youthfinlab.com/api/blog", {
    next: { revalidate: 3600 }, // 1시간마다 재검증
  });

  if (!res.ok) {
    throw new Error("블로그 포스트를 가져오는데 실패했습니다");
  }

  return res.json();
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const posts = await getBlogPosts();
  const slug = (await params).slug;
  const decodedSlug = decodeURIComponent(slug);
  const post = posts.find((p: BlogPost) => p.slug === decodedSlug);

  if (!post) {
    redirect("/404");
  }

  return (
    <Section background="gradient-primary" className="pt-24">
      <div className="max-w-3xl mx-auto">
        <Typography.H1 className="mb-6">{post.title}</Typography.H1>
        <Typography.P className="text-muted-foreground mb-8">
          {new Date(post.pubDate).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography.P>
        <Typography.P className="text-muted-foreground mb-12">
          {post.description}
        </Typography.P>
        <Button
          asChild
          size="lg"
          className="bg-[#03C75A] hover:bg-[#03C75A]/90 shadow-lg hover:shadow-xl transition-all"
        >
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <svg viewBox="0 0 20 20" className="w-5 h-5 fill-current">
              <path d="M11.98 4.97a1 1 0 011.04.23l4.49 4.49a1 1 0 010 1.42l-4.49 4.49a1 1 0 01-1.04.23 1 1 0 01-.64-.94V11H5.5a1 1 0 01-1-1V9a1 1 0 011-1h5.84V4.11a1 1 0 01.64-.94z" />
            </svg>
            네이버 블로그에서 전체 글 보기
          </a>
        </Button>
      </div>
    </Section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = await getBlogPosts();
  const slug = (await params).slug;
  const decodedSlug = decodeURIComponent(slug);
  const post = posts.find((p: BlogPost) => p.slug === decodedSlug);

  if (!post) {
    return {
      title: "페이지를 찾을 수 없습니다 - 유스핀랩",
      description: "요청하신 페이지가 존재하지 않습니다.",
    };
  }

  const keywords = [
    "금융교육",
    "경제교육",
    "금융교육강사",
    "청소년금융교육",
    "금융캠프",
    "경제교육강사",
    "금융연수",
    "금융특강",
    "취약계층금융교육",
    "자립지원청년금융교육",
    "고립은둔금융교육",
  ].join(", ");

  return {
    title: `${post.title} - 유스핀랩`,
    description: `${post.description} | 금융교육 전문기업 유스핀랩의 금융교육 이야기입니다. 청소년금융교육, 금융캠프, 금융특강 등 다양한 금융교육 프로그램을 제공합니다.`,
    keywords,
    openGraph: {
      title: `${post.title} - 유스핀랩`,
      description: `${post.description} | 금융교육 전문기업 유스핀랩의 금융교육 이야기입니다. 청소년금융교육, 금융캠프, 금융특강 등 다양한 금융교육 프로그램을 제공합니다.`,
      url: `https://www.youthfinlab.com/blog/${post.slug}`,
      siteName: "유스핀랩",
      locale: "ko_KR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}
