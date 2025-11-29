"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es');

    // Load language from localStorage if available
    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    // Translation helper function
    // Supports nested keys like 'home.hero.title'
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                // Fallback to Spanish if key missing in current language, or return key
                let fallback = translations['es'];
                for (const fk of keys) {
                    if (fallback && fallback[fk]) {
                        fallback = fallback[fk];
                    } else {
                        return key;
                    }
                }
                return fallback || key;
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
