import React from 'react';
import styles from './AppPromotion.module.scss';
import Image from 'next/image';
import androidIcon from '@/assets/icons/androidIcon.svg';
import appleIcon from '@/assets/icons/appleIcon.svg';

const AppPromotion = () => {
  return (
    <section className={styles.appSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>APP is available for free</h2>
        
        <div className={styles.buttonGroup}>
          <button className={styles.androidBtn}>
            <Image src={androidIcon} alt="androidIcon" />
            Android APP
          </button>
          
          <button className={styles.iosBtn}>
            <Image src={appleIcon} alt="appleIcon" />
            IOS APP
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;