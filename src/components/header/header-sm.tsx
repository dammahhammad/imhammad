'use client';

import { Moon, Sun, Menu, Download, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/lib/theme-context';
import { useState } from 'react';

export default function HeaderSM() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const [open, setOpen] = useState(false);

    const handleDownloadResume = () => {
        // Add your resume download logic here
        // For example: window.open('/resume.pdf', '_blank');
        console.log('Download resume');
        setOpen(false);
    };

    return (
        <div className="flex md:hidden items-center space-x-2">
            <Button
                className="px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs"
                asChild
            >
                <Link href="/contact">Contact Me</Link>
            </Button>

            <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                        aria-label="Open mobile menu"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                        <SheetTitle className="font-doto text-2xl">Navigation</SheetTitle>
                        <SheetDescription>
                            Explore my work and get in touch
                        </SheetDescription>
                    </SheetHeader>

                    <div className="grid gap-4 py-6">
                        <div className="grid gap-3">
                            <h4 className="font-medium leading-none mb-2">Pages</h4>

                            <SheetClose asChild>
                                <Button
                                    variant="ghost"
                                    className="justify-start gap-2 h-auto p-3"
                                    asChild
                                >
                                    <Link href="/">
                                        <span className="text-lg">📝</span>
                                        <div className="grid gap-1">
                                            <span className="font-mono text-sm font-medium">Blogs</span>
                                            <span className="text-xs text-muted-foreground">Read my latest articles</span>
                                        </div>
                                    </Link>
                                </Button>
                            </SheetClose>

                            <SheetClose asChild>
                                <Button
                                    variant="ghost"
                                    className="justify-start gap-2 h-auto p-3"
                                    asChild
                                >
                                    <Link href="/projects">
                                        <span className="text-lg">💼</span>
                                        <div className="grid gap-1">
                                            <span className="font-mono text-sm font-medium">Projects</span>
                                            <span className="text-xs text-muted-foreground">View my portfolio</span>
                                        </div>
                                    </Link>
                                </Button>
                            </SheetClose>

                            <Button
                                variant="ghost"
                                className="justify-start gap-2 h-auto p-3"
                                onClick={handleDownloadResume}
                            >
                                <Download className="h-4 w-4" />
                                <div className="grid gap-1">
                                    <span className="font-mono text-sm font-medium">Resume</span>
                                    <span className="text-xs text-muted-foreground">Download PDF</span>
                                </div>
                                <Badge variant="secondary" className="ml-auto text-xs">
                                    PDF
                                </Badge>
                            </Button>
                        </div>

                        <Separator />

                        <div className="grid gap-3">
                            <h4 className="font-medium leading-none">Connect</h4>

                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10"
                                    asChild
                                >
                                    <a
                                        href="https://github.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                    >
                                        <Github className="h-4 w-4" />
                                    </a>
                                </Button>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10"
                                    asChild
                                >
                                    <a
                                        href="https://linkedin.com/in/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <Separator />

                        <div className="grid gap-3">
                            <h4 className="font-medium leading-none">Quick Actions</h4>

                            <SheetClose asChild>
                                <Button
                                    className="w-full justify-start gap-2"
                                    asChild
                                >
                                    <Link href="/contact">
                                        <span>💬</span>
                                        Get in Touch
                                    </Link>
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}