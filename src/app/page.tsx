"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  SiGooglecloud, SiDocker, SiKubernetes, SiPython, SiPostgresql, SiSpringboot,
  SiLangchain, SiFastapi, SiLinux, SiOpenjdk
} from "react-icons/si";
import { OrbitingCircles } from "@/components/OrbitingCircles";
import { NumberTicker } from "@/components/NumberTicker";
import { SpotlightCard } from "@/components/SpotlightCard";
import { DotPattern } from "@/components/DotPattern";
import Globe from "@/components/Globe";
import styles from "./page.module.css";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        {/* ── Badge ── */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={styles.badgeDot} />
          Open to Internships &amp; Collaborations
        </motion.div>

        {/* ── Hero headline ── */}
        <motion.div
          className={styles.heroText}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className={styles.h1} variants={fadeUp}>
            <span className={styles.h1Line1}>Architecting</span>
            <span className={styles.h1Line2}>
              <span className={styles.h1Italic}>Agentic AI</span>
              {" "}&amp; Cloud
            </span>
            <span className={styles.h1Line3}>Systems.</span>
          </motion.h1>

          <motion.p className={styles.heroBio} variants={fadeUp}>
            I&#39;m <strong>Anish Achutha</strong> — a 20-year-old VTU engineering student.
            I build production-grade <strong>RAG pipelines</strong>, <strong>autonomous AI agents</strong>,
            and enterprise backend systems using <strong>Java Spring Boot</strong>, <strong>LangChain</strong>,
            and <strong>GCP</strong> microservices.
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

        {/* ── BENTO GRID ── */}
        <motion.div
          className={styles.bento}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Card 1: Profile photo */}
          <SpotlightCard className={`${styles.bentoCard} ${styles.cardPhoto}`}>
            <div className={styles.photoTag}>
              <span className={styles.photoTagDot} />
              Anish Achutha
            </div>
            <Image src="/profile.jpg" alt="Anish Achutha" fill className={styles.photo} priority />
            <div className={styles.photoOverlay}>
              <div className={styles.photoLinks}>
                <a href="https://github.com/AnishAchutha05" target="_blank" rel="noopener noreferrer" className={styles.photoSocial}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anishachutha/" target="_blank" rel="noopener noreferrer" className={styles.photoSocial}><FaLinkedin /></a>
                <a href="https://www.instagram.com/anish_achutha_/" target="_blank" rel="noopener noreferrer" className={styles.photoSocial}><FaInstagram /></a>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Role */}
          <SpotlightCard className={`${styles.bentoCard} ${styles.cardRole}`} spotlightColor="rgba(124,58,237,0.15)">
            <span className={styles.cardEyebrow}>Specialization</span>
            <h2 className={styles.roleTitle}>
              AI Systems<br />&amp; Backend
            </h2>
            <div className={styles.roleTags}>
              {["RAG / LLMs", "LangChain", "Spring Boot", "GCP", "Microservices"].map(t => (
                <span key={t} className={styles.roleTag}>{t}</span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card 3: OrbitingCircles tech stack */}
          <SpotlightCard className={`${styles.bentoCard} ${styles.cardOrbit}`}>
            <span className={styles.cardEyebrow}>Tech Arsenal</span>
            <div className={styles.orbitWrap}>
              <div className={styles.orbitCenter}>
                <span className={styles.orbitCenterIcon}>AA</span>
              </div>
              <OrbitingCircles duration={20} radius={72} iconSize={28}>
                <SiPython color="#3776ab" />
                <SiOpenjdk color="#f89820" />
                <SiSpringboot color="#6db33f" />
              </OrbitingCircles>
              <OrbitingCircles duration={30} radius={118} iconSize={24} reverse>
                <SiGooglecloud color="#4285f4" />
                <SiDocker color="#2496ed" />
                <SiKubernetes color="#326ce5" />
                <SiPostgresql color="#336791" />
                <SiLangchain color="#a78bfa" />
                <SiFastapi color="#009688" />
              </OrbitingCircles>
            </div>
          </SpotlightCard>

          {/* Card 4: Globe / Location */}
          <SpotlightCard className={`${styles.bentoCard} ${styles.cardGlobe}`} spotlightColor="rgba(124,58,237,0.08)">
            <DotPattern className={styles.dotBg} />
            <div className={styles.globeContent}>
              <span className={styles.cardEyebrow}>Based in</span>
              <p className={styles.locationCity}>Bangalore</p>
              <p className={styles.locationCountry}>India 🇮🇳 · VTU</p>
            </div>
            <div className={styles.globeWrap}>
              <Globe />
            </div>
          </SpotlightCard>

          {/* Card 5: Stats */}
          <SpotlightCard className={`${styles.bentoCard} ${styles.cardStats}`} spotlightColor="rgba(245,158,11,0.1)">
            <div className={styles.stat}>
              <span className={styles.statNum}>
                <NumberTicker value={8} suffix="+" className={styles.statNumInner} />
              </span>
              <span className={styles.statLabel}>AI / Backend Tools</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>
                <NumberTicker value={20} className={styles.statNumInner} />
              </span>
              <span className={styles.statLabel}>Years Old</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>
                <NumberTicker value={2} suffix="yr" className={styles.statNumInner} />
              </span>
              <span className={styles.statLabel}>Building</span>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ── Marquee ── */}
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            {["LangChain", "LangGraph", "RAG", "DeepSeek R1", "Java Spring Boot", "PostgreSQL", "pgvector", "Docker", "GCP", "FastAPI", "CrewAI", "Ollama", "Python", "Linux",
              "LangChain", "LangGraph", "RAG", "DeepSeek R1", "Java Spring Boot", "PostgreSQL", "pgvector", "Docker", "GCP", "FastAPI", "CrewAI", "Ollama", "Python", "Linux"].map((s, i) => (
              <span key={i} className={styles.marqueeItem}>
                {s} <span className={styles.marqueeSep}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
