"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function MagneticButton({ children, className, onClick, href }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    const commonProps = {
        ref,
        className,
        onMouseMove: handleMouse,
        onMouseLeave: reset,
        onClick,
        animate: { x, y },
        transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 }
    };

    if (href) {
        return (
            <MotionLink href={href} {...commonProps}>
                {children}
            </MotionLink>
        );
    }

    return (
        <motion.button {...commonProps}>
            {children}
        </motion.button>
    );
}
