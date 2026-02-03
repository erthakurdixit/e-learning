import React from 'react';
import styles from './StartLearning.module.scss';
import Image from 'next/image';
import startLearning from '@/assets/images/common/startLearning.png'
const StartLearning = () => {
  const features = [
    "Free E-book, video & consolation",
    "Top instructors from around world",
    "Top courses from your team"
  ];

  return (
    <main className={styles.landingWrapper}>
      <div className={styles.container}>
        <section className={styles.contentSection}>
          <h1 className={styles.title}>
            Know about learning <br />
            learning platform
          </h1>
          
          <ul className={styles.featuresList}>
            {features.map((item, idx) => (
              <li key={idx} className={styles.featureItem}>
                <span className={styles.dot} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <button className={styles.ctaButton} type="button">
            Start learning now
          </button>
        </section>

        <section className={styles.imageSection}>
          <Image 
            src={startLearning}
            alt="Learning Platform Interface Preview" 
            className={styles.heroImage}
          />
        </section>
      </div>
    </main>
  );
};

export default StartLearning;