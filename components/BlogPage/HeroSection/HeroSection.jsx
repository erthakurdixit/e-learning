import React from 'react';
import styles from './HeroSection.module.scss';
import blogHeroImage from '@/assets/images/blog/blogHeroImage.png';
import Image from 'next/image';
import Link from 'next/link';


const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        
        <div className={styles.contentColumn}>
          <p className={styles.metaInfo}>
            By Themadbrains in <Link href="/inspiration" className={styles.categoryLink}>inspiration</Link >
          </p>
          
          <h1 className={styles.title}>
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>
          
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          
          <button className={styles.ctaButton}>
            Start learning now
          </button>
        </div>

        <div className={styles.imageColumn}>
          <Image 
            src={blogHeroImage} 
            alt="Person working on laptop with Zoom call" 
            className={styles.heroImage} 
            width={779}
            height={527}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;