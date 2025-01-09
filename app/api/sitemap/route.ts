import { BlogPost } from "@/app/blog/types";

export async function GET() {
  const baseUrl = "https://www.youthfinlab.com";

  // 블로그 포스트 가져오기
  const blogRes = await fetch(`${baseUrl}/api/blog`);
  const posts: BlogPost[] = await blogRes.json();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/customer-support</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/education-inquiry</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${posts
        .map(
          (post) => `
        <url>
          <loc>${baseUrl}/blog/${post.slug}</loc>
          <lastmod>${new Date(post.pubDate).toISOString()}</lastmod>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
