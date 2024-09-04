import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer p-8 lg:p-16 min-h-screen-1/2 lg:min-h-screen-1/3 flex flex-col max-w-[96rem] m-auto">
            <div className="flex flex-1 w-full flex-col lg:flex-row lg:gap-4">
                <aside className="flex lg:w-2/3 flex-col gap-4">
                    <p className="text-5xl lg:text-8xl font-semibold">Reach Out</p>
                    <div className="flex flex-col gap-1 lg:gap-4 text-lg lg:text-2xl">
                        <a aria-label="Email us at sales@sunsab.com" href="mailto:sales@sunsab.com" className="group transition-all duration-300 ease-in-out">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                sales@sunsab.com
                            </span>
                        </a>
                        <a aria-label="Contact us at: 14039929021" href="tel:14039929021" className="group transition-all duration-300 ease-in-out">
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                +1 (403) 992-9021
                            </span>
                        </a>
                    </div>
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

            <div className="flex lg:justify-end w-full">
                <nav className="flex lg:w-1/3 gap-8 lg:gap-16">
                    <Link href="https://www.linkedin.com/company/sunsab" aria-label="Visit Sunsab LinkedIn profile" target='_blank' className="w-fit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-6 w-6 fill-black">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                    </Link>
                    <Link href="https://www.facebook.com/" aria-label="Visit Sunsab Facebook page" target='_blank' className="w-fit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="h-6 w-6 fill-black">
                            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                        </svg>
                    </Link>
                    <Link href="https://www.instagram.com/" aria-label="Visit Sunsab Instagram account" target='_blank' className="w-fit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-6 w-6 fill-black">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </Link>
                </nav>
            </div>

            <aside className="text-gray-500 flex lg:justify-end w-full">
                <p className=" lg:w-1/3 lg:text-base">© {new Date().getFullYear()} - Sunsab</p>
            </aside>
        </footer>
    );
}
