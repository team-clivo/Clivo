"use client";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLanguage } from '../../context/LanguageContext';

export default function PrivacyPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-dvh bg-black text-white selection:bg-orange-500 selection:text-white">
            <Header />

            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange-500">{t('legal.privacy.title')}</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.privacy.intro.title')}</h2>
                        <p>
                            {t('legal.privacy.intro.text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.privacy.data.title')}</h2>
                        <p className="mb-4">{t('legal.privacy.data.text')}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>{t('legal.privacy.data.items.identity')}</li>
                            <li>{t('legal.privacy.data.items.contact')}</li>
                            <li>{t('legal.privacy.data.items.technical')}</li>
                            <li>{t('legal.privacy.data.items.usage')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.privacy.usage.title')}</h2>
                        <p>
                            {t('legal.privacy.usage.text')}
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>{t('legal.privacy.usage.items.contract')}</li>
                            <li>{t('legal.privacy.usage.items.legitimate')}</li>
                            <li>{t('legal.privacy.usage.items.legal')}</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.privacy.security.title')}</h2>
                        <p>
                            {t('legal.privacy.security.text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.privacy.rights.title')}</h2>
                        <p>
                            {t('legal.privacy.rights.text')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">{t('legal.privacy.contact.title')}</h2>
                        <p>
                            {t('legal.privacy.contact.text')} <a href="mailto:clivo.contacto@gmail.com" className="text-orange-500 hover:text-orange-400">clivo.contacto@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}
