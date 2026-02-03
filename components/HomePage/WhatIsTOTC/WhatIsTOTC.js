import Image from "next/image";
import styles from "./WhatIsTOTC.module.scss";
import InstructorImage from "@/assets/images/landing-page/instructor.png";
import StudentsImage from "@/assets/images/landing-page/students.png";
const WhatIsTOTC = () => {
  return (
    <section className={styles.whatIsTotc} aria-labelledby="what-is-totc">
      <header className={styles.header}>
        <h2 id="what-is-totc">
          What is <span>TOTC?</span>
        </h2>
        <p>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online, manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </header>

      <div className={styles.cards}>
        <article className={styles.card}>
          <Image
            src={InstructorImage}
            alt="instructor"
            aria-hidden="true"
          />
          <div className={styles.overlay}>
            <h3>FOR INSTRUCTORS</h3>
            <button type="button">Start a class today</button>
          </div>
        </article>

        <article className={styles.card}>
          <Image
            src={StudentsImage}
            alt="students"
            aria-hidden="true"
          />
          <div className={styles.overlay}>
            <h3>FOR STUDENTS</h3>
            <button type="button" className={styles.primary}>
              Enter access code
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhatIsTOTC;
