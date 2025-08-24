import React from 'react';
import { EXPERIENCES } from '../data/experience';
import ExperienceGroup from './experience-group';


const ExperienceList: React.FC = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold font-mono border-y-1 border-zinc-300">Experience</h2>
            {EXPERIENCES.map((companyExp, index) => (
                <ExperienceGroup key={index} companyExp={companyExp} />
            ))}
        </section>
    );
};

export default ExperienceList;
