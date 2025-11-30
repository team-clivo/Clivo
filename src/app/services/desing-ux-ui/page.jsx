"use client";
import React from 'react';
import Link from "next/link";
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import { Palette, CheckCircle, Target, Zap } from 'lucide-react';

export default function DesignUXUIPage() {
    return (
        <div className="min-h-dvh bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Diseño UX/UI
                    </h1>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                        Creamos experiencias digitales intuitivas y atractivas que conectan con tus usuarios y potencian tu marca.
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
                            Diseños que cautivan y convierten
                        </h2>
                        <p className="text-xl text-gray-600">
                            Combinamos investigación de usuarios, diseño visual y prototipado para crear productos digitales excepcionales.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Palette,
                                title: "Diseño de Interfaces (UI)",
                                description: "Interfaces visuales modernas, coherentes y alineadas con tu identidad de marca.",
                            },
                            {
                                icon: CheckCircle,
                                title: "Experiencia de Usuario (UX)",
                                description: "Investigación y diseño centrado en el usuario para maximizar la satisfacción.",
                            },
                            {
                                icon: Target,
                                title: "Prototipado Interactivo",
                                description: "Prototipos funcionales para validar ideas antes del desarrollo.",
                            },
                            {
                                icon: Zap,
                                title: "Design Systems",
                                description: "Sistemas de diseño escalables para mantener consistencia en todos tus productos.",
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
                    ¿Listo para mejorar tu diseño?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Agenda una consultoría gratuita y descubre cómo el diseño UX/UI puede transformar tu producto digital.
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
