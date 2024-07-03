import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ post, className }) {
    return (
        <article className={`flex flex-col lg:flex-row items-center gap-8 bg-gray-900 text-white p-8 max-w-full ${className}`} >
            <Image
                src={`/blogs/${post.image}`}
                alt={`Image for ${post.title}`}
                width={post.width}
                height={post.height}
                className="object-cover lg:max-w-md max-h-screen-1/4"
            />
            <div className="flex flex-col gap-2 h-full">
                <h3 className="text-xl lg:text-4xl font-semibold">{post.title}</h3>
                <p className="text-base">{post.description}</p>
                <p className="text-base mt-auto flex flex-row gap-4">{post.date}
                    <Link
                        className="group transition-all duration-300 ease-in-out relative flex flex-row"
                        href={post.link}
                        aria-label={`Read more about ${post.title}`}
                        target='_blank'
                    >
                        <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                            Read more
                        </span>
                        <svg
                            className="ml-1 w-4 h-4 opacity-0 rotate-315 group-hover:opacity-100 transition-opacity duration-500 fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                        >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </Link>
                </p>
            </div>
        </article>
    );
};
