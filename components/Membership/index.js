import AppPromotion from "./AppPromotion/AppPromotion";
import LessonAccordion from "./LessonAccordion/LessonAccordion";
import PricingSection from "./PricingSection/PricingSection";
import Testimonials from "./Testimonials/Testimonials";
import JoinUs from "./JoinUs/JoinUs";
import Coaching from "../Coaching/Coaching";

export default function MembershipPage() {
    return (<>
        <PricingSection />
        <Coaching />
        <LessonAccordion />
        <Testimonials />
        <AppPromotion />
        <JoinUs />
    </>
    );
}