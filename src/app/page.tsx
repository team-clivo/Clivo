import { redirect } from "next/navigation";

export const metadata = {
  title: "Clivo - Soluciones Tecnológicas y Desarrollo de Software",
  description: "Agencia de desarrollo de software especializada en web, móvil e inteligencia artificial. Transformamos ideas en soluciones digitales de alto impacto.",
  alternates: {
    canonical: "https://www.clivo.tech",
  },
};

export default function Page() {
  redirect("/home");
}
