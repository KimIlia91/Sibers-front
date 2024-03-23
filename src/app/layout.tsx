import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/common/header/Header";
import "@/styles/globals.css";
import App from "@/components/App/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sibers",
  description: "Тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className={`bg-white ${inter.className}`}>
        <App>
          <Header />
          {children}
        </App>
      </body>
    </html>
  );
}
