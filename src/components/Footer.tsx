import Link from "next/link";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>A</span>
            <span className={styles.brandText}>Anish Achutha</span>
          </div>
          <nav className={styles.nav}>
            {links.map(l => (
              <Link key={l.href} href={l.href} className={styles.navLink}>{l.label}</Link>
            ))}
          </nav>
          <div className={styles.socials}>
            <a href="https://github.com/AnishAchutha05" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/anishachutha/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/anish_achutha_/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Anish Achutha. Crafted with ♥ using Next.js &amp; Framer Motion.</p>
          <span className={styles.madeWith}>Based in Bangalore 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}
