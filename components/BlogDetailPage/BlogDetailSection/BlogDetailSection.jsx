
import React from 'react';
import styles from './BlogDetailSection.module.scss';
import Image from 'next/image';
import courseDeailBanner from '@/assets/images/common/courseDeailBanner.jpg'
import girlImage from '@/assets/images/common/girlImage.jpg'

const BlogDetailSection = () => {
  const tags = ["affordable", "Stunning", "making", "madbrowns"];

  return (
    <article className={styles.blogWrapper}>
      <div className={styles.imageContainer}>
        <Image 
          src={courseDeailBanner}
          alt="Why Swift UI Should Be on the Radar" 
          className={styles.featuredImage}
        />
      </div>

      <div className={styles.contentSection}>
        <h1 className={styles.blogTitle}>
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h1>

        <div className={styles.textContent}>
          <p>
            TOTC is a platform that allows educators to create online classes whereby they can store 
            the course materials online; manage assignments, quizzes and exams; monitor due dates; 
            grade results and provide students with feedback all in one place.
          </p>

          <p>
            TOTC is a platform that allows educators to create online classes whereby they can store 
            the course materials online; manage assignments, quizzes and exams; monitor due dates; 
            grade results and provide students with feedback all in one place. TOTC is a platform 
            that allows educators to create online classes whereby they can store the course 
            materials online; manage assignments, quizzes and exams; monitor due dates; grade 
            results and provide students with feedback all in one place. TOTC is a platform.
          </p>

          <p>
            TOTC is a platform that allows educators to create online classes whereby they can store 
            the course materials online; manage assignments, quizzes and exams; monitor due dates; 
            grade results and provide students with feedback all in one place. TOTC is a platform 
            that allows educators to create online classes whereby they can store the course 
            materials online; manage assignments, quizzes and exams; monitor due dates; grade 
            results and provide students with feedback all in one place.
          </p>
        </div>

        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <hr className={styles.divider} />

        <div className={styles.authorSection}>
          <div className={styles.authorInfo}>
            <Image src={girlImage} alt="Lina" className={styles.avatar} width={77} height={77}/>
            <div className={styles.meta}>
              <span className={styles.writtenBy}>Written by</span>
              <span className={styles.authorName}>Lina</span>
            </div>
          </div>
          <button className={styles.followBtn}>Follow</button>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailSection;