import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Youthfinal",
  description: "Youthfinal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
