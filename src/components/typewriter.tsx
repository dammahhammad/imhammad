'use client';

import { useEffect, useState } from 'react';

export default function Typewriter() {
    const words = [
        'I solve problems',
        'A product developer',
        'A software engineer',
    ];
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(120);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (!isDeleting) {
                // typing forward
                setText(currentWord.slice(0, text.length + 1));
                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
                }
            } else {
                // deleting
                setText(currentWord.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);

    return (
        <h1 className="text-sm font-mono dark:text-white">
            {text}
            <span className="animate-pulse"></span>
        </h1>
    );
}
