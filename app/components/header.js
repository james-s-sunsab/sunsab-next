import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 navbar px-8 py-4 bg-white shadow-lg">
            <div className="navbar-start flex-1">
                <Link href="/" aria-label="Go to home page">
                    <Image
                        src="/logo1.svg"
                        alt="Sunsab Logo"
                        width={200}
                        height={100}
                        loading="eager"
                        priority={true}
                    />
                </Link>
            </div>
            <nav className="justify-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" aria-label="Open menu" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href="#home" aria-label="Go to the top of the page">Home</Link>
                        </li>
                        <li>
                            <Link href="#services" aria-label="Go to services section">Services</Link>
                        </li>
                        <li>
                            <Link href="#projects" aria-label="Go to projects section">Projects</Link>
                        </li>
                        <li>
                            <Link href="#team" aria-label="Go to team section">Team</Link>
                        </li>
                        <li>
                            <Link href="#blog" aria-label="Go to blog section">Blog</Link>
                        </li>
                        <li>
                            <Link

                                href="mailto:sales@sunsab.com"
                                aria-label="Get a quote today"
                                target='_blank'
                            >
                                Get a Quote
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>

            <nav className="navbar-end hidden lg:flex lg:text-lg gap-16">
                <ul className="flex flex-row gap-16 ">
                    <li>
                        <Link className="group transition-all duration-300 ease-in-out" href="#services" aria-label="Services section">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                Services
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="group transition-all duration-300 ease-in-out" href="#projects" aria-label="Projects section">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                Projects
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="group transition-all duration-300 ease-in-out" href="#team" aria-label="Team section">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                Team
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="group transition-all duration-300 ease-in-out" href="#blog" aria-label="Blog section">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                Blog
                            </span>
                        </Link>
                    </li>
                </ul>
                <Link
                    className="group transition-all duration-300 ease-in-out text-black text-base font-normal lg:text-lg btn btn-primary"
                    href="mailto:sales@sunsab.com"
                    aria-label="Get a quote today"
                    target='_blank'
                >
                    <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                        Get a Quote
                    </span>

                </Link>
            </nav>
        </header>
    );
}
