import { Card } from "@/components/ui/card"
import { Sparkles, Users, Layers, Zap, ImageIcon, Palette } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Natural Language Editing",
    description:
      "Simply describe what you want in plain English. Nano-banana AI understands complex instructions like GPT for images.",
  },
  {
    icon: Users,
    title: "Character Consistency",
    description:
      "This model excels at preserving faces and identities across edits. Perfect for maintaining character integrity.",
  },
  {
    icon: Layers,
    title: "Scene Preservation",
    description:
      "Keep your original backgrounds and scene elements intact. Superior scene fidelity compared to Flux Kontext.",
  },
  {
    icon: Zap,
    title: "One-Shot Editing",
    description:
      "Perfect results in a single attempt. Nano-banana delivers one-shot image editing challenges effortlessly.",
  },
  {
    icon: ImageIcon,
    title: "Multi-Image Context",
    description: "Process multiple images simultaneously. Support for advanced multi-image editing workflows.",
  },
  {
    icon: Palette,
    title: "AI UGC Creation",
    description: "Create consistent AI influencers and UGC content. Perfect for social media and marketing campaigns.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 relative">
      {/* Banana decoration */}
      <div className="absolute right-8 bottom-20 text-7xl opacity-10 rotate-45">🍌</div>

      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">Core Features</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Nano Banana?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Nano-banana is the most advanced AI image editor on LMArena. Revolutionize your photo editing with natural
            language understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
