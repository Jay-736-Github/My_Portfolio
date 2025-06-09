"use client"

import { useInView } from "react-intersection-observer"
import SectionHeading from "../shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Programming Languages & Fundamentals",
    skills: [
      "C++",
      "JavaScript",
      "Java",
      "TypeScript",
      "Python",
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
      "Socket.io",
      "Redux",
      "Django",
    ],
  },
  {
    category: "Databases",
    skills: [
      "MySQL",
      "MongoDB",
      "Supabase",
      "PostgreSQL",
      "RDBMS",
      "Distributd Systems",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "REST APIs", "Agile Methodology"],
  },
  {
    category: "Testing & Concepts",
    skills: ["Postman", "API testing", "Selenium Basics"],
  },
  {
    category: "Cloud & Containerization:",
    skills: [
      "Fundamentals of AWS",
      "Fundamentals of Azure",
      "Fundamentals of Docker",
      "Fundamentals of Kubernetes",
    ],
  },
];


export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Skills" subtitle="Technologies and concepts I work with" />
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:shadow-md ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
                <CardDescription>{category.skills.length} skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">
                      {skill}
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
