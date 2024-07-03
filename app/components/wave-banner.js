import Image from 'next/image';

export default function WaveBanner() {
    return (

        <section id="banner" className="relative w-full">
            <Image
                src="/LP-Image-85.webp"
                alt="Banner"
                width={1732}
                height={1252}
                quality={100}
                className="max-h-screen-1/3 object-cover w-screen"
                loading="eager"
                priority={true}
                sizes="100vw"
                srcSet="/LP-Image-85.webp?w=640&h=460&q=75 640w,
                        /LP-Image-85.webp?w=750&h=540&q=75 750w,
                        /LP-Image-85.webp?w=1080&h=780&q=75 1080w,
                        /LP-Image-85.webp?w=1200&h=870&q=75 1200w,
                        /LP-Image-85.webp?w=1536&h=1100&q=75 1536w,
                        /LP-Image-85.webp?w=1732&h=1252&q=75 1732w"
            />
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
        </section>
    );
}