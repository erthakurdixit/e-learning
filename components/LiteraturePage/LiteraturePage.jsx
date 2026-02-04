"use client";

import React, { useState } from "react";
import styles from "./LiteraturePage.module.scss";
import literatureItem from "@/assets/images/common/literatureItem.jpg"
import literatureHero from "@/assets/images/common/literatureHero.png"
import Image from "next/image";
const BOOKS = [
    { id: 1, title: "Build Your Dream Network", price: "$24", img: literatureItem },
    { id: 2, title: "Visible Learning for Literacy", price: "$24", img: literatureItem },
    { id: 3, title: "The New Rules of Work", price: "$24", img: literatureItem },
    { id: 4, title: "Pivot", price: "$24", img: literatureItem },
    { id: 5, title: "Learning & Development", price: "$24", img: literatureItem },
    { id: 6, title: "Visible Learning (Duplicate)", price: "$24", img: literatureItem },
];

const TABS = ["About", "Course", "Notes", "Project", "Podcast", "Book", "Review"];

const ProfileHeader = () => {
    return (
        <header className={styles.profileHeader}>
            <div className={styles.avatarWrapper}>
                <Image
                    src={literatureHero}
                    alt="John Anderson"
                    className={styles.avatar}
                    width={338}
                    height={338}
                />
            </div>

            <div className={styles.profileOverlay}>
                <div className={styles.profileInfo}>
                    <h1><span>John Anderson</span>
                        <button className={styles.enrollBtn}>Enroll Now</button>
                    </h1>
                    <span className={styles.subTitle}>
                        Assistant Professor at McMaster University
                    </span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className={styles.statsBar}>
                        <span>⭐ 4.9 Instructor Rating</span>
                        <span>👥 1,592 Students</span>
                        <span>🎬 7 Courses</span>
                    </div>
                </div>

            </div>
        </header>
    );
};

const BookCard = ({ book }) => {
    return (
        <article className={styles.card}>
            <Image width={450} height={518} src={book.img} alt={book.title} className={styles.bookCover} />
            <div className={styles.cardFooter}>
                <span className={styles.benefitText}>All Benefits of PLUS</span>
                <span className={styles.price}>{book.price}</span>
            </div>
        </article>
    );
};

export default function LiteraturePage() {
    const [activeTab, setActiveTab] = useState("Book");

    return (
        <div className={styles.container}>
            <ProfileHeader />

            <nav className={styles.tabsContainer}>
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <h2 className={styles.gridTitle}>Literature course</h2>

            <section className={styles.bookGrid}>
                {BOOKS.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </section>

            <nav className={styles.pagination}>
                <button className={styles.pageBtn}>‹</button>
                <button className={styles.pageBtn}>1</button>
                <button className={styles.pageBtn}>2</button>
                <button className={`${styles.pageBtn} ${styles.activePage}`}>3</button>
                <button className={styles.pageBtn}>4</button>
                <button className={styles.pageBtn}>5</button>
                <button className={styles.pageBtn}>›</button>
            </nav>
        </div>
    );
}
