"use client"

import { useInView } from "react-intersection-observer"
import SectionHeading from "../shared/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"

const education = [
  {
    institution: "Birla Institute of Technology, Mesra",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2021 – 2025",
    details: "CGPA: 8.10",
    icon: GraduationCap,
  },
  {
    institution: "Scottish Public School, Katihar",
    degree: "Higher Secondary Certification",
    period: "2019 – 2020",
    details: "",
    icon: School,
  },

  {
    institution: "Scottish Public School, Katihar",
    degree: "Matriculation",
    period: "2017 – 2018",
    details: "",
    icon: School,
  },
];

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Education" subtitle="My academic background and qualifications" />
        <div
          ref={ref}
          className={`max-w-3xl mx-auto space-y-6 transition-opacity duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:shadow-md ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <edu.icon className="h-8 w-8 text-primary mt-1" />
                <div>
                  <CardTitle>{edu.institution}</CardTitle>
                  <CardDescription className="text-base">{edu.degree}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{edu.period}</span>
                  <span className="font-medium">{edu.details}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
