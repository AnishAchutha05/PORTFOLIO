"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/AnishAchutha05", desc: "@AnishAchutha05" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/anishachutha/", desc: "anishachutha" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/anish_achutha_/", desc: "@anish_achutha_" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if (res.ok) { setStatus("success"); (e.target as HTMLFormElement).reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <section className={styles.header}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Get in Touch</span>
          <h1 className={styles.title}>
            Let&#39;s make
            <br />
            <span className={styles.titleItalic}>something great.</span>
          </h1>
          <p className={styles.headerDesc}>
            I&#39;m always up for interesting conversations, collaborations, and opportunities.
            Drop me a message — I reply within 24h.
          </p>
        </motion.div>
      </section>

      {/* ── Main content ── */}
      <section className={styles.main}>
        {/* Form */}
        <ScrollReveal className={styles.formWrap}>
          {status === "success" ? (
            <motion.div
              className={styles.successState}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className={styles.successEmoji}>🎉</span>
              <h2 className={styles.successTitle}>Message sent!</h2>
              <p className={styles.successDesc}>Thanks for reaching out. I&#39;ll get back to you very soon.</p>
              <button onClick={() => setStatus("idle")} className="btn-ghost">
                Send another
              </button>
            </motion.div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="e3ed9d2a-5fe0-46a8-bfb4-32c3b62bd7d4" />
              <input type="hidden" name="from_name" value="Portfolio Contact" />

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Name</label>
                  <input type="text" name="name" placeholder="Your name" className={styles.input} required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input type="email" name="email" placeholder="your@email.com" className={styles.input} required />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>What&#39;s this about?</label>
                <select name="subject" className={styles.input}>
                  <option value="Internship Opportunity">Internship Opportunity</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Freelance Work">Freelance Work</option>
                  <option value="Just saying hi">Just saying hi 👋</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea name="message" placeholder="Tell me what you have in mind..." className={styles.textarea} rows={6} required />
              </div>

              {status === "error" && (
                <p className={styles.errorMsg}>Something went wrong — please try again.</p>
              )}

              <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                {status === "sending" ? (
                  <><span className={styles.spinner} /> Sending…</>
                ) : (
                  <>Send Message <HiArrowUpRight /></>
                )}
              </button>
            </form>
          )}
        </ScrollReveal>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <ScrollReveal delay={0.1}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Find me online</h2>
              <div className={styles.socialList}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialRow}>
                    <span className={styles.socialIcon}>{s.icon}</span>
                    <span className={styles.socialInfo}>
                      <span className={styles.socialLabel}>{s.label}</span>
                      <span className={styles.socialDesc}>{s.desc}</span>
                    </span>
                    <HiArrowUpRight className={styles.socialArrow} />
                  </a>
                ))}
              </div>

              <div className={styles.divider} />

              <div className={styles.locationInfo}>
                <span className="eyebrow">Location</span>
                <p className={styles.locationText}>Bangalore, India 🇮🇳</p>
                <p className={styles.locationSub}>IST (UTC+5:30)</p>
              </div>

              <div className={styles.divider} />

              <div className={styles.resumeInfo}>
                <p className={styles.resumeText}>Prefer a quick look?</p>
                <a href="/resume.pdf" download className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                  Download Resume ↓
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
