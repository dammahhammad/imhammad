import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { Position } from "../data/experience";
import { ChevronsDownIcon, ChevronsUpIcon, Code } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { ExperienceDescription } from "./experience-description";

export function ExperienceItem(position: Position) {
    return (
        <Collapsible defaultOpen={position.isExpanded} asChild>
            <div className="relative last:before:absolute last:before:h-full last:before:w-4 font-mono">
                <CollapsibleTrigger
                    className={cn(
                        "group/experience block w-full text-left select-none",
                        "relative before:absolute before:-top-1.5 before:-right-5 before:-bottom-1.5 before:left-10 before:-z-1 before:rounded-lg hover:before:bg-zinc-200/45 dark:hover:before:bg-zinc-200/15 hover:cursor-pointer"
                    )}
                >
                    <div className="relative z-1 mb-1 flex items-center gap-6">
                        <div
                            className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted dark:bg-zinc-900 shadow-zinc-300 shadow-[1px_1px_1px,0px_0px_2px] dark:shadow-[2px_2px_2px,0px_0px_3px] dark:shadow-zinc-800"
                            aria-hidden
                        >
                            <Code size={13} />
                        </div>

                        <h4 className="flex-1 text-md text-balance">
                            {position.role}
                        </h4>

                        <div
                            className="shrink-0 text-muted-foreground [&_svg]:size-4"
                            aria-hidden
                        >
                            <ChevronsDownIcon className="hidden group-data-[state=open]/experience:block" />
                            <ChevronsUpIcon className="hidden group-data-[state=closed]/experience:block" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 pl-13 text-sm text-muted-foreground">
                        {position.type && (
                            <>
                                <dl>
                                    <dt className="sr-only">Employment Type</dt>
                                    <dd>{position.type}</dd>
                                </dl>

                                <Separator
                                    className="data-[orientation=vertical]:h-4"
                                    orientation="vertical"
                                />
                            </>
                        )}

                        <dl>
                            <dt className="sr-only">Employment Period</dt>
                            <dd className="flex items-center gap-0.5">
                                <span>{position.duration}</span>
                            </dd>
                        </dl>
                    </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    <div className="pt-2 pl-18">
                        <ExperienceDescription items={position.description} />
                    </div>
                    {Array.isArray(position.skills) && position.skills.length > 0 && (
                        <ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
                            {position.skills.map((skill, index) => (
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