"use client";
import React from 'react';
import Link from "next/link";
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import { Smartphone, CheckCircle, Target, Zap } from 'lucide-react';

export default function AppMovilesPage() {
    return (
        <div className="min-h-dvh bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Desarrollo de Apps Móviles
                    </h1>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Creamos aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales en iOS y Android.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            Comenzar mi proyecto
                        </Link>
                        <Link
                            href="/portfolio"
                            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-orange-500 transition-all duration-300"
                        >
                            Ver nuestro portafolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Lo que ofrecemos
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Aplicaciones móviles personalizadas
                        </h2>
                        <p className="text-xl text-gray-600">
                            Desde apps simples hasta plataformas complejas, diseñamos soluciones móviles que se adaptan a tus objetivos de negocio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Smartphone,
                                title: "Apps Nativas iOS & Android",
                                description: "Rendimiento óptimo y experiencia perfecta para cada plataforma.",
                            },
                            {
                                icon: CheckCircle,
                                title: "Apps Multiplataforma",
                                description: "Una sola base de código para iOS y Android con React Native o Flutter.",
                            },
                            {
                                icon: Target,
                                title: "Diseño UX/UI Intuitivo",
                                description: "Interfaces atractivas y fáciles de usar que aumentan el engagement.",
                            },
                            {
                                icon: Zap,
                                title: "Integración con APIs",
                                description: "Conexión fluida con servicios externos y backends personalizados.",
                            }
                        ].map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="text-orange-500 mb-6">
                                        <Icon size={48} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    ¿Listo para tu app móvil?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Agenda una consultoría gratuita y descubre cómo podemos convertir tu idea en una aplicación móvil exitosa.
                </p>
                <Link
                    href="/contact"
                    className="px-10 py-5 bg-orange-500 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 text-lg"
                >
                    Agendar llamada gratuita
                </Link>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
