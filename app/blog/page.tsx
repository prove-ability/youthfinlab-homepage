"use client";

import { useEffect, useState } from "react";
import Typography from "@/components/ui/Typography";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { BlogPost } from "./types";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <Section background="gradient-primary" className="pt-24">
        <div className="max-w-3xl mx-auto">
          <Typography.H1 className="text-left text-foreground mb-6">
            블로그
          </Typography.H1>
          <Typography.P className="text-muted-foreground">
            유스핀랩의 금융교육 이야기를 만나보세요
          </Typography.P>
        </div>
      </Section>

      <Section background="default">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-8">
            {isLoading ? (
              <>
                <li className="border border-border rounded-lg p-6">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                </li>
                <li className="border border-border rounded-lg p-6">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                </li>
              </>
            ) : (
              posts.map((post: BlogPost, index: number) => (
                <li
                  key={index}
                  className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <Link href={`/blog/${post.slug}`} className="space-y-2">
                    <Typography.H4 className="group-hover:text-primary transition-colors">
                      {post.title}
                    </Typography.H4>
                    <Typography.P className="text-muted-foreground line-clamp-2">
                      {post.description}
                    </Typography.P>
                    <Typography.Muted>
                      {new Date(post.pubDate).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography.Muted>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </Section>
    </main>
  );
};

export default Blog;
