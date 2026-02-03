"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import logoHeader from "@/assets/icons/logoHeader.svg";
import whiteBgLogo from "@/assets/icons/whiteBgLogo.svg";
import girlImage from "@/assets/images/landing-page/girlImage.jpg";
import Image from "next/image";

const defaultAvatar = "/path/to/default-avatar.png";

export default function Header(props) {
  const { bgColor = "white", user = false } = props;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.header + ` ${bgColor === "white" ? styles.whiteBg : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo + ` ${bgColor === "white" ? styles.whiteBg : ""}`} aria-label="TOTC Home">
          <Image src={bgColor === "white" ? whiteBgLogo : logoHeader} alt={"logo"} width={114} height={83} />
        </Link>
        <div className={styles.rightSection}>
          <nav className={styles.nav} aria-label="Primary navigation">
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink + ` ${bgColor === "white" ? styles.whiteBg : ""}`}>Home</Link></li>
              <li><Link href="/membership" className={styles.navLink + ` ${bgColor === "white" ? styles.whiteBg : ""}`}>About Us</Link></li>
              <li><Link href="/course" className={styles.navLink + ` ${bgColor === "white" ? styles.whiteBg : ""}`}>Courses</Link></li>
              <li><Link href="/blog" className={styles.navLink + ` ${bgColor === "white" ? styles.whiteBg : ""}`}>Blog</Link></li>
              <li><Link href="/careers" className={styles.navLink + ` ${bgColor === "white" ? styles.whiteBg : ""}`}>Careers</Link></li>
            </ul>
          </nav>
     
          <div className={`${styles.actions} ${user ? styles.hasUser : ''}`}>

            {user ? (
              <div className={`${styles.userProfile} ${bgColor === "white" ? styles.whiteBg : ""}`}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={girlImage}
                    alt={"avatar"}
                    width={63}
                    height={63}
                    className={styles.avatarImage}
                  />
                </div>
                <span className={styles.userName}>{"Lina"}</span>

                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.chevron}>
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              
              </div>
            ) : (
              <>
                <Link href="/login" className={styles.login}>Login</Link >
                <Link href="/signup" className={styles.signup}>Sign Up</Link >
              </>
            )}

            <button
              ref={buttonRef}
              className={styles.menuButton}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className={styles.mobileMenu}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul className={styles.mobileNav}>
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link ></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link ></li>
              <li><Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link ></li>
              <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link ></li>
              <li><Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link ></li>
              <li><Link href="/login" onClick={() => setIsOpen(false)}>Login</Link ></li>
              <li><Link href="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link ></li>
            </ul>
          </div>
        )}

      </div>
    </header>
  );
}