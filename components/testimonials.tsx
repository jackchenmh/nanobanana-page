import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    content:
      "Nano Banana has completely transformed my workflow. The character consistency is unmatched - I can finally create cohesive series without worrying about face changes.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    content:
      "The natural language understanding is incredible. I just describe what I want and it delivers perfectly. Way better than other AI editors I've tried.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    content:
      "We use Nano Banana for all our UGC campaigns now. The multi-image support and consistency features save us hours of editing time every week.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Photographer",
    content:
      "Scene preservation is phenomenal. I can make dramatic edits while keeping the original atmosphere intact. This is the future of photo editing.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Banana decorations */}
      <div className="absolute left-4 top-32 text-6xl opacity-10 -rotate-12">🍌</div>

      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Loved by Creators Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Join thousands of artists and creators who trust Nano Banana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
