import React from 'react';
import styles from './PricingCard.module.scss';
import iconCheck from '@/assets/icons/iconCheck.svg';
import Image from 'next/image';
const CheckIcon = ({ color }) => {
    const colorMap = {
        grey: '#C2C2C2',
        orange: '#FDCB6E',
        teal: '#55EFC4',
    };
    return (

        <Image src={iconCheck} style={{ background: colorMap[color] || colorMap.grey, borderRadius: '50%' }} className={styles.checkIcon} alt="check icon" width={32} height={32} />
    );
};

const PricingCard = ({ plan }) => {
    const {
        planName,
        icon,
        price,
        period,
        badge,
        features,
        buttonText,
        isPopular,
        accentColor,
    } = plan;

    const cardClasses = `${styles.card} ${isPopular ? styles.popular : ''} ${styles[accentColor]}`;

    return (
        <div className={cardClasses}>
            <div className={styles.header}>
                <div className={styles.titleRow}>
                    <span className={styles.icon}>{icon}</span>
                    <h3 className={styles.planName}>{planName}</h3>
                    {badge && <span className={styles.badge}>{badge}</span>}
                </div>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.period}>{period}</span>
                </div>
            </div>

            <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                        <CheckIcon color={accentColor} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={styles.actionButton}>{buttonText}</button>
        </div>
    );
};

export default PricingCard;