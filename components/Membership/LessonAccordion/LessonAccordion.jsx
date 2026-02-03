"use client";
import React, { useState } from 'react';
import styles from './LessonAccordion.module.scss';

const LessonAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(3); 

  const accordionData = [
    { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos..." },
    { title: "Consectetur adipiscing elit, sed do", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos..." },
    { title: "Eiusmod tempos Lorem ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos..." },
    { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor" },
    { title: "Lorem ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos..." },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Online coaching lessons for remote learning</h2>
        
        <div className={styles.accordionList}>
          {accordionData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <div 
                className={styles.itemHeader} 
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.headerLeft}>
                  <span className={styles.statusDot}></span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
                
                <span className={styles.iconWrapper}>
                  <svg 
                    width="14" 
                    height="8" 
                    viewBox="0 0 14 8" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.arrowIcon}
                  >
                    <path d="M1 1L7 7L13 1" stroke="#696984" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              <div className={styles.contentWrapper}>
                <div className={styles.contentInner}>
                  <p className={styles.contentText}>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonAccordion;