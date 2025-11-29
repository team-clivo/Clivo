"use client";
import React from "react";
import Link from "next/link";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Rocket, Smartphone, Palette, Cloud, Bot, Target, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from '../../context/LanguageContext';

import Image from "next/image";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('servicesPage.list.web.title'),
      shortDescription: t('servicesPage.list.web.shortDescription'),
      fullDescription: t('servicesPage.list.web.fullDescription'),
      features: [
        t('servicesPage.list.web.features.f1'),
        t('servicesPage.list.web.features.f2'),
        t('servicesPage.list.web.features.f3'),
        t('servicesPage.list.web.features.f4')
      ],
      icon: Rocket,
      image: "/images/services/webdevlopment.jpg",
      href: "/contact?service=desarrollo-web"
    },
    {
      title: t('servicesPage.list.mobile.title'),
      shortDescription: t('servicesPage.list.mobile.shortDescription'),
      fullDescription: t('servicesPage.list.mobile.fullDescription'),
      features: [
        t('servicesPage.list.mobile.features.f1'),
        t('servicesPage.list.mobile.features.f2'),
        t('servicesPage.list.mobile.features.f3'),
        t('servicesPage.list.mobile.features.f4')
      ],
      icon: Smartphone,
      image: "/images/services/movildevelopment.png",
      href: "/contact?service=apps-moviles"
    },
    {
      title: t('servicesPage.list.uiux.title'),
      shortDescription: t('servicesPage.list.uiux.shortDescription'),
      fullDescription: t('servicesPage.list.uiux.fullDescription'),
      features: [
        t('servicesPage.list.uiux.features.f1'),
        t('servicesPage.list.uiux.features.f2'),
        t('servicesPage.list.uiux.features.f3'),
        t('servicesPage.list.uiux.features.f4')
      ],
      icon: Palette,
      image: "/images/services/uxui.png",
      href: "/contact?service=diseno-ux-ui"
    },
    {
      title: t('servicesPage.list.cloud.title'),
      shortDescription: t('servicesPage.list.cloud.shortDescription'),
      fullDescription: t('servicesPage.list.cloud.fullDescription'),
      features: [
        t('servicesPage.list.cloud.features.f1'),
        t('servicesPage.list.cloud.features.f2'),
        t('servicesPage.list.cloud.features.f3'),
        t('servicesPage.list.cloud.features.f4')
      ],
      icon: Cloud,
      image: "/images/services/devops.png",
      href: "/contact?service=cloud-devops"
    },
    {
      title: t('servicesPage.list.ai.title'),
      shortDescription: t('servicesPage.list.ai.shortDescription'),
      fullDescription: t('servicesPage.list.ai.fullDescription'),
      features: [
        t('servicesPage.list.ai.features.f1'),
        t('servicesPage.list.ai.features.f2'),
        t('servicesPage.list.ai.features.f3'),
        t('servicesPage.list.ai.features.f4')
      ],
      icon: Bot,
      image: "/images/services/ia.png",
      href: "/contact?service=ia-automatizacion"
    },
    {
      title: t('servicesPage.list.systems.title'),
      shortDescription: t('servicesPage.list.systems.shortDescription'),
      fullDescription: t('servicesPage.list.systems.fullDescription'),
      features: [
        t('servicesPage.list.systems.features.f1'),
        t('servicesPage.list.systems.features.f2'),
        t('servicesPage.list.systems.features.f3'),
        t('servicesPage.list.systems.features.f4')
      ],
      icon: Target,
      image: "/images/services/system.png",
      href: "/contact?service=sistemas-gestion"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[50vh] flex items-center justify-center">
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
            <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 block">{t('servicesPage.hero.badge')}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('servicesPage.hero.title.line1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">{t('servicesPage.hero.title.highlight')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light px-4">
              {t('servicesPage.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-4 aspect-video flex items-center justify-center overflow-hidden group-hover:border-orange-500/50 transition-colors duration-500">
                      {service.image ? (
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                      ) : (
                        <>
                          <Icon size={80} strokeWidth={1} className="text-white/20 group-hover:text-orange-500/20 transition-colors duration-500 absolute scale-150" />
                          <Icon size={64} strokeWidth={1.5} className="text-orange-500 relative z-10 drop-shadow-2xl" />
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">{service.title}</h2>
                  </div>

                  <h3 className="text-xl text-gray-300 font-medium mb-6">{service.shortDescription}</h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-500 transition-colors group"
                  >
                    {t('servicesPage.list.requestButton')}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-zinc-900/30 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('servicesPage.cta.title')}
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {t('servicesPage.cta.description')}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            {t('servicesPage.cta.button')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}