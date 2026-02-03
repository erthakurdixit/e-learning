import React from 'react';
import styles from './BlogList.module.scss';
import Image from 'next/image';
import blogList1 from '@/assets/images/blog/blogList1.png';
import blogList2 from '@/assets/images/blog/blogList2.jpg';
import blogList3 from '@/assets/images/blog/blogList3.jpg';
import blogList4 from '@/assets/images/blog/blogList4.png';

const blogTopics = [
    {
        id: 1,
        title: "UX/UI",
        image: <Image
            src={blogList1}
            alt={`blogList1`}
            className={styles.cardImage}
        />,
    },
    {
        id: 2,
        title: "React",
        image: <Image
            src={blogList2}
            alt="React blog category"
            className={styles.cardImage}
        />,
    },
    {
        id: 3,
        title: "PHP",
        image: <Image
            src={blogList3}
            alt="PHP blog category"
            className={styles.cardImage}
        />,
    },
    {
        id: 4,
        title: "JavaScript",
        image: <Image
            src={blogList4}
            alt="JavaScript blog category"
            className={styles.cardImage}
        />,
    },
];

const BlogList = () => {
    return (
        <section className={styles.blogListSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Reading blog list</h2>

                <div className={styles.grid}>
                    {blogTopics.map((topic) => (
                        <div key={topic.id} className={styles.card}>
                            {topic.image}
                            <div className={styles.labelWrapper}>
                                <span className={styles.labelText}>{topic.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;