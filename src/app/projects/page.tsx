"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { SiGooglecloud, SiDocker, SiKubernetes, SiReact, SiDjango, SiPython } from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { NumberTicker } from "@/components/NumberTicker";
import { DotPattern } from "@/components/DotPattern";
import styles from "./page.module.css";

const projects = [
  {
    id: "01",
    title: "Cloud-Native Platform",
    category: "Cloud / DevOps",
    description: "A scalable cloud-native application built on GCP, containerised with Docker, and orchestrated with Kubernetes. End-to-end CI/CD pipeline with Terraform infrastructure.",
    tags: ["GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    icons: [SiGooglecloud, SiDocker, SiKubernetes],
    colors: ["#4285f4", "#2496ed", "#326ce5"],
    github: "#",
    demo: "#",
    gradient: "linear-gradient(135deg, rgba(66,133,244,0.12), rgba(52,168,83,0.06))",
    spotlight: "rgba(66,133,244,0.1)",
  },
  {
    id: "02",
    title: "Full Stack Web App",
    category: "Full Stack",
    description: "End-to-end web application with a React SPA frontend and Django REST API backend, backed by MySQL and deployed on a Linux server with nginx.",
    tags: ["React", "Django", "MySQL", "Linux", "REST API"],
    icons: [SiReact, SiDjango, SiPython],
    colors: ["#61dafb", "#092e20", "#3776ab"],
    github: "#",
    demo: "#",
    gradient: "linear-gradient(135deg, rgba(97,218,251,0.1), rgba(9,46,32,0.1))",
    spotlight: "rgba(97,218,251,0.08)",
  },
  {
    id: "03",
    title: "AI/ML Automation",
    category: "AI / ML",
    description: "A machine learning pipeline for data analysis and predictions, integrated with n8n automation workflows for real-time insights delivery and alerting.",
    tags: ["Python", "n8n", "AI/ML", "Automation", "API"],
    icons: [SiPython],
    colors: ["#3776ab"],
    github: "#",
    demo: "#",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(245,158,11,0.06))",
    spotlight: "rgba(124,58,237,0.12)",
  },
];

export default function Projects() {
  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <motion.div
            className={styles.headerLeft}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Selected Work</span>
            <h1 className={styles.title}>
              Projects &amp;
              <br />
              <span className={styles.titleItalic}>Experiments.</span>
            </h1>
          </motion.div>
          <motion.p
            className={styles.headerDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Real-world builds blending cloud infrastructure, full stack engineering, 
            and intelligent automation. More coming soon.
          </motion.p>
        </div>
      </section>

      {/* ── Project List ── */}
      <section className={styles.list}>
        {projects.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.08}>
            <SpotlightCard
              className={styles.projectRow}
              spotlightColor={p.spotlight}
            >
              <div className={styles.projectInner} style={{ "--gradient": p.gradient } as React.CSSProperties}>
              <div className={styles.projectLeft}>
                <span className={styles.projectId}>{p.id}</span>
                <span className={styles.projectCat}>{p.category}</span>
              </div>

              <div className={styles.projectCenter}>
                <h2 className={styles.projectTitle}>{p.title}</h2>
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
                  <a href={p.github} className={styles.iconLink} aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={p.demo} className={styles.iconLink} aria-label="Demo">
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
          <SpotlightCard className={styles.ctaCard} spotlightColor="rgba(124,58,237,0.15)">
            <DotPattern className={styles.ctaDotBg} />
            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <NumberTicker value={15} suffix="+" className={styles.ctaStatNum} /> <span className={styles.ctaStatLabel}>Technologies</span>
              </div>
              <div className={styles.ctaStatDivider} />
              <div className={styles.ctaStat}>
                <NumberTicker value={3} suffix="+" className={styles.ctaStatNum} /> <span className={styles.ctaStatLabel}>Projects</span>
              </div>
              <div className={styles.ctaStatDivider} />
              <div className={styles.ctaStat}>
                <NumberTicker value={100} suffix="%" className={styles.ctaStatNum} /> <span className={styles.ctaStatLabel}>Passion</span>
              </div>
            </div>
            <div className={styles.ctaGlow} />
            <span className="eyebrow">Open to Work</span>
            <h2 className={styles.ctaTitle}>
              Have an idea?<br />
              <span className={styles.ctaTitleItalic}>Let&#39;s build it.</span>
            </h2>
            <p className={styles.ctaDesc}>
              I&#39;m actively looking for internships, collaborations, and exciting projects to contribute to.
            </p>
            <a href="/contact" className="btn-violet">
              Start a Conversation <HiArrowUpRight />
            </a>
          </SpotlightCard>
        </section>
      </ScrollReveal>
    </div>
  );
}
