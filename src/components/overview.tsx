"use client";

import { Mail, Phone, Globe, MapPin, Code } from "lucide-react";
import Link from "next/link";

type InfoItem = {
    icon: React.ElementType;
    label: string;
    value: string;
    href?: string;
};

const profileInfo: InfoItem[] = [
    {
        icon: Code,
        label: "Role",
        value: "Building meaningful tech with passion @",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "New Delhi, India",
        href: "https://www.google.com/maps/place/New+Delhi",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 91698 85679",
        href: "tel:+919169885679",
    },
    {
        icon: Mail,
        label: "Email",
        value: "dammahhammad9@gmail.com",
        href: "mailto:dammahhammad9@gmail.com",
    },
    {
        icon: Globe,
        label: "Website",
        value: "imhammad.com",
        href: "https://imhammad.com",
    }
];

export default function Overview() {
    return (
        <div className="space-y-4 my-6">
            {profileInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                    key={label}
                    className="flex items-center gap-3 text-gray-800 dark:text-gray-200 font-mono text-sm"
                >
                    <div
                        className="flex size-7 shrink-0 items-center justify-center rounded-md bg-muted dark:bg-zinc-900 shadow-zinc-300 shadow-[1px_1px_1px,0px_0px_2px] dark:shadow-[2px_2px_2px,0px_0px_3px] dark:shadow-zinc-800"
                        aria-hidden
                    >
                        <Icon className="pointer-events-none size-4 text-muted-foreground" />
                    </div>
                    {href ? (
                        <Link
                            href={href}
                            target={href.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {value}
                        </Link>
                    ) : (
                        <>
                            <span>{value}
                                {label == "Role" && (
                                    <Link
                                        href="https://www.volumetree.com"
                                        className="font-semibold hover:underline"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Volumetree
                                    </Link>
                                )}
                            </span>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
