"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./page.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const waveY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const waveScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section className={styles.page}>

      {/* ══════════════════════════════════════
          HERO — Hokusai Wave Full Screen
      ══════════════════════════════════════ */}
      <div ref={heroRef} className={styles.heroWrap}>

        {/* Parallax wave background */}
        <motion.div
          className={styles.waveBg}
          style={{ y: waveY, scale: waveScale }}
        >
          <Image
            src="/jp-wave.png"
            alt="The Great Wave off Kanagawa"
            fill
            className={styles.waveImg}
            priority
          />
        </motion.div>

        {/* Dark gradient overlay */}
        <div className={styles.waveOverlay} />

        {/* Ink texture overlay */}
        <div className={styles.inkOverlay} />

        {/* Hero content */}
        <motion.div
          className={styles.heroContent}
          style={{ opacity: heroOpacity, y: heroY }}
        >
          {/* Status badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.badgeDot} />
            Research Intern @ IIT Guwahati &nbsp;·&nbsp; AI Systems Intern @ DocTrue
          </motion.div>

          {/* Japanese character watermark */}
          <motion.div
            className={styles.jpWatermark}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3 }}
          >
            波
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p className={styles.heroEyebrow} variants={fadeUp}>
              Anish Achutha — AI Systems Engineer
            </motion.p>
            <motion.h1 className={styles.h1} variants={fadeUp}>
              Building systems<br />
              <em className={styles.h1Em}>that think,</em><br />
              scale &amp; survive.
            </motion.h1>
            <motion.p className={styles.heroBio} variants={fadeUp}>
              2nd-year CS undergrad at JSSATE Bangalore (VTU · CGPA 8.7). I design
              multi-agent AI systems, agentic pipelines, and scalable backends
              where LLMs operate as autonomous agents backed by FastAPI, vector stores, and GCP.
            </motion.p>
            <motion.div className={styles.heroActions} variants={fadeUp}>
              <Link href="/projects" className="btn-violet">
                View My Work <HiArrowUpRight />
              </Link>
              <a href="/resume.pdf" download className="btn-ghost">
                Resume ↓
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            className={styles.scrollCue}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className={styles.scrollLine} />
            <span className={styles.scrollLabel}>Scroll</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          FEATURE CARDS — editorial 3-col
      ══════════════════════════════════════ */}
      <div className={styles.featureSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.featureGrid}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ── Card A: Profile + roles ── */}
            <div className={styles.fCard}>
              <div className={styles.fCardPhotoBg}>
                <Image src="/profile.jpg" alt="Anish Achutha" fill className={styles.fCardPhoto} />
                <div className={styles.fCardPhotoGrad} />
              </div>
              <div className={styles.fCardBody}>
                <div className={styles.fCardTop}>
                  <span className={styles.fCardTag}>
                    <span className={styles.fCardDot} />
                    Open to Work
                  </span>
                </div>
                <div className={styles.fCardBottom}>
                  <h3 className={styles.fCardName}>Anish Achutha</h3>
                  <p className={styles.fCardRole}>AI Systems Engineer</p>
                  <div className={styles.fCardPills}>
                    <span className={styles.fCardPill}>
                      <span className={styles.fPillDot} />
                      IIT Guwahati
                    </span>
                    <span className={styles.fCardPill}>
                      <span className={styles.fPillDot} />
                      DocTrue
                    </span>
                    <span className={styles.fCardPill}>🎓 JSSATE · VTU · 8.7</span>
                  </div>
                  <div className={styles.fCardLinks}>
                    <a href="https://github.com/AnishAchutha05" target="_blank" rel="noopener noreferrer" className={styles.fCardLink}><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/anishachutha/" target="_blank" rel="noopener noreferrer" className={styles.fCardLink}><FaLinkedin /></a>
                    <a href="https://www.instagram.com/anish_achutha_/" target="_blank" rel="noopener noreferrer" className={styles.fCardLink}><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Card B: AI Systems — coder bg ── */}
            <div className={styles.fCard}>
              <div className={styles.fCardImgBg}>
                <Image src="/jp-coder.png" alt="" fill className={styles.fCardImg} />
                <div className={styles.fCardImgGrad} />
              </div>
              <div className={styles.fCardBody}>
                <div className={styles.fCardTop}>
                  <span className={styles.fCardEyebrow}>01 — What I build</span>
                </div>
                <div className={styles.fCardBottom}>
                  <h3 className={styles.fCardTitle}>AI Systems<br />&amp; Backend</h3>
                  <ul className={styles.fCardList}>
                    <li>Multi-agent pipelines with LangChain &amp; LangGraph</li>
                    <li>MCP Servers for autonomous research</li>
                    <li>FastAPI backends + GCP cloud infrastructure</li>
                    <li>RAG systems &amp; vector store integrations</li>
                  </ul>
                  <div className={styles.fCardTechRow}>
                    {["Python", "LangChain", "FastAPI", "GCP", "Docker"].map(t => (
                      <span key={t} className={styles.fTechChip}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Card C: Research — blackhole bg ── */}
            <div className={styles.fCard}>
              <div className={styles.fCardImgBg}>
                <Image src="/jp-blackhole.png" alt="" fill className={styles.fCardImg} />
                <div className={styles.fCardImgGrad} />
              </div>
              <div className={styles.fCardBody}>
                <div className={styles.fCardTop}>
                  <span className={styles.fCardEyebrow}>02 — Research</span>
                </div>
                <div className={styles.fCardBottom}>
                  <h3 className={styles.fCardTitle}>Research<br />&amp; Projects</h3>
                  <ul className={styles.fCardList}>
                    <li><strong>SWARM</strong> — self-organising multi-agent cognitive system</li>
                    <li><strong>ARIA</strong> — autonomous MCP-based research server</li>
                    <li>Research Intern at IIT Guwahati</li>
                    <li>Grand Hackathon 2026 — GDG JSSATE-B</li>
                  </ul>
                  <div className={styles.fCardStatsRow}>
                    <div className={styles.fMiniStat}>
                      <span className={styles.fMiniNum}>8.7</span>
                      <span className={styles.fMiniLbl}>CGPA</span>
                    </div>
                    <div className={styles.fMiniDivider} />
                    <div className={styles.fMiniStat}>
                      <span className={styles.fMiniNum}>2+</span>
                      <span className={styles.fMiniLbl}>Internships</span>
                    </div>
                    <div className={styles.fMiniDivider} />
                    <div className={styles.fMiniStat}>
                      <span className={styles.fMiniNum}>5+</span>
                      <span className={styles.fMiniLbl}>Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════ */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {["LangChain", "LangGraph", "Agentic AI", "MCP Protocol", "SWARM", "FastAPI", "Python", "GCP", "Docker", "PostgreSQL", "Linux", "Tavily", "NetworkX", "Claude API", "RAG Pipelines", "IIT Guwahati", "DocTrue",
            "LangChain", "LangGraph", "Agentic AI", "MCP Protocol", "SWARM", "FastAPI", "Python", "GCP", "Docker", "PostgreSQL", "Linux", "Tavily", "NetworkX", "Claude API", "RAG Pipelines", "IIT Guwahati", "DocTrue"
          ].map((s, i) => (
            <span key={i} className={styles.marqueeItem}>
              {s} <span className={styles.marqueeSep}>波</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
