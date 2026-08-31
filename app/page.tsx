'use client'

import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  BackToTop,
  ContactModal,
  Footer,
  Header,
  PropertyCard,
  SectionEyebrow,
  ShimmerImage,
  TestimonialsSection,
  TrustStrip,
  ValuationSteps,
  properties,
  useScrollReveal,
} from '@/components/real-estate-shell'

export default function Page() {
  const [contact, setContact] = useState(false)
  const heroImageRef = useRef<HTMLDivElement>(null)

  useScrollReveal()

  // Parallax effect for hero image
  useEffect(() => {
    const el = heroImageRef.current
    if (!el) return
    const handleScroll = () => {
      const scrolled = window.scrollY
      el.style.transform = `translateY(${scrolled * 0.15}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <>
    <Header />
    <main>
      {/* ─── Hero Section ─── */}
      <section className="noise-bg relative overflow-hidden bg-muted">
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-end gap-10 px-6 pb-16 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24">
          <div className="relative z-10">
            <SectionEyebrow gold>
              <span className="reveal-left" style={{ display: 'inline-block' }}>Nordhaus Immobilien · München</span>
            </SectionEyebrow>
            <h1 className="reveal mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-[-0.02em] md:text-7xl stagger-1">
              Exzellenz in Immobilien.
              <br />
              <span className="text-muted-foreground">
                <span className="reveal inline-block stagger-2">Diskret.</span>{' '}
                <span className="reveal inline-block stagger-3">Präzise.</span>
                <br />
                <span className="reveal inline-block stagger-4">Wertbeständig.</span>
              </span>
            </h1>
            <p className="reveal stagger-4 mt-8 max-w-md text-base leading-7 text-muted-foreground">
              Wir vermitteln außergewöhnliche Immobilien mit einem Gespür für Substanz, Lage und den richtigen Moment.
            </p>
            <div className="reveal stagger-5 mt-10 flex flex-wrap gap-3">
              <Button className="btn-premium rounded-none px-6 py-6" asChild>
                <Link href="#finden">Immobilie finden <ArrowRight data-icon="inline-end" /></Link>
              </Button>
              <Button variant="outline" className="btn-premium rounded-none border-foreground px-6 py-6" onClick={() => setContact(true)}>
                Gespräch vereinbaren
              </Button>
            </div>
          </div>
          <div className="parallax-container relative hidden aspect-[4/5] overflow-hidden lg:block">
            <div ref={heroImageRef} className="size-full">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
                alt="Architektonische Villa am See"
                className="ken-burns size-full object-cover"
              />
            </div>
            <div className="reveal stagger-6 absolute bottom-5 left-5 glass-badge px-4 py-3 text-xs uppercase tracking-[0.15em]">
              Private Residences · Starnberg
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Strip ─── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <TrustStrip />
      </div>

      {/* ─── About Section ─── */}
      <section id="ueber-uns" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
        <div className="reveal-scale relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-muted">
          <ShimmerImage
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85"
            alt="Porträt der Geschäftsführerin"
            className="size-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>
        <div className="flex flex-col justify-center lg:pl-12">
          <SectionEyebrow gold>
            <span className="reveal-left">Über Nordhaus</span>
          </SectionEyebrow>
          <h2 className="reveal stagger-1 mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
            „Eine Immobilie ist niemals nur ein Objekt. Sie ist ein Kapitel im Leben."
          </h2>
          <div className="reveal stagger-2 mt-8 flex items-start gap-4 border-l-2 border-gold pl-5">
            <Quote className="size-5 shrink-0 text-gold" />
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Wir hören zu, denken voraus und bleiben an Ihrer Seite — von der ersten Idee bis zur Schlüsselübergabe.
            </p>
          </div>
          <p className="reveal stagger-3 mt-8 text-sm font-medium">— Anna Nordhaus, Geschäftsführerin</p>
        </div>
      </section>

      {/* ─── Animated Divider ─── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="animated-line h-px bg-border" />
      </div>

      {/* ─── Properties Section ─── */}
      <section id="finden" className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <SectionEyebrow gold>
                <span className="reveal-left">Ausgewählte Residenzen</span>
              </SectionEyebrow>
              <h2 className="reveal stagger-1 mt-4 font-serif text-4xl tracking-[-0.02em] md:text-5xl">Ihr neues Zuhause finden.</h2>
              <p className="reveal stagger-2 mt-4 text-sm text-muted-foreground">Kauf- und Mietobjekte in Premiumlagen.</p>
            </div>
            <Button variant="outline" className="btn-premium reveal stagger-2 w-fit rounded-none border-foreground" asChild>
              <Link href="/kaufen">Alle Objekte ansehen <ArrowRight data-icon="inline-end" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {properties.slice(0, 3).map((p, i) => (
              <div key={p.id} className={`stagger-${i + 1}`}>
                <PropertyCard property={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <TestimonialsSection />

      {/* ─── Animated Divider ─── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="animated-line h-px bg-border" />
      </div>

      {/* ─── Sell Section ─── */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-32">
        <div>
          <SectionEyebrow gold>
            <span className="reveal-left">Immobilie veräußern</span>
          </SectionEyebrow>
          <h2 className="reveal stagger-1 mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
            Sie möchten Ihre Immobilie veräußern?
          </h2>
          <p className="reveal stagger-2 mt-6 max-w-md text-sm leading-7 text-muted-foreground">
            Erhalten Sie eine fundierte erste Einschätzung des Marktwerts — kostenfrei und unverbindlich.
          </p>
          <ul className="reveal stagger-3 mt-10 flex flex-col gap-4 text-sm">
            <li>01 · Präzise Marktanalyse Ihrer Lage</li>
            <li>02 · Diskrete Ansprache geprüfter Interessenten</li>
            <li>03 · Begleitung bis zur Übergabe</li>
          </ul>
          <Button variant="link" className="btn-premium reveal stagger-4 mt-8 h-auto rounded-none px-0" asChild>
            <Link href="/verkaufen">Mehr über den Verkauf erfahren <ArrowRight data-icon="inline-end" /></Link>
          </Button>
        </div>
        <ValuationSteps onComplete={query => window.location.href = `/verkaufen?${query}`} />
      </section>

      {/* ─── CTA Section ─── */}
      <section className="border-y border-border bg-muted">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 py-16 md:flex-row md:items-center lg:px-10">
          <div>
            <SectionEyebrow gold>
              <span className="reveal-left">Persönlicher Austausch</span>
            </SectionEyebrow>
            <h2 className="reveal stagger-1 mt-3 font-serif text-3xl tracking-tight">Bereit für den nächsten Schritt?</h2>
          </div>
          <Button className="btn-premium reveal stagger-2 rounded-none px-6 py-6" onClick={() => setContact(true)}>
            Gespräch vereinbaren <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </section>
    </main>

    <Footer />
    <BackToTop />
    {contact && <ContactModal close={() => setContact(false)} />}
  </>
}
