"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiHome, HiUser, HiBriefcase, HiMail } from "react-icons/hi";
import { HiChevronRight, HiChevronLeft, HiArrowDownTray } from "react-icons/hi2";
import styles from "./Sidebar.module.css";

const navLinks = [
  { href: "/",         label: "Home",    icon: HiHome },
  { href: "/about",    label: "About",   icon: HiUser },
  { href: "/projects", label: "Work",    icon: HiBriefcase },
  { href: "/contact",  label: "Contact", icon: HiMail },
];

const SIDEBAR_LEFT = 16;   // px — gap from left wall
const GAP          = 14;   // px — gap between sidebar right edge and content
const COLLAPSED_W  = 66;
const EXPANDED_W   = 224;

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* close on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  /* push page-main right of the sidebar */
  useEffect(() => {
    const w = SIDEBAR_LEFT + (open ? EXPANDED_W : COLLAPSED_W) + GAP;
    document.documentElement.style.setProperty("--sidebar-w", `${w}px`);
  }, [open]);

  return (
    <motion.aside
      className={styles.sidebar}
      animate={{ width: open ? EXPANDED_W : COLLAPSED_W }}
      transition={{ type: "spring", stiffness: 320, damping: 32 }}
    >


      {/* ── Nav ── */}
      <nav className={styles.nav}>
        {navLinks.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={[
                styles.navItem,
                active ? styles.active : "",
                !open ? styles.collapsed : "",
              ].join(" ")}
              title={!open ? label : undefined}
            >
              <span className={styles.iconWrap}><Icon /></span>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.span
                    key="lbl"
                    className={styles.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.14 }}
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      <div className={styles.divider} />

      {/* ── Resume ── */}
      <a
        href="/resume.pdf"
        download
        className={[styles.resumeItem, !open ? styles.collapsed : ""].join(" ")}
        title={!open ? "Resume" : undefined}
      >
        <span className={styles.iconWrap}><HiArrowDownTray /></span>
        <AnimatePresence initial={false}>
          {open && (
            <motion.span
              key="res"
              className={styles.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.14 }}
            >
              Resume
            </motion.span>
          )}
        </AnimatePresence>
      </a>

      {/* ── Toggle ── */}
      <button
        className={styles.toggle}
        onClick={() => setOpen(v => !v)}
        aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      >
        {open ? <HiChevronLeft /> : <HiChevronRight />}
      </button>
    </motion.aside>
  );
}
