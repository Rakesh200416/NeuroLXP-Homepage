import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty Web",
  description: "Role-based authentication flow for Institution Admin, Institution Coordinator, and Faculty",
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