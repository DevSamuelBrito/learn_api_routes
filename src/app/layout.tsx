import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Api Routes with NextJS",
  description: "Learning how api routes works in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
