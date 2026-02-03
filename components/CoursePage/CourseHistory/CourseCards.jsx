import React from 'react';
import styles from './CourseCards.module.scss';
import Image from 'next/image';

const CourseCards = (props) => {
    const { cardData } = props ?? {}

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {cardData.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                        <Image src={item.img} alt="Course Preview" width={486} height={258} />
                        </div>

                        <div className={styles.cardBody}>
                            <h3 className={styles.title}>AWS Certified Solutions Architect</h3>

                            <div className={styles.instructor}>
                                <div className={styles.avatar}>
                                <Image src={item.avatar} alt="Lina" width={42} height={42}/>
                                </div>
                                <span>{item.instructor}</span>
                            </div>

                            <div className={styles.footer}>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill} style={{ width: '70%' }}></div>
                                </div>
                                <div className={styles.lessonText}>Lesson 5 of 7</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseCards;