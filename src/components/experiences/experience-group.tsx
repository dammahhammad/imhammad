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
                <div className="flex size-6 shrink-0 items-center justify-center select-none">
                    <Image
                        src={companyExp.logoUrl}
                        alt={companyExp.company}
                        width={24}
                        height={24}
                        quality={100}
                        className="rounded-full"
                        unoptimized
                        aria-hidden
                    />
                </div>

                <h3 className="text-lg leading-snug font-medium">
                    {companyExp.company}
                </h3>
            </div>

            <div className="relative space-y-4">
                {companyExp.positions.map((exp: Position, index: any) => (
                    <ExperienceItem {...exp} />
                ))}
            </div>
        </div>
    );
};

export default ExperienceGroup;