import React from 'react';
import styles from './Coaching.module.scss';

const Coaching = () => {
  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Online coaching lessons for remote learning.
          </h2>
          
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do 
            eiusmod tempor
          </p>

          <div className={styles.buttonWrapper}>
            <button className={styles.ctaButton}>
              Start learning now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;