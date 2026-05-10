import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroLXP Assistant",
  description: "Intelligent chatbot assistant for NeuroLXP LMS",
};

export default function ChatboatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}