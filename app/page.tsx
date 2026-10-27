'use client';
import Image from "next/image";
import {useState} from 'react';
import {ArrowUpRight,ArrowRight,Menu,X,Compass,Users,Brain,Instagram,MessageCircle,Plane,CheckCircle2} from 'lucide-react';
const WHATSAPP='5492612388045'; // Reemplazar por tu número con código de país
const INSTAGRAM='https://instagram.com/agusti.cruise'; // Editar si preferís otra cuenta
const wa=(message:string)=>`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
const nav=[['Inicio','#inicio'],['Sobre mí','#sobre-mi'],['Mi filosofía','#filosofia'],['Viajes','#viajes'],['Contacto','#contacto']];
function ButtonLink({href,children,outline=false}:{href:string,children:React.ReactNode,outline?:boolean}){return <a href={href} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noopener noreferrer':undefined} className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition hover:-translate-y-1 ${outline?'border border-white/25 text-white hover:border-neon':'bg-neon text-night hover:bg-cyan-200 glow'}`}>{children}<ArrowUpRight size={17}/></a>}
export default function Home(){const [open,setOpen]=useState(false);return <main className="overflow-hidden"><header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"><a href="#inicio" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Agustín Cruise"
    width={210}
    height={90}
    priority
    className="h-auto w-[155px] object-contain md:w-[190px]"
  />
</a><nav className="hidden gap-8 md:flex">{nav.map(([name,link])=><a className="text-sm text-slate-300 transition hover:text-neon" key={link} href={link}>{name}</a>)}</nav><a href="#contacto" className="hidden rounded-full border border-neon/60 px-5 py-2 text-sm font-semibold text-neon md:block">Conectemos ↗</a><button aria-label="Abrir menú" className="md:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="flex flex-col gap-4 border-t border-white/10 bg-night px-6 py-6 md:hidden">{nav.map(([name,link])=><a onClick={()=>setOpen(false)} key={link} href={link}>{name}</a>)}</nav>}</header>
<section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-28" style={{backgroundImage: `linear-gradient(90deg, rgba(3,12,27,.95) 0%, rgba(3,12,27,.82) 38%, rgba(3,12,27,.42) 72%, rgba(3,12,27,.25) 100%), url('/crucero.png')`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}><div className="absolute inset-0 bg-gradient-to-t from-[#030c1b]/65 via-transparent to-transparent"/><div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-16"><div className="max-w-2xl"><span className="mb-7 inline-block rounded-full border border-neon/30 bg-[#031020]/65 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-neon">Viajes · Networking · Desarrollo personal</span><h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Tu próximo capítulo <span className="text-neon">empieza con una decisión.</span></h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-100">Soy Agustín. Creo en crecer, conectar con personas que te impulsan y descubrir el mundo con una mentalidad diferente. Te invito a conocer mi camino.</p><div className="mt-9 flex flex-wrap gap-4"><ButtonLink href="#sobre-mi">Conocé mi historia</ButtonLink><ButtonLink href="#viajes" outline>Explorá los viajes</ButtonLink></div><p className="mt-10 text-sm text-slate-200">Mentalidad abierta. Experiencias reales. Nuevas conexiones.</p></div></div></section>
<section
  id="sobre-mi"
  className="relative overflow-hidden bg-[#07182b] py-20 lg:py-28"
>
  {/* Iluminación de fondo */}
  <div className="pointer-events-none absolute right-0 top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

  <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

    {/* Información personal */}
    <div className="max-w-xl">
      <span className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
        01 / Conocé mi historia
      </span>

      <h2 className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
        Soy Agustín
        <br />
        <span className="text-cyan-400">Escudero.</span>
      </h2>

      <p className="mt-6 text-xl font-semibold text-white">
        Tecnología. Viajes. Crecimiento.
      </p>

      <div className="mt-7 space-y-5 text-base leading-8 text-slate-300">
        <p>
          Me apasiona el desarrollo personal, la tecnología
          y descubrir nuevas formas de crecer.
        </p>

        <p>
          Mi camino combina los proyectos digitales,
          el networking y las experiencias que nos
          impulsan a salir de nuestra zona de confort.
        </p>

        <p>
          Creo que las decisiones que tomamos y las
          personas con las que conectamos pueden
          transformar nuestra manera de ver el mundo.
        </p>
      </div>

      {/* Valores */}
      <div className="mt-8 flex flex-wrap gap-3">
        {["Mentalidad", "Conexiones", "Experiencias"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-9">
        <ButtonLink href={INSTAGRAM}>
          Conocé más sobre mí
        </ButtonLink>
      </div>
    </div>

    {/* Fotografía */}
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="absolute -inset-5 rounded-[35px] bg-cyan-400/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/25 bg-[#092748] shadow-2xl">
        <Image
          src="/agustin.jpeg"
          alt="Agustín Escudero"
          width={700}
          height={850}
          className="aspect-[4/5] w-full object-cover object-top"
        />

        {/* Degradado inferior */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#031425]/80 to-transparent" />

        <div className="absolute bottom-6 left-6">
          <p className="text-lg font-bold text-white">
            Agustín Escudero
          </p>
          <p className="text-sm text-cyan-400">
            Viajes · Networking · Desarrollo personal
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="filosofia" className="mx-auto max-w-7xl px-6 py-28"><p className="mb-4 text-sm font-bold uppercase tracking-[.25em] text-neon">02 / Mi filosofía</p><h2 className="max-w-2xl text-4xl font-black sm:text-5xl">Tres pilares que guían mi camino.</h2><div className="mt-12 grid gap-5 md:grid-cols-3">{[{icon:Brain,title:'Desarrollo personal',body:'Invertir en tu mentalidad, tus hábitos y tus habilidades para convertirte en tu mejor versión.'},{icon:Users,title:'Networking',body:'Conocer personas, intercambiar ideas y construir conexiones genuinas que sumen valor.'},{icon:Compass,title:'Experiencias',body:'Salir de lo conocido, explorar nuevos lugares y aprender del mundo en primera persona.'}].map(({icon:Icon,title,body},i)=><article key={title} className="rounded-3xl border border-white/10 bg-white/[.035] p-8 transition hover:border-neon/50"><Icon className="mb-10 text-neon" size={36}/><span className="text-sm text-slate-500">0{i+1}</span><h3 className="mb-4 mt-2 text-2xl font-bold">{title}</h3><p className="leading-relaxed text-slate-400">{body}</p></article>)}</div></section>
<section id="viajes" className="relative overflow-hidden bg-[#0c2740] py-28"><div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-neon/10 blur-3xl"/><div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2"><div><p className="mb-4 text-sm font-bold uppercase tracking-[.25em] text-neon">03 / Descubrí inCruises</p><h2 className="text-4xl font-black sm:text-5xl">El mundo es demasiado grande para quedarse quieto.</h2><p className="mt-7 text-lg leading-relaxed text-slate-300">Conocí inCruises como una alternativa para explorar experiencias de viaje mediante una membresía. Si te interesa viajar, puedo contarte cómo funciona, cuáles son sus condiciones y qué opciones existen.</p><p className="mt-4 text-sm text-slate-400">La membresía de viajes y la actividad como socio comercial son opciones diferentes. Los costos, beneficios y condiciones deben revisarse antes de tomar una decisión; los ingresos no están garantizados.</p><div className="mt-8 flex flex-wrap gap-4"><ButtonLink href={wa('Hola Agustín, quiero conocer cómo funciona inCruises y sus condiciones.')}>Quiero saber más</ButtonLink><ButtonLink href="https://www.incruises.com" outline>Web oficial</ButtonLink></div></div><div className="grid gap-4"><div className="rounded-3xl border border-white/15 bg-white/5 p-7"><Plane className="mb-5 text-neon" size={34}/><h3 className="text-2xl font-bold">Experiencias de viaje</h3><p className="mt-3 text-slate-300">Conocé las alternativas de membresía, beneficios y restricciones aplicables.</p></div><div className="rounded-3xl border border-white/15 bg-white/5 p-7"><Users className="mb-5 text-neon" size={34}/><h3 className="text-2xl font-bold">Comunidad y conexiones</h3><p className="mt-3 text-slate-300">Compartí experiencias y conocé personas con intereses similares.</p></div></div></div></section>
<section className="mx-auto max-w-7xl px-6 py-24"><div className="rounded-[2rem] border border-neon/20 bg-gradient-to-r from-[#0c2b48] to-[#071626] p-9 md:p-14"><p className="mb-4 text-sm font-bold uppercase tracking-[.25em] text-neon">04 / Conectemos</p><h2 className="max-w-3xl text-4xl font-black sm:text-5xl">Las mejores oportunidades suelen comenzar con una conversación.</h2><p className="mt-6 max-w-2xl text-slate-300">Ya sea para hablar de viajes, proyectos, networking o crecimiento personal, me encantaría conocer tu historia.</p><div className="mt-8"><ButtonLink href={wa('Hola Agustín, vi tu sitio y me gustaría conversar.')}>Hablemos <ArrowRight size={16}/></ButtonLink></div></div></section>
<footer id="contacto" className="border-t border-white/10 bg-[#030b15] px-6 py-14"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row"><div><a href="#inicio" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Agustín Cruise"
    width={210}
    height={90}
    priority
    className="h-auto w-[155px] object-contain md:w-[190px]"
  />
</a><p className="mt-4 max-w-xs text-sm text-slate-400">Viajes, mentalidad y conexiones que abren nuevas perspectivas.</p></div><div className="flex flex-col gap-4"><a className="flex items-center gap-3 hover:text-neon" href={wa('Hola Agustín, vi tu sitio y me gustaría conversar.')} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> WhatsApp <ArrowUpRight size={16}/></a><a className="flex items-center gap-3 hover:text-neon" href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram size={20}/> Instagram <ArrowUpRight size={16}/></a></div></div><div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Agustín Escudero · Sitio personal independiente. No es una página oficial de inCruises.</div></footer></main>}
