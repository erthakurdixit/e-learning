import Image from 'next/image';
import styles from './BannerMessageSection.module.scss';
import playButton from "@/assets/icons/playButton.svg"
import playPolygon from "@/assets/icons/playPolygon.svg"
export default function BannerMessageSection() {
  return (
    <section className={styles.wrapper} aria-labelledby="banner-heading">
      <h1 id="banner-heading" className={styles.heading}>
        <span className={styles.highlight}>Studying</span> Online is now
        much easier
      </h1>

      <p className={styles.description}>
        TOTC is an interesting platform that will teach
        <br />
        you in more an interactive way
      </p>

      <div className={styles.actions}>
        <button className={styles.primaryBtn}>
          Join for free
        </button>

        <button
          className={styles.playBtn}
          aria-label="Watch how it works"
        >
          <span className={styles.playIcon} aria-hidden >
          {/* <Image src={playButton} width={80} height={80} alt='play button' /> */}
          <Image src={playPolygon} width={32} height={32} alt='play button' />
          </span>
          <span className={styles.playText}>Watch how it works</span>
        </button>
      </div>
    </section>
  );
}
