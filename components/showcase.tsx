import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const showcaseItems = [
  {
    title: "Ultra-Fast Mountain Generation",
    description: "Created in 0.8 seconds with Nano Banana's optimized neural engine",
    image: "/majestic-snow-capped-mountains-at-golden-hour.jpg",
    badge: "Lightning Speed",
  },
  {
    title: "Instant Garden Creation",
    description: "Complex scene rendered in milliseconds using Nano Banana technology",
    image: "/beautiful-japanese-garden-with-cherry-blossoms.jpg",
    badge: "Scene Mastery",
  },
  {
    title: "Tropical Paradise Transform",
    description: "Natural lighting and atmosphere preserved perfectly",
    image: "/tropical-beach-with-palm-trees-and-blue-sky.jpg",
    badge: "Natural Lighting",
  },
  {
    title: "Aurora Borealis Magic",
    description: "Stunning atmospheric effects with precise color control",
    image: "/northern-lights-aurora-borealis-over-snowy-landsca.jpg",
    badge: "Color Precision",
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">Showcase</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Lightning-Fast AI Creations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See what Nano Banana generates in milliseconds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{item.badge}</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
