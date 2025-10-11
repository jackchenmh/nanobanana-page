import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ImageEditor } from "@/components/image-editor"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ImageEditor />
        <Features />
        <Showcase />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
