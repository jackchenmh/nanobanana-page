import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Banana decorations */}
      <div className="absolute left-12 top-12 text-8xl opacity-10 rotate-12">🍌</div>
      <div className="absolute right-16 bottom-16 text-7xl opacity-10 -rotate-12">🍌</div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Transform Your Images?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Join thousands of creators using Nano Banana to bring their creative visions to life. Start editing with AI
            today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 50 free credits • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
