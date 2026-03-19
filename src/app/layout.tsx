import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Anish Achutha | AI Systems Architect & Backend Engineering Student",
  description: "Building production-grade AI systems, agentic loops, and enterprise cloud infrastructure. Specializing in LangChain, Java Spring Boot, RAG, and GCP microservices.",
  keywords: ["Anish Achutha", "AI Systems", "LangChain", "RAG", "Java Spring Boot", "GCP", "Agentic AI", "Backend Engineering"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <div className="grain" />
        <CustomCursor />
        <Navbar />
        <main className="page-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
