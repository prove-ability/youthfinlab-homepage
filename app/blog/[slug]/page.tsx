"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { use } from "react";
import { BlogPost } from "../types";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((posts) => {
        const decodedSlug = decodeURIComponent(resolvedParams.slug);
        const foundPost = posts.find((p: BlogPost) => p.slug === decodedSlug);
        console.log("foundPost", foundPost);
        if (foundPost) {
          setPost(foundPost);
        } else {
          router.push("/404");
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [resolvedParams.slug, router]);

  if (isLoading) {
    return (
      <Section className="min-h-[50vh] flex items-center justify-center">
        <Typography.P>로딩중...</Typography.P>
      </Section>
    );
  }

  if (!post) return null;

  return (
    <main>
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
    </main>
  );
}
