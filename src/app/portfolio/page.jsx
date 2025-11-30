"use client";
import { useState } from "react";
import { ExternalLink, X, Rocket, Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLanguage } from '../../context/LanguageContext';

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: t('portfolioPage.categories.all') },
    { id: "Desarrollo Web", label: t('portfolioPage.categories.web') },
    { id: "Apps Móviles", label: t('portfolioPage.categories.mobile') },
    { id: "Diseño UX/UI", label: t('portfolioPage.categories.uiux') },
    { id: "Cloud & DevOps", label: t('portfolioPage.categories.cloud') },
    { id: "IA & Automatización", label: t('portfolioPage.categories.ai') },
    { id: "Sistemas de Gestión", label: t('portfolioPage.categories.systems') }
  ];

  // Helper function to get translated category name
  const getCategoryTranslation = (category) => {
    const categoryMap = {
      "Desarrollo Web": t('portfolioPage.categories.web'),
      "Apps Móviles": t('portfolioPage.categories.mobile'),
      "Diseño UX/UI": t('portfolioPage.categories.uiux'),
      "Cloud & DevOps": t('portfolioPage.categories.cloud'),
      "IA & Automatización": t('portfolioPage.categories.ai'),
      "Sistemas de Gestión": t('portfolioPage.categories.systems')
    };
    return categoryMap[category] || category;
  };

  const projects = [
    {
      id: 1,
      title: t('portfolioPage.projects.agrogestor.title'),
      subtitle: t('portfolioPage.projects.agrogestor.subtitle'),
      description: t('portfolioPage.projects.agrogestor.description'),
      shortDescription: t('portfolioPage.projects.agrogestor.shortDescription'),
      image: "/images/empresas/AgroGestor.jpg",
      link: "https://agrogestor.vercel.app",
      tags: ["Next.js", "IoT", "Dashboard", "Analytics", "Real-time"],
      category: "Sistemas de Gestión",
      features: [
        t('portfolioPage.projects.agrogestor.features.f1'),
        t('portfolioPage.projects.agrogestor.features.f2'),
        t('portfolioPage.projects.agrogestor.features.f3'),
        t('portfolioPage.projects.agrogestor.features.f4'),
        t('portfolioPage.projects.agrogestor.features.f5')
      ],
      isActive: true,
    },
    {
      id: 2,
      title: t('portfolioPage.projects.dashbite.title'),
      subtitle: t('portfolioPage.projects.dashbite.subtitle'),
      description: t('portfolioPage.projects.dashbite.description'),
      shortDescription: t('portfolioPage.projects.dashbite.shortDescription'),
      image: "/images/empresas/dashbitehome.png",
      link: "#",
      tags: ["React", "Node.js", "Fullstack", "Real-time", "Multi-role"],
      category: "Desarrollo Web",
      features: [
        t('portfolioPage.projects.dashbite.features.f1'),
        t('portfolioPage.projects.dashbite.features.f2'),
        t('portfolioPage.projects.dashbite.features.f3'),
        t('portfolioPage.projects.dashbite.features.f4'),
        t('portfolioPage.projects.dashbite.features.f5')
      ],
      isActive: true,
    },
    {
      id: 3,
      title: t('portfolioPage.projects.fintech.title'),
      subtitle: t('portfolioPage.projects.fintech.subtitle'),
      description: t('portfolioPage.projects.fintech.description'),
      icon: Rocket,
      tags: ["Fintech", "Mobile App", "Blockchain", "Security"],
      category: "Apps Móviles",
      isActive: false,
    },
    {
      id: 4,
      title: t('portfolioPage.projects.ai_concept.title'),
      subtitle: t('portfolioPage.projects.ai_concept.subtitle'),
      description: t('portfolioPage.projects.ai_concept.description'),
      icon: Sparkles,
      tags: ["AI", "LLM", "Automation", "NLP"],
      category: "IA & Automatización",
      isActive: false,
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="portfolio-page min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t('portfolioPage.hero.badge')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('portfolioPage.hero.title.line1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              {t('portfolioPage.hero.title.highlight')}
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            {t('portfolioPage.hero.description')}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="portfolio-categories relative z-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border ${activeCategory === category.id
                ? "bg-orange-600 text-white border-orange-500"
                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id}>
                {project.isActive ? (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group w-full text-left h-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 w-full overflow-hidden bg-zinc-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="project-category-badge px-3 py-1.5 bg-black/70 backdrop-blur-md text-xs font-medium text-white rounded-lg border border-white/20">
                          {getCategoryTranslation(project.category)}
                        </span>
                      </div>

                      {/* Icon Button */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-orange-500/70 text-sm font-medium">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>

                      {/* Results Badge */}
                      {project.results && (
                        <div className="mb-4 px-3 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                          <p className="text-orange-400 text-xs font-medium">
                            ✓ {t('portfolioPage.ui.solutionImplemented')}
                          </p>
                        </div>
                      )}

                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-md border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs px-3 py-1 text-gray-300">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ) : (
                  <div className="h-full bg-zinc-900/30 border border-white/5 rounded-xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-white/10 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 relative z-10">
                      {project.icon && (
                        <project.icon className="w-8 h-8 text-gray-300" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                      {project.title}
                    </h3>
                    <p className="text-orange-500/70 text-sm font-medium mb-4 relative z-10">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm mb-6 relative z-10">
                      {project.description}
                    </p>

                    <div className="relative z-10">
                      <span className="project-category-badge text-xs px-3 py-1.5 bg-white/5 text-gray-300 rounded-md border border-white/10">
                        {getCategoryTranslation(project.category)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-300 text-lg">
                {t('portfolioPage.ui.noProjects')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('portfolioPage.ui.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t('portfolioPage.ui.cta.description')}
          </p>

          <a
            href="/contact"
            className="portfolio-cta-btn inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            {t('portfolioPage.ui.cta.button')}
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="project-modal relative bg-zinc-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="close-modal-btn absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition-all duration-300 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[85vh]">
              {/* Hero Image */}
              <div className="relative h-64 w-full bg-zinc-800">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent"></div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1.5 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-lg border border-orange-500/30 uppercase tracking-wider backdrop-blur-sm mb-3">
                    {getCategoryTranslation(selectedProject.category)}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-base">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      {t('portfolioPage.ui.features')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Section */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      {t('portfolioPage.ui.technologies')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-end">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-btn flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                    >
                      {t('portfolioPage.ui.viewProject')}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
