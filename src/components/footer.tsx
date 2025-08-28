"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Stripes from "./stripes";

export default function Footer() {
    return (
        <footer className="mt-12">
            <Stripes />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-8 mx-auto px-6 text-sm">
                <div>
                    <h3 className="font-semibold mb-2">About</h3>
                    <p className="text-muted-foreground">
                        Building meaningful tech with passion 🚀
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link href="/blogs" className="hover:underline">Blogs</Link></li>
                        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link href="/resume" className="hover:underline">Resume</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Connect</h3>
                    <div className="flex gap-6">
                        <Link
                            href="https://linkedin.com/dammahhammad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:scale-110 hover:-rotate-3"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </Link>
                        <Link
                            href="https://github.com/dammahhammad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:scale-110 hover:-rotate-3"
                            aria-label="Github"
                        >
                            <Github size={20} />
                        </Link>
                        <Link
                            href="mailto:dammahhammad9@gmail.com"
                            className="p-1 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:scale-110 hover:-rotate-3"
                            aria-label="Mail"
                        >
                            <Mail />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pb-4 text-center text-xs text-muted-foreground">
                <Stripes />
                © {new Date().getFullYear()} M. Hammad. All rights reserved.
            </div>
        </footer>
    );
}
