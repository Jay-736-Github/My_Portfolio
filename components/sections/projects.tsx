// "use client"

// import { useInView } from "react-intersection-observer"
// import SectionHeading from "../shared/section-heading"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ExternalLink, Github } from "lucide-react"
// import Image from "next/image"

// const projects = [
//   {
//     title: "Globetrotter Challenge",
//     description:
//       "Full-stack travel guessing game using Next.js, Tailwind CSS, and Supabase. Features real-time scoring and optimized backend performance.",
//     image: "/travel.jpg",
//     tags: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
//     github: "https://github.com/Jay-736-Github/Globetrotter",
//     demo: "#",
//   },
//   {
//     title: "Recipe Management System",
//     description:
//       "Built with React, Node.js, Express.js, and MySQL. Includes JWT authentication and CRUD functionality for managing recipes.",
//     image: "recipe.jpg",
//     tags: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
//     github: "https://github.com/Jay-736-Github/recipe_management_system",
//     demo: "#",
//   },
//   {
//     title: "Chat Application",
//     description:
//       "Real-time chat app using React.js, Express.js, and Socket.io. Implemented bi-directional communication and MongoDB for chat history storage.",
//     image: "/chat.jpg",
//     tags: ["React.js", "Express.js", "Socket.io", "MongoDB", "JWT"],
//     github: "https://github.com/Jay-736-Github/ChatApp",
//     demo: "#",
//   },
// ];

// export default function Projects() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   return (
//     <section id="projects" className="section-padding bg-muted/30">
//       <div className="container-custom">
//         <SectionHeading title="Projects" subtitle="A selection of my recent work" />
//         <div
//           ref={ref}
//           className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 ${
//             inView ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
//                 inView ? "animate-fade-in" : "opacity-0"
//               }`}
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <div className="relative h-48 w-full">
//                 <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
//               </div>
//               <CardHeader>
//                 <CardTitle>{project.title}</CardTitle>
//                 <CardDescription className="line-clamp-2">{project.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, i) => (
//                     <Badge key={i} variant="secondary">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <Button variant="outline" size="sm" asChild>
//                   <a href={project.github} target="_blank" rel="noopener noreferrer">
//                     <Github className="mr-2 h-4 w-4" />
//                     Code
//                   </a>
//                 </Button>
//                 <Button size="sm" asChild>
//                   <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                     <ExternalLink className="mr-2 h-4 w-4" />
//                     Demo
//                   </a>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { useInView } from "react-intersection-observer";
import SectionHeading from "../shared/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const projects = [
  {
    title: "Globetrotter Challenge",
    description:
      "Full-stack travel guessing game using Next.js, Tailwind CSS, and Supabase. Features real-time scoring and optimized backend performance.",
    image: "/travel.jpg",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    github: "https://github.com/Jay-736-Github/Globetrotter",
    demo: "#",
    details: [
      "Built a full-stack travel guessing game using Next.js, Tailwind CSS, and Supabase, delivering an engaging user experience.",
      "Developed robust API routes for authentication, game logic, and challenge creation, ensuring seamless functionality.",
      "Implemented a real-time scoring system with instant feedback, enhancing interactivity.",
      "Optimized backend performance, minimizing latency and improving scalability.",
    ],
  },
  {
    title: "Recipe Management System",
    description:
      "Built with React, Node.js, Express.js, and MySQL. Includes JWT authentication and CRUD functionality for managing recipes.",
    image: "/recipe.jpg",
    tags: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
    github: "https://github.com/Jay-736-Github/recipe_management_system",
    demo: "#",
    details: [
      "Built a full-stack recipe management system using React, Node.js, Express.js, and MySQL with JWT authentication and CRUD functionality.",
      "Developed RESTful APIs for seamless backend communication and data handling.",
      "Utilized MySQL for efficient storage and retrieval of recipes, ingredients, and categories.",
      "Integrated input validation and error handling to ensure system stability.",
    ],
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app using React.js, Express.js, and Socket.io. Implemented bi-directional communication and MongoDB for chat history storage.",
    image: "/chat.jpg",
    tags: ["React.js", "Express.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/Jay-736-Github/ChatApp",
    demo: "#",
    details: [
      "Built a real-time chat application using React.js, Express.js, and Socket.io.",
      "Implemented bi-directional communication with Socket.io for instant messaging.",
      "Used MongoDB for chat history storage with quick retrieval.",
      "Improved scalability and reduced message latency by 40%.",
    ],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          title="Projects"
          subtitle="A selection of my recent work"
        />
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {projects.map((project, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card
                  className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    inView ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                <h4 className="font-semibold text-lg mb-2">
                  {project.title} Details
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}

                     