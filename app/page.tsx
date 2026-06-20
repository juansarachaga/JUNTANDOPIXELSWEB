import Image from "next/image";
import {
  ArrowRight,
  Brush,
  Camera,
  Code2,
  Cpu,
  ExternalLink,
  Handshake,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Palette,
  Plane,
  Rocket,
  SearchCheck,
  ServerCog,
  ShoppingCart,
  Sparkles,
  Wrench
} from "lucide-react";
import logo from "../logoJuntandoPixels.png";
import profilePhoto from "../perfil.png";

const email = "juntandopixels@gmail.com";
const contactHref = `mailto:${email}`;
const projectFormHref = "/consulta";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Acerca de mí", href: "#acerca" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" }
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Sitios web institucionales",
    text: "Desarrollamos sitios claros, rápidos y profesionales para empresas, marcas y profesionales que necesitan presencia digital sólida."
  },
  {
    icon: ShoppingCart,
    title: "Tiendas online / eCommerce",
    text: "Armamos tiendas con estructura de productos, carrito, checkout y configuración general para vender online de forma simple y ordenada."
  },
  {
    icon: Cpu,
    title: "Sistemas y soluciones a medida",
    text: "Construimos herramientas digitales pensadas para resolver procesos concretos, automatizar tareas o mejorar la gestión interna."
  },
  {
    icon: SearchCheck,
    title: "Optimización técnica",
    text: "Revisamos sitios existentes, corregimos problemas y mejoramos performance, SEO técnico, hosting, SSL, dominios y redirecciones."
  },
  {
    icon: Palette,
    title: "Diseño e identidad digital",
    text: "Diseñamos interfaces, piezas visuales y estructuras de marca para que cada proyecto tenga una identidad clara."
  },
  {
    icon: Camera,
    title: "Contenido audiovisual y drones",
    text: "Sumamos fotografía, video y tomas aéreas para marcas que necesitan mostrar productos, espacios, obras o servicios con mayor impacto."
  }
];

const featuredProjects = [
  {
    name: "Domingo González & Cía",
    type: "Sitio web institucional",
    tech: "Next.js",
    text: "Desarrollo integral de un sitio institucional moderno para presentar la empresa, sus servicios y canales de contacto con una experiencia clara, rápida y responsive.",
    href: "https://www.domgonsa.com.ar/",
    preview: "/project-previews/domingo-gonzalez.jpg"
  },
  {
    name: "SUA Catering",
    type: "Sitio web + eCommerce",
    tech: "WordPress + WooCommerce",
    text: "Implementación completa del sitio y configuración de tienda online, estructura de productos y ajustes generales para acompañar la venta digital.",
    href: "https://suacatering.com.ar/",
    preview: "/project-previews/sua-catering.jpg"
  },
  {
    name: "Flores Adry",
    type: "Tienda online",
    tech: "WordPress + WooCommerce",
    text: "Trabajo técnico sobre tienda online, incluyendo mejoras en experiencia de compra, configuración de carrito, checkout, cuenta de usuario y performance.",
    href: "https://floresadry.com",
    preview: "/project-previews/flores-adry.jpg"
  }
];

const secondaryProjects = [
  {
    name: "Grupo Nisen",
    type: "Proyecto web / presencia digital",
    text: "Coordinación y seguimiento de proyecto web con foco en requerimientos, entregables y comunicación con cliente/equipo.",
    href: "https://gruponisen.com.ar",
    preview: "/project-previews/grupo-nisen.jpg"
  },
  {
    name: "Frigorífico Federal S.A.",
    type: "Proyecto web empresarial",
    text: "Desarrollo de presencia digital empresarial con estructura profesional, consistencia visual y optimización general.",
    href: "https://frigorificofederal.com",
    preview: "/project-previews/frigorifico-federal.jpg"
  },
  {
    name: "Soy Paula Martínez",
    type: "Marca personal / sitio profesional",
    text: "Proyecto orientado a presencia digital profesional, comunicación de servicios, ajustes responsive, performance y UX.",
    href: "https://soypaulamartinezok.com",
    preview: "/project-previews/soy-paula-martinez.jpg"
  }
];

const modules = [
  { icon: Code2, label: "Desarrollo" },
  { icon: Brush, label: "Diseño" },
  { icon: Sparkles, label: "Contenido" },
  { icon: Camera, label: "Fotografía" },
  { icon: Plane, label: "Drones" },
  { icon: SearchCheck, label: "SEO técnico" },
  { icon: ServerCog, label: "Hosting y dominios" },
  { icon: Wrench, label: "Mantenimiento" }
];

const process = [
  {
    title: "Entendemos el problema",
    text: "Antes de diseñar o programar, ordenamos la idea, el objetivo y el tipo de usuario al que apunta el proyecto."
  },
  {
    title: "Definimos la solución",
    text: "Elegimos la tecnología y la estructura adecuada: Next.js, WordPress, WooCommerce o una solución a medida."
  },
  {
    title: "Diseñamos y desarrollamos",
    text: "Construimos una experiencia clara, responsive y fácil de administrar cuando el proyecto lo requiere."
  },
  {
    title: "Publicamos y ajustamos",
    text: "Configuramos dominio, hosting, SSL, performance, SEO técnico y dejamos el producto listo para usarse."
  },
  {
    title: "Acompañamos",
    text: "Podemos seguir corrigiendo, mejorando y sumando nuevas funcionalidades después del lanzamiento."
  }
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "WordPress",
  "WooCommerce",
  "Node.js",
  "HTML5",
  "CSS3",
  "SEO",
  "Analytics",
  "Hosting",
  "SSL",
  "Performance"
];

export default function Home() {
  return (
    <main>
      <JsonLd />
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <ProductModules />
      <WorkProcess />
      <Technologies />
      <FinalCta />
      <Footer />
    </main>
  );
}

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Juntando Pixels",
    alternateName: [
      "JuntandoPixels",
      "juntando pixels",
      "juntando pixeles"
    ],
    url: "https://juntandopixels.vercel.app/",
    email,
    description:
      "Consultora digital de La Plata orientada a desarrollo web, eCommerce, software, diseño, contenido audiovisual, fotografía, drones y soluciones digitales.",
    areaServed: [
      "La Plata",
      "Buenos Aires",
      "Argentina"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Plata",
      addressRegion: "Buenos Aires",
      addressCountry: "AR"
    },
    founder: {
      "@type": "Person",
      name: "Juan Pablo Saráchaga"
    },
    serviceType: [
      "Desarrollo web",
      "Programacion web",
      "Tiendas online",
      "eCommerce",
      "Software a medida",
      "SEO tecnico"
    ],
    knowsAbout: [
      "Juntando Pixels",
      "JuntandoPixels",
      "juntando pixels",
      "juntando pixeles",
      "desarrollo web",
      "desarrollo web La Plata",
      "desarrollo web la plata buenos aires",
      "programacion La Plata Buenos Aires",
      "programacion la plata buenos aires",
      "eCommerce",
      "software a medida",
      "WordPress",
      "WooCommerce",
      "Next.js",
      "SEO técnico",
      "contenido audiovisual"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#inicio" aria-label="Juntando Pixels">
        <Image src={logo} alt="" width={150} height={75} className="brandLogo" />
      </a>

      <nav className="desktopNav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="headerCta" href={projectFormHref}>
        Hablemos de tu proyecto
        <ArrowRight size={16} aria-hidden="true" />
      </a>

      <details className="mobileMenu">
        <summary aria-label="Abrir navegación">
          <Menu size={24} aria-hidden="true" />
        </summary>
        <div className="mobileMenuPanel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={projectFormHref}>Hablemos de tu proyecto</a>
        </div>
      </details>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="pixelGrid" aria-hidden="true">
        {Array.from({ length: 42 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="container heroGrid">
        <div className="heroCopy">
          <p className="eyebrow">La Plata · desarrollo, eCommerce y contenido</p>
          <h1>Sitios, tiendas y soluciones digitales reales</h1>
          <p className="heroLead">
            En Juntando Pixels desarrollamos productos digitales para empresas,
            comercios y profesionales: webs institucionales, eCommerce,
            optimizaciones técnicas, contenido visual y soluciones a medida.
          </p>
          <div className="heroActions">
            <a className="button primary" href={projectFormHref}>
              Quiero empezar un proyecto
              <Rocket size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#proyectos">
              Ver trabajos realizados
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="heroVisual" aria-label="Identidad visual de Juntando Pixels">
          <Image
            src={logo}
            alt="Juntando Pixels"
            priority
            sizes="(max-width: 900px) 86vw, 520px"
            className="heroLogo"
          />
          <div className="orbitCard cardOne">
            <Code2 size={18} aria-hidden="true" />
            Webs
          </div>
          <div className="orbitCard cardTwo">
            <ShoppingCart size={18} aria-hidden="true" />
            eCommerce
          </div>
          <div className="orbitCard cardThree">
            <ServerCog size={18} aria-hidden="true" />
            Soporte técnico
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionKicker">Qué hacemos</p>
          <h2>Productos digitales concretos, pensados para necesidades reales.</h2>
          <p>
            No vendemos una única receta. Elegimos la pieza correcta según el
            problema: presencia digital, tienda, sistema, optimización o contenido.
          </p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.title}>
                <div className="iconBox">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section aboutSection" id="acerca">
      <div className="container aboutGrid">
        <div className="aboutPhotoWrap">
          <Image
            src={profilePhoto}
            alt="Juan Pablo Saráchaga"
            width={760}
            height={760}
            sizes="(max-width: 720px) calc(100vw - 56px), 420px"
            className="aboutPhoto"
          />
          <div className="aboutBadge">
            <Code2 size={18} aria-hidden="true" />
            Desarrollo web
          </div>
        </div>

        <div className="aboutCopy">
          <p className="sectionKicker">Acerca de mí</p>
          <h2>Soy Juan Pablo Saráchaga, el desarrollador detrás de Juntando Pixels.</h2>
          <p className="sectionText">
            Trabajo en proyectos web, eCommerce y soluciones digitales combinando
            mirada técnica, criterio visual y acompañamiento cercano. Me involucro
            desde la idea inicial hasta la publicación, para que cada sitio o sistema
            quede claro, usable y preparado para crecer.
          </p>
          <div className="aboutHighlights" aria-label="Formas de trabajo">
            <span>
              <Rocket size={17} aria-hidden="true" />
              Desarrollo a medida
            </span>
            <span>
              <Handshake size={17} aria-hidden="true" />
              Trabajo con agencias
            </span>
            <span>
              <Wrench size={17} aria-hidden="true" />
              Soporte y mejoras
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projectsSection" id="proyectos">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionKicker">Productos digitales que ya construimos</p>
          <h2>Experiencia aplicada en sitios, tiendas y soporte técnico web.</h2>
          <p>
            Algunos desarrollos fueron realizados por Juntando Pixels de forma directa
            y otros en colaboración con agencias o equipos que nos convocaron como
            desarrollo técnico. En todos los casos, el foco estuvo en construir
            soluciones claras, estables y listas para salir a producción.
          </p>
        </div>

        <div className="featuredProjectGrid">
          {featuredProjects.map((project) => (
            <article className="caseCard" key={project.name}>
              <div className="casePreview">
                <Image
                  src={project.preview}
                  alt={`Vista previa del home de ${project.name}`}
                  width={960}
                  height={600}
                  sizes="(max-width: 720px) calc(100vw - 56px), (max-width: 1050px) 44vw, 350px"
                />
              </div>
              <div>
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
              </div>
              <div className="caseFooter">
                <strong>{project.tech}</strong>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver ${project.name}`}
                >
                  Ver proyecto
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="secondaryProjects">
          <div>
            <p className="sectionKicker">También trabajamos en</p>
            <h3>Más experiencia web y digital.</h3>
          </div>
          <div className="secondaryProjectGrid">
            {secondaryProjects.map((project) => (
              <article className="miniCaseCard" key={project.name}>
                <div className="miniCasePreview">
                  <Image
                    src={project.preview}
                    alt={`Vista previa del home de ${project.name}`}
                    width={960}
                    height={600}
                    sizes="(max-width: 720px) calc(100vw - 56px), (max-width: 1050px) 44vw, 350px"
                  />
                </div>
                <span>{project.type}</span>
                <h4>{project.name}</h4>
                <p>{project.text}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver ${project.name}`}
                >
                  Visitar
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductModules() {
  return (
    <section className="section modulesSection">
      <div className="container modulesGrid">
        <div>
          <p className="sectionKicker">No solo hacemos webs</p>
          <h2>Sumamos las piezas necesarias según cada proyecto.</h2>
          <p className="sectionText">
            Un sitio web no vive solo. Muchas veces necesita fotos, videos,
            textos, identidad, estrategia, formularios, hosting, dominios,
            integraciones y mantenimiento. Por eso Juntando Pixels trabaja como
            un equipo modular.
          </p>
        </div>
        <div className="moduleList">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div className="moduleItem" key={module.label}>
                <Icon size={18} aria-hidden="true" />
                <span>{module.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkProcess() {
  return (
    <section className="section processSection" id="proceso">
      <div className="container processGrid">
        <div>
          <p className="sectionKicker">Cómo trabajamos</p>
          <h2>Un proceso simple para avanzar con claridad.</h2>
          <p className="sectionText">
            Cada entrega tiene que poder explicarse, mantenerse y usarse. Por eso
            bajamos la idea a decisiones concretas antes de diseñar o programar.
          </p>
        </div>
        <div className="processList">
          {process.map((step, index) => (
            <article className="processItem" key={step.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section className="section techSection">
      <div className="container">
        <div className="sectionHeader compactHeader">
          <p className="sectionKicker">Tecnologías</p>
          <h2>Herramientas que usamos según el producto.</h2>
        </div>
        <div className="techList" aria-label="Tecnologías y áreas de trabajo">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="finalCta" id="contacto">
      <div className="container finalCtaGrid">
        <div>
          <p className="sectionKicker">Contacto</p>
          <h2>¿Tenés una web, tienda o sistema en mente?</h2>
          <p>
            Podemos ayudarte a convertirlo en un producto digital concreto:
            diseñado, desarrollado, publicado y listo para crecer.
          </p>
        </div>
        <div className="finalCtaActions">
          <a className="button primary" href={projectFormHref}>
            Completar formulario
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondaryDark" href={contactHref}>
            {email}
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Image src={logo} alt="Juntando Pixels" width={142} height={71} className="footerLogo" />
          <p>Desarrollo web, eCommerce, software y contenido digital desde La Plata.</p>
        </div>
        <div>
          <h3>Links</h3>
          {navItems.slice(1).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Contacto</h3>
          <span>
            <MapPin size={16} aria-hidden="true" />
            La Plata, Argentina
          </span>
          <a href={contactHref}>
            <Mail size={16} aria-hidden="true" />
            {email}
          </a>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© {year} Juntando Pixels.</span>
        <span>Impulsado por Juan Pablo Saráchaga.</span>
      </div>
    </footer>
  );
}
