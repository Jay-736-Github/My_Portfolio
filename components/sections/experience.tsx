"use client"

import { useInView } from "react-intersection-observer"
import SectionHeading from "../shared/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "Security Lit",
    period: "April 2025 – Present",
    description: [
      "Developed backend functionality integrating AI agents for enhanced security automation",
      "Integrated JIRA and Slack APIs to streamline workflows and improve team productivity",
      "Contributed to a custom Scanner feature for automated vulnerability detection across systems",
      "Assisted in debugging and optimizing backend modules, improving performance and reliability of critical features.",
      "Collaborated with the frontend team to connect responsive web pages with backend APIs.",
      "Actively involved in the research and development phase of a custom Scanner feature inspired by Nuclei, aimed at automated vulnerability detection and analysis.",
    ],
    tags: ["Backend Development", "API Integration", "Security Automation"],
  },
  {
    title: "Web Developer Intern",
    company: "MotionCut",
    period: "June 2024 – August 2024",
    description: [
      "Built responsive web interfaces with dynamic elements using modern JavaScript frameworks",
      "Improved website functionality through continuous testing and debugging",
      "Collaborated with design team to implement UI/UX improvements",
    ],
    tags: ["Frontend Development", "Responsive Design", "UI/UX"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Professional Experience" subtitle="My journey in the tech industry so far" />
        <div
          ref={ref}
          className={`max-w-4xl mx-auto space-y-8 transition-opacity duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`border-l-4 border-l-primary shadow-md transition-all duration-300 hover:shadow-lg ${
                inView ? (index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
