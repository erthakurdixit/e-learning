import React from 'react';
import styles from './SliderWrapper.module.scss';
import Link from 'next/link';


const SliderWrapper = (props) => {
    const { title, isSlider = false, children } = props ?? {};
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <Link href="#" className={styles.seeAll}>See all</Link >
            </div>
            {children}
            {isSlider && (
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
            )}
        </div>
    );
};

export default SliderWrapper;