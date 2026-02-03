import React from 'react';
import styles from './CategoryGrid.module.scss';
import brush from '@/assets/icons/brush.svg';
import business from '@/assets/icons/business.svg';
import desktop from '@/assets/icons/desktop.svg';
import database from '@/assets/icons/database.svg';
import Image from 'next/image';

const categories = [
    { id: 1, title: 'Design', color: '#49BBBD4D', icon: brush },
    { id: 2, title: 'Development', color: '#5B72EE4D', icon: desktop },
    { id: 3, title: 'Development', color: '#9DCCFF4D', icon: database },
    { id: 4, title: 'Business', color: '#00CBB84D', icon: business },
    { id: 5, title: 'Marketing', color: '#F48C064D', icon: brush },
    { id: 6, title: 'Photography', color: '#EE645B4D', icon: desktop },
    { id: 7, title: 'Acting', color: '#2526414D', icon: database },
    { id: 8, title: 'Business', color: '#00CBB84D', icon: business },
];

const CategoryGrid = () => {
    const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod";

    return (<div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Choice favourite course from top category</h2>
        </div>
        <div className={styles.section}>
            <div className={styles.grid}>
                {categories.map((cat) => (
                    <div key={cat.id} className={styles.card}>
                        <div
                            className={styles.iconBox}
                            style={{ backgroundColor: cat.color }}
                        >
                            <span className={styles.icon}><Image src={cat.icon} alt={cat.title} width={30} height={35} /></span>
                        </div>

                        <h3 className={styles.title}>{cat.title}</h3>
                        <p className={styles.description}>{loremText}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>

    );
};

export default CategoryGrid;