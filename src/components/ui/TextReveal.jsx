"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export default function TextReveal({ text, className, delay = 0 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("gap-x-2", className)}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="relative inline-block">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
