import { Project } from "@/components/data/projects";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronsDownIcon, ChevronsUpIcon, Code, LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import ExperienceDescription from "../experiences/experience-description";
import Link from "next/link";

export default function ProjectItem(project: Project) {
    return (
        <Collapsible defaultOpen={project.isExpanded} asChild>
            <div className="relative last:before:absolute last:before:h-full last:before:w-4 font-mono">
                <CollapsibleTrigger
                    className={cn(
                        "group/experience block w-full text-left select-none",
                        "relative before:absolute before:-top-1.5 before:-right-5 before:-bottom-1.5 before:left-10 before:-z-1 before:rounded-lg hover:before:bg-zinc-200/45 dark:hover:before:bg-zinc-200/15 hover:cursor-pointer"
                    )}
                >
                    <div className="flex justify-between">
                        <div className="relative z-1 mb-1 flex items-center gap-3 sm:gap-6">
                            <div
                                className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted dark:bg-zinc-900 shadow-zinc-300 shadow-[1px_1px_1px,0px_0px_2px] dark:shadow-[2px_2px_2px,0px_0px_3px] dark:shadow-zinc-800"
                                aria-hidden
                            >
                                <Code size={13} />
                            </div>

                            <h4 className="flex-1 text-md text-balance">
                                {project.title}
                            </h4>

                        </div>

                        <div className="flex items-center gap-2 sm:pl-13 text-sm text-muted-foreground">
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:scale-110 hover:-rotate-3"
                                aria-label={project.title}
                            >
                                <LinkIcon size={13} />
                            </Link>
                            <div
                                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                                aria-hidden
                            >
                                <ChevronsDownIcon className="hidden group-data-[state=open]/experience:block" />
                                <ChevronsUpIcon className="hidden group-data-[state=closed]/experience:block" />
                            </div>

                        </div>
                    </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    <div className="pt-2 pl-4 sm:pl-18">
                        <ExperienceDescription items={project.description} />
                    </div>
                    {Array.isArray(project.skills) && project.skills.length > 0 && (
                        <ul className="flex flex-wrap gap-1.5 pt-4 sm:pl-9">
                            {project.skills.map((skill, index) => (
                                <li key={index} className="flex">
                                    <Badge>{skill}</Badge>
                                </li>
                            ))}
                        </ul>
                    )}
                </CollapsibleContent>
            </div>
        </Collapsible>
    )
}