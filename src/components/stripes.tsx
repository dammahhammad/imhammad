import { cn } from "@/lib/utils";

export default function Stripes({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-2 overflow-hidden my-6",
        "before:absolute before:inset-0 before:-z-10 before:h-full before:w-full",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]",
        "before:bg-[length:8px_8px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
