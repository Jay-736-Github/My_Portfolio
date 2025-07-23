"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div
        className={`container-custom flex flex-col items-center text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-8 relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            src="image.png"
            alt="Jay Prakash Arya"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight mb-4">
          Jay Arya
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Software Developer | Backend-Focused | Scalable Solutions Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="rounded-full">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
