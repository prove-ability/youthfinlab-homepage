import { MetadataRoute } from "next";

async function getBlogPosts() {
  const res = await fetch("https://www.youthfinlab.com/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogs = blogPosts.map((post: any) => ({
    url: `https://www.youthfinlab.com/blog/${post.slug}`,
    lastModified: new Date(post.pubDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const routes = [
    {
      url: "https://www.youthfinlab.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.youthfinlab.com/customer-support",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.youthfinlab.com/education-inquiry",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...routes, ...blogs];
}
