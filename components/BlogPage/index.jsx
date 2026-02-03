import BlogList from "./BlogList/BlogList";
import HeroSection from "./HeroSection/HeroSection";
import MarketingArticles from "./MarketingArticles/MarketingArticles";
import RelatedBlog from "./RelatedBlog/RelatedBlog";

const BlogPage = () => {
    return (
        <>
            <HeroSection />
            <BlogList/>
            <RelatedBlog />
            <MarketingArticles />
        </>
    );
}

export default BlogPage;