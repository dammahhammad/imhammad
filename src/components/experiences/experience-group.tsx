import React from 'react';
import Image from 'next/image';
import { Exprience, Position } from '../data/experience';
import { ExperienceItem } from './experience-item';

interface Props {
    companyExp: Exprience;
}

const ExperienceGroup: React.FC<Props> = ({ companyExp }) => {
    return (
        <div className="screen-line-after space-y-4 py-4">
            <div className="flex items-center gap-3">
                <div className="flex size-14 shrink-0 items-center justify-center select-none">
                    <Image
                        src={companyExp.logoUrl}
                        alt={companyExp.company}
                        width={50}
                        height={50}
                        quality={100}
                        className="object-contain"
                    />
                </div>

                <h3 className="text-lg leading-snug font-medium flex items-center gap-1 font-mono">
                    {companyExp.company}
                    {companyExp.isCurrentEmployer && (
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-95"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
                        </span>
                    )}
                </h3>
            </div>

            <div className="relative space-y-4 pl-4">
                {companyExp.positions.map((exp: Position, index: any) => (
                    <ExperienceItem {...exp} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ExperienceGroup;