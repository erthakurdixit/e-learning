import React from 'react';
import styles from './ArticleCard.module.scss';
import Image from 'next/image';

const ArticleCard = ({
  image,
  category,
  duration,
  title,
  description,
  authorName,
  authorAvatar,
  price,
  oldPrice
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={335} height={239} className={styles.cardImage} />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="5" height="5" stroke="#696984" />
              <rect x="8.5" y="0.5" width="5" height="5" stroke="#696984" />
              <rect x="0.5" y="8.5" width="5" height="5" stroke="#696984" />
              <rect x="8.5" y="8.5" width="5" height="5" stroke="#696984" />
            </svg>
            <span>{category}</span>
          </div>
          <div className={styles.metaItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#696984" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{duration}</span>
          </div>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.footer}>
          <div className={styles.authorInfo}>
            <Image src={authorAvatar} alt={authorName} width={44} height={44} className={styles.avatar} />
            <span className={styles.authorName}>{authorName}</span>
          </div>

          <div className={styles.pricing}>
            {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
            <span className={styles.newPrice}>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;