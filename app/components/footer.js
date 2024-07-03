import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer p-8 lg:p-16 min-h-screen-2/3 lg:min-h-screen-1/2 flex flex-col gap-16">
            <div className="flex flex-1 w-full flex-col lg:flex-row lg:gap-4">
                <aside className="flex lg:w-2/3 flex-col gap-4">
                    <p className="text-5xl lg:text-8xl font-semibold">Reach Out</p>
                    <a aria-label="Email us at sales@sunsab.com" href="mailto:sales@sunsab.com" className="group transition-all duration-300 ease-in-out text-xl">
                        <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            sales@sunsab.com
                        </span>
                    </a>
                    <p className="text-xl">+1 (403) 992-9021</p>
                    <Link href="https://www.linkedin.com/company/sunsab" aria-label="Visit Sunsab LinkedIn profile" target='_blank'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-6 w-6 fill-black">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                    </Link>
                </aside>
                <div className="flex flex-col gap-16 lg:w-1/3">
                    <nav className="lg:text-lg w-full grid grid-cols-2 gap-16 mt-8 lg:mt-0">
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <Link className="group transition-all duration-300 ease-in-out" href="#home" aria-label="Go to home section">
                                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                    Home
                                </span>
                            </Link>
                            <Link className="group transition-all duration-300 ease-in-out" href="#services" aria-label="Go to services section">
                                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                    Services
                                </span>
                            </Link>
                            <Link className="group transition-all duration-300 ease-in-out" href="#team" aria-label="Go to team section">
                                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                    Team
                                </span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <Link className="group transition-all duration-300 ease-in-out" href="#projects" aria-label="Go to projects section">
                                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                    Projects
                                </span>
                            </Link>
                            <Link className="group transition-all duration-300 ease-in-out" href="#blog" aria-label="Go to blog section">
                                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                                    Blog
                                </span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            <aside className="text-gray-500 flex lg:justify-end w-full">
                <p className=" lg:w-1/3 lg:text-base">© {new Date().getFullYear()} - Sunsab</p>
            </aside>
        </footer>
    );
}
