import { skills } from '../data/skill'
import Image from 'next/image';

export default function SkillMarquee() {
    return (
        <article id="skill-marquee" className="wrapper mt-8 lg:mt-16">
            {skills.map((skill, index) => (
                <div key={index} className={`item item${index + 1} w-12 lg:w-20 aspect-square mx-4 lg:mx-8`}>
                    <Image
                        src={skill.imgSrc}
                        alt={skill.alt}
                        title={skill.info}
                        fill
                        sizes="(max-width: 1023px) 48px, 80px"
                        loading='lazy'
                    />
                </div>
            ))}
        </article>
    );
}