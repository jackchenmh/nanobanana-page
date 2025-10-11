"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Upload, ImageIcon, Wand2 } from "lucide-react"

export function ImageEditor() {
  const [prompt, setPrompt] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section id="editor" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Try The AI Editor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text
            commands.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Prompt Engine */}
          <Card className="p-6 border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wand2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Prompt Engine</h3>
                <p className="text-sm text-muted-foreground">Transform your image with AI-powered editing</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <div className="flex items-center justify-between">
                    <span>Image to Image</span>
                    <Button size="sm" variant="outline" className="h-7 bg-transparent">
                      <Upload className="h-3 w-3 mr-1" />
                      Upload
                    </Button>
                  </div>
                </label>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors bg-background"
                >
                  {uploadedImage ? (
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">Add Image</span>
                      <span className="text-xs text-muted-foreground">Max 10MB</span>
                    </>
                  )}
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Batch Processing <span className="text-primary">NEW</span>
                </label>
                <p className="text-xs text-muted-foreground mb-2">
                  Enable batch mode to process multiple images at once
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Reference Image <span className="text-muted-foreground text-xs">0/9</span>
                </label>
                <div className="flex items-center justify-center h-24 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                  <Upload className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Main Prompt</label>
                <Textarea
                  placeholder="A futuristic city powered by nano-technology, golden hour lighting, ultra detailed..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-24 resize-none"
                />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Wand2 className="h-4 w-4 mr-2" />
                Generate Now
              </Button>
            </div>
          </Card>

          {/* Output Gallery */}
          <Card className="p-6 border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ImageIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Output Gallery</h3>
                <p className="text-sm text-muted-foreground">Your edits will instantly appear here</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[500px] border-2 border-dashed border-border rounded-lg bg-muted/30">
              <ImageIcon className="h-16 w-16 text-muted-foreground/50 mb-4" />
              <p className="text-lg font-medium text-muted-foreground mb-2">Ready for instant generation</p>
              <p className="text-sm text-muted-foreground text-center max-w-xs text-balance">
                Enter your prompt and upload an image to see the power of Nano Banana
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
