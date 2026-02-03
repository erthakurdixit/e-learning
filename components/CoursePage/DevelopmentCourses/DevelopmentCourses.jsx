import React from 'react';
import styles from './DevelopmentCourses.module.scss';
import blogList1 from '@/assets/images/blog/blogList1.png';
import girlImage from '@/assets/images/common/girlImage.jpg';
import girlImageClass from '@/assets/images/common/girlImageClass.png';
import laptop from '@/assets/images/common/laptop.png';
import teaching from '@/assets/images/common/teaching.png';
import ArticlesGrid from '@/components/ArticlesGrid/ArticlesGrid';
import SliderWrapper from '@/components/SliderWrapper/SliderWrapper';
const articlesData = [
  {
    id: 1,
    image: girlImageClass,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    authorName: "Lina",
    authorAvatar: girlImage,
    price: 80,
    oldPrice: 100
  },
  {
    id: 2,
    image: blogList1,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    authorName: "Lina",
    authorAvatar: girlImage,
    price: 80,
    oldPrice: 100
  },
  {
    id: 3,
    image: laptop,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    authorName: "Lina",
    authorAvatar: girlImage,
    price: 80,
    oldPrice: 100
  },
  {
    id: 4,
    image: teaching,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    authorName: "Lina",
    authorAvatar: girlImage,
    price: 80,
    oldPrice: 100
  },
];

const DevelopmentCourses = () => {
  return (
    <section className={styles.section}>
      <SliderWrapper title="The course in personal development" isSlider={false}>
        <ArticlesGrid articlesData={articlesData} />
      </SliderWrapper>
    </section>
  );
};

export default DevelopmentCourses;