
import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from "@/assets/icons/logo.svg";
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoWrapper}>
           <Image src={logo} alt={"logo"} width={ 114} height={83} />
          </div>
          
          <div className={styles.verticalDivider}></div>
          
          <div className={styles.tagline}>
            Virtual Class for Zoom
          </div>
        </div>

        <div className={styles.newsletterSection}>
          <h3 className={styles.newsletterTitle}>Subscribe to get our Newsletter</h3>
          <form className={styles.subscribeForm} >
            <input 
              type="email" 
              placeholder="Your Email" 
              className={styles.emailInput} 
              required
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
        </div>

        <div className={styles.bottomLinks}>
          <ul className={styles.linkList}>
            <li><Link href="#">Careers</Link ></li>
            <li className={styles.separator}>|</li>
            <li><Link href="#">Privacy Policy</Link ></li>
            <li className={styles.separator}>|</li>
            <li><Link href="#">Terms & Conditions</Link ></li>
          </ul>
          <p className={styles.copyright}>
            © 2021 Class Technologies Inc.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;