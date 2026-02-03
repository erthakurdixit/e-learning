import Image from "next/image";
import styles from "./ExploreCourse.module.scss";
import courseCardImage from "@/assets/images/landing-page/courseCard.png";
import bookPill from "@/assets/images/landing-page/bookPill.png";
import rightArrow from "@/assets/icons/rightArrow.svg";
import paint from "@/assets/icons/paint.svg";
const FirstCategoriesLeft = [
  "Ut Sed Eros",
  "Curabitur Egestas",
  "Quisque Conseq.",
  "Cras Convallis",
  "Vestibulum fauc.",
  "Ut Sed Eros",
  "Vestibulum fauc."
];
const SecondCategoriesLeft = [
  "Ut Sed Eros",
  "Curabitur Egestas",
  "Quisque Conseq.",
  "Cras Convallis",
];
const SecondCategoriesRight = [
  "Vestibulum fauc.",
  "Ut Sed Eros",
  "Vestibulum fauc."
];
const ThirdCategoriesLeft = [
  "Ut Sed Eros",
];
const ThirdCategoriesRight = [
  "Curabitur Egestas",
  "Quisque Conseq.",
  "Cras Convallis",
  "Vestibulum fauc.",
  "Ut Sed Eros",
  "Vestibulum fauc."
];
const Course = (props) => {
  const { leftCategories = [], rightCategories = [], heading="" } = props;
  return (
    <div className={styles.content}>
      < div className={styles.contentHeader}>
        <h3>
          <span><Image src={paint} alt="paint" width={32} height={32} /></span>
          {heading}
        </h3>
        <button className={styles.seeAll}>
          SEE ALL <span><Image src={rightArrow} alt="arrow" width={32} height={32} /></span>
        </button>
      </div>
      <div className={styles.boooksAndCards}>
        <div className={styles.categories + " " + styles.leftCategories}>
          {leftCategories.map((item, index) => (
            <div key={index} className={styles.categoryPill}>
              <Image src={bookPill} alt="book pill" width={80} height={382} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className={styles.cards}>
          <Image src={courseCardImage} alt="courseCardImage" width={684} height={429} />
        </div>
        <div className={styles.categories + " " + styles.rightCategories}>
          {rightCategories.map((item, index) => (
            <div key={index} className={styles.categoryPill}>
              <Image src={bookPill} alt="book pill" width={80} height={382} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <span className={styles.bottomBox}></span>
    </div>
  )
}
const ExploreCourse = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h2>Explore Course</h2>
          <p>Ut sed eros finibus, placerat orci id, dapibus.</p>
        </div>
      </div>
      <Course leftCategories={FirstCategoriesLeft} heading="Lorem Ipsum" />
      <Course leftCategories={SecondCategoriesLeft} rightCategories={SecondCategoriesRight} heading="Quisque a Consequat" />
      <Course leftCategories={ThirdCategoriesLeft} rightCategories={ThirdCategoriesRight} heading="Aenean Facilisis" />
      <span className={styles.overlay}></span>
    </section>
  );
};

export default ExploreCourse;
