"use client";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLanguage } from '../../context/LanguageContext';

export default function TermsPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
            <Header />

            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange-500">{t('legal.terms.title')}</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.terms.acceptance.title')}</h2>
                        <p>
                            {t('legal.terms.acceptance.text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.terms.license.title')}</h2>
                        <p className="mb-4">
                            {t('legal.terms.license.text')}
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>{t('legal.terms.license.items.modify')}</li>
                            <li>{t('legal.terms.license.items.commercial')}</li>
                            <li>{t('legal.terms.license.items.reverse')}</li>
                            <li>{t('legal.terms.license.items.remove')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.terms.ip.title')}</h2>
                        <p>
                            {t('legal.terms.ip.text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.terms.liability.title')}</h2>
                        <p>
                            {t('legal.terms.liability.text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.terms.modifications.title')}</h2>
                        <p>
                            {t('legal.terms.modifications.text')}
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}
