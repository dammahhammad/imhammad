'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useTheme } from '@/lib/theme-context';
import { useState } from 'react';
import ContactDialog from '@/components/forms/contact-dialog';

export default function HeaderSM() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const [open, setOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const handleDownloadResume = () => {
        // Add your resume download logic here
        // For example: window.open('/resume.pdf', '_blank');
        setOpen(false);
    };

    const handleCloseSidebar = () => {
        setOpen(false);
    };

    return (
        <div className="flex md:hidden items-center">
            <Button
                className="py-2 bg-transparent hover:bg-transparent font-mono text-sm transition-all duration-300 hover:cursor-pointer"
                onClick={() => setIsContactOpen(true)}
            >
                <div className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
                    <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black">Contact Me</span>
                </div>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="px-3 py-2 font-medium tracking-wide text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                        aria-label="Open mobile menu"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className={`w-[280px] sm:w-[350px] gap-0 border-l ${isDark ? "bg-black text-white border-gray-800" : "bg-white border-gray-200"}`}
                >
                    <SheetHeader className="flex items-center justify-between px-2 py-3 border-b dark:border-gray-800">
                        <SheetTitle className="font-doto text-2xl tracking-wide">MHK</SheetTitle>
                        <Button
                            onClick={() => {
                                toggleTheme();
                                handleCloseSidebar();
                            }}
                            variant="ghost"
                            size="sm"
                            className="px-3 py-1 rounded-md transition-colors text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                        >
                            {isDark ? "Light" : "Dark"}
                        </Button>
                    </SheetHeader>

                    <div className="flex flex-col px-4 py-6 space-y-3">
                        <Button
                            variant="ghost"
                            className="w-full justify-start px-3 py-2 text-base font-mono font-medium tracking-wide hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            onClick={handleCloseSidebar}
                        >
                            <Link href="/blogs">Blogs</Link>
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start px-3 py-2 text-base font-mono font-medium tracking-wide hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            onClick={handleCloseSidebar}
                        >
                            <Link href="/projects">Projects</Link>
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start px-3 py-2 text-base font-mono font-medium tracking-wide hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            onClick={handleDownloadResume}
                        >
                            Resume
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            <ContactDialog isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
        </div>
    )
}