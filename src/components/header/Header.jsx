"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Instagram, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  const handleLanguageSelect = (langCode) => {
    changeLanguage(langCode);
    setLangMenuOpen(false);
  };

  const navLinks = [
    { href: "/home", label: t('header.home') },
    { href: "/aboutus", label: t('header.about') },
    { href: "/services", label: t('header.services') },
    { href: "/portfolio", label: t('header.portfolio') },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: {
      y: 30,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled || mobileMenuOpen
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-3 h-full">
          <Link href="/home" className="relative h-full flex items-center justify-center">
            <img
              src="/logowhite.png"
              alt="Clivo logo"
              className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-orange-500 transition-all font-medium relative group text-sm xl:text-base"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Language Switcher Desktop */}
          <div className="relative ml-4" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-orange-500 rounded-lg hover:bg-zinc-800 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden py-1"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-zinc-800 transition-colors ${language === lang.code ? 'text-orange-500 font-medium' : 'text-gray-400'
                        }`}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:block px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
        >
          {t('header.contact')}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-orange-500 transition-colors focus:outline-none relative z-50"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-zinc-950 z-40 lg:hidden flex flex-col pt-28 px-8 pb-10"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="flex flex-col justify-between h-full relative z-10">

              {/* Navigation Box & Links */}
              <div className="flex flex-col items-center justify-center flex-1 space-y-12">
                <motion.div
                  variants={linkVariants}
                  className="border border-orange-500/50 px-6 py-2 text-orange-500 font-bold tracking-widest text-sm uppercase"
                >
                  {t('header.navigation')}
                </motion.div>

                <div className="flex flex-col items-center space-y-6">
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={linkVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-orange-500 transition-colors tracking-widest uppercase"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <motion.div variants={linkVariants}>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg group"
                  >
                    {t('header.contact')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div variants={linkVariants} className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="text-sm text-gray-500 font-medium">
                    {t('header.rights')}
                  </div>
                  <div className="flex gap-6 items-center">
                    {/* Mobile Language Switcher */}
                    <div className="relative">
                      <button
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className="flex items-center gap-2 text-orange-500 font-medium bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800"
                      >
                        <Globe className="w-5 h-5" />
                        <span className="text-sm uppercase">{language}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {langMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-full left-0 mb-2 w-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden py-1"
                          >
                            {languages.map((lang) => (
                              <button
                                key={lang.code}
                                onClick={() => handleLanguageSelect(lang.code)}
                                className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-zinc-800 transition-colors ${language === lang.code ? 'text-orange-500 font-medium' : 'text-gray-400'
                                  }`}
                              >
                                <span>{lang.flag}</span>
                                {lang.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}