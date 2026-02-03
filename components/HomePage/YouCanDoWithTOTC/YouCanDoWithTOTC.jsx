import Image from "next/image";
import styles from "./YouCanDoWithTOTC.module.scss";
import TeachersImage from "@/assets/images/landing-page/teacher.jpg";
import Link from "next/link";

const YouCanDoWithTOTC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={`${styles.circle} ${styles.bigCircle}`}></span>


                    <h2 className={styles.title}>
                        Everything you can do in a physical classroom,{" "}
                        <span>you can do with TOTC</span>
                    </h2>

                    <p className={styles.description}>
                        TOTC’s school management software helps traditional and online
                        schools manage scheduling, attendance, payments and virtual
                        classrooms all in one secure cloud-based system.
                        <span className={`${styles.circle} ${styles.smallCircle}`}></span>
                    </p>

                    <Link href="#" className={styles.link}>
                        Learn more
                    </Link >
                </div>

                <div className={styles.media}>
                    <Image
                        src={TeachersImage}
                        alt="Classroom with teacher"
                        className={styles.image}
                    />

                    <button className={styles.playButton} aria-label="Play video">
                        <span className={styles.playIcon} />
                    </button>

                    <span className={`${styles.ellipse} ${styles.ellipseBlue}`} />
                    <span className={`${styles.ellipse} ${styles.ellipseGreen}`} />
                </div>
            </div>
        </section>
    );
};

export default YouCanDoWithTOTC;
