
import StudentsCourses from "../CoursePage/StudentsCourses/StudentsCourses";
import YouCanDoWithTOTC from "../HomePage/YouCanDoWithTOTC/YouCanDoWithTOTC";
import CourseDetails from "./CourseDetails/CourseDetails";
import TopEducator from "./TopEducator/TopEducator";
const offers = [
    {
        id: 1,
        tag: "50%",
        title: "FOR INSTRUCTORS",
        desc: "TOTC’s school management software helps traditional and online schools manage scheduling,",
        bgImage: "/images/topEducator.png"
    },
    {
        id: 2,
        tag: "50%",
        title: "FOR INSTRUCTORS",
        desc: "TOTC’s school management software helps traditional and online schools manage scheduling,",
        bgImage: "/images/topEducator.png"
    },
    {
        id: 3,
        tag: "50%",
        title: "FOR INSTRUCTORS",
        desc: "TOTC’s school management software helps traditional and online schools manage scheduling,",
        bgImage: "/images/topEducator.png"
    }
];
export default function CourseDetailsPage() {
    return (<>
        <CourseDetails />
        <StudentsCourses />
        <YouCanDoWithTOTC />
        <TopEducator offers={offers} title={"Top Education offers and deals are listed here"} />
    </>
    );
}