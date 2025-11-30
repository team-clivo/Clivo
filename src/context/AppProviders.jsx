"use client";
import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';

export function AppProviders({ children }) {
    return (
        <LanguageProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </LanguageProvider>
    );
}
