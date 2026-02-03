import React from 'react';
import styles from './TopEducator.module.scss';
const TopEducator = (props) => {
    const {offers, title} = props ?? {}


  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <button className={styles.seeAll}>See all</button>
      </div>

      <div className={styles.grid}>
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className={styles.card}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${offer.bgImage})` }}
          >
            <div className={styles.badge}>{offer.tag}</div>
            <div className={styles.content}>
              <h3 className={styles.title}>{offer.title}</h3>
              <p className={styles.description}>{offer.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopEducator;