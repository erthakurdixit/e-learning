"use client"
import React from 'react';
import styles from './Creators.module.scss';
import SliderWrapper from '@/components/SliderWrapper/SliderWrapper';
import Image from 'next/image';
import creator1 from '@/assets/images/common/creator1.png'
const CreatorCard = ({ name, imageSrc, description }) => {
    return (
        <article className={styles.creatorCard}>
            <div className={styles.imageContainer}>
                <Image
                    width={278}
                    height={277}
                    src={imageSrc || "/api/placeholder/200/200"}
                    alt={name}
                    className={styles.creatorImage}
                />
            </div>
            <div className={styles.contentBox}>
                <h3 className={styles.creatorName}>{name}</h3>
                <p className={styles.creatorDescription}>{description}</p>
            </div>
        </article>
    );
};

export default function Creators() {
    const creators = [
        { id: 1, name: "Jane Cooper", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", imageSrc: creator1 },
        { id: 2, name: "Adam", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", imageSrc: creator1 },
        { id: 3, name: "Tomara", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", imageSrc: creator1 },
        { id: 4, name: "Jane Cooper", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", imageSrc: creator1 },
        { id: 5, name: "Jane Cooper", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", imageSrc: creator1 },
        { id: 6, name: "Jane Cooper", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", imageSrc: creator1 },
    ];

    return (
        <main className={styles.pageWrapper}>

            <section className={styles.section}>
                <SliderWrapper title="Classes tought by real creators" isSlider={false}>
                    <div className={styles.container}>
                        <section className={styles.grid} aria-label="Creators List">
                            {creators.map((creator) => (
                                <CreatorCard
                                    key={creator.id}
                                    name={creator.name}
                                    description={creator.description}
                                    imageSrc={creator.imageSrc}
                                />
                            ))}
                        </section>
                    </div>
                </SliderWrapper>
            </section>

        </main>
    );
}