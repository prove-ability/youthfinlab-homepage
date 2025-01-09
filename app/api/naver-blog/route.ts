import { parseStringPromise } from "xml2js";
import { NextResponse } from "next/server";
import { generateSlug } from "@/app/blog/helpers";

interface NaverBlogItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

interface RSSResponse {
  rss: {
    channel: {
      item: NaverBlogItem[];
    };
  };
}

export async function GET() {
  try {
    const rssUrl = "https://rss.blog.naver.com/youthfinlab.xml";
    const response = await fetch(rssUrl);
    const data = await response.text();
    const parsed = (await parseStringPromise(data, {
      explicitArray: false,
    })) as RSSResponse;

    const items = parsed.rss.channel.item.map((item) => ({
      title: item.title,
      link: item.link,
      description: item.description,
      pubDate: new Date(item.pubDate),
      slug: generateSlug(item.title),
    }));

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS data" },
      { status: 500 }
    );
  }
}
