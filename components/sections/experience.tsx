"use client"

import { useInView } from "react-intersection-observer"
import SectionHeading from "../shared/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "Security Lit (Capture The Bug)",
    period: "April 2025 - Present",
    description: [
      `Developed and implemented backend functionality to seamlessly integrate an AI-powered agent within a researcher submission form, enabling automated data processing, intelligent analysis, and real-time vulnerability assessments.`,
      `Collaborated with team members to integrate JIRA and Slack APIs to streamline internal workflow and team communication.`,
      `Assisted in performance tuning and debugging of Node.js modules to improve system reliability.`,
      `Worked closely with the frontend team to connect responsive web pages with backend APIs.`,
      `Actively participated in research and development process of a custom Scanner feature inspired by Nuclei, focused on automated vulnerability detection, security testing, and risk analysis.`,
    ],
    tags: [
      "Full-Stack Development",
      "Backend Optimization",
      "API Integration",
      "Security Automation",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "MotionCut",
    period: "June 2024 - August 2024",
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
