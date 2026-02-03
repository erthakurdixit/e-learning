import TopEducator from "../CourseDetailPage/TopEducator/TopEducator";
import RecommendedCourses from "../CoursePage/RecommendedCourses/RecommendedCourses";
import Articles from "./Articles/Article";
import Creators from "./Creators/Creators";
import SearchSection from "./SearchSection/SearchSection";
import StartLearning from "./StartLearning/StartLearning";
import WhatStudentSay from "./WhatStudentSay/WhatStudentSay";
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

export default function SearchPage() {
    return (<>
        <SearchSection />
        <Articles />
        <StartLearning />
        <RecommendedCourses />
        <Creators />
        <WhatStudentSay/>
        <TopEducator offers={offers} title={"Top Education offers and deals are listed here"} />
    </>
    );
}