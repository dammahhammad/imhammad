'use client';

import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const shouldBeScrolled = scrollTop > 10;
            setIsScrolled(shouldBeScrolled);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 z-50 w-full">
            <div className="mx-auto max-w-4xl pt-2 px-1 sm:px-0">
                <div 
                    className={`transition-all duration-300 ${
                        isScrolled 
                            ? 'px-3 sm:px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border' 
                            : 'px-4 py-2'
                    } ${
                        isScrolled && isDark 
                            ? 'bg-black/50 border-white/20' 
                            : isScrolled && !isDark
                            ? 'bg-white/50 border-black/20'
                            : ''
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <h1 
                                className={`text-4xl font-doto font-700 dark:text-white transition-all duration-300 ${
                                    isScrolled ? 'scale-110' : 'scale-100'
                                }`}
                            >
                                MHK
                            </h1>
                        </Link>
                        <div className="flex items-center space-x-2 sm:space-x-4 font-mono text-sm sm:text-md">
                            <Link href="/">
                                <span className={`px-2 sm:px-4 py-2 text-sm sm:text-md font-mono text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${
                                    isScrolled ? 'hover:scale-105' : ''
                                }`}>
                                    Blogs
                                </span>
                            </Link>

                            <Link href="/projects">
                                <span className={`px-2 sm:px-4 py-2 text-sm sm:text-md font-mono text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${
                                    isScrolled ? 'hover:scale-105' : ''
                                }`}>
                                    Projects
                                </span>
                            </Link>

                            <div className="flex items-center space-x-1 sm:space-x-3">
                                <Button
                                    onClick={toggleTheme}
                                    variant="ghost"
                                    className={`p-1 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 cursor-pointer ${
                                        isScrolled ? 'hover:scale-110 hover:rotate-12' : ''
                                    }`}
                                    aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                                >
                                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
