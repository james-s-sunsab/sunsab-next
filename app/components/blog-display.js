import BlogCard from "./blog-card"
import blogPosts from "../data/blogPosts.json"

export default function BlogDisplay() {
    return (
        <section id="blog" className="flex flex-col w-full gap-8 p-8 lg:p-16 bg-gray-900">
            <h2 className="text-4xl lg:text-7xl font-semibold text-white">Featured News</h2>
            <div className="grid w-full">
                {blogPosts.map((post, index) => (
                    <BlogCard
                        key={post.id}
                        post={post}
                        className={`${blogPosts.length > 1 && index < blogPosts.length - 1 ? 'bordered-bottom' : ''}`}
                    />
                ))}
            </div>
        </section>
    );
}