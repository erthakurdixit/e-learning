"use client"
import React from 'react';
import styles from "./LandingPageBanner.module.scss"
import BannerMessageSection from '../BannerMessageSection/BannerMessageSection';
import BannerNotificationSection from '../BannerNotificationSection/BannerNotificationSection';
import girlImage from "@/assets/images/landing-page/girlImage.jpg";
import notifications from "@/assets/images/landing-page/notifications.png";
import Image from 'next/image';
import Header from '@/components/Header/Header';
const LandingPageBanner = () => {
    return <div className={styles.landingPageBanner}>
        <div className={styles.landingBannerContainer}>
            <Header />
            <div className={styles.overlay} >
                <BannerMessageSection />
                <div>
                <Image src={notifications} alt="notifications" width={911} height={577} />

                </div>
            </div>
            <Image src={girlImage} alt="girl image" className={styles.girlImage} />
        </div>
    </div >;
};

export default LandingPageBanner;