import type { Metadata } from "next";
import "./resume.css";

export const metadata: Metadata = {
  title: "Resume | Faris Ashai",
  description: "Resume of Faris Ashai.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
