"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaSwimmer, FaGraduationCap, FaTrophy, FaRobot } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { NumberTicker } from "@/components/NumberTicker";
import styles from "./page.module.css";

const techGroups = [
  {
    label: "Agentic AI & Logic",
    color: "#a78bfa",
    items: ["Python", "LangChain", "LangGraph", "CrewAI", "RAG", "Ollama", "DeepSeek R1", "FastAPI"],
  },
  {
    label: "Enterprise Backend",
    color: "#6db33f",
    items: ["Java", "Spring Boot", "PostgreSQL", "pgvector", "Hibernate/JPA", "RabbitMQ", "Maven"],
  },
  {
    label: "Cloud & DevOps",
    color: "#4285f4",
    items: ["GCP", "Docker", "Linux (Ubuntu)", "VPC Networking", "IAM", "Compute Engine"],
  },
  {
    label: "CS Fundamentals",
    color: "#f59e0b",
    items: ["DSA (LeetCode Daily)", "DBMS", "OS Concurrency", "TCP/IP", "HNSW Vector Search"],
  },
];

const timeline = [
  {
    year: "2024 – Present",
    title: "Architecting Local RAG Platform",
    desc: "Building a locally-hosted Retrieval-Augmented Generation platform using DeepSeek R1 via Ollama, LangChain, LangGraph, and PostgreSQL with pgvector for HNSW vector search.",
    icon: <FaRobot />,
    color: "#a78bfa",
  },
  {
    year: "2023 – Present",
    title: "VTU Engineering Student",
    desc: "Second-year BE student at JSS Academy of Technical Education, Bangalore. Affiliated with Visvesvaraya Technological University.",
    icon: <FaGraduationCap />,
    color: "#4285f4",
  },
  {
    year: "2023",
    title: "Event Organizer & Hackathon Lead",
    desc: "Organizing technical events and hackathons at college, fostering a culture of innovation and collaborative engineering.",
    icon: <FaTrophy />,
    color: "#f59e0b",
  },
  {
    year: "Ongoing",
    title: "Competitive Swimmer",
    desc: "Active competitive swimmer — discipline and endurance from the pool translate directly into focused engineering sessions.",
    icon: <FaSwimmer />,
    color: "#14b8a6",
  },
];

export default function About() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroLeft}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="eyebrow">About Me</span>
            <h1 className={styles.heroTitle}>
              I build things<br />
              <span className={styles.heroItalic}>that think.</span>
            </h1>
            <p className={styles.heroSub}>
              AI Systems Architect · Backend Engineer · VTU Student
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.photoCard}>
              <Image src="/profile.jpg" alt="Anish Achutha" fill className={styles.photo} />
              <div className={styles.photoBadge}>
                <span className={styles.photoBadgeDot} />
                Open to Work
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHITE/BLACK BIO SECTION ── */}
      <section className={styles.bioSection}>
        <div className={styles.bioInner}>
          <ScrollReveal>
            <div className={styles.bioHeader}>
              <span className={styles.bioEyebrow}>Who I Am</span>
              <h2 className={styles.bioTitle}>
                Breaking down the<br />
                <em>engineering stack.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className={styles.bioGrid}>
            <ScrollReveal delay={0.1}>
              <div className={styles.bioText}>
                <p>
                  Hi, I&#39;m <strong>Anish Achutha</strong>. I am a 20-year-old, second-year engineering student at
                  Visvesvaraya Technological University (VTU) with a relentless focus on building
                  production-grade AI systems and enterprise cloud infrastructure.
                </p>
                <p>
                  While many developers focus purely on the frontend, my passion lies in the <strong>&#34;raw iron&#34;</strong> of
                  software engineering. I specialize in architecting autonomous Agentic AI loops, building
                  strictly-typed, highly concurrent backend systems, and deploying robust microservices.
                  I don&#39;t just want to know how an application looks; I want to control how it
                  <em> thinks</em>, how it <em>stores data securely</em>, and how it <em>scales globally</em> without failing.
                </p>
                <p>
                  Beyond the terminal, I am a <strong>competitive swimmer</strong> and actively contribute to my college
                  community by organizing technical events and hackathons. I am continuously pushing my
                  engineering boundaries, with long-term plans to pursue a <strong>Master&#39;s degree in AI Automation
                  and Cloud Engineering in Germany</strong>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className={styles.currentFocus}>
                <div className={styles.focusHeader}>
                  <span className={styles.focusPulse} />
                  <span className={styles.focusLabel}>Current Engineering Focus</span>
                </div>
                <h3 className={styles.focusTitle}>Building a Local RAG Platform</h3>
                <p className={styles.focusText}>
                  I am currently architecting a locally-hosted, Retrieval-Augmented Generation (RAG)
                  platform driven by a decoupled microservices architecture.
                </p>
                <p className={styles.focusText}>
                  Rather than relying on third-party APIs, I build the &#34;brain&#34; using local LLMs
                  (DeepSeek R1 via Ollama) and orchestrate self-correcting, multi-agent loops using
                  Python, LangChain, LangGraph, and CrewAI. Memory and financial data are managed with
                  enterprise-grade <strong>PostgreSQL + pgvector</strong> for instant HNSW vector searches.
                  I build secure, multi-threaded backend bridges using <strong>Java Spring Boot</strong> and
                  <strong> Python FastAPI</strong>, containerizing with Docker on GCP.
                </p>
                <div className={styles.focusTech}>
                  {["DeepSeek R1", "Ollama", "LangGraph", "pgvector", "Spring Boot", "Docker", "GCP"].map(t => (
                    <span key={t} className={styles.focusPill}>{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats row */}
          <ScrollReveal delay={0.1}>
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statNum}><NumberTicker value={4} suffix="+" className={styles.statNumVal} /></span>
                <span className={styles.statLbl}>AI Frameworks</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}><NumberTicker value={2} suffix="yr" className={styles.statNumVal} /></span>
                <span className={styles.statLbl}>Engineering</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}><NumberTicker value={365} className={styles.statNumVal} /></span>
                <span className={styles.statLbl}>LeetCode Streak</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}><NumberTicker value={100} suffix="%" className={styles.statNumVal} /></span>
                <span className={styles.statLbl}>Backend-First</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TECH ARSENAL ── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <ScrollReveal>
            <h2 className={styles.techTitle}>Technical Arsenal</h2>
            <p className={styles.techSub}>Structured for technical recruiters and engineering managers</p>
          </ScrollReveal>
          <div className={styles.techGrid}>
            {techGroups.map((group, i) => (
              <ScrollReveal key={group.label} delay={i * 0.1}>
                <SpotlightCard
                  className={styles.techCard}
                  spotlightColor={`${group.color}18`}
                >
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
            <h2 className={styles.timelineTitle}>Journey</h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
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

      {/* ── CTA ── */}
      <ScrollReveal>
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Let&#39;s build<br />
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
