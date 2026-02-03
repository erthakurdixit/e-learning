import Coaching from "../Coaching/Coaching";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import CourseChoices from "./CourseChoices/CourseChoices";
import CourseHistory from "./CourseHistory/CourseHistory";
import DevelopmentCourses from "./DevelopmentCourses/DevelopmentCourses";
import RecommendedCourses from "./RecommendedCourses/RecommendedCourses";
import StudentsCourses from "./StudentsCourses/StudentsCourses";

export default function CoursePage() {
    return (<>
        <CourseHistory />
        <CategoryGrid />
        <RecommendedCourses />
        <CourseChoices />
        <Coaching />
        <DevelopmentCourses />
        <StudentsCourses />
    </>
    );
}