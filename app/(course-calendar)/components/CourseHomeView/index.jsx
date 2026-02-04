import { RELATED_COURSES } from "@/data/RelatedCourse";
import Image from "next/image";
import { useRef } from "react";

const CourseHomeView = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth / 2;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };
    return (
        <div className="view-container fade-in">
            <div className="video-player-card">
                <div className="video-wrapper">
                    <Image
                        src="/images/confident-teacher-explaining-lesson-pupils.jpg"
                        alt="Classroom setting"
                        className="video-thumbnail"
                        fill
                    />

                    <div className="video-controls-overlay">
                        <div className="video-progress-container">
                            <div className="video-progress-bg">
                                <div className="video-progress-fill" style={{ width: '40%' }}>
                                    <div className="video-progress-thumb"></div>
                                </div>
                            </div>
                        </div>

                        <div className="video-toolbar">
                            <div className="toolbar-left">
                                <button className="control-btn play-btn-small" aria-label="Play">
                                    <Image src="/images/small-play.svg" alt="small play button" width={20} height={20} />
                                </button>
                                <span className="time-display">12:00 / 30:00</span>
                            </div>
                            <div className="toolbar-right">
                                <button className="control-btn maximize-btn" aria-label="Fullscreen">
                                    <Image src="/images/maximize.svg" alt="maximize button" width={20} height={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className="course-section">
                <h3>O6 Super Coins on the way</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmod</p>
            </section>

            <section className="course-section">
                <h3>Who this course is for?</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL</p>
            </section>

            <section className="course-section">
                <h3>Achievable</h3>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLWho this course is for?
                    Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL  </p>
            </section>

            <div className="instructor-card">
                <div className="instructor-info">
                    <div className="instructor-avatar">
                        <Image src="/images/Bulkin-Simons.jpg" alt="Bulkin Simons" fill className="img" />
                    </div>
                    <div className="display-center">
                        <h4>Bulkin Simons</h4>
                        <div className="stars">
                            <Image src="/images/five-star-full.svg" alt="five stars" width={110} height={40} />
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem</p>

            </div>

            <section className="course-section">
                <div className="section-header">
                    <h3>Student also bought</h3>
                    <div className="nav-arrows">
                        <button className="nav-arrow" onClick={() => scroll('left')} aria-label="Scroll left"><Image src="/images/right_arrow.svg" alt="left-arrow" width={10} height={10} /></button>
                        <button className="nav-arrow" onClick={() => scroll('right')} aria-label="Scroll right"><Image src="/images/left-arrow.svg" alt="left-arrow" width={10} height={10} /></button>
                    </div>
                </div>

                <div className="course-grid" ref={scrollRef}>
                    {RELATED_COURSES.map(course => (
                        <div key={course.id} className="course-card">
                            <div className="course-image">
                                <Image src={course.image} alt={course.title} fill/>
                            </div>
                            <div className="course-content">
                                <div className="course-meta">
                                    <div className="items-center">
                                        <Image src="/images/boxes.svg" width={16} height={16} alt="Boxes icon" />
                                        <span>Design</span>
                                    </div>
                                    <div className="items-center">
                                        <Image src="/images/watch.svg" width={16} height={16} alt="Boxes icon" />
                                        <span>3 Month</span>
                                    </div>
                                </div>
                                <h5>{course.title}</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                                <div className="course-footer">
                                    <div className="author">
                                        <Image src="/images/Bulkin-Simons.jpg" alt="Author" height={38} width={38} /><span>{course.author}</span>
                                    </div>
                                    <div className="price">
                                        <em className="original">${course.originalPrice}</em>
                                        <span className="current">${course.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default CourseHomeView