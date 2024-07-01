import dynamic from 'next/dynamic';
import Image from 'next/image';
import projects from './data/portfolioProjects.json';
import WaveBanner from './components/wave-banner';
import Link from 'next/link';

const SkillMarquee = dynamic(() => import('./components/skill-marquee'), { ssr: false });
const MemberDisplay = dynamic(() => import('./components/member-display'), { ssr: false });
const BlogDisplay = dynamic(() => import('./components/blog-display'), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-col flex-1 min-h-screen items-center">

      <WaveBanner />

      <section id="home" className="flex items-center justify-center w-full min-h-screen-1/4">
        <div className="grid p-8 lg:p-24 gap-4 lg:max-w-4xl">
          <h2 >Solving Problems, Building Solutions</h2>
          <p>Sunsab is where innovation fuels passion! We&apos;re a dynamic team of software developers armed with cutting-edge expertise in modern technologies. Our mission? To harness technology&apos;s power for positive global change.</p>
          <p>We aspire to develop innovative solutions that empower individuals and businesses to thrive in a rapidly evolving digital landscape.</p>
        </div>
      </section>

      <section id="services" className="flex items-center w-full">
        <article className="relative flex flex-col lg:flex-row-reverse items-center bg-gray-900 text-white">
          <div className="grid gap-8 lg:w-1/2 p-8 lg:p-16">
            <h2 >Empowering Your Digital Journey</h2>
            <p>At Sunsab, we believe in the transformative potential of software. Whether crafting sleek mobile apps or architecting robust web solutions, we are committed to shaping the future through code.</p>
            <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 text-base font-semibold">
              <li>Full-stack Web Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Hosting</li>
              <li>Database Management</li>
              <li>UI/UX Design</li>
              <li>IoT Development</li>
              <li>E-commerce Solutions</li>
              <li>Geolocation Services</li>
            </ul>
          </div>
          <div className="absolute lg:relative h-full lg:h-screen lg:w-1/2">
            <Image
              src="/computer-support.webp"
              alt="Computer support"
              width={1136}
              height={1280}
              className="opacity-10 lg:opacity-75 h-full object-cover"
              quality={100}
              sizes="(max-width: 1023px) 100vw, 50vw"
              loading='lazy'
            />
          </div>
        </article>
      </section>

      <SkillMarquee />

      <section id="projects" className="w-full p-8 lg:p-16">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <article key={index} className="relative lg:max-w-4xl group transition-transform transform lg:hover:scale-105 ease-in-out duration-500">
              <Image
                src={project.image}
                alt={project.title}
                width={project.width}
                height={project.height}
                quality={100}
                className="transition-transform transform lg:group-hover:shadow-2xl duration-500"
                sizes="(max-width: 1023px) calc(100vw - 32px), (min-width: 1024px) and (max-width: 1279px) calc(50vw - 32px), (min-width: 1280px) calc(33vw - 32px)"
                loading='lazy'
              />
              <div className="pt-4 grid gap-2">
                <h3>{project.title}</h3>
                <p className="text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-8 lg:mt-16">
          <Link
            className="group transition-all duration-300 ease-in-out text-black text-base lg:text-lg btn btn-primary"
            href="/Sunsab-Lookbook.pdf"
            download
            aria-label="Download the Lookbook"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] lg:bg-[length:0%_2px] bg-no-repeat lg:group-hover:bg-[length:100%_2px] group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
              Download the Lookbook
            </span>
            <svg
              className="lg:ml-1 lg:-mt-1 w-4 h-4 opacity-50 rotate-315 group-hover:opacity-100 transition-opacity duration-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              aria-hidden="true"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
        </div>
      </section>

      <section id="team" className="flex flex-col items-center w-full gap-8 pb-8 px-8 lg:px-16 lg:pb-16">
        <h2 >Where Innovation Fuels Passion</h2>
        <MemberDisplay />
      </section>

      <BlogDisplay />

    </main>
  );
}
