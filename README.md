# 유스핀랩 홈페이지

금융교육 전문기업 유스핀랩의 공식 웹사이트입니다.

## 기술 스택

### 프레임워크 & 라이브러리

- Next.js 15.1.3
- React 19.0.0
- TypeScript
- TailwindCSS
- shadcn/ui

### 상태 관리 & 폼

- React Hook Form
- Zod (폼 유효성 검증)

### 외부 서비스 연동

- Notion API (문의 데이터 저장)
- Slack Webhook (문의 알림)

## 주요 기능

### 1. 다크모드 지원

- next-themes를 활용한 다크모드 구현
- 시스템 설정 연동 지원

### 2. 반응형 디자인

- 모바일, 태블릿, 데스크톱 대응
- Tailwind CSS를 활용한 유연한 레이아웃

### 3. 교육 문의 시스템

- React Hook Form과 Zod를 활용한 폼 유효성 검증
- Notion DB 연동을 통한 문의 데이터 관리
- Slack 웹훅을 통한 실시간 문의 알림

## 개발 환경 설정

```bash
# 패키지 설치
bun install

# 개발 서버 실행
bun run dev

# 린트 검사
bun run lint

# 코드 포맷팅
bun run format
```

## 환경 변수 설정

`.env` 파일을 생성하고 설정해주세요

```bash
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

## 커밋 컨벤션

커밋 메시지는 다음 형식을 따릅니다:

- build: 빌드 시스템 변경사항
- chore: 빌드 프로세스 또는 보조 도구 변경
- ci: CI 구성 파일 변경
- docs: 문서 수정
- feat: 새로운 기능 추가
- fix: 버그 수정
- perf: 성능 개선
- refactor: 리팩토링
- revert: 이전 커밋으로 되돌림
- style: 코드 스타일 변경
- test: 테스트 추가 또는 수정
