import Image from 'next/image';
import Link from 'next/link';
export default function MemberCard({ name, title, img, linkedin }) {
    return (
        <div className="card card-compact w-full max-w-sm xl:max-w-md">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-56 xl:w-72 rounded-lg">
                        <Image
                            src={`/profiles/${img}`}
                            alt={`${name}'s Profile Picture`}
                            width={300}
                            height={300}
                            sizes="(max-width: 1279px) 224px, (min-width: 1280px) 288px"
                            quality={100}
                            loading='lazy'
                        />
                    </div>
                </div>
                <h3 className="mt-4">{name}</h3>
                <p className="text-base lg:text-xl">{title}</p>
                <div className="card-actions justify-center">
                    <Link href={linkedin} aria-label={`LinkedIn profile of ${name}`} className="mt-2" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-8 w-8 fill-black"
                            role="img"
                            aria-labelledby="linkedin-icon-title"
                        >
                            <title id="linkedin-icon-title">LinkedIn</title>
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
