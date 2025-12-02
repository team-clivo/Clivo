"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Plus, Minus, MessageCircle, HelpCircle, Search } from 'lucide-react';
import Link from 'next/link';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function FAQPage() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Get categories from translations
    const categories = {
        all: t('faq.categories.general') || "All",
        general: t('faq.categories.general'),
        services: t('faq.categories.services'),
        process: t('faq.categories.process'),
        pricing: t('faq.categories.pricing')
    };

    // Let's create an array of questions from the translations
    const questionsList = [
        { id: 'q1', category: 'services', ...t('faq.questions.q1') },
        { id: 'q2', category: 'process', ...t('faq.questions.q2') },
        { id: 'q3', category: 'services', ...t('faq.questions.q3') },
        { id: 'q4', category: 'pricing', ...t('faq.questions.q4') },
        { id: 'q5', category: 'general', ...t('faq.questions.q5') },
        { id: 'q6', category: 'services', ...t('faq.questions.q6') },
        { id: 'q7', category: 'legal', ...t('faq.questions.q7') },
        { id: 'q8', category: 'pricing', ...t('faq.questions.q8') },
    ];

    return (
        <>
            <Header />
            <main className={`min-h-screen pt-24 pb-20 transition-colors duration-500 ${theme === 'light' ? 'bg-zinc-50' : 'bg-black'
                }`}>
                {/* Hero Section */}
                <section className="relative px-4 md:px-6 lg:px-8 mb-12 md:mb-16 lg:mb-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-orange-500 font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 text-sm md:text-base"
                        >
                            FAQ
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight ${theme === 'light' ? 'text-zinc-900' : 'text-white'
                                }`}
                        >
                            {t('faq.title')}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={`text-base md:text-xl max-w-2xl mx-auto ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
                                }`}
                        >
                            {t('faq.subtitle')}
                        </motion.p>
                    </div>

                    {/* Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                        <div className={`absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 ${theme === 'light' ? 'bg-orange-200' : 'bg-orange-500/20'
                            }`}></div>
                        <div className={`absolute bottom-0 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 ${theme === 'light' ? 'bg-blue-200' : 'bg-blue-500/20'
                            }`}></div>
                    </div>
                </section>

                {/* FAQ List */}
                <section className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="space-y-4">
                        {questionsList.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${theme === 'light'
                                    ? 'bg-white border-zinc-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5'
                                    : 'bg-zinc-900/50 border-white/5 hover:border-orange-500/30 hover:bg-zinc-900'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 text-left group"
                                >
                                    <span className={`text-base md:text-lg font-medium transition-colors ${theme === 'light' ? 'text-zinc-900 group-hover:text-orange-600' : 'text-white group-hover:text-orange-400'
                                        }`}>
                                        {item.question}
                                    </span>
                                    <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        } ${theme === 'light' ? 'text-zinc-400 group-hover:text-orange-500' : 'text-zinc-500 group-hover:text-orange-400'
                                        }`}>
                                        {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className={`px-5 pb-5 pt-0 md:px-6 md:pb-6 text-sm md:text-base leading-relaxed ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
                                                }`}>
                                                {typeof item.answer === 'string' ? (
                                                    item.answer
                                                ) : (
                                                    <div className="space-y-3">
                                                        {item.answer.text && <p>{item.answer.text}</p>}
                                                        {item.answer.list && (
                                                            <ul className="list-disc pl-5 space-y-2">
                                                                {item.answer.list.map((li, i) => (
                                                                    <li key={i}>{li}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {item.answer.footer && <p className="mt-2 font-medium">{item.answer.footer}</p>}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto px-4 md:px-6 mt-32 md:mt-48 mb-16 md:mb-24 text-center">
                    <div className="flex flex-col items-center">
                        <h2 className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight ${theme === 'light' ? 'text-zinc-900' : 'text-white'
                            }`}>
                            {t('faq.cta.title')}
                        </h2>

                        <p className={`text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
                            }`}>
                            {t('faq.cta.text')}
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold text-white transition-all duration-200 bg-orange-600 rounded-full hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20"
                        >
                            {t('faq.cta.button')}
                        </Link>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    );
}
