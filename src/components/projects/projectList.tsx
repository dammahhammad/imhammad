import { PROJECTS, Project } from '@/components/data/projects';
import ProjectItem from '@/components/projects/projectItem';


export default function ProjectList() {
    return (
        <div className="relative space-y-8 min-h-screen mt-12">
            {PROJECTS.map((exp: Project, index: number) => (
                <ProjectItem key={`${exp.title}-${index}`} {...exp} />
            ))}
        </div>
    )
}