"use client";
import React, { useState } from 'react';
import styles from './Testimonials.module.scss';
import girlImage from "@/assets/images/common/girlImage.jpg";
import Image from 'next/image';
const testimonials = [
  { id: 1, name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", image: girlImage },
  { id: 2, name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", image: girlImage },
  { id: 3, name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", image: girlImage },
  { id: 4, name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", image: girlImage },
  { id: 5, name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", image: girlImage },
  { id: 6, name: "Bulkin Simons", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", image: girlImage },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>What our students have to say</h2>

        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.navArrow} ${styles.prev}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className={styles.viewPort}>
            <div
              className={styles.cardTrack}
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} 
            >
              {testimonials.map((item) => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image src={item.image} alt={item.name} className={styles.avatar} width={118} height={118} />
                  </div>
                  <h3 className={styles.studentName}>{item.name}</h3>
                  <p className={styles.testimonialText}>{item.text}</p>
                </div>
              ))}
            </div>
            <button
              className={`${styles.navArrow} ${styles.next}`}
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - 3} 
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>


        </div>

      </div>
    </section>
  );
};

export default Testimonials;