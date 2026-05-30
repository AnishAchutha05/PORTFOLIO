"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaFlask, FaGraduationCap, FaTrophy, FaBriefcase } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { NumberTicker } from "@/components/NumberTicker";
import styles from "./page.module.css";

const techGroups = [
  {
    label: "AI & Agents",
    color: "#7ab8e0",
    items: ["LangChain", "LangGraph", "Anthropic SDK", "MCP Protocol", "RAG Pipelines", "LLM Orchestration"],
  },
  {
    label: "Backend",
    color: "#3a7fc1",
    items: ["FastAPI", "Spring Boot", "REST API Design", "SQLAlchemy", "PostgreSQL", "Redis"],
  },
  {
    label: "Cloud & DevOps",
    color: "#264e87",
    items: ["Google Cloud Platform (GCP)", "Docker", "Linux", "Nginx", "Cloud Run"],
  },
  {
    label: "Tools & DSA",
    color: "#1a4a7a",
    items: ["Git", "GitHub", "Postman", "VS Code", "Tavily API", "NetworkX", "LeetCode (Daily)"],
  },
];

const timeline = [
  {
    year: "Present",
    title: "Research Intern · IIT Guwahati",
    desc: "Conducting research at the Indian Institute of Technology Guwahati — applying AI/ML methods to research problems in a structured academic environment.",
    icon: <FaFlask />,
    color: "#7ab8e0",
  },
  {
    year: "Present",
    title: "AI Systems Intern · DocTrue",
    desc: "Building and integrating intelligent AI features into healthcare document workflows and backend systems as AI Systems Intern.",
    icon: <FaBriefcase />,
    color: "#3a7fc1",
  },
  {
    year: "Sep 2025 – Present",
    title: "Technical Co-Organiser · GDG JSSATE-B",
    desc: "Co-organise technical workshops, hackathons, and developer events for 300+ members. Led team for Grand Hackathon 2026 — built ARIA, an MCP-based autonomous AI research system.",
    icon: <FaTrophy />,
    color: "#264e87",
  },
  {
    year: "Feb – Mar 2025",
    title: "Python Developer Intern · CODTECH IT Solutions",
    desc: "Developed Python automation scripts and data processing pipelines. Contributed to backend modules and internal tooling.",
    icon: <FaBriefcase />,
    color: "#1a4a7a",
  },
  {
    year: "Sep 2024 – Present",
    title: "B.Tech, Computer Science · JSSATE Bangalore",
    desc: "Second-year CS undergrad at JSS Academy of Technical Education (VTU). CGPA: 8.7. Coursework: DSA, OOP, OS, Computer Networks.",
    icon: <FaGraduationCap />,
    color: "#0e1628",
  },
];

export default function About() {
  return (
    <div className={styles.page}>

      {/* ── HERO with mountain bg ── */}
      <section className={styles.hero}>
        {/* Ghibli mountain bg */}
        <div className={styles.mountainBg}>
          <Image src="/jp-mountain.png" alt="" fill className={styles.mountainImg} />
          <div className={styles.mountainOverlay} />
        </div>

        {/* JP kanji watermark */}
        <div className={styles.jpWatermark}>道</div>

        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroLeft}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">About Me</span>
            <h1 className={styles.heroTitle}>
              I build systems<br />
              <span className={styles.heroItalic}>that think.</span>
            </h1>
            <p className={styles.heroSub}>
              AI Systems Engineer · Research Intern @ IIT Guwahati<br />
              AI Systems Intern @ DocTrue · VTU Student
            </p>
            <div className={styles.heroActions}>
              <a href="https://github.com/AnishAchutha05" target="_blank" rel="noopener noreferrer" className="btn-violet">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/anishachutha/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroRight}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.photoCard}>
              <Image src="/profile2.jpg" alt="Anish Achutha" fill className={styles.photo} />
              <div className={styles.photoBadge}>
                <span className={styles.photoBadgeDot} />
                Open to Work
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BIO SECTION ── */}
      <section className={styles.bioSection}>
        <div className={styles.bioInner}>
          <ScrollReveal>
            <div className={styles.bioHeader}>
              <span className={styles.bioEyebrow}>Who I Am</span>
              <h2 className={styles.bioTitle}>
                2nd-year CS undergrad<br />
                <em>building production-grade AI.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className={styles.bioGrid}>
            <ScrollReveal delay={0.1}>
              <div className={styles.bioText}>
                <p>
                  Hi, I&apos;m <strong>Anish Achutha</strong> — a 2nd-year Computer Science undergraduate at
                  JSSATE Bangalore (VTU) with a CGPA of 8.7. I build production-grade AI systems at the
                  intersection of backend engineering and agentic AI — designing systems where LLMs act as
                  autonomous agents backed by scalable APIs, vector stores, and real-time pipelines.
                </p>
                <p>
                  Currently doing a <strong>Research Internship at IIT Guwahati</strong> and a{" "}
                  <strong>Tech Internship at DocTrue as an AI Systems Intern</strong>. Co-organiser at{" "}
                  GDG JSSATE-B, where I run workshops, hackathons, and developer events for 300+ members.
                </p>
                <p>
                  GCP certified via the Google Cloud Arcade programme. Consistent LeetCode practitioner —
                  working through arrays, graphs, dynamic programming, and trees in Python daily.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className={styles.currentFocus}>
                <div className={styles.focusHeader}>
                  <span className={styles.focusPulse} />
                  <span className={styles.focusLabel}>Currently</span>
                </div>
                <h3 className={styles.focusTitle}>Dual Internships + GDG</h3>
                <p className={styles.focusText}>
                  Research Intern at <strong>IIT Guwahati</strong> — applying AI/ML to research problems.
                </p>
                <p className={styles.focusText}>
                  AI Systems Intern at <strong>DocTrue</strong> — building intelligent AI pipelines for healthcare.
                </p>
                <p className={styles.focusText}>
                  Technical Co-Organiser at <strong>GDG JSSATE-B</strong> — driving developer culture.
                </p>
                <div className={styles.focusTech}>
                  {["LangChain", "MCP Protocol", "FastAPI", "GCP", "Agentic AI", "Python"].map(t => (
                    <span key={t} className={styles.focusPill}>{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statNum}><NumberTicker value={8} suffix=".7" className={styles.statNumVal} /></span>
                <span className={styles.statLbl}>CGPA · VTU</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}><NumberTicker value={2} suffix="+" className={styles.statNumVal} /></span>
                <span className={styles.statLbl}>Internships</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}><NumberTicker value={5} suffix="+" className={styles.statNumVal} /></span>
                <span className={styles.statLbl}>Projects Built</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}><NumberTicker value={2} suffix="yr" className={styles.statNumVal} /></span>
                <span className={styles.statLbl}>Building AI</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TECH ARSENAL ── */}
      <section className={styles.techSection}>
        {/* Coder image as decorative bg */}
        <div className={styles.coderBg}>
          <Image src="/jp-coder.png" alt="" fill className={styles.coderImg} />
          <div className={styles.coderOverlay} />
        </div>
        <div className={styles.techInner}>
          <ScrollReveal>
            <h2 className={styles.techTitle}>Technical Arsenal</h2>
            <p className={styles.techSub}>From the resume — what I actually use and ship with</p>
          </ScrollReveal>
          <div className={styles.techGrid}>
            {techGroups.map((group, i) => (
              <ScrollReveal key={group.label} delay={i * 0.09}>
                <SpotlightCard className={styles.techCard} spotlightColor={`${group.color}18`}>
                  <div className={styles.techCardLine} style={{ background: group.color }} />
                  <span className={styles.techCardLabel}>{group.label}</span>
                  <div className={styles.techPills}>
                    {group.items.map(item => (
                      <span key={item} className={styles.techPill}>{item}</span>
                    ))}
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineInner}>
          <ScrollReveal>
            <div className={styles.timelineHeader}>
              <div className={styles.jpTimelineChar}>歴</div>
              <h2 className={styles.timelineTitle}>Experience &amp; Education</h2>
            </div>
          </ScrollReveal>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.09}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIcon} style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}12` }}>
                    {item.icon}
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h3 className={styles.timelineHeading}>{item.title}</h3>
                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA with Icarus bg ── */}
      <ScrollReveal>
        <section className={styles.cta}>
          <div className={styles.icaurusBg}>
            <Image src="/jp-icarus.png" alt="" fill className={styles.icarusImg} />
            <div className={styles.icarusOverlay} />
          </div>
          <div className={styles.ctaInner}>
            <div className={styles.ctaJpChar}>縁</div>
            <h2 className={styles.ctaTitle}>
              Let&apos;s build<br />
              <span className={styles.ctaItalic}>something real.</span>
            </h2>
            <p className={styles.ctaDesc}>Open to internships, research collaborations, and backend/AI engineering roles.</p>
            <Link href="/contact" className="btn-violet">
              Start a Conversation <HiArrowUpRight />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
