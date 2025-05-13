"use client"

import { useInView } from "react-intersection-observer"
import SectionHeading from "../shared/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "100xdevs",
    date: "2023",
    description: "Comprehensive training in modern web development technologies and practices.",
  },
]

export default function Certifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading title="Certifications" subtitle="Professional development and continuous learning" />
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:shadow-md ${inView ? "animate-fade-in" : "opacity-0"}`}
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <Award className="h-8 w-8 text-primary mt-1" />
                <div>
                  <CardTitle>{cert.title}</CardTitle>
                  <CardDescription>
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
