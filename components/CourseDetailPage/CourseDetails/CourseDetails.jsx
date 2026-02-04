import React from 'react';
import styles from './CourseDetails.module.scss';
import Image from 'next/image';
import courseDeailBanner from '@/assets/images/common/courseDeailBanner.jpg'
import twitter from '@/assets/icons/twitter.svg'
import sun from '@/assets/icons/sun.svg'
import CourseReviews from './CourseReviews';

const CourseDetails = () => {


    return (
        <div className={styles.mainWrapper}>
            <section className={styles.heroSection}>
            </section>
            <div className={styles.heroContent}>
                <div className={styles.tabs}>
                    <button className={styles.tab}>Overview</button>
                    <button className={styles.tab}>Overview</button>
                    <button className={styles.tab}>Overview</button>
                    <button className={`${styles.tab} ${styles.active}`}>Overview</button>
                </div>
                <aside className={styles.pricingCard}>
                    <div className={styles.videoThumbnail}>
                        <Image src={courseDeailBanner} alt="Preview" width={448} height={268}/>
                        <div className={styles.playButton}>▶</div>
                    </div>
                    <div className={styles.pricingBody}>
                        <div className={styles.priceRow}>
                            <span className={styles.currentPrice}>$49.65</span>
                            <span className={styles.oldPrice}>$99.99</span>
                            <span className={styles.discount}>50% Off</span>
                        </div>
                        <p className={styles.timeLeft}>11 hour left at this price</p>
                        <button className={styles.buyBtn}>Buy Now</button>
                        <div className={styles.infoList}>
                            <h4>This Course included</h4>
                            <ul>
                                <li><span><Image alt={"sun"}  src ={sun} width={23} height={23}/></span> Money Back Guarantee</li>
                                <li><span><Image alt={"sun"} src ={sun} width={23} height={23}/></span> Access on all devices</li>
                                <li><span><Image alt={"sun"} src ={sun} width={23} height={23}/></span> Certification of completion</li>
                                <li><span><Image alt={"sun"} src ={sun} width={23} height={23}/></span> 32 Moduls</li>
                            </ul>
                        </div>

                        <div className={styles.trainingSection}>
                            <h4>Training 5 or more people</h4>
                            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>

                        <div className={styles.shareSection}>
                            <h4>Share this course</h4>
                            <div className={styles.socialIcons}>
                                <Image alt={"social"} src={twitter} width={32} height={32}/><Image alt={"social"}  src={twitter} width={32} height={32}/><Image alt={"social"} src={twitter} width={32} height={32}/><Image alt={"social"} src={twitter} width={32} height={32}/>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <CourseReviews/>
        </div>
    );
};

export default CourseDetails;