import React from 'react';
import styles from './JoinUs.module.scss';
import Image from 'next/image';
import teacherImg from '@/assets/images/common/teaching.png';
const JoinUs = () => {
  return (
    <section className={styles.joinSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={teacherImg} alt="Become a Teacher" className={styles.mainImg}  width={720} height={82}/>
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Become a Teacher</h3>
              <p className={styles.cardDesc}>
                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
              </p>
              <div className={styles.btnWrapper}>
                <button className={styles.applyBtn}>Apply a Teacher</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={teacherImg} alt="Become a Teacher" className={styles.mainImg}  width={720} height={82}/>
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Become a Coursector</h3>
              <p className={styles.cardDesc}>
                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
              </p>
              <div className={styles.btnWrapper}>
                <button className={styles.applyBtn}>Apply a Coursector</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinUs;