"use client";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { Mail, User, Building2, Phone, DollarSign, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from '../../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setStatus({ type: "error", message: t('contactPage.form.status.error.required') });
      return;
    }

    setStatus({ type: "loading", message: t('contactPage.form.status.loading') });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: t('contactPage.form.status.success'),
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: t('contactPage.form.status.error.send'),
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: t('contactPage.form.status.error.server'),
      });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-6 pt-32 pb-16 relative overflow-hidden"
      >
        {/* Realistic Smoke Effect */}


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-8 relative z-10"
        >
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-3 block">{t('contactPage.hero.badge')}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t('contactPage.hero.title.line1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">{t('contactPage.hero.title.highlight')}</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4">
            {t('contactPage.hero.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl relative z-10"
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Grid de 2 columnas */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Nombre */}
              <div className="group">
                <label htmlFor="name" className="block text-left text-gray-300 mb-2 font-medium flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-orange-500" />
                  {t('contactPage.form.name.label')} <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contactPage.form.name.placeholder')}
                  required
                  className="w-full px-4 py-3 bg-black/40 text-white text-base rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-600 hover:border-white/20"
                />
              </div>

              {/* Empresa */}
              <div className="group">
                <label htmlFor="company" className="block text-left text-gray-300 mb-2 font-medium flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-orange-500" />
                  {t('contactPage.form.company.label')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contactPage.form.company.placeholder')}
                  className="w-full px-4 py-3 bg-black/40 text-white text-base rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-600 hover:border-white/20"
                />
              </div>
            </div>

            {/* Correo y Teléfono */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="group">
                <label htmlFor="email" className="block text-left text-gray-300 mb-2 font-medium flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-orange-500" />
                  {t('contactPage.form.email.label')} <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contactPage.form.email.placeholder')}
                  required
                  className="w-full px-4 py-3 bg-black/40 text-white text-base rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-600 hover:border-white/20"
                />
              </div>
              <div className="group">
                <label htmlFor="phone" className="block text-left text-gray-300 mb-2 font-medium flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-orange-500" />
                  {t('contactPage.form.phone.label')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contactPage.form.phone.placeholder')}
                  className="w-full px-4 py-3 bg-black/40 text-white text-base rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-600 hover:border-white/20"
                />
              </div>
            </div>

            {/* Servicio y Presupuesto */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="group">
                <label htmlFor="service" className="block text-left text-gray-300 mb-2 font-medium flex items-center gap-2 text-sm">
                  <MessageSquare className="w-4 h-4 text-orange-500" />
                  {t('contactPage.form.service.label')} <span className="text-orange-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 text-white text-base rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all hover:border-white/20 cursor-pointer"
                >
                  <option value="" className="bg-gray-900">{t('contactPage.form.service.placeholder')}</option>
                  <option value="desarrollo-web" className="bg-gray-900">{t('contactPage.form.service.options.web')}</option>
                  <option value="apps-moviles" className="bg-gray-900">{t('contactPage.form.service.options.mobile')}</option>
                  <option value="diseno-ux-ui" className="bg-gray-900">{t('contactPage.form.service.options.uiux')}</option>
                  <option value="cloud-devops" className="bg-gray-900">{t('contactPage.form.service.options.cloud')}</option>
                  <option value="ia-automatizacion" className="bg-gray-900">{t('contactPage.form.service.options.ai')}</option>
                  <option value="mantenimiento" className="bg-gray-900">{t('contactPage.form.service.options.maintenance')}</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="budget" className="block text-left text-gray-300 mb-2 font-medium flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-orange-500" />
                  {t('contactPage.form.budget.label')}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/40 text-white text-base rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all hover:border-white/20 cursor-pointer"
                >
                  <option value="" className="bg-gray-900">{t('contactPage.form.budget.placeholder')}</option>
                  <option value="100-500" className="bg-gray-900">{t('contactPage.form.budget.options.range1')}</option>
                  <option value="500-1000" className="bg-gray-900">{t('contactPage.form.budget.options.range2')}</option>
                  <option value="1000-3000" className="bg-gray-900">{t('contactPage.form.budget.options.range3')}</option>
                  <option value="3000+" className="bg-gray-900">{t('contactPage.form.budget.options.range4')}</option>
                </select>
              </div>
            </div>

            {/* Mensaje */}
            <div className="group">
              <label htmlFor="message" className="block text-left text-gray-300 mb-2 font-medium flex items-center gap-2 text-sm">
                <MessageSquare className="w-4 h-4 text-orange-500" />
                {t('contactPage.form.message.label')} <span className="text-orange-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contactPage.form.message.placeholder')}
                rows="4"
                required
                className="w-full px-4 py-3 bg-black/40 text-white text-base rounded-xl border border-white/10 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none placeholder:text-gray-600 hover:border-white/20"
              />
            </div>

            {/* Estado */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-3 p-4 rounded-xl ${status.type === "success"
                  ? "bg-green-500/10 border border-green-500/20"
                  : status.type === "loading"
                    ? "bg-orange-500/10 border border-orange-500/20"
                    : "bg-red-500/10 border border-red-500/20"
                  }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : status.type === "error" ? (
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 border-2 border-orange-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                )}
                <p
                  className={`font-medium ${status.type === "success"
                    ? "text-green-400"
                    : status.type === "loading"
                      ? "text-orange-400"
                      : "text-red-400"
                    }`}
                >
                  {status.message}
                </p>
              </motion.div>
            )}

            {/* Botón */}
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-[1.02] active:scale-[0.98]"
            >
              {status.type === "loading" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t('contactPage.form.button.loading')}
                </>
              ) : (
                <>
                  {t('contactPage.form.button.default')}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Email directo */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-center text-gray-300 text-sm">
              {t('contactPage.footer.text')}{" "}
              <a href="mailto:hola@clivo.com" className="text-orange-500 hover:text-orange-400 font-medium transition-colors">
                clivo.contacto@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />


    </div>
  );
}
