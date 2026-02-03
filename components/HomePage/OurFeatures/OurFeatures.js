import Image from "next/image";
import styles from "./OurFeatures.module.scss";
import girlImage from "@/assets/images/landing-page/featuredGirl.png";
import assessment from "@/assets/images/landing-page/assessment.png";
import gradebook from "@/assets/images/landing-page/gradebook.png";
import discussion from "@/assets/images/landing-page/discussion.png";
const FEATURES = [
    {
        title: <h3>A <span>user interface</span> designed for the classroom</h3>,
        description: [
            "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
            "TA’s and presenters can be moved to the front of the class.",
            "Teachers can easily see all students and class data at one time.",
        ],
        image: <Image src={girlImage} alt="girl image" className={styles.girlImage} />,
        reverse: false,
    },
    {
        title: <h3><span>Tools</span> For Teachers And Learners</h3>,
        description:
            "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
        image: <Image src={girlImage} alt="girl image" className={styles.girlImage} />,
        reverse: true,
    },
    {
        title: <h3>Assessments, <span>Quizzes</span>, Tests</h3>,
        description:
            "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
        image: <Image src={assessment} alt="assessment image" className={styles.girlImage} />,
        reverse: false,
    },
    {
        title: <h3><span>Class Management</span> Tools for Educators</h3>,
        description:
            "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the gradebook, teachers can review and grade tests and quizzes in real-time.",
        image: <Image src={gradebook} alt="gradebook image" className={styles.girlImage} />,
        reverse: true,
    },
    {
        title: <h3>One-on-One <span>Discussions</span></h3>,
        description:
            "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
        image: <Image src={discussion} alt="discussion image" className={styles.girlImage} />,
        reverse: false,
    },
];

const OurFeatures = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.heading}>
                    Our <span>Features</span>
                </h2>
                <p className={styles.subheading}>
                    This very extraordinary feature can make learning activities more efficient
                </p>
            </div>

            <div className={styles.features}>
                {FEATURES.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.featureRow} ${item.reverse ? styles.reverse : ""
                            }`}
                    >
                        <div className={styles.media}>
                           {item.image}
                        </div>

                        <div className={styles.content}>
                            {item.title}

                            {Array.isArray(item.description) ? (
                                <ul>
                                    {item.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.cta}>
                <button>See more features</button>
            </div>
        </section>
    );
};

export default OurFeatures;
