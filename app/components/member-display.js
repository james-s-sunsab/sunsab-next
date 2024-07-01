import MemberCard from "./member-card";
import members from '../data/sunsabMembers.json';

export default function MemberDisplay() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map(member => (
                <MemberCard
                    key={member.id}
                    name={member.name}
                    title={member.title}
                    img={member.img}
                    linkedin={member.linkedin}
                />
            ))}
        </div>
    );
}