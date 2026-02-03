import Image from "next/image";
import styles from "./Testimonial.module.scss";
import smilingGirl from "@/assets/images/landing-page/smilingGirl.jpg";
import sliderArrow from "@/assets/icons/sliderArrow.svg";

const Testimonial = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.header}>
          <span className={styles.line}></span>
          <span className={styles.label}>TESTIMONIAL</span>
        </div>

        <h2 className={styles.title}>What They Say?</h2>

        <p className={styles.description}>
          TOTC has got more than 100k positive ratings from our users around the world.
        </p>

        <p className={styles.description}>
          Some of the students and teachers were greatly helped by the Skilline.
        </p>

        <p className={styles.description}>
          Are you too? Please give your assessment
        </p>

        <button className={styles.cta}>
          Write your assessment
          <span className={styles.arrow}>→</span>
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          <Image src={smilingGirl} alt="smilingGirl Icon" width={560} height={700} className={styles.quoteIcon} />
          <button className={styles.navButton}>
            <Image src={sliderArrow} alt="sliderArrow Icon" width={12} height={20} />
          </button>
        </div>

        <div className={styles.card}>
          <span className={styles.quoteBar} />
          <div className={styles.quoteBox}>
            <span className={styles.verticleLine} />
            <p className={styles.quote}>
              "Thank you so much for your help. It's exactly what I've been looking
              for. You won't regret it. It really saves me time and effort. TOTC is
              exactly what our business has been lacking."
            </p>

          </div>

          <div className={styles.footer}>
            <span className={styles.name}>Gloria Rose</span>

            <div className={styles.rating}>
              <div className={styles.stars}>★★★★★</div>
              <span className={styles.reviews}>12 reviews at Yelp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
