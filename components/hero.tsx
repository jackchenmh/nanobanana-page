import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Banana decorations */}
      <div className="absolute left-8 top-20 text-6xl opacity-20 rotate-12">🍌</div>
      <div className="absolute right-12 top-32 text-5xl opacity-15 -rotate-12">🍌</div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Try the model that understands Flux Kontext
          </div>

          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight text-balance">Nano Banana</h1>

          <p className="mb-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
            editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Start Editing
            </Button>
            <Button size="lg" variant="outline">
              View Examples
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>One-shot editing</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Multi-image support</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>Natural language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
