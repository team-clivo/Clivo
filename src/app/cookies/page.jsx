"use client";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLanguage } from '../../context/LanguageContext';

export default function CookiesPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-dvh bg-black text-white selection:bg-orange-500 selection:text-white">
            <Header />

            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange-500">{t('legal.cookies.title')}</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.cookies.what.title')}</h2>
                        <p>
                            {t('legal.cookies.what.text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.cookies.usage.title')}</h2>
                        <p className="mb-4">{t('legal.cookies.usage.text')}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>{t('legal.cookies.usage.items.function')}</li>
                            <li>{t('legal.cookies.usage.items.understand')}</li>
                            <li>{t('legal.cookies.usage.items.remember')}</li>
                            <li>{t('legal.cookies.usage.items.improve')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.cookies.types.title')}</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">{t('legal.cookies.types.essential.title')}</h3>
                                <p>{t('legal.cookies.types.essential.text')}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">{t('legal.cookies.types.performance.title')}</h3>
                                <p>{t('legal.cookies.types.performance.text')}</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.cookies.management.title')}</h2>
                        <p>
                            {t('legal.cookies.management.text')}
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}
