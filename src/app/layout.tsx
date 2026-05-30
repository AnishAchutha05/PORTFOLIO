import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Anish Achutha | AI Systems Engineer · Research Intern @ IIT Guwahati · AI Intern @ DocTrue",
  description: "2nd-year CS undergrad at JSSATE Bangalore (VTU, CGPA 8.7). Research Intern at IIT Guwahati & AI Systems Intern at DocTrue. Building multi-agent AI systems, agentic pipelines, and scalable backend infrastructure with LangChain, FastAPI, and GCP.",
  keywords: ["Anish Achutha", "AI Systems", "LangChain", "MCP Protocol", "SWARM", "ARIA", "FastAPI", "GCP", "IIT Guwahati", "DocTrue", "Agentic AI", "Backend Engineering"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="layout-body">
        <AnimatedBackground />
        <div className="grain" />
        <CustomCursor />
        {/* Sidebar replaces the old top navbar */}
        <Sidebar />
        {/* Main content pushed right of sidebar via CSS var --sidebar-w */}
        <main className="page-main">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
