import BlogDetailPage from "@/components/BlogDetailPage";

export async function generateStaticParams() {
    const slugs = ["1", "2"];
    return slugs.map((slug) => ({ slug }));
}

export default function Blog() {
    return (
        <BlogDetailPage />
    );
}