"use client";
import { cn } from "../../lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}) => {
    // Split words into an array of characters for the animation
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex].text;
        const typeSpeed = isDeleting ? 20 : 100; // Faster delete, normal type
        const pauseTime = 2000; // Time to wait before deleting

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentWord.length) {
                    setDisplayedText(currentWord.slice(0, displayedText.length + 1));
                } else {
                    // Finished typing, wait then delete
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(currentWord.slice(0, displayedText.length - 1));
                } else {
                    // Finished deleting, move to next word
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typeSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentWordIndex, words]);

    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            <motion.div>
                <div className="inline-block whitespace-pre-wrap">
                    {words[currentWordIndex].className ? (
                        <span className={words[currentWordIndex].className}>{displayedText}</span>
                    ) : (
                        <span>{displayedText}</span>
                    )}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className={cn(
                            "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-orange-500 ml-1 align-middle",
                            cursorClassName
                        )}
                    ></motion.span>
                </div>
            </motion.div>
        </div>
    );
};
