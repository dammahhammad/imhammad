"use client";

import Image from "next/image";
import { TECH_STACK } from "./data/tech-stack";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme-context";


export default function TechStack() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className='mt-8'>
            <h2 className="text-3xl font-bold font-mono border-y-1 border-zinc-300">Stack</h2>
            <div
                className={cn(
                    "[--pattern-foreground:var(--color-gray-950)]/10 dark:[--pattern-foreground:var(--color-white)]/12",
                    "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
                    "bg-zinc-950/0.75 dark:bg-white/0.75 pt-5 pb-12"
                )}
            >
                <ul className="flex flex-wrap gap-6 select-none">
                    {TECH_STACK.map((tech) => {
                        return (
                            <li key={tech.key} className="flex">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={tech.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={tech.title}
                                        >
                                            <Image
                                                src={(tech.theme && isDark) ? tech.srcdark : tech.srclight || tech.src}
                                                alt={`${tech.title} icon`}
                                                width={33}
                                                height={33}
                                                unoptimized
                                            />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {tech.title}
                                    </TooltipContent>
                                </Tooltip>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}