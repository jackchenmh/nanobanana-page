import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Nano Banana different from other AI image editors?",
    answer:
      "Nano Banana uses advanced natural language processing to understand complex editing instructions. Unlike other tools, it excels at character consistency and scene preservation, making it perfect for professional workflows and content creation.",
  },
  {
    question: "How does the image upload feature work?",
    answer:
      "Simply drag and drop your image or click the upload button. Nano Banana supports JPG, PNG, and WebP formats up to 10MB. You can upload reference images and batch process multiple images simultaneously.",
  },
  {
    question: "Can I use Nano Banana for commercial projects?",
    answer:
      "Yes! All images generated with Nano Banana can be used for commercial purposes. Our Pro and Enterprise plans include full commercial licensing and priority support.",
  },
  {
    question: "What is character consistency and why is it important?",
    answer:
      "Character consistency means maintaining the same facial features and identity across multiple edits. This is crucial for creating AI influencers, story sequences, and branded content where character recognition is essential.",
  },
  {
    question: "How fast is the image generation?",
    answer:
      "Nano Banana generates images in under 1 second on average. Our optimized neural engine delivers lightning-fast results without compromising quality, making it perfect for real-time editing workflows.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! New users get 50 free credits to try all features. No credit card required. You can upgrade to a paid plan anytime to get more credits and unlock advanced features.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to know about Nano Banana
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
