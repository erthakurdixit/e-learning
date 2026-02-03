import TopEducator from "../CourseDetailPage/TopEducator/TopEducator";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
const offers = [
    {
        id: 1,
        tag: "50%",
        title: "FOR INSTRUCTORS",
        desc: `Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor`,
        bgImage: "/images/girlImageClass.png"
    },
    {
        id: 2,
        tag: "50%",
        title: "FOR INSTRUCTORS",
        desc: `Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor`,
        bgImage: "/images/topEducator.png"
    },
    {
        id: 3,
        tag: "50%",
        title: "FOR INSTRUCTORS",
        desc: `Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor`,
        bgImage: "/images/laptop.png"
    }
];
const CheckoutPage = () => {
    return (
        <>
            <CheckoutForm />
            <TopEducator offers={offers} title={"Top Education offers and deals are listed here"} />
        </>
    );
}

export default CheckoutPage;