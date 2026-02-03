"use client"
import React, { useState } from 'react';
import {
    ArrowLeft, Settings, Calendar, ChevronDown, ChevronUp,
    Clock, Lock, BookOpen
} from 'lucide-react';
import styles from './MeetingPage.module.scss';
import Image from 'next/image';
import meeting from "@/assets/images/common/meeting.jpg"
import participant1 from "@/assets/images/common/participant1.png"
import participant2 from "@/assets/images/common/participant2.png"
import participant3 from "@/assets/images/common/participant3.png"
import girlImageClass from "@/assets/images/common/girlImageClass.png"
import laptop from "@/assets/images/common/laptop.png"
import video from "@/assets/icons/video.svg"
import call from "@/assets/icons/call.svg"
import mic from "@/assets/icons/mic.svg"
import desktop from "@/assets/icons/desktop.svg"
import exit from "@/assets/icons/exit.svg"
const COURSE_SECTIONS = [
    { id: 1, title: 'Get Started', duration: '1 Hour', lessons: 5, isOpen: false, completed: true },
    {
        id: 2, title: 'Illstarator Structuors', duration: '2 Hour', lessons: 3, isOpen: true, completed: false,
        items: [
            { id: 1, title: 'I. Lorem ipsum dolor sit amet', time: '65:00', active: true, locked: false },
            { id: 2, title: '2. Lorem ipsum dolor', time: '25:00', active: false, locked: true },
            { id: 3, title: '3. Lorem ipsum dolor sit amet', time: '30:00', active: false, locked: true },
        ]
    },
    { id: 3, title: 'Using Illstarator', duration: '1 Hour', lessons: 4, isOpen: false, completed: false },
    { id: 4, title: 'What is Pandas?', duration: '12:54', lessons: 5, isOpen: false, completed: false },
    { id: 5, title: 'Work with Numpy', duration: '59:00', lessons: 3, isOpen: false, completed: false }
];

const PARTICIPANTS = [
    { id: 1, name: 'Participant 1', img: participant1 },
    { id: 2, name: 'Participant 2', img: participant2 },
    { id: 3, name: 'Participant 3', img: participant3 },
];

const BOOKS = [
    { id: 1, title: 'All Benefits of PLUS', price: 24, img: girlImageClass },
    { id: 2, title: 'All Benefits of PLUS', price: 24, img: laptop },
];


const SegmentedProgress = ({ current, total }) => (
    <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
            <span className={styles.progressText}>{current}/{total} COMPLETED</span>
            <Calendar size={18} className={styles.textTeal} />
        </div>
        <div className={styles.progressSegments}>
            {[...Array(total)].map((_, i) => (
                <div
                    key={i}
                    className={`${styles.progressSegment} ${i < current ? styles.active : ''}`}
                />
            ))}
        </div>
    </div>
);

const AccordionItem = ({ section, key }) => {
    const [isOpen, setIsOpen] = useState(section.isOpen);

    return (
        <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
            <button className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
                <div className={styles.accordionInfo}>
                    <h3
                        className={`${styles.accordionTitle} ${isOpen ? styles.active : ''}`}
                    >{section.title}</h3>
                    <div className={styles.accordionMeta}>
                        <span className={styles.metaItem}><Clock size={14} /> {section.duration}</span>
                        <span className={styles.metaItem}><BookOpen size={14} /> {section.lessons} Lessons</span>
                    </div>
                </div>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isOpen && section.items && (
                <ul className={styles.lessonList}>
                    {section.items.map((item) => (
                        <li key={item.id} className={`${styles.lessonItem} ${item.active ? styles.active : ''}`}>
                            <div className={styles.lessonInfo}>
                                <span className={styles.lessonTitle}>{item.title}</span>
                            </div>
                            <div className={styles.lessonMeta}>
                                <span className={styles.lessonTime}>{item.time}</span>
                                {item.locked && <Lock size={14} className={styles.iconLock} />}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const MeetingPage = () => {
    return (
        <div className={styles.appSection}>
            <div className={styles.appContainer}>
                <main className={styles.mainGrid}>
                    <div className={styles.leftSection}>
                        <header className={styles.headerSection} >
                            <button className={styles.headerBackBtn} aria-label="Go Back">
                                <ArrowLeft size={20} />
                            </button>

                            <div className={styles.videoTitleHeader}>
                                <div className={styles.headerContent}>
                                    <h1>UX/UI Design Conference Meeting</h1>
                                    <p>9 Lesson  6h 30min</p>
                                </div>
                                <button className={styles.headerSettingsBtn} aria-label="Settings">
                                    <Settings size={35} />
                                </button>
                            </div>
                        </header>

                        <section className={styles.videoWrapper}>
                            <Image
                                src={meeting}
                                alt="Main Speaker"
                                className={styles.mainVideoFeed}
                                width={1186}
                                height={1076}
                            />
                            <div className={styles.participantsOverlay}>
                                {PARTICIPANTS.map((p) => (
                                    <div key={p.id} className={styles.participantCard}>
                                        <Image src={p.img} alt={p.name} width={200} height={166.95} />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.videoControlsContainer}>
                                <div className={styles.videoControls}>
                                    <Image className={styles.videoControlsBtn} src={video} filled label="Toggle Video" width={44} height={44} />
                                    <Image className={styles.videoControlsBtn} src={mic} filled label="Toggle Microphone" width={44} height={44} />
                                    <Image className={styles.videoControlsBtn} src={call} danger label="End Call" width={44} height={44} />
                                    <Image className={styles.videoControlsBtn} src={desktop} filled label="Share Screen" width={44} height={44} />
                                    <Image className={styles.videoControlsBtn} src={exit} filled label="Leave" width={44} height={44} />
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>Course Contents</h2>
                            <SegmentedProgress current={2} total={5} />
                            <div className={styles.scrollableContent}>
                                <div className={styles.accordion}>
                                    {COURSE_SECTIONS.map((section) => (
                                        <AccordionItem key={section.id} section={section} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.card} ${styles.booksCard}`}>
                            <div className={styles.booksCardHeader}>
                                <h2 className={styles.sectionTitle}>Book for you</h2>
                                <Calendar size={18} className={styles.textTeal} />
                            </div>
                            <div className={styles.booksGrid}>
                                {BOOKS.map((book) => (
                                    <div key={book.id} className={styles.bookCard}>
                                        <Image src={book.img} alt={book.title} className={styles.bookImage} width={177} height={163} />
                                        <div className={styles.bookInfo}>
                                            <h3 className={styles.bookTitle}>{book.title}</h3>
                                            <div className={styles.bookPrice}>${book.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
};

export default MeetingPage;