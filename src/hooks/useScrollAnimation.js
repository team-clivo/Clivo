import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * @param {Object} options - Configuration options for the intersection observer
 * @param {number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {string} options.rootMargin - Margin around the root
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {[React.RefObject, boolean]} - Returns ref to attach to element and isVisible state
 */
export function useScrollAnimation(options = {}) {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true
    } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
}

/**
 * Hook for parallax scroll effect
 * @param {number} speed - Speed of parallax effect (0-1, where 1 is normal scroll speed)
 * @returns {[React.RefObject, Object]} - Returns ref and style object with transform
 */
export function useParallax(speed = 0.5) {
    const ref = useRef(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const elementTop = ref.current.getBoundingClientRect().top;
                setOffsetY(elementTop * speed);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return [ref, { transform: `translateY(${offsetY}px)` }];
}
