'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUp, BedDouble, Building2, Check, ChevronRight, Mail, MapPin, Menu, Phone, Quote, Ruler, Star, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

/* ─── Properties Data ─── */

export const properties = [
  { id: 1, title: 'Villa am See', location: 'Starnberg, München', type: 'Villa', price: '2.480.000 €', rooms: 7, area: 285, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85' },
  { id: 2, title: 'Penthouse Maximilian', location: 'Altstadt, Düsseldorf', type: 'Penthouse', price: '1.890.000 €', rooms: 4, area: 172, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85' },
  { id: 3, title: 'Townhouse Elbchaussee', location: 'Blankenese, Hamburg', type: 'Haus', price: '1.240.000 €', rooms: 5, area: 198, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85' },
  { id: 4, title: 'Loft am Paul-Lincke-Ufer', location: 'Kreuzberg, Berlin', type: 'Wohnung', price: '895.000 €', rooms: 3, area: 118, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' },
  { id: 5, title: 'Landhaus mit Weitblick', location: 'Grünwald, München', type: 'Haus', price: '3.200.000 €', rooms: 8, area: 340, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85' },
  { id: 6, title: 'Residenz an der Alster', location: 'Harvestehude, Hamburg', type: 'Wohnung', price: '1.670.000 €', rooms: 4, area: 154, image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85' },
]

/* ─── Testimonials Data ─── */

export const testimonials = [
  {
    quote: 'Die Professionalität und Diskretion von Nordhaus hat uns beeindruckt. Unsere Villa wurde innerhalb weniger Wochen an den idealen Käufer vermittelt.',
    name: 'Dr. Martin Schäfer',
    role: 'Unternehmer, München',
    stars: 5,
  },
  {
    quote: 'Ein Makler, der zuhört und versteht. Die Beratung war erstklassig — vom ersten Gespräch bis zum Notartermin hat alles reibungslos funktioniert.',
    name: 'Elena Richter',
    role: 'Architektin, Hamburg',
    stars: 5,
  },
  {
    quote: 'Wir haben unser Traumhaus über Nordhaus gefunden. Die Auswahl war exquisit und der gesamte Prozess wurde persönlich und mit größter Sorgfalt begleitet.',
    name: 'Familie Brenner',
    role: 'Düsseldorf',
    stars: 5,
  },
]

/* ─── Scroll Reveal Hook ─── */

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .animated-line, .count-up-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Parallax Hook ─── */

function useParallax(ref: React.RefObject<HTMLDivElement | null>, speed: number = 0.3) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleScroll = () => {
      const scrolled = window.scrollY
      el.style.transform = `translateY(${scrolled * speed}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref, speed])
}

/* ─── Shimmer Image Component ─── */

export function ShimmerImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative size-full">
      {!loaded && <div className="img-shimmer absolute inset-0" />}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

/* ─── Header ─── */

export function Header() {
  const [open, setOpen] = useState(false)
  const [linksVisible, setLinksVisible] = useState(false)

  useEffect(() => {
    if (open) {
      // stagger links in
      const t = setTimeout(() => setLinksVisible(true), 50)
      return () => clearTimeout(t)
    } else {
      setLinksVisible(false)
    }
  }, [open])

  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
      <Link href="/" className="group flex items-center gap-3">
        <span className="flex size-9 items-center justify-center border border-foreground text-sm font-semibold transition-colors duration-300 group-hover:border-gold group-hover:text-gold">N</span>
        <span className="font-serif text-lg tracking-[0.12em]">NORDHAUS <span className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground">IMMOBILIEN</span></span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm md:flex">
        <Link className="nav-link transition-colors hover:text-accent-foreground" href="/#finden">Immobilie finden</Link>
        <Link className="nav-link transition-colors hover:text-accent-foreground" href="/verkaufen">Immobilie verkaufen</Link>
        <Link className="nav-link transition-colors hover:text-accent-foreground" href="/#ueber-uns">Über uns</Link>
      </nav>
      <Button variant="outline" className="btn-premium hidden rounded-none border-foreground px-5 md:flex" asChild>
        <a href="tel:+49891234567">Gespräch vereinbaren <Phone data-icon="inline-end" /></a>
      </Button>
      <button aria-label="Menü öffnen" onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X /> : <Menu />}
      </button>
    </div>
    {open && (
      <nav className="mobile-menu-overlay open flex flex-col gap-6 border-t border-border px-6 py-8 text-lg md:hidden">
        {['/#finden|Immobilie finden', '/verkaufen|Immobilie verkaufen', '/#ueber-uns|Über uns'].map((item, i) => {
          const [href, label] = item.split('|')
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`mobile-menu-link font-serif text-2xl ${linksVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {label}
            </Link>
          )
        })}
        <a href="tel:+49891234567" className={`mobile-menu-link mt-4 flex items-center gap-2 text-sm text-gold ${linksVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <Phone className="size-4" /> +49 89 123 45 67
        </a>
      </nav>
    )}
  </header>
}

/* ─── Footer ─── */

export function Footer() {
  return <footer className="footer-gradient border-t border-border text-background">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center border border-background/30 text-sm font-semibold">N</span>
          <span className="font-serif text-lg tracking-[0.12em]">NORDHAUS</span>
        </div>
        <p className="mt-5 max-w-xs text-sm leading-6 text-background/60">Immobilien mit Haltung. Wir begleiten Menschen und Werte seit über 15 Jahren.</p>
      </div>
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-muted">Kontakt</p>
        <p className="text-sm leading-7">Brienner Straße 12<br />80333 München<br />+49 89 123 45 67<br />hallo@nordhaus.immo</p>
      </div>
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-muted">Rechtliches</p>
        <div className="flex flex-col gap-3 text-sm text-background/70"><a href="#" className="transition-colors hover:text-background">Impressum</a><a href="#" className="transition-colors hover:text-background">Datenschutz</a><a href="#" className="transition-colors hover:text-background">AGB</a></div>
      </div>
    </div>
    <div className="mx-auto flex max-w-7xl justify-between border-t border-background/15 px-6 py-5 text-xs text-background/45 lg:px-10">
      <span>© 2026 Nordhaus Immobilien</span>
      <span>Mitglied im IVD</span>
    </div>
  </footer>
}

/* ─── Property Card ─── */

export function PropertyCard({ property, onOpen }: { property: typeof properties[number], onOpen?: () => void }) {
  return <article className="property-card group reveal">
    <button onClick={onOpen} className="block w-full text-left">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <ShimmerImage src={property.image} alt={property.title} className="size-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="glass-badge absolute left-4 top-4 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">{property.type}</span>
        <div className="card-overlay absolute inset-0 flex items-center justify-center bg-foreground/30">
          <span className="border border-background bg-background/90 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em]">Exposé ansehen</span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <h3 className="font-serif text-xl tracking-tight">{property.title}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="size-3.5" />{property.location}</p>
        </div>
        <p className="text-sm font-medium">{property.price}</p>
      </div>
      <div className="mt-3 flex gap-5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><BedDouble className="size-3.5" />{property.rooms} Zimmer</span>
        <span className="flex items-center gap-1"><Ruler className="size-3.5" />{property.area} m²</span>
      </div>
    </button>
  </article>
}

/* ─── Exposé Modal ─── */

export function ExposeModal({ property, close }: { property: typeof properties[number], close: () => void }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/45 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`Exposé ${property.title}`}>
    <div className="max-h-[90vh] w-full max-w-4xl overflow-auto bg-background" style={{ animation: 'stepFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
      <div className="grid md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-square md:aspect-auto">
          <ShimmerImage src={property.image} alt={property.title} className="size-full object-cover" />
          <button onClick={close} aria-label="Exposé schließen" className="absolute right-4 top-4 flex size-9 items-center justify-center bg-background transition-transform hover:scale-110"><X className="size-4" /></button>
        </div>
        <div className="flex flex-col p-7 lg:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Exposé · {property.type}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight">{property.title}</h2>
          <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="size-4" />{property.location}</p>
          <p className="mt-8 text-2xl">{property.price}</p>
          <div className="my-8 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm">
            <span>{property.rooms} Zimmer</span>
            <span>{property.area} m² Wohnfläche</span>
            <span>Bezug: sofort</span>
            <span>Energie: A+</span>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">Eine außergewöhnliche Adresse für alle, die Architektur, Licht und urbane Ruhe miteinander verbinden möchten.</p>
          <Button className="btn-premium mt-auto w-full rounded-none py-6" onClick={() => alert('Vielen Dank. Wir melden uns persönlich bei Ihnen.')}>Interesse bekunden <ArrowRight data-icon="inline-end" /></Button>
        </div>
      </div>
    </div>
  </div>
}

/* ─── Contact Modal ─── */

export function ContactModal({ close }: { close: () => void }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/45 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Gespräch vereinbaren">
    <div className="w-full max-w-lg bg-background p-8 lg:p-10" style={{ animation: 'stepFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow-gold text-xs uppercase tracking-[0.2em]">Persönlich für Sie</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Lassen Sie uns sprechen.</h2>
        </div>
        <button onClick={close} aria-label="Schließen" className="transition-transform hover:scale-110"><X className="size-5" /></button>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <input className="border border-input bg-transparent px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="Ihr Name" />
        <input className="border border-input bg-transparent px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="E-Mail-Adresse" type="email" />
        <textarea className="min-h-28 border border-input bg-transparent px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="Worum geht es bei Ihnen?" />
        <Button className="btn-premium rounded-none py-6" onClick={() => { alert('Danke, wir melden uns innerhalb eines Werktages.'); close() }}>Anfrage senden <ArrowRight data-icon="inline-end" /></Button>
      </div>
    </div>
  </div>
}

/* ─── Trust Strip ─── */

export function TrustStrip() {
  return <div className="grid border-y border-border md:grid-cols-4">
    {['15+ Jahre Marktführer', 'Ø 38 Tage Vermarktungszeit', '100% Diskrete Abwicklung', 'IHK-Zertifizierte Sachverständige'].map((item, i) => (
      <div key={item} className={`count-up-item border-border px-5 py-6 text-center text-xs uppercase tracking-[0.12em] md:border-r last:border-r-0`} style={{ transitionDelay: `${i * 150}ms` }}>
        {item}
      </div>
    ))}
  </div>
}

/* ─── Section Eyebrow ─── */

export function SectionEyebrow({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) {
  return <p className={`text-[11px] uppercase tracking-[0.22em] ${gold ? 'eyebrow-gold' : 'text-muted-foreground'}`}>{children}</p>
}

/* ─── Valuation Steps ─── */

export function ValuationSteps({ onComplete }: { onComplete: (value: string) => void }) {
  const [step, setStep] = useState(1)
  const [type, setType] = useState('Einfamilienhaus')
  const [area, setArea] = useState(180)
  const [plz, setPlz] = useState('')

  return <div className="reveal border border-border bg-background p-6 lg:p-8">
    <div className="mb-4 flex items-center justify-between">
      <div>
        <SectionEyebrow gold>Ihre erste Einschätzung</SectionEyebrow>
        <p className="mt-2 font-serif text-2xl tracking-tight">In 3 Schritten zum Marktwert.</p>
      </div>
      <span className="text-sm text-muted-foreground">0{step} / 03</span>
    </div>
    {/* Progress Bar */}
    <div className="mb-8 h-[2px] w-full bg-border">
      <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }} />
    </div>
    {step === 1 && <div className="step-content grid grid-cols-2 gap-3">
      {['Einfamilienhaus', 'Eigentumswohnung', 'Mehrfamilienhaus', 'Grundstück'].map(x => (
        <button key={x} onClick={() => { setType(x); setStep(2) }} className="border border-border p-4 text-left text-sm transition-all hover:border-gold hover:shadow-sm">
          {x}
          <ChevronRight className="mt-3 size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </button>
      ))}
    </div>}
    {step === 2 && <div className="step-content">
      <label htmlFor="area" className="flex justify-between text-sm"><span>Wohnfläche</span><strong>{area} m²</strong></label>
      <input id="area" type="range" min="50" max="450" value={area} onChange={e => setArea(+e.target.value)} className="mt-8 w-full accent-foreground" />
      <div className="mt-2 flex justify-between text-xs text-muted-foreground"><span>50 m²</span><span>450 m²</span></div>
      <Button onClick={() => setStep(3)} className="btn-premium mt-8 w-full rounded-none">Weiter <ArrowRight data-icon="inline-end" /></Button>
    </div>}
    {step === 3 && <div className="step-content">
      <label htmlFor="plz" className="text-sm">Lage oder PLZ</label>
      <input id="plz" value={plz} onChange={e => setPlz(e.target.value)} placeholder="z. B. 80333 München" className="mt-3 w-full border border-input bg-transparent px-4 py-3 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30" />
      <Button onClick={() => onComplete(`type=${encodeURIComponent(type)}&area=${area}&plz=${encodeURIComponent(plz)}`)} className="btn-premium mt-4 w-full rounded-none">Analyse starten <ArrowRight data-icon="inline-end" /></Button>
    </div>}
  </div>
}

/* ─── Testimonials Section ─── */

export function TestimonialsSection() {
  return <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
    <div className="reveal mb-16 text-center">
      <SectionEyebrow gold>Kundenstimmen</SectionEyebrow>
      <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">Was unsere Kunden sagen.</h2>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <div key={t.name} className={`testimonial-card reveal border border-border bg-background p-7 lg:p-8 stagger-${i + 1}`}>
          <div className="mb-5 flex gap-1">
            {Array.from({ length: t.stars }).map((_, j) => (
              <Star key={j} className="size-4 fill-gold text-gold" />
            ))}
          </div>
          <Quote className="mb-4 size-6 text-gold/40" />
          <p className="text-sm leading-7 text-muted-foreground">{t.quote}</p>
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-sm font-medium">{t.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
}

/* ─── Back to Top Button ─── */

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`back-to-top fixed bottom-8 right-8 z-30 flex size-12 items-center justify-center border border-border bg-background/90 shadow-lg backdrop-blur-sm transition-all hover:border-gold hover:shadow-xl ${visible ? 'visible' : ''}`}
      aria-label="Nach oben scrollen"
    >
      <ArrowUp className="size-4" />
    </button>
  )
}

/* ─── Helper Exports ─── */

export const CheckItem = ({ children }: { children: React.ReactNode }) => <li className="flex gap-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-gold" />{children}</li>
export const ContactLine = () => <div className="flex flex-wrap gap-5 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Phone className="size-4" />+49 89 123 45 67</span><span className="flex items-center gap-2"><Mail className="size-4" />hallo@nordhaus.immo</span></div>
export const MenuIcon = Building2
