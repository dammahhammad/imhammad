'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from '@/components/ui/navigation-menu';
import { useEffect, useState } from 'react';
import HeaderSM from './header-sm';

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
                    className={`transition-all duration-300 ${isScrolled
                            ? 'px-3 sm:px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border'
                            : 'px-4 py-2'
                        } ${isScrolled && isDark
                            ? 'bg-black/50 border-white/20'
                            : isScrolled && !isDark
                                ? 'bg-white/50 border-black/20'
                                : ''
                        }`}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/">
                            <h1
                                className={`text-4xl font-doto font-700 dark:text-white transition-all duration-300 hover:scale-105 ${isScrolled ? 'scale-110' : 'scale-100'
                                    }`}
                            >
                                MHK
                            </h1>
                        </Link>

                        <div className="hidden md:flex items-center space-x-2">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <Button
                                                variant="ghost"
                                                className={`px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${isScrolled ? 'hover:scale-105' : ''
                                                    }`}
                                                asChild
                                            >
                                                <Link href="/">Blogs</Link>
                                            </Button>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild>
                                            <Button
                                                variant="ghost"
                                                className={`px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${isScrolled ? 'hover:scale-105' : ''
                                                    }`}
                                                asChild
                                            >
                                                <Link href="/projects">Projects</Link>
                                            </Button>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            <Button
                                className={`px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-sm transition-all duration-300 ${isScrolled ? 'hover:scale-105' : ''
                                    }`}
                                asChild
                            >
                                <Link href="/contact">Contact Me</Link>
                            </Button>

                            <Button
                                onClick={toggleTheme}
                                variant="ghost"
                                size="icon"
                                className={`text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:cursor-pointer dark:hover:text-white transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${isScrolled ? 'hover:scale-110 hover:rotate-12' : ''
                                    }`}
                                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                            >
                                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </Button>
                        </div>

                        <HeaderSM />
                    </div>
                </div>
            </div>
        </div>
    );
};