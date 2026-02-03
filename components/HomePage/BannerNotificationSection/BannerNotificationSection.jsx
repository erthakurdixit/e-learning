import Image from 'next/image';
import styles from './BannerNotificationSection.module.scss';
import callender from "@/assets/icons/callender.svg";
import bars from "@/assets/icons/bars.svg";
import email from "@/assets/icons/email.svg";
import avatar from "@/assets/images/landing-page/avatar.jpg";
export default function BannerNotificationSection() {
  return (
    <section className={styles.wrapper} aria-hidden>
      <div className={styles.card + ' ' + styles.stats}>
        <div className={styles.callenderIconBox}>  <span className={styles.icon}><Image src={callender} alt="callender icon" width={24} height={24} /></span>
        </div>
        <div>
          <strong>250k</strong>
          <span>Assisted Student</span>
        </div>
      </div>
      <div className={styles.barIconBox}>
        <span className={styles.barIcon}><Image src={bars} alt="bars icon" width={69} height={69} /></span>
      </div>
      <div className={styles.card + ' ' + styles.message}>
        <span className={styles.icon + ' ' + styles.emailIcon}><Image src={email} alt="bars icon" width={24} height={24} /></span>
        <div>
          <strong>Congratulations</strong>
          <span>Your admission completed</span>
        </div>
      </div>

      <div className={styles.card + ' ' + styles.classCard}>
        <div className={styles.avatar} >
          <Image src={avatar} alt="bars icon" width={69} height={69} />
        </div>
        <div>
          <strong>User Experience Class</strong>
          <span>Today at 12.00 PM</span>
          <button className={styles.joinBtn}>Join Now</button>
        </div>
      </div>
    </section>
  );
}
