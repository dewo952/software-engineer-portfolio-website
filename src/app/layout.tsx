import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { seoKeywords } from "./seoKeywords";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_LIVE_URL as string),
  keywords: seoKeywords,
  title: {
    default: "DivenKhatri | <SoftwareEngineer />",
    template: "%s | <DivenKhatri />",
  },
  description:
    "Explore my professional portfolio showcasing my experience in full-stack development, cloud technologies, and machine learning. This repository highlights my work in front-end and back-end development, microservices, cloud deployment, and secure API design. Dive into my projects, skillset, and achievements that reflect my journey as a versatile software engineer.",
  openGraph: {
    description:
      "Explore my professional portfolio showcasing my experience in full-stack development, cloud technologies, and machine learning. This repository highlights my work in front-end and back-end development, microservices, cloud deployment, and secure API design. Dive into my projects, skillset, and achievements that reflect my journey as a versatile software engineer.",
    images: [
      new URL("/opengraphImg.png", process.env.NEXT_PUBLIC_LIVE_URL as string)
        .href,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="32" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
