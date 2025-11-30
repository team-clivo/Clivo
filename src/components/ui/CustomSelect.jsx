"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomSelect({
    options,
    value,
    onChange,
    name,
    placeholder,
    icon: Icon,
    required = false,
    className = ""
}) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`contact-input w-full px-4 py-3 bg-black/40 text-left text-base rounded-xl border transition-all flex items-center justify-between group
          ${isOpen ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-white/10 hover:border-white/20'}
          ${!selectedOption ? 'text-gray-400' : 'text-white'}
        `}
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    {Icon && <Icon className={`w-4 h-4 flex-shrink-0 ${isOpen ? 'text-orange-500' : 'text-orange-500'}`} />}
                    <span className="truncate">
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>
                <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-orange-500' : ''}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="custom-select-dropdown absolute z-50 w-full mt-2 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto custom-scrollbar"
                    >
                        <div className="p-1">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    data-selected={value === option.value}
                                    className={`custom-select-option w-full px-3 py-2.5 text-left text-sm rounded-lg transition-colors flex items-center justify-between
                    ${value === option.value
                                            ? 'bg-orange-500/10 text-orange-500 font-medium'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        }
                  `}
                                >
                                    <span className="truncate">{option.label}</span>
                                    {value === option.value && (
                                        <Check className="w-4 h-4 flex-shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
