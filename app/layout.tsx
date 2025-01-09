import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "유스핀랩",
  description:
    "금융 지식이 만드는 큰 변화, 금융교육 전문기업 유스핀랩과 함께하세요",
  metadataBase: new URL("https://www.youthfinlab.com"),
  openGraph: {
    title: "유스핀랩 - 금융교육 전문기업",
    description:
      "금융 지식이 만드는 큰 변화, 금융교육 전문기업 유스핀랩과 함께하세요",
    url: "https://www.youthfinlab.com",
    siteName: "유스핀랩",
    locale: "ko_KR",
    type: "website",
    // images: [
    //   {
    //     url: "/og-image.jpg", // 1200x630px 크기의 OG 이미지 추가 필요
    //     width: 1200,
    //     height: 630,
    //     alt: "유스핀랩 - 금융교육 전문기업",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "유스핀랩 - 금융교육 전문기업",
    description:
      "금융 지식이 만드는 큰 변화, 금융교육 전문기업 유스핀랩과 함께하세요",
    // images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
