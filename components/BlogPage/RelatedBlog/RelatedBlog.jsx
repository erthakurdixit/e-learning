import React from 'react';
import styles from './RelatedBlog.module.scss';
import relatedBlog1 from '@/assets/images/blog/relatedBlog1.png';
import relatedBlog2 from '@/assets/images/blog/relatedBlog2.png';
import girlImage from '@/assets/images/common/girlImage.jpg';
import Image from 'next/image';
import Link from 'next/link';

const blogData = [
    {
        id: 1,
        image: <Image src={relatedBlog1} alt="Related Blog 1" className={styles.blogImage} width={719} height={382} />,
        title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        author: "Lina",
        authorAvatar: <Image src={girlImage} alt="girlImage" className={styles.avatar} width={71} height={71} />,
        description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        views: "251,232"
    },
    {
        id: 2,
        image: <Image src={relatedBlog2} alt="Related Blog 2" className={styles.blogImage} width={719} height={382} />,
        title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        author: "Lina",
        authorAvatar: <Image src={girlImage} alt="girlImage" className={styles.avatar} width={71} height={71} />,
        description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        views: "251,232"
    }
];

const RelatedBlog = () => {
    return (
        <section className={styles.relatedSection}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Related Blog</h2>
                    <Link href="/blog" className={styles.seeAll}>See all</Link >
                </div>

                <div className={styles.cardsGrid}>
                    {blogData.map((post) => (
                        <article key={post.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                {post.image}
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.blogTitle}>{post.title}</h3>

                                <div className={styles.authorRow}>
                                    {post.authorAvatar}
                                    <span className={styles.authorName}>{post.author}</span>
                                </div>

                                <p className={styles.description}>{post.description}</p>

                                <div className={styles.cardFooter}>
                                    <Link href={`/blog/${post.id}`} className={styles.readMore}>Read more</Link>

                                    <div className={styles.viewsWrapper}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#49BBBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.eyeIcon}>
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        <span className={styles.viewCount}>{post.views}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.pagination}>
                    <button className={styles.pageBtn} aria-label="Previous">
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 1L1.5 8L8.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className={styles.pageBtn} aria-label="Next">
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1L8.5 8L1.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default RelatedBlog;