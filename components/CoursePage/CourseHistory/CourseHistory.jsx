import React from 'react';
import styles from './CourseHistory.module.scss';
import laptop from '@/assets/images/common/laptop.png';
import teaching from '@/assets/images/common/teaching.png';
import girlImage from '@/assets/images/common/girlImage.jpg';
import SliderWrapper from '@/components/SliderWrapper/SliderWrapper';
import CourseCards from './CourseCards';

const cardData = [
    { id: 1, img: laptop, instructor: 'Lina', avatar: girlImage },
    { id: 2, img: teaching, instructor: 'Lina', avatar: girlImage },
    { id: 3, img: laptop, instructor: 'Lina', avatar: girlImage },
];

const CourseHistory = () => {
    return (
        <section className={styles.section}>
            <SliderWrapper title="Welcome back, ready for your next lesson?" isSlider={true}>
                <CourseCards cardData={cardData} />
            </SliderWrapper>
        </section>
    );
};

export default CourseHistory;