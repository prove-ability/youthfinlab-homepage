import { parseStringPromise } from "xml2js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const rssUrl = "https://rss.blog.naver.com/youthfinlab.xml";
    const response = await fetch(rssUrl);
    const data = await response.text();
    const parsed = await parseStringPromise(data, { explicitArray: false });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items = parsed.rss.channel.item.map((item: any) => ({
      title: item.title,
      link: item.link,
      description: item.description,
      pubDate: new Date(item.pubDate),
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
