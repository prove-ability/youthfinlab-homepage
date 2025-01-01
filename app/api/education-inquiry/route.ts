import { NextResponse } from "next/server";
import { addToNotionDatabase } from "@/lib/notion";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const notionResponse = await addToNotionDatabase(data);

    if (!notionResponse || !notionResponse.id) {
      throw new Error("Failed to add data to Notion");
    }

    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎓 새로운 교육 문의가 접수되었습니다",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*이름:*\n${data.name}`,
            },
            {
              type: "mrkdwn",
              text: `*기관명:*\n${data.organization}`,
            },
          ],
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*연락처:*\n${data.phoneNumber}`,
            },
            {
              type: "mrkdwn",
              text: `*교육 예산:*\n${data.budget}`,
            },
          ],
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*교육 대상:*\n${data.target}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*상세 내용:*\n${data.details}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*<https://notion.so/${process.env.NOTION_DATABASE_ID}|👉 노션에서 보기>*`,
          },
        },
      ],
    };

    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("Slack Webhook URL is not configured");
    }

    const slackResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      throw new Error("Failed to send message to Slack");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
