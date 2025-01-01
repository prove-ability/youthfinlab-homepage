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
    const response = await notion.pages.create({
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
    return response;
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error) {
      switch (error.code) {
        case "unauthorized":
          throw new NotionError("인증에 실패했습니다", "AUTH_ERROR");
        case "invalid_request":
          throw new NotionError("잘못된 요청입니다", "INVALID_REQUEST");
        case "object_not_found":
          throw new NotionError("데이터베이스를 찾을 수 없습니다", "NOT_FOUND");
        case "rate_limited":
          throw new NotionError(
            "요청이 너무 많습니다. 잠시 후 다시 시도해주세요",
            "RATE_LIMITED"
          );
        case "validation_error":
          throw new NotionError(
            "데이터 형식이 올바르지 않습니다",
            "VALIDATION_ERROR"
          );
        case "conflict_error":
          throw new NotionError(
            "동시 요청으로 인한 충돌이 발생했습니다",
            "CONFLICT"
          );
      }
    }
    console.error("Notion API Error:", error);
    throw new NotionError("알 수 없는 오류가 발생했습니다", "UNKNOWN_ERROR");
  }
}

class NotionError extends Error {
  constructor(
    message: string,
    public code: string
  ) {
    super(message);
    this.name = "NotionError";
  }
}
