import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function addToNotionDatabase(data: {
  name: string;
  organization: string;
  phoneNumber: string;
  budget: string;
  target: string;
  details: string;
}) {
  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        이름: {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        기관명: {
          rich_text: [
            {
              text: {
                content: data.organization,
              },
            },
          ],
        },
        연락처: {
          rich_text: [
            {
              text: {
                content: data.phoneNumber,
              },
            },
          ],
        },
        교육예산: {
          rich_text: [
            {
              text: {
                content: data.budget,
              },
            },
          ],
        },
        교육대상: {
          rich_text: [
            {
              text: {
                content: data.target,
              },
            },
          ],
        },
        상세내용: {
          rich_text: [
            {
              text: {
                content: data.details,
              },
            },
          ],
        },
        상태: {
          select: {
            name: "신규",
          },
        },
      },
    });

    return true;
  } catch (error) {
    console.error("Notion Error:", error);
    throw error;
  }
}
