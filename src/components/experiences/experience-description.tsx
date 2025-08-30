import React from "react";
import { cn } from "@/lib/utils";

interface ExperienceDescriptionProps {
	items: string[];
	className?: string;
}

export function ExperienceDescription({ items, className }: ExperienceDescriptionProps) {
	return (
		<ul className={cn("list-disc space-y-4 text-sm font-mono", className)}>
			{items.map((item, index) => (
				<li key={index} className="marker:text-muted-foreground">
					{item}
				</li>
			))}
		</ul>
	);
}

export default ExperienceDescription;


