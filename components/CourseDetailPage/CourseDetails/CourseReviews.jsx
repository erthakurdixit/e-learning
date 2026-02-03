import React from 'react';
import styles from './CourseReviews.module.scss';
import { FaStar, FaRegClock } from 'react-icons/fa';
import girlImage from '@/assets/images/common/girlImage.jpg';
import Image from 'next/image';

const CourseReviews = () => {
    const ratings = [
        { stars: 5, value: 80 },
        { stars: 4, value: 80 },
        { stars: 3, value: 80 },
        { stars: 2, value: 80 },
        { stars: 1, value: 80 },
    ];

    const reviews = [
        { id: 1, name: 'Lina', time: '3 Month', rating: 5 },
        { id: 2, name: 'Lina', time: '3 Month', rating: 5 },
    ];

    return (
        <section className={styles.reviewContainer}>
            <div className={styles.reviewBox}>
                <div className={styles.summaryRow}>
                    <div className={styles.scoreCard}>
                        <h2 className={styles.scoreTitle}>4 out of 5</h2>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => <FaStar key={i} className={styles.starIcon} />)}
                        </div>
                        <p className={styles.topRatingText}>Top Rating</p>
                    </div>

                    <div className={styles.ratingBars}>
                        {ratings.map((item) => (
                            <div key={item.stars} className={styles.barLine}>
                                <span className={styles.barLabel}>{item.stars} Stars</span>
                                <div className={styles.track}>
                                    <div className={styles.fill} style={{ width: `${item.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.reviewList}>
                    {reviews.map((rev) => (
                        <div key={rev.id} className={styles.reviewItem}>
                            <div className={styles.reviewerHeader}>
                                <div className={styles.avatar}>
                                    <Image src={girlImage} alt={rev.name} width={70} height={70} />
                                </div>
                                <div className={styles.reviewerInfo}>
                                    <div>
                                        <div className={styles.nameRow}>
                                            <span className={styles.name}>{rev.name}</span>

                                        </div>
                                        <div className={styles.miniStars}>
                                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                        </div>

                                    </div>

                                    <div className={styles.timeRow}>
                                        <FaRegClock /> <span>{rev.time}</span>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.comment}>
                                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseReviews;