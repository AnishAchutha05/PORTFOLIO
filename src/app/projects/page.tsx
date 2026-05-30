"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { SiPython, SiLangchain, SiFastapi } from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { NumberTicker } from "@/components/NumberTicker";
import { DotPattern } from "@/components/DotPattern";
import styles from "./page.module.css";

const projects = [
  {
    id: "01",
    title: "SWARM",
    subtitle: "Multi-Agent Cognitive Architecture",
    category: "Agentic AI / LLM Orchestration",
    description: "Virtualises a single LLM into N concurrent agents, each assigned a distinct cognitive personality (analytical, adversarial, critical, creative) that reason in parallel — inspired by OS multithreading and swarm intelligence. Agents share a common blackboard memory pool for emergent cross-agent reasoning. Competitive scoring and evolutionary pruning eliminates weakest agents each round. Fully self-organising: system dynamically determines its own agent count based on inferred problem complexity.",
    tags: ["Python", "Agentic AI", "LangChain", "LLM Orchestration", "Swarm Intelligence"],
    icons: [SiPython, SiLangchain],
    colors: ["#3776ab", "#a78bfa"],
    github: "https://github.com/AnishAchutha05/SWARM",
    spotlight: "rgba(58,127,193,0.14)",
    award: "Grand Hackathon 2026",
  },
  {
    id: "02",
    title: "ARIA",
    subtitle: "Autonomous Research & Intelligence Assistant",
    category: "MCP Server / Research AI",
    description: "MCP server that autonomously investigates any topic end-to-end in under 90 seconds — web search → scrape → extract → knowledge graph → synthesised brief. Built modular tool architecture: Tavily-powered search, httpx+BS4 scraper, Claude-powered insight extractor, and NetworkX knowledge graph builder. Integrated with Claude Desktop via MCP protocol and exposes a CLI client for standalone use.",
    tags: ["Python", "MCP SDK", "Claude API", "Tavily", "NetworkX", "BeautifulSoup"],
    icons: [SiPython, SiFastapi],
    colors: ["#3776ab", "#009688"],
    github: "https://github.com/AnishAchutha05/ARIA---mcp-research-server",
    spotlight: "rgba(26,74,122,0.14)",
    award: "Grand Hackathon 2026",
  },
];

export default function Projects() {
  return (
    <div className={styles.page}>

      {/* ── Header with black hole bg ── */}
      <section className={styles.header}>
        <div className={styles.blackholeBg}>
          <Image src="/jp-blackhole.png" alt="" fill className={styles.blackholeImg} />
          <div className={styles.blackholeOverlay} />
        </div>

        {/* JP watermark */}
        <div className={styles.jpHeaderChar}>作</div>

        <div className={styles.headerInner}>
          <motion.div
            className={styles.headerLeft}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Selected Work</span>
            <h1 className={styles.title}>
              Projects &amp;<br />
              <span className={styles.titleItalic}>Experiments.</span>
            </h1>
          </motion.div>
          <motion.p
            className={styles.headerDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Real AI systems built for Grand Hackathon 2026 — multi-agent architectures
            and autonomous research pipelines.
          </motion.p>
        </div>
      </section>

      {/* ── Project List ── */}
      <section className={styles.list}>
        {projects.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.1}>
            <SpotlightCard className={styles.projectRow} spotlightColor={p.spotlight}>
              <div className={styles.projectInner}>
                <div className={styles.projectLeft}>
                  <span className={styles.projectId}>{p.id}</span>
                  <span className={styles.projectCat}>{p.category}</span>
                  {p.award && (
                    <span className={styles.projectAward}>🏆 {p.award}</span>
                  )}
                </div>

                <div className={styles.projectCenter}>
                  <h2 className={styles.projectTitle}>{p.title}</h2>
                  <p className={styles.projectSubtitle}>{p.subtitle}</p>
                  <p className={styles.projectDesc}>{p.description}</p>
                  <div className={styles.projectTags}>
                    {p.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.projectRight}>
                  <div className={styles.techIcons}>
                    {p.icons.map((Icon, j) => (
                      <span key={j} className={styles.techIcon} style={{ color: p.colors[j] }}>
                        <Icon />
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="View">
                      <HiArrowUpRight />
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        ))}
      </section>

      {/* ── CTA ── */}
      <ScrollReveal>
        <section className={styles.ctaSection}>
          <SpotlightCard className={styles.ctaCard} spotlightColor="rgba(26,74,122,0.18)">
            <DotPattern className={styles.ctaDotBg} />
            <div className={styles.ctaJpChar}>縁</div>
            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <NumberTicker value={2} suffix="+" className={styles.ctaStatNum} />{" "}
                <span className={styles.ctaStatLabel}>AI Projects</span>
              </div>
              <div className={styles.ctaStatDivider} />
              <div className={styles.ctaStat}>
                <NumberTicker value={12} suffix="+" className={styles.ctaStatNum} />{" "}
                <span className={styles.ctaStatLabel}>Tech Stack</span>
              </div>
              <div className={styles.ctaStatDivider} />
              <div className={styles.ctaStat}>
                <NumberTicker value={2} suffix="x" className={styles.ctaStatNum} />{" "}
                <span className={styles.ctaStatLabel}>Hackathon</span>
              </div>
            </div>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>
              Have an idea?<br />
              <span className={styles.ctaTitleItalic}>Let&apos;s build it.</span>
            </h2>
            <p className={styles.ctaDesc}>
              I&apos;m looking for internships, research collaborations, and AI/backend engineering roles.
            </p>
            <a href="mailto:anish.achutha1@gmail.com" className="btn-violet">
              Get in Touch <HiArrowUpRight />
            </a>
          </SpotlightCard>
        </section>
      </ScrollReveal>
    </div>
  );
}
