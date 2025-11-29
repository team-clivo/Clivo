"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Lightbulb, HeartHandshake, ShieldCheck, TrendingUp, Users, Target, Rocket, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from '../../components/ui/MagneticButton';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 block">{t('about.hero.badge')}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              {t('about.hero.title.line1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">{t('about.hero.title.line2')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8 sm:mb-10 px-4">
              {t('about.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/10 bg-zinc-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1+", label: t('about.stats.experience') },
              { number: "6+", label: t('about.stats.projects') },
              { number: "100%", label: t('about.stats.clients') },
              { number: "24/7", label: t('about.stats.support') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="py-32 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">{t('about.who_we_are.badge')}</span>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('about.who_we_are.title.main')} <span className="text-orange-500">{t('about.who_we_are.title.highlight')}</span>.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('about.who_we_are.p1')}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.who_we_are.p2')}
              </p>
            </motion.div>

            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-3xl">
                <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">{t('about.what_we_do.badge')}</span>
                <h3 className="text-3xl font-bold text-white mb-6">{t('about.what_we_do.title')}</h3>
                <ul className="space-y-4">
                  {[
                    t('about.what_we_do.items.web_mobile'),
                    t('about.what_we_do.items.ui_ux'),
                    t('about.what_we_do.items.modernization'),
                    t('about.what_we_do.items.consulting')
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link href="/services" className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-500 transition-colors group">
                    {t('about.what_we_do.cta')}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">{t('about.team.badge')}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="w-40 h-40 relative rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-orange-500/50 transition-colors shadow-2xl group-hover:shadow-orange-500/20">
                  <Image
                    src="/founder1.png"
                    alt="Luis Alburquerque"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Luis Alburquerque</h3>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">{t('about.team.founders.luis.role')}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
                  {t('about.team.founders.luis.bio')}
                </p>
                <div className="flex gap-4 mt-auto">
                  <a href="https://www.linkedin.com/in/luisalburquerque/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
                  <a href="https://github.com/alburqdev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Github size={20} /></a>
                </div>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="w-40 h-40 relative rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-orange-500/50 transition-colors shadow-2xl group-hover:shadow-orange-500/20">
                  <Image
                    src="/founder2.jpeg"
                    alt="Emil Echavarría"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Emil Echavarría</h3>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">{t('about.team.founders.emil.role')}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
                  {t('about.team.founders.emil.bio')}
                </p>
                <div className="flex gap-4 mt-auto">
                  <a href="https://www.linkedin.com/in/emil-echavarria/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
                  <a href="https://github.com/EmilEchavarria" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><Github size={20} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-zinc-900/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">{t('about.values.badge')}</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">{t('about.values.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: t('about.values.items.innovation.title'),
                text: t('about.values.items.innovation.text')
              },
              {
                icon: HeartHandshake,
                title: t('about.values.items.commitment.title'),
                text: t('about.values.items.commitment.text')
              },
              {
                icon: ShieldCheck,
                title: t('about.values.items.quality.title'),
                text: t('about.values.items.quality.text')
              },
              {
                icon: TrendingUp,
                title: t('about.values.items.results.title'),
                text: t('about.values.items.results.text')
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-black border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 text-orange-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {t('about.cta.description')}
          </p>
          <div className="flex justify-center">
            <MagneticButton href="/contact" className="px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 text-lg flex items-center gap-2">
              {t('about.cta.button')}
              <Rocket className="w-5 h-5" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
