import Image from "next/image";
import styles from "./LatestNews.module.scss";
import girlImageClass from "@/assets/images/landing-page/girlImageClass.png";
import investor from "@/assets/images/landing-page/investor.png";
import laptop from "@/assets/images/landing-page/laptop.png";
import meeting from "@/assets/images/landing-page/meeting.png";

export const rightSideNews = [
    {
        id: 1,
        image: <Image src={girlImageClass} className={styles.sideImage} alt="News 1" width={280} height={200} />,
        badge: "PRESS RELEASE",
        title:
            "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
        description:
            "Class Technologies Inc., the company that created Class,...",
    },
    {
        id: 2,
        image: <Image src={investor} className={styles.sideImage} alt="News 1" width={280} height={200} />,
        badge: "NEWS",
        title:
            "Zoom’s earliest investors are betting millions on a better Zoom for schools",
        description:
            "Zoom was never created to be a consumer product. Nonetheless, the...",
    },
    {
        id: 3,
        image: <Image src={laptop} className={styles.sideImage} alt="News 3" width={280} height={200} />,
        badge: "NEWS",
        title:
            "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
        description:
            "This year, investors have reaped big financial returns from betting on Zoom...",
    },
];

import React from 'react';
import Link from "next/link";

const LatestNews = () => {
    return (
        <section className={styles.newsSection}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.title}>Latest News and Resources</h2>
                    <p className={styles.subtitle}>
                        See the developments that have occurred to TOTC in the world
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.mainFeature}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={meeting}
                                alt="Class zoom edtech solution"
                                className={styles.mainImage}
                                width={640}
                                height={340}
                            />
                            <span className={styles.badge}>NEWS</span>
                        </div>

                        <div className={styles.mainContent}>
                            <h3 className={styles.articleTitle}>
                                Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                            </h3>
                            <p className={styles.articleDesc}>
                               Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                            </p>
                            <Link href="#" className={styles.readMore}>Read more</Link >
                        </div>
                    </div>

                    <div className={styles.sideList}>
                        {rightSideNews.map((item) => (
                            <div key={item.id} className={styles.sideItem}>
                                <div className={styles.sideImageWrapper}>
                                    {item.image}
                                    <span className={styles.badgeSmall}>{item.badge}</span>
                                </div>
                                <div className={styles.sideContent}>
                                    <h4 className={styles.sideTitle}>{item.title}</h4>
                                    <p className={styles.sideDesc}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LatestNews;