"use client";
import React, { useRef } from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Image from "next/image";
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './scrollAnimations.css';
import {
  Rocket,
  Smartphone,
  Palette,
  Cloud,
  Bot,
  Wrench,
  Search,
  PenTool,
  Zap,
  TrendingUp,
  CheckCircle,
  Target
} from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';
import TextReveal from '../../components/ui/TextReveal';
import { BentoGrid, BentoGridItem } from '../../components/ui/BentoGrid';
import Marquee from '../../components/ui/Marquee';
import VelocityScroll from '../../components/ui/VelocityScroll';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypewriterEffect } from '../../components/ui/TypewriterEffect';
import { useLanguage } from '../../context/LanguageContext';

export default function HomePage() {
  // Hero Parallax & Zoom - Aggressive but Elegant
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const { t } = useLanguage();

  // Aggressive Zoom: Scales from 1 to 1.5 as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  // Text splits apart
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section - Fixed Background + Scrolling Content */}
      <section ref={heroRef} id="inicio" className="relative h-screen w-full overflow-hidden">
        {/* Fixed Background Image */}
        <div className="fixed inset-0 w-full h-full z-0">
          <Image
            src="/images/empresas/home/home.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
        </div>

        {/* Scrolling Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <div className="text-center px-4 sm:px-6">
            <div className="mb-6 sm:mb-8 min-h-[150px] sm:min-h-[200px] flex items-center justify-center">
              <TypewriterEffect
                words={[
                  {
                    text: t('home.hero.typewriter.phrase1'),
                    className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400",
                  },
                  {
                    text: t('home.hero.typewriter.phrase2'),
                    className: "text-white",
                  },
                  {
                    text: t('home.hero.typewriter.phrase3'),
                    className: "text-white",
                  },
                ]}
                className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
                cursorClassName="bg-orange-500 h-8 sm:h-10 lg:h-20"
              />
            </div>

            <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-2">
              {t('home.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 w-full sm:w-auto px-4">
              <MagneticButton href="/contact" className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 text-base sm:text-lg flex justify-center items-center">
                {t('home.hero.cta_primary')}
              </MagneticButton>
              <MagneticButton href="/portfolio" className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-base sm:text-lg flex justify-center items-center">
                {t('home.hero.cta_secondary')}
              </MagneticButton>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-6 md:gap-12 items-center justify-center pt-8 sm:pt-12 border-t border-white/10 max-w-3xl mx-auto px-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">12+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest mt-1">{t('home.hero.stats.projects')}</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-white/10 hidden md:block"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">10+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest mt-1">{t('home.hero.stats.clients')}</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-white/10 hidden md:block"></div>
              <div className="text-center w-full md:w-auto">
                <div className="flex gap-1 mb-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg sm:text-xl">★</span>
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest mt-1">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper - Needs background to cover fixed hero */}
      <div className="relative z-10 bg-black shadow-2xl">

        {/* Services Section - Bento Grid (Dark) */}
        <section id="servicios" className="py-16 md:py-32 px-4 sm:px-6 bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-24"
            >
              <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 block">{t('home.services.title')}</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Soluciones digitales <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">de alto impacto</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                Combinamos diseño estratégico y tecnología de punta para crear productos que escalan.
              </p>
            </motion.div>

            <BentoGrid className="max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  title: t('home.services.cards.web.title'),
                  description: t('home.services.cards.web.desc'),
                  header: (
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center relative overflow-hidden group/header">
                      <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                      <Rocket className="h-20 w-20 text-orange-500/50 group-hover/header:text-orange-500 transition-colors duration-500" />
                    </div>
                  ),
                  className: "sm:col-span-2 lg:col-span-2",
                },
                {
                  title: t('home.services.cards.mobile.title'),
                  description: t('home.services.cards.mobile.desc'),
                  header: (
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center relative overflow-hidden group/header">
                      <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                      <Smartphone className="h-20 w-20 text-orange-500/50 group-hover/header:text-orange-500 transition-colors duration-500" />
                    </div>
                  ),
                  className: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: t('home.services.cards.uiux.title'),
                  description: t('home.services.cards.uiux.desc'),
                  header: (
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center relative overflow-hidden group/header">
                      <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                      <Palette className="h-20 w-20 text-orange-500/50 group-hover/header:text-orange-500 transition-colors duration-500" />
                    </div>
                  ),
                  className: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: t('home.services.cards.cloud.title'),
                  description: t('home.services.cards.cloud.desc'),
                  header: (
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center relative overflow-hidden group/header">
                      <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                      <Cloud className="h-20 w-20 text-orange-500/50 group-hover/header:text-orange-500 transition-colors duration-500" />
                    </div>
                  ),
                  className: "sm:col-span-2 lg:col-span-2",
                },
                {
                  title: "IA & Automatización",
                  description: "Potenciamos tu negocio integrando soluciones de IA y machine learning para automatizar tareas y optimizar la toma de decisiones.",
                  header: (
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center relative overflow-hidden group/header">
                      <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                      <Bot className="h-20 w-20 text-orange-500/50 group-hover/header:text-orange-500 transition-colors duration-500" />
                    </div>
                  ),
                  className: "sm:col-span-2 lg:col-span-2",
                },
                {
                  title: "Mantenimiento",
                  description: "Ofrecemos soporte técnico continuo y actualizaciones periódicas.",
                  header: (
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center relative overflow-hidden group/header">
                      <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                      <Wrench className="h-20 w-20 text-orange-500/50 group-hover/header:text-orange-500 transition-colors duration-500" />
                    </div>
                  ),
                  className: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: "Sistemas de Gestión",
                  description: "Desarrollamos sistemas de gestión adaptados a tus necesidades.",
                  header: (
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center relative overflow-hidden group/header">
                      <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                      <Target className="h-20 w-20 text-orange-500/50 group-hover/header:text-orange-500 transition-colors duration-500" />
                    </div>
                  ),
                  className: "sm:col-span-1 lg:col-span-3",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className={item.className}
                >
                  <BentoGridItem
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className="bg-zinc-800/40 dark:bg-zinc-800/40 backdrop-blur-md border-zinc-700/50 hover:border-orange-500 transition-colors duration-300 h-full"
                  />
                </motion.div>
              ))}
            </BentoGrid>

            <div className="flex justify-center mt-12">
              <MagneticButton href="/services" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 flex justify-center items-center">
                Ver más detalles
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Process Section - Scrollytelling (Dark) */}
        <section id="proceso" className="py-16 md:py-32 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-900/30 via-black to-black"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div className="lg:sticky lg:top-32 mb-12 lg:mb-0">
                <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 block">{t('home.process.title')}</span>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                  {t('home.process.heading.line1')} <br />
                  <span className="text-white/30">{t('home.process.heading.line2')}</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed mb-8 sm:mb-12">
                  {t('home.process.description')}
                </p>
                <MagneticButton href="/aboutus" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 flex justify-center items-center">
                  {t('home.process.button')}
                </MagneticButton>
              </div>

              <div className="space-y-16 sm:space-y-24">
                {[
                  {
                    num: "01",
                    title: t('home.process.steps.discovery.title'),
                    desc: t('home.process.steps.discovery.desc'),
                    icon: Search
                  },
                  {
                    num: "02",
                    title: t('home.process.steps.design.title'),
                    desc: t('home.process.steps.design.desc'),
                    icon: PenTool
                  },
                  {
                    num: "03",
                    title: t('home.process.steps.development.title'),
                    desc: t('home.process.steps.development.desc'),
                    icon: Zap
                  },
                  {
                    num: "04",
                    title: t('home.process.steps.launch.title'),
                    desc: t('home.process.steps.launch.desc'),
                    icon: TrendingUp
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ margin: "-100px" }}
                    className="group relative pl-8 sm:pl-12 border-l border-white/10 hover:border-orange-500 transition-colors duration-500"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl sm:text-5xl font-bold text-white/10 group-hover:text-orange-500 transition-colors duration-500">{step.num}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-base sm:text-lg group-hover:text-white transition-colors duration-300 font-light">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients Logo Section - Relocated Here */}
        <section className="py-12 md:py-20 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-gray-400 font-medium mb-8 sm:mb-12 uppercase tracking-widest text-xs sm:text-sm">{t('home.clients.title')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-500">
              {/* Logo AgroGestor */}
              <a
                href="https://agrogestor.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 h-16 md:w-48 md:h-24 relative block hover:scale-105 transition-all duration-300 cursor-pointer bg-white rounded-xl overflow-hidden flex items-center justify-center"
              >
                <Image
                  src="/images/empresas/AgroGestor.jpg"
                  alt="AgroGestor"
                  fill
                  className="object-contain p-2"
                />
              </a>

              {/* Logo Dashbite */}
              <a
                href="#"
                className="w-32 h-16 md:w-48 md:h-24 relative block hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/empresas/dashbite.png"
                  alt="Dashbite"
                  fill
                  className="object-cover"
                />
              </a>

              {/* Placeholders para más logos */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-32 h-16 md:w-48 md:h-24 bg-white/5 rounded-xl animate-pulse border border-white/5 hidden sm:block"></div>
              ))}
            </div>

          </div>
        </section>

        {/* Testimonials Section - Infinite Marquee (Dark) */}
        <section id="testimonios" className="py-16 md:py-32 bg-zinc-900 overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4 sm:px-6">
            <span className="text-orange-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 block">{t('home.testimonials.label')}</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">{t('home.testimonials.title')}</h2>
          </div>

          <Marquee pauseOnHover className="[--duration:40s]">
            {t('home.testimonials.reviews').map((review, i) => (
              <div key={i} className="relative w-72 md:w-96 cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-black p-6 md:p-8 hover:border-orange-600 transition-colors mx-4">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <img className="rounded-full grayscale" width="48" height="48" alt={`Avatar de ${review.name}`} src={`https://avatar.vercel.sh/${review.name.split(' ')[0].toLowerCase()}`} />
                  <div className="flex flex-col">
                    <figcaption className="text-base md:text-lg font-bold text-white">{review.name}</figcaption>
                    <p className="text-xs md:text-sm font-medium text-orange-500">{review.role}</p>
                  </div>
                </div>
                <blockquote className="text-sm md:text-base text-gray-400 leading-relaxed">"{review.text}"</blockquote>
              </div>
            ))}
          </Marquee>
        </section>

        {/* CTA Section (Dark Gradient) */}
        <section className="py-16 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-orange-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiNGOTczMTYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight"
            >
              {t('home.cta.title')}
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto font-light px-4">
              {t('home.cta.description')}
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-12 sm:mb-20">
              <MagneticButton href="/contact" className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 text-lg sm:text-xl flex justify-center items-center gap-2">
                {t('home.cta.button')}
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </MagneticButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 border-t border-white/10 pt-8 sm:pt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest">{t('home.cta.stats.response')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest">{t('home.cta.stats.free')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">ROI</div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest">{t('home.cta.stats.focus')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
}