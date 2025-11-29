"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center max-w-2xl mx-auto"
            >
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4">
                    404
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Página no encontrada
                </h2>
                <p className="text-gray-300 text-lg mb-10">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                    Parece que te has perdido en el espacio digital.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/home"
                        className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/20"
                    >
                        <Home size={20} />
                        Volver al Inicio
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="px-8 py-3 bg-zinc-900 border border-white/10 text-white font-bold rounded-full hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <ArrowLeft size={20} />
                        Regresar
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
