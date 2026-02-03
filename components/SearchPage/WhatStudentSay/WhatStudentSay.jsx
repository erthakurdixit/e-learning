"use client"
import React, { useState } from 'react';
import styles from './WhatStudentSay.module.scss';
import Image from 'next/image';
import girlWithBook from '@/assets/images/common/girlWithBook.png'
import participant1 from '@/assets/images/common/participant1.png'
import Link from 'next/link';
const testimonials = [
  {
    id: 1,
    name: "Savannah Nguyen",
    email: "tanya.hill@example.com",
    role: "Student",
    image: participant1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    socials: { twitter: "#", facebook: "#", instagram: "#" }
  },
  {
    id: 2,
    name: "Dianne Russell",
    email: "dianne.r@example.com",
    role: "Student",
    image: participant1,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    socials: { twitter: "#", facebook: "#", instagram: "#" }
  },
  {
    id: 3,
    name: "Ronald Richards",
    email: "ronald.rich@example.com",
    role: "Student",
    image: participant1,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    socials: { twitter: "#", facebook: "#", instagram: "#" }
  },
  {
    id: 4,
    name: "Albert Flores",
    email: "albert.f@example.com",
    role: "Student",
    image: participant1,
    text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    socials: { twitter: "#", facebook: "#", instagram: "#" }
  }
];

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);

export default function WhatStudentSay() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  return (
    <div className={styles.container}>
      <header className={styles.heading}>
        <h1>What our students have to say</h1>
      </header>

      <main className={styles.card} role="region" aria-label="Student Testimonial">
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrapper}>
            <Image
              src={girlWithBook}
              alt={current.name}
              className={styles.mainImage}
              key={current.id}
              width={522}
              height={515}
            />
          </div>
        </div>

        <section className={styles.contentSection}>
          <h2 className={styles.name}>{current.name}</h2>
          <p className={styles.email}>{current.email}</p>

          <blockquote className={styles.testimonialText}>
            "{current.text}"
          </blockquote>

          <div className={styles.socials}>
            <Link href={current.socials.twitter} className={styles.socialIcon} aria-label="Twitter">
              <TwitterIcon />
            </Link >
            <Link href={current.socials.facebook} className={styles.socialIcon} aria-label="Facebook">
              <FacebookIcon />
            </Link >
            <Link href={current.socials.instagram} className={styles.socialIcon} aria-label="Instagram">
              <InstagramIcon />
            </Link >
          </div>
        </section>

        <nav className={styles.sidebar} aria-label="Select Student">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              className={`${styles.thumbBtn} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial from ${item.name}`}
              aria-pressed={activeIndex === index}
            >
              <Image src={item.image} alt="" width={79} height={79} className={styles.thumbImg} />
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
}