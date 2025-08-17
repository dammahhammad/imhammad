'use client';

import React, { ReactNode } from 'react';
import { useTheme } from '@/lib/theme-context';

interface Props {
    children: ReactNode;
}

export default function HomePattern({ children }: Props) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const darkBase = '#000000'; // Pure black
    const darkGrid = 'rgba(255, 255, 255, 0.05)'; // Light grid lines
    const darkDot = 'rgba(255, 255, 255, 0.08)'; // Slightly brighter dots

    const lightBase = '#ffffff';
    const lightGrid = 'rgba(75, 85, 99, 0.08)';
    const lightDot = 'rgba(55, 65, 81, 0.12)';

    return (
        <div
            className={`min-h-screen w-full relative transition-colors duration-300 overflow-hidden ${
                isDark ? 'text-gray-100' : 'text-gray-800'
            }`}
            style={{
                backgroundColor: isDark ? darkBase : lightBase,
            }}
        >
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 19px, ${isDark ? darkGrid : lightGrid} 19px, ${isDark ? darkGrid : lightGrid} 20px, transparent 20px, transparent 39px, ${isDark ? darkGrid : lightGrid} 39px, ${isDark ? darkGrid : lightGrid} 40px),
                        repeating-linear-gradient(90deg, transparent, transparent 19px, ${isDark ? darkGrid : lightGrid} 19px, ${isDark ? darkGrid : lightGrid} 20px, transparent 20px, transparent 39px, ${isDark ? darkGrid : lightGrid} 39px, ${isDark ? darkGrid : lightGrid} 40px),
                        radial-gradient(circle at 20px 20px, ${isDark ? darkDot : lightDot} 2px, transparent 2px),
                        radial-gradient(circle at 40px 40px, ${isDark ? darkDot : lightDot} 2px, transparent 2px)
                    `,
                    backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
                }}
            />
            {children}
        </div>
    );
}
