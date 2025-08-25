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
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Store Rating Hub",
    description:
      "Developed a full-stack store rating platform with secure RBAC (Admin, Owner, User) using Node.js, Express, and React. Delivered a scalable, real-time dashboard and dynamic frontend with Tailwind/Shadcn, optimized for high performance and smooth user experience.",
    image: "/Store.jpg",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma ORM",
      "JWT",
      "Shadcn/UI",
      "Tailwind CSS",
    ],
    github: "https://github.com/Jay-736-Github/Rating_Store",
    // demo: "https://github.com/Jay-736-Github/Identity-Reconciliation",
    details: [
      "Developed a production-ready full-stack application with a Node.js/Express backend and a React/Vite frontend, enabling users to seamlessly rate and review stores with authentication and authorization.",
      "Implemented a secure role-based access control (RBAC) system using JWT, enforcing strict access policies across three roles: Admin, Store Owner, and User, while maintaining data integrity.",
      "Designed and delivered a role-protected admin dashboard featuring real-time analytics, advanced search, sorting, pagination, and scalable management tables for users, stores, and ratings.",
      "Built and optimized MySQL schemas with Prisma ORM for efficient relational data management, ensuring accurate queries, smooth migrations, and referential integrity across entities.",
      "Developed a responsive and dynamic frontend with React, Tailwind CSS, and Shadcn/ui, integrating protected routes, interactive modals, and real-time updates for an enhanced user experience.",
      "Engineered optimized API and data-fetching strategies to handle large datasets efficiently, reducing bottlenecks and ensuring smooth performance at scale.",
      "Conducted scalability testing with over 1,000 user records, validating system robustness and ensuring reliable performance under real-world usage scenarios.",
      "Collaborated across backend and frontend layers to deliver a secure, scalable, and user-centric platform, meeting production-grade standards.",
    ],
  },

  {
    title: "Identity Reconciliation Service",
    description:
      "Built a high-performance identity reconciliation service in Node.js and TypeScript, powering a smart /identify API that consolidates customer contacts via email/phone using MySQL and Prisma for seamless, unified identity management.",
    image: "/identity.jpg",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Speech-to-Text"],
    github: "https://github.com/Jay-736-Github/Identity-Reconciliation",
    // demo: "https://github.com/Jay-736-Github/Identity-Reconciliation",
    details: [
      "Engineered a scalable backend service using Node.js and TypeScript to perform real-time identity reconciliation, a critical data management function for unifying customer profiles.",
      "Designed and implemented a relational database schema in MySQL, managed via the Prisma ORM, to ensure data integrity and efficient querying of linked contact records.",
      "Developed the core reconciliation engine, featuring complex business logic to accurately identify, link, and merge disparate customer contacts into a single source of truth by managing primary/secondary relationships.",
      "Built and exposed RESTful /identify and /order endpoints using Express.js; /identify processes contact data to return a unified profile, while /order links purchase history to the correct primary identity using the core reconciliation logic.",
    ],
  },

  {
    title: "Voice-Driven Property Listing Tool",
    description:
      "Built a full-stack voice-driven property listing tool using React, Node.js, Express.js, and MongoDB with speech-to-text input and structured data generation for real estate listings.",
    image: "/property.jpg",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Speech-to-Text"],
    github: "https://github.com/Jay-736-Github/Leapot_Problem_Statement1",
    // demo: "#",
    details: [
      "Developed a real-time voice-enabled property listing app using React.js, Node.js, and MongoDB.",
      "Enabled agents to input property details using natural speech via the Web Speech API.",
      "Transformed speech into structured listing data with validation for fields like price, area, and location.",
      "Designed a seamless, responsive UI for reviewing, editing, and submitting MLS-ready listings.",
    ],
  },

  {
    title: "Python Security Scanner",
    description:
      "Built a full-stack voice-driven property listing tool using React, Node.js, Express.js, and MongoDB with speech-to-text input and structured data generation for real estate listings.",
    image: "/cyber.jpg",
    tags: [
      "Python",
      "Web Security",
      "Vulnerability Scanner",
      "Requests",
      "Urllib",
    ],
    github:
      "https://github.com/Jay-736-Github/Python-Based-Web-Vulnerability-Scanner",
    // demo: "#",
    details: [
      "Developed a Python-based vulnerability scanner to identify issues such as missing HTTP headers, subdomain enumeration, reflected XSS, SQL injection, and directory listing.",
      "Leveraged 'requests' and 'urllib' libraries to handle HTTP requests and parse web responses for vulnerability patterns.",
      "Structured the scanner into modular components, allowing for easy updates and addition of new vulnerability checks.",
      "Automated scan report generation across multiple target URLs for easy tracking and usability.",
      "Showcased knowledge of real-world web security threats and practical implementation of detection techniques.",
      "Planned future enhancements: deeper assessments, threat intelligence integration, and advanced scanning aligned with CGI’s cybersecurity focus.",
    ],
  },

  {
    title: "Globetrotter Challenge",
    description:
      "Full-stack travel guessing game using Next.js, Tailwind CSS, and Supabase. Features real-time scoring and optimized backend performance.",
    image: "/travel.jpg",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    github: "https://github.com/Jay-736-Github/Globetrotter",
    // demo: "#",
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
    // demo: "#",
    details: [
      "Built a full-stack recipe management system using React, Node.js, Express.js, and MySQL with JWT authentication and CRUD functionality.",
      "Developed RESTful APIs for seamless backend communication and data handling.",
      "Utilized MySQL for efficient storage and retrieval of recipes, ingredients, and categories.",
      "Integrated input validation and error handling to ensure system stability.",
    ],
  },

  {
    title: "Snake-Nado",
    description:
      "Classic snake game built using HTML, CSS, and JavaScript with a real-time scoring system. Designed for fun and to deepen understanding of core JavaScript concepts.",
    image: "snake.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Game Development"],
    github: "https://github.com/Jay-736-Github/Snake-Game",
    demo: "https://snakenado-jays-projects-b04bef62.vercel.app/",
    details: [
      "Developed a classic snake game using vanilla JavaScript, HTML, and CSS.",
      "Implemented real-time scoring system and increasing difficulty for better engagement.",
      "Focused on clean logic and DOM manipulation to sharpen JavaScript fundamentals.",
      "Built as a side project to explore game loops, collision detection, and key event handling.",
      "Designed a responsive game board layout ensuring compatibility across devices and screen sizes.",
      "Refactored game logic into modular functions for better readability and easier future enhancements.",
    ],
  },

  {
    title: "Chat Application",
    description:
      "Real-time chat app using React.js, Express.js, and Socket.io. Implemented bi-directional communication and MongoDB for chat history storage.",
    image: "/chat.jpg",
    tags: ["Node.js", "TypeScript", "Express.js", "Prisma", "MySQL", "Railway"],
    github: "https://github.com/Jay-736-Github/ChatApp",
    // demo: "#",
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Fixed number of visible projects on different screen sizes
  const getVisibleProjects = () => {
    // For mobile, show 1, for tablets show 2, for desktop show 3
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3; // default for SSR
  };

  const [visibleProjects, setVisibleProjects] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const newVisibleProjects = getVisibleProjects();
      setVisibleProjects(newVisibleProjects);

      // Make sure currentIndex is valid with new visible projects count
      const maxIndex = Math.max(0, projects.length - newVisibleProjects);
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);

        // Update scroll position if needed
        if (scrollContainerRef.current) {
          const cardWidth =
            scrollContainerRef.current.clientWidth / newVisibleProjects;
          scrollContainerRef.current.scrollLeft = maxIndex * cardWidth;
        }
      }

      // Update arrow visibility
      setShowLeftArrow(currentIndex > 0);
      setShowRightArrow(currentIndex < projects.length - newVisibleProjects);
    };

    // Initial calculation
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    let newIndex;

    if (direction === "left") {
      // Move back by 1 position
      newIndex = Math.max(0, currentIndex - 1);
    } else {
      // Move forward by 1 position
      newIndex = Math.min(projects.length - visibleProjects, currentIndex + 1);
    }

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);

      // Calculate the exact scroll position based on container width
      const containerWidth = scrollContainerRef.current.clientWidth;
      const cardWidth = containerWidth / visibleProjects; // Each card takes equal space

      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });

      // Update arrow visibility
      setShowLeftArrow(newIndex > 0);
      setShowRightArrow(newIndex < projects.length - visibleProjects);
    }
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          title="Projects"
          subtitle="A selection of my recent work"
        />

        <div className="relative">
          {/* Navigation Buttons */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors duration-200 -ml-4 md:ml-0"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors duration-200 -mr-4 md:mr-0"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          )}

          {/* Scrolling Container */}
          <div
            ref={(el) => {
              // Combine both refs
              if (el) {
                (ref as any)(el);
                scrollContainerRef.current = el;
              }
            }}
            className={`grid grid-flow-col auto-cols-fr gap-6 overflow-x-auto hide-scrollbar transition-opacity duration-700 pb-6 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            style={{
              gridTemplateColumns: `repeat(${projects.length}, calc((100% - ${
                (visibleProjects - 1) * 24
              }px) / ${visibleProjects}))`,
              scrollSnapType: "x mandatory",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full h-full overflow-hidden relative"
                style={{ scrollSnapAlign: "start" }}
              >
                <Card
                  className={`h-full overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    inView ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="relative w-full flex-shrink-0"
                    style={{ height: "200px" }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute top-2 right-2 bg-background/80 p-1.5 rounded-full cursor-pointer hover:bg-background transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(
                          activeProject === index ? null : index
                        );
                      }}
                      aria-label="View project details"
                    >
                      <Info className="h-4 w-4" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between mt-auto">
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

                {/* Custom animated details card */}
                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-background/95 backdrop-blur-sm p-6 overflow-auto flex flex-col"
                      style={{ zIndex: 10 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold">
                          {project.title} Details
                        </h3>
                        <button
                          onClick={() => setActiveProject(null)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                      </div>

                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-3 flex-grow">
                        {project.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.1 }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex justify-end gap-4 mt-4">
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
