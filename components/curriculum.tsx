"use client"

import { Download, Mail, Phone, Github, Globe, Linkedin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Curriculum() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white p-8 cv-root">
      <div className="max-w-4xl mx-auto bg-white shadow-none rounded-none overflow-visible">
        {/* Header */}
        <div className="bg-white text-black p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            {/* Bloque Izquierdo con Avatar + Datos */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative mx-auto sm:mx-0 print:h-28 print:w-28">
                <div className="relative h-32 w-32 print:h-28 print:w-28 overflow-hidden print:shadow-none">
                  <figure className="photo">
                    <img
                      src="/fotoperfil.png"
                      alt="Foto de perfil de Mario Gabriel Avendaño"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-mono font-bold mb-2 print:mb-1">Mario Gabriel Avendaño</h1>
                <h2 className="text-xl font-light opacity-90 print:text-base print:opacity-100">Desarrollador Front-end</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm print:mt-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary print:text-black" />
                    <a href="mailto:mariogabriel.dvlp@gmail.com" className="hover:underline">mariogabriel.dvlp@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary print:text-black" />
                    <a href="tel:+543516503188" className="hover:underline">+54 351 650 3188</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Controles (ocultos en impresión) */}
            <div className="flex items-center gap-2 self-start print:hidden">
              <Button asChild variant="outline" size="sm">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Volver
                </Link>
              </Button>
              <Button onClick={handlePrint} variant="secondary" size="sm">
                <Download className="w-4 h-4 mr-2" /> PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Perfil Profesional */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2">Perfil Profesional</h3>
          <p className="leading-relaxed">
            Desarrollador front-end con experiencia en React, Next.js y PostgreSQL. Especializado en crear
            aplicaciones web modernas y escalables con enfoque en la experiencia del usuario y las mejores prácticas
            de desarrollo. Apasionado por las tecnologías emergentes y el desarrollo de soluciones innovadoras.
          </p>
        </section>

        {/* Experiencia Laboral */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2">Experiencia Laboral</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold">Desarrollador de Software | SingularityNET</h4>
            <span className="text-sm opacity-80">mayo de 2025 - actualidad</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Participo en el desarrollo de una aplicación de consenso y gobernanza digital sobre la plataforma SingularityNET, un ecosistema de IA descentralizado.</li>
              <li>Colaboro en la implementación de soluciones con IA para optimizar la toma de decisiones y la gestión de la comunidad.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold">Desarrollador Frontend Freelance</h4>
            <span className="text-sm opacity-80">enero de 2025 - actualidad</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Desarrollo y mantengo proyectos web de forma independiente, gestionando el ciclo de vida completo de las aplicaciones.</li>
              <li>Colaboro con equipos freelance para entregar soluciones de alta calidad, con un enfoque en la experiencia de usuario y la optimización del rendimiento.</li>
              <li>Los proyectos más destacados se pueden ver en mi portafolio.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold">Técnico de Soporte a Usuarios | Flexxus</h4>
            <span className="text-sm opacity-80">agosto de 2020 - noviembre de 2020</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Ofrecí soporte técnico integral a clientes del sistema ERP Flexxus, resolviendo incidencias de forma remota y telefónica.</li>
              <li>Gestioné la configuración e instalación de software, incluyendo puestos de trabajo y impresoras fiscales.</li>
              <li>Realicé el mantenimiento y la migración de bases de datos de clientes para asegurar la integridad y el rendimiento del sistema.</li>
              <li>Coordiné las actualizaciones de software, minimizando el impacto en las operaciones de los clientes.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold">Soporte Técnico a Clientes | Telmex</h4>
            <span className="text-sm opacity-80">enero de 2011 - enero de 2012</span>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Proporcioné asistencia técnica especializada a clientes de servicios de banda ancha, resolviendo problemas de conectividad y configuración.</li>
              <li>Aseguré una alta satisfacción del cliente a través de una comunicación clara y la resolución eficaz de problemas.</li>
            </ul>
          </div>
        </section>

        {/* Educación */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2">Educación</h3>
          <div className="space-y-4">
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold">Técnico Superior en Programación | UTN</h4>
                <span className="text-sm">2015 · (falta solo tesis)</span>
              </div>
              <p className="font-medium">Programación informática, enfoque en desarrollo de software y soluciones técnicas.</p>
            </div>
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold">Plan 111mil de programación</h4>
                <span className="text-sm">2016</span>
              </div>
              <p className="font-medium">Curso de programación del gobierno, 1 año de duración. POO, Java, SQL.</p>
            </div>
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold">Técnico en reparación de PC | Academia Santo Domingo</h4>
                <span className="text-sm">2012 - 2013</span>
              </div>
              <p className="font-medium">Curso de reparación de PC y configuración de redes.</p>
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2">Tecnologías</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
              'Tailwind CSS', 'Prisma', 'Express.js', 'HTML5', 'CSS3'
            ].map((skill, index) => (
              <span
                key={skill}
                className={`px-3 py-1 rounded-full text-sm font-mono ${index < 2
                  ? 'bg-emerald-100 border border-emerald-500/30'
                  : 'bg-gray-200'
                  }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Idiomas (compacto) */}
        <section className="px-8 pb-4 pt-0 print:pt-0">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <h3 className="text-base font-mono font-semibold m-0 border-none p-0">Idiomas:</h3>
            <span>Español (Nativo)</span>
            <span className="opacity-60">|</span>
            <span>Inglés (Básico)</span>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @media print {
          @page { size: A4 portrait; margin: 8mm; }
          html, body, #__next, .cv-root {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: #fff !important;
          }
          
          body, .cv-root { font-size: 10px !important; line-height: 1.15; }
          
          /* Ajuste de contenedores principales */
          .cv-root { padding: 0 !important; }
          .cv-root .p-8 { padding: 10px 15px !important; }
          section.p-8 { padding: 8px 15px !important; }
          
          /* Ajuste de encabezados */
          .cv-root h1 { font-size: 18pt !important; margin-bottom: 2px !important; }
          .cv-root h2 { font-size: 11pt !important; margin-bottom: 4px !important; }
          .cv-root h3 { font-size: 10.5pt !important; margin-bottom: 4px !important; padding-bottom: 2px !important; }
          .cv-root h4 { font-size: 9.5pt !important; margin-bottom: 1px !important; }
          
          /* Ajuste de textos y listas */
          .cv-root p, .cv-root li, .cv-root span, .cv-root a { font-size: 9pt !important; }
          .cv-root ul { margin: 1px 0 4px 0 !important; }
          .cv-root .mb-6 { margin-bottom: 6px !important; }
          .cv-root .mt-4 { margin-top: 4px !important; }
          .cv-root .mt-2 { margin-top: 2px !important; }
          .cv-root .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 6px !important; }
          
          /* Badges más compactas */
          .cv-root span.rounded-full { padding: 1px 5px !important; font-size: 8pt !important; }
          
          /* Ocultar controles no necesarios */
          .print\\:hidden, .cv-root button, .cv-root [role="button"] { display: none !important; }
          
          /* Forzar texto negro */
          h1, h2, h3, h4, h5, h6, p, span, li, td, th, a { color: #000 !important; -webkit-text-fill-color: #000 !important; }
          * { box-shadow: none !important; text-shadow: none !important; }
          
          /* Forzar no salto de página dentro de secciones */
          section, div.mb-6 { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  )
}
