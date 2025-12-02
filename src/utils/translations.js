import { aboutTranslations } from './aboutTranslations';
import { legalTranslations } from './legalTranslations';
import { servicesTranslations } from './servicesTranslations';
import { portfolioTranslations } from './portfolioTranslations';
import { contactTranslations } from './contactTranslations';
import { faqTranslations } from './faqTranslations';

export const translations = {
    es: {
        ...aboutTranslations.es,
        ...legalTranslations.es,
        ...servicesTranslations.es,
        ...portfolioTranslations.es,
        ...contactTranslations.es,
        ...faqTranslations.es,
        header: {
            home: "Inicio",
            about: "Nosotros",
            services: "Servicios",
            portfolio: "Portafolio",
            faq: "FAQ",
            contact: "Hablemos",
            navigation: "Navegación",
            rights: "© 2025 Clivo"
        },
        theme: {
            light: "Claro",
            dark: "Oscuro",
            system: "Sistema"
        },
        home: {
            hero: {
                badge: "Agencia de Desarrollo de Software",
                typewriter: {
                    phrase1: "Creamos productos\ndigitales excepcionales",
                    phrase2: "Transformamos ideas\nen realidad",
                    phrase3: "Impulsamos tu\néxito digital"
                },
                description: "Somos tu socio tecnológico de confianza. Transformamos ideas en aplicaciones web y móviles que generan resultados reales para tu negocio.",
                cta_primary: "Iniciar mi proyecto",
                cta_secondary: "Ver nuestro trabajo",
                stats: {
                    projects: "Proyectos",
                    clients: "Clientes",
                    experience: "Años Exp."
                }
            },
            services: {
                title: "Nuestros Servicios",
                subtitle: "Soluciones digitales de alto impacto",
                description: "Combinamos diseño estratégico y tecnología de punta para crear productos que escalan.",
                button: "Ver más detalles",
                cards: {
                    web: {
                        title: "Desarrollo Web",
                        desc: "Sitios y aplicaciones web modernos, rápidos y escalables."
                    },
                    mobile: {
                        title: "Apps Móviles",
                        desc: "Aplicaciones nativas y multiplataforma para iOS y Android."
                    },
                    uiux: {
                        title: "Diseño UX/UI",
                        desc: "Interfaces intuitivas y experiencias de usuario memorables."
                    },
                    cloud: {
                        title: "Cloud & DevOps",
                        desc: "Infraestructura robusta y despliegue continuo en la nube."
                    },
                    ai: {
                        title: "IA & Automatización",
                        desc: "Potenciamos tu negocio integrando soluciones de IA y machine learning para automatizar tareas y optimizar la toma de decisiones."
                    },
                    maintenance: {
                        title: "Mantenimiento",
                        desc: "Ofrecemos soporte técnico continuo y actualizaciones periódicas."
                    },
                    management: {
                        title: "Sistemas de Gestión",
                        desc: "Desarrollamos sistemas de gestión adaptados a tus necesidades."
                    }
                }
            },
            process: {
                title: "Nuestro Proceso",
                heading: {
                    line1: "De la idea a la",
                    line2: "Realidad"
                },
                description: "Seguimos una metodología ágil y transparente. Sin cajas negras, sin sorpresas. Solo resultados consistentes.",
                button: "Conocer más detalles",
                steps: {
                    discovery: {
                        title: "Descubrimiento",
                        desc: "Inmersión total en tu negocio. Definimos KPIs, user personas y roadmap técnico."
                    },
                    design: {
                        title: "Diseño & Prototipado",
                        desc: "Visualizamos la solución. Wireframes, UI kits y prototipos interactivos de alta fidelidad."
                    },
                    development: {
                        title: "Desarrollo Ágil",
                        desc: "Sprints de 2 semanas. Código limpio, testeo continuo y demos frecuentes."
                    },
                    launch: {
                        title: "Lanzamiento & Escala",
                        desc: "Despliegue automatizado, monitoreo 24/7 y optimización continua post-lanzamiento."
                    }
                }
            },
            clients: {
                title: "Empresas que confían en nosotros"
            },
            testimonials: {
                label: "Testimonios",
                title: "Lo que dicen nuestros clientes",
                reviews: [
                    {
                        name: "Carlos Rodríguez",
                        role: "CEO, TechStart",
                        text: "Clivo transformó completamente nuestra presencia digital. Su atención al detalle y calidad técnica es insuperable."
                    },
                    {
                        name: "Ana Martínez",
                        role: "Directora de Marketing, InnovaCorp",
                        text: "El equipo entendió perfectamente nuestra visión y la llevó al siguiente nivel. Altamente recomendados."
                    },
                    {
                        name: "Miguel Ángel",
                        role: "Fundador, E-Shop",
                        text: "La mejor inversión para nuestro negocio. El ROI ha sido increíble desde el lanzamiento."
                    },
                    {
                        name: "Laura Sánchez",
                        role: "CTO, DataFlow",
                        text: "Profesionalismo, rapidez y código de alta calidad. Un placer trabajar con ellos."
                    },
                    {
                        name: "David Wilson",
                        role: "Product Manager, GlobalTech",
                        text: "Superaron todas nuestras expectativas. La comunicación fue excelente durante todo el proceso."
                    }
                ]
            },
            cta: {
                title: "¿Listo para transformar tu negocio?",
                description: "Agenda una llamada gratuita de 30 minutos y descubre cómo podemos ayudarte a escalar.",
                button: "Hablemos ahora",
                stats: {
                    response: "Respuesta",
                    free: "Gratis",
                    focus: "Enfoque"
                }
            }
        },
        footer: {
            description: "Transformamos ideas en productos digitales excepcionales. Tu socio tecnológico de confianza.",
            services: {
                title: "Servicios",
                items: {
                    web: "Desarrollo Web",
                    mobile: "Apps Móviles",
                    uiux: "Diseño UX/UI",
                    cloud: "Cloud & DevOps",
                    ai: "IA & Automatización"
                }
            },
            company: {
                title: "Empresa",
                items: {
                    portfolio: "Portafolio",
                    about: "Nosotros",
                    contact: "Contacto"
                }
            },
            contact: {
                title: "Contacto",
                location: "Santo Domingo, República Dominicana"
            },
            rights: "© 2025 Clivo. Todos los derechos reservados.",
            legal: {
                privacy: "Política de Privacidad",
                terms: "Términos de Servicio",
                cookies: "Cookies"
            }
        }
    },
    en: {
        ...aboutTranslations.en,
        ...legalTranslations.en,
        ...servicesTranslations.en,
        ...portfolioTranslations.en,
        ...contactTranslations.en,
        ...faqTranslations.en,
        header: {
            home: "Home",
            about: "About",
            services: "Services",
            portfolio: "Portfolio",
            faq: "FAQ",
            contact: "Let's Talk",
            navigation: "Navigation",
            rights: "© 2025 Clivo"
        },
        theme: {
            light: "Light",
            dark: "Dark",
            system: "System"
        },
        home: {
            hero: {
                badge: "Software Development Agency",
                typewriter: {
                    phrase1: "We create exceptional\ndigital products",
                    phrase2: "We transform ideas\ninto reality",
                    phrase3: "We drive your\ndigital success"
                },
                description: "We are your trusted technology partner. We transform ideas into web and mobile applications that generate real results for your business.",
                cta_primary: "Start my project",
                cta_secondary: "View our work",
                stats: {
                    projects: "Projects",
                    clients: "Clients",
                    experience: "Years Exp."
                }
            },
            services: {
                title: "Our Services",
                subtitle: "High-impact digital solutions",
                description: "We combine strategic design and cutting-edge technology to create products that scale.",
                button: "See more details",
                cards: {
                    web: {
                        title: "Web Development",
                        desc: "Modern, fast, and scalable websites and applications."
                    },
                    mobile: {
                        title: "Mobile Apps",
                        desc: "Native and cross-platform applications for iOS and Android."
                    },
                    uiux: {
                        title: "UX/UI Design",
                        desc: "Intuitive interfaces and memorable user experiences."
                    },
                    cloud: {
                        title: "Cloud & DevOps",
                        desc: "Robust infrastructure and continuous cloud deployment."
                    },
                    ai: {
                        title: "AI & Automation",
                        desc: "We empower your business by integrating AI and machine learning solutions to automate tasks and optimize decision-making."
                    },
                    maintenance: {
                        title: "Maintenance",
                        desc: "We offer continuous technical support and periodic updates."
                    },
                    management: {
                        title: "Management Systems",
                        desc: "We develop management systems tailored to your needs."
                    }
                }
            },
            process: {
                title: "Our Process",
                heading: {
                    line1: "From idea to",
                    line2: "Reality"
                },
                description: "We follow an agile and transparent methodology. No black boxes, no surprises. Only consistent results.",
                button: "Learn more details",
                steps: {
                    discovery: {
                        title: "Discovery",
                        desc: "Total immersion in your business. We define KPIs, user personas, and technical roadmap."
                    },
                    design: {
                        title: "Design & Prototyping",
                        desc: "We visualize the solution. Wireframes, UI kits, and high-fidelity interactive prototypes."
                    },
                    development: {
                        title: "Agile Development",
                        desc: "2-week sprints. Clean code, continuous testing, and frequent demos."
                    },
                    launch: {
                        title: "Launch & Scale",
                        desc: "Automated deployment, 24/7 monitoring, and continuous post-launch optimization."
                    }
                }
            },
            clients: {
                title: "Companies that trust us"
            },
            testimonials: {
                label: "Testimonials",
                title: "What our clients say",
                reviews: [
                    {
                        name: "Carlos Rodríguez",
                        role: "CEO, TechStart",
                        text: "Clivo completely transformed our digital presence. Their attention to detail and technical quality is unsurpassed."
                    },
                    {
                        name: "Ana Martínez",
                        role: "Marketing Director, InnovaCorp",
                        text: "The team perfectly understood our vision and took it to the next level. Highly recommended."
                    },
                    {
                        name: "Miguel Ángel",
                        role: "Founder, E-Shop",
                        text: "The best investment for our business. The ROI has been incredible since launch."
                    },
                    {
                        name: "Laura Sánchez",
                        role: "CTO, DataFlow",
                        text: "Professionalism, speed, and high-quality code. A pleasure working with them."
                    },
                    {
                        name: "David Wilson",
                        role: "Product Manager, GlobalTech",
                        text: "They exceeded all our expectations. Communication was excellent throughout the process."
                    }
                ]
            },
            cta: {
                title: "Ready to transform your business?",
                description: "Schedule a free 30-minute call and discover how we can help you scale.",
                button: "Let's talk now",
                stats: {
                    response: "Response",
                    free: "Free",
                    focus: "Focus"
                }
            }
        },
        footer: {
            description: "We transform ideas into exceptional digital products. Your trusted technology partner.",
            services: {
                title: "Services",
                items: {
                    web: "Web Development",
                    mobile: "Mobile Apps",
                    uiux: "UX/UI Design",
                    cloud: "Cloud & DevOps",
                    ai: "AI & Automation"
                }
            },
            company: {
                title: "Company",
                items: {
                    portfolio: "Portfolio",
                    about: "About Us",
                    contact: "Contact"
                }
            },
            contact: {
                title: "Contact",
                location: "Santo Domingo, Dominican Republic"
            },
            rights: "© 2025 Clivo. All rights reserved.",
            legal: {
                privacy: "Privacy Policy",
                terms: "Terms of Service",
                cookies: "Cookies"
            }
        }
    },
    fr: {
        ...aboutTranslations.fr,
        ...legalTranslations.fr,
        ...servicesTranslations.fr,
        ...portfolioTranslations.fr,
        ...contactTranslations.fr,
        ...faqTranslations.fr,
        header: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            portfolio: "Portfolio",
            faq: "FAQ",
            contact: "Parlons",
            navigation: "Navigation",
            rights: "© 2025 Clivo"
        },
        theme: {
            light: "Clair",
            dark: "Sombre",
            system: "Système"
        },
        home: {
            hero: {
                badge: "Agence de Développement Logiciel",
                typewriter: {
                    phrase1: "Nous créons des produits\nnumériques exceptionnels",
                    phrase2: "Nous transformons les idées\nen réalité",
                    phrase3: "Nous propulsons votre\nsuccès numérique"
                },
                description: "Nous sommes votre partenaire technologique de confiance. Nous transformons les idées en applications web et mobiles qui génèrent des résultats réels pour votre entreprise.",
                cta_primary: "Démarrer mon projet",
                cta_secondary: "Voir notre travail",
                stats: {
                    projects: "Projets",
                    clients: "Clients",
                    experience: "Années d'Exp."
                }
            },
            services: {
                title: "Nos Services",
                subtitle: "Solutions numériques à fort impact",
                description: "Nous combinons design stratégique et technologie de pointe pour créer des produits qui évoluent.",
                button: "Voir plus de détails",
                cards: {
                    web: {
                        title: "Développement Web",
                        desc: "Sites et applications web modernes, rapides et évolutifs."
                    },
                    mobile: {
                        title: "Applications Mobiles",
                        desc: "Applications natives et multiplateformes pour iOS et Android."
                    },
                    uiux: {
                        title: "Design UX/UI",
                        desc: "Interfaces intuitives et expériences utilisateur mémorables."
                    },
                    cloud: {
                        title: "Cloud & DevOps",
                        desc: "Infrastructure robuste et déploiement continu dans le cloud."
                    },
                    ai: {
                        title: "IA & Automatisation",
                        desc: "Nous optimisons votre entreprise en intégrant des solutions d'IA et de machine learning pour automatiser les tâches et optimiser la prise de décisions."
                    },
                    maintenance: {
                        title: "Maintenance",
                        desc: "Nous offrons un support technique continu et des mises à jour périodiques."
                    },
                    management: {
                        title: "Systèmes de Gestion",
                        desc: "Nous développons des systèmes de gestion adaptés à vos besoins."
                    }
                }
            },
            process: {
                title: "Notre Processus",
                heading: {
                    line1: "De l'idée à la",
                    line2: "Réalité"
                },
                description: "Nous suivons une méthodologie agile et transparente. Pas de boîtes noires, pas de surprises. Seulement des résultats cohérents.",
                button: "En savoir plus",
                steps: {
                    discovery: {
                        title: "Découverte",
                        desc: "Immersion totale dans votre entreprise. Nous définissons les KPI, les personas utilisateurs et la feuille de route technique."
                    },
                    design: {
                        title: "Design & Prototypage",
                        desc: "Nous visualisons la solution. Wireframes, kits UI et prototypes interactifs haute fidélité."
                    },
                    development: {
                        title: "Développement Agile",
                        desc: "Sprints de 2 semaines. Code propre, tests continus et démos fréquentes."
                    },
                    launch: {
                        title: "Lancement & Échelle",
                        desc: "Déploiement automatisé, surveillance 24/7 et optimisation continue post-lancement."
                    }
                }
            },
            clients: {
                title: "Entreprises qui nous font confiance"
            },
            testimonials: {
                label: "Témoignages",
                title: "Ce que disent nos clients",
                reviews: [
                    {
                        name: "Carlos Rodríguez",
                        role: "PDG, TechStart",
                        text: "Clivo a complètement transformé notre présence numérique. Leur souci du détail et leur qualité technique sont inégalés."
                    },
                    {
                        name: "Ana Martínez",
                        role: "Directrice Marketing, InnovaCorp",
                        text: "L'équipe a parfaitement compris notre vision et l'a portée au niveau supérieur. Hautement recommandé."
                    },
                    {
                        name: "Miguel Ángel",
                        role: "Fondateur, E-Shop",
                        text: "Le meilleur investissement pour notre entreprise. Le ROI a été incroyable depuis le lancement."
                    },
                    {
                        name: "Laura Sánchez",
                        role: "CTO, DataFlow",
                        text: "Professionnalisme, rapidité et code de haute qualité. Un plaisir de travailler avec eux."
                    },
                    {
                        name: "David Wilson",
                        role: "Chef de Produit, GlobalTech",
                        text: "Ils ont dépassé toutes nos attentes. La communication a été excellente tout au long du processus."
                    }
                ]
            },
            cta: {
                title: "Prêt à transformer votre entreprise ?",
                description: "Planifiez un appel gratuit de 30 minutes et découvrez comment nous pouvons vous aider à évoluer.",
                button: "Parlons maintenant",
                stats: {
                    response: "Réponse",
                    free: "Gratuit",
                    focus: "Focus"
                }
            }
        },
        footer: {
            description: "Nous transformons les idées en produits numériques exceptionnels. Votre partenaire technologique de confiance.",
            services: {
                title: "Services",
                items: {
                    web: "Développement Web",
                    mobile: "Applications Mobiles",
                    uiux: "Design UX/UI",
                    cloud: "Cloud & DevOps",
                    ai: "IA & Automatisation"
                }
            },
            company: {
                title: "Entreprise",
                items: {
                    portfolio: "Portfolio",
                    about: "À propos",
                    contact: "Contact"
                }
            },
            contact: {
                title: "Contact",
                location: "Saint-Domingue, République Dominicaine"
            },
            rights: "© 2025 Clivo. Tous droits réservés.",
            legal: {
                privacy: "Politique de Confidentialité",
                terms: "Conditions d'Utilisation",
                cookies: "Cookies"
            }
        }
    }
};
