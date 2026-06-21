import Image from "next/image";
import {
  ArrowRight,
  Brush,
  Camera,
  Code2,
  Cpu,
  ExternalLink,
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

const email = "juntandopixels@gmail.com";
const contactHref = `mailto:${email}`;
const projectFormHref = "/consulta";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Equipo", href: "#acerca" },
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
    url: "https://juntandopixels.com/",
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
        <Image
          src="/juntando-pixels-logo-clean.png"
          alt=""
          width={172}
          height={100}
          className="brandLogo"
        />
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
          <p className="eyebrow">La Plata · web, marca y contenido</p>
          <h1>Presencia digital clara para marcas que quieren crecer</h1>
          <p className="heroLead">
            Creamos experiencias online que combinan desarrollo, diseño y
            producción visual para que tu negocio se vea profesional, cargue
            rápido y convierta mejor.
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
            src="/juntando-pixels-logo-clean.png"
            alt="Juntando Pixels"
            priority
            width={1223}
            height={710}
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
          <h2>Elegimos la herramienta correcta para cada objetivo.</h2>
          <p>
            Una marca puede necesitar vender, mostrar trayectoria, ordenar
            consultas o mejorar un sitio existente. Partimos de esa necesidad y
            armamos una solución posible de mantener.
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
        <div className="aboutTeamVisual" aria-label="Equipo de Juntando Pixels">
          <div className="teamPixelBoard" aria-hidden="true">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="teamRole roleDevelopment">
            <Code2 size={20} aria-hidden="true" />
            <span>Desarrollo</span>
          </div>
          <div className="teamRole roleDesign">
            <Palette size={20} aria-hidden="true" />
            <span>Diseño gráfico</span>
          </div>
          <div className="teamRole rolePhoto">
            <Camera size={20} aria-hidden="true" />
            <span>Fotografía</span>
          </div>
          <div className="teamRole roleVideo">
            <Plane size={20} aria-hidden="true" />
            <span>Video y dron</span>
          </div>
        </div>

        <div className="aboutCopy">
          <p className="sectionKicker">Equipo</p>
          <h2>Un equipo heterogéneo para mirar cada proyecto desde varios frentes.</h2>
          <p className="sectionText">
            En Juntando Pixels reunimos desarrolladores especializados,
            diseñadores gráficos, fotógrafos y equipo de video para abordar cada
            proyecto de forma integral. Lo técnico, lo visual y lo narrativo se
            trabajan juntos desde el inicio, no como capas separadas al final.
          </p>
          <p className="sectionText">
            Trabajamos con fotografía institucional, fotografía de marca,
            contenido para social media, video y tomas con dron. Sumamos las
            piezas necesarias según el objetivo: lanzamiento, comunicación de
            servicios, catálogo comercial o campaña puntual.
          </p>
          <div className="aboutHighlights" aria-label="Especialidades del equipo">
            <span>
              <Code2 size={17} aria-hidden="true" />
              Desarrollo especializado
            </span>
            <span>
              <Brush size={17} aria-hidden="true" />
              Diseño gráfico
            </span>
            <span>
              <Camera size={17} aria-hidden="true" />
              Fotografía de marca
            </span>
            <span>
              <Plane size={17} aria-hidden="true" />
              Video, social media y dron
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
          <p className="sectionKicker">Trabajos realizados</p>
          <h2>Casos donde combinamos criterio técnico y salida a producción.</h2>
          <p>
            Algunos desarrollos fueron realizados por Juntando Pixels de forma directa
            y otros en colaboración con agencias o equipos que nos convocaron como
            desarrollo técnico. El foco estuvo en resolver requerimientos concretos,
            cuidar la experiencia y publicar sin perder orden.
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
            <h3>Más proyectos y colaboraciones.</h3>
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
          <p className="sectionKicker">Capacidades</p>
          <h2>Un mapa rápido de lo que podemos sumar.</h2>
          <p className="sectionText">
            Podés convocarnos para una entrega puntual o para acompañar todo el
            proceso. Estas son las áreas que solemos combinar cuando el proyecto
            lo pide.
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
          <h2>Contanos qué necesitás y armamos el próximo paso.</h2>
          <p>
            Revisamos la idea, el estado actual y el objetivo para proponerte un
            camino claro antes de empezar a producir.
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
          <Image
            src="/juntando-pixels-logo-clean.png"
            alt="Juntando Pixels"
            width={172}
            height={100}
            className="footerLogo"
          />
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
