'use client';

import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import Link from 'next/link';
import { Button } from './ui/button';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <header className="sticky top-0 z-50 mx-auto pt-4">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-4xl font-doto font-700 dark:text-white">
                        MHK
                    </h1>
                </Link>
                <div className="flex items-center space-x-2 sm:space-x-4 font-mono text-sm sm:text-md">
                    <Link href="/">
                        <span className="px-2 sm:px-4 py-2 text-sm sm:text-md font-mono text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Blogs
                        </span>
                    </Link>

                    <Link href="/">
                        <span className="px-2 sm:px-4 py-2 text-sm sm:text-md font-mono text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Projects
                        </span>
                    </Link>

                    <div className="flex items-center space-x-1 sm:space-x-3">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </Link>
                        <Button
                            onClick={toggleTheme}
                            variant="ghost"
                            className="p-1 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
