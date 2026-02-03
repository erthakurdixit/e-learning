import Footer from "../Footer/Footer";
import AllInOneSoftware from "./AllInOneSoftware/AllInOneSoftware";
import LandingPageBanner from "./BannerHeader/LandingPageBanner";
import ExploreCourse from "./ExploreCourse/ExploreCourse";
import LatestNews from "./LatestNews/LatestNews";
import OurFeatures from "./OurFeatures/OurFeatures";
import OurSuccess from "./OurSuccess/OurSuccess";
import Testimonial from "./Testimonial/Testimonial";
import WhatIsTOTC from "./WhatIsTOTC/WhatIsTOTC";
import YouCanDoWithTOTC from "./YouCanDoWithTOTC/YouCanDoWithTOTC";

const HomePage = () => {
    return (
        <div className="container">
            <LandingPageBanner />
            <OurSuccess />
            <AllInOneSoftware />
            <WhatIsTOTC />
            <YouCanDoWithTOTC />
            <OurFeatures />
            <ExploreCourse />
            <Testimonial />
            <LatestNews />
        </div>
    );
}
export default HomePage;