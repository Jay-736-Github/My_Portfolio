"use client"

import { useInView } from "react-intersection-observer"
import SectionHeading from "../shared/section-heading"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading title="About Me" />
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-opacity duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <pre className="text-lg leading-relaxed mb-6 whitespace-pre-wrap">
{`
There’s something deeply satisfying about how software systems come together — not just the code, but the architecture and logic beneath it. That curiosity led to a B.Tech in Computer Science and Engineering from Birla Institute of Technology, Mesra, and more importantly, to hands-on learning through building, breaking, and rebuilding projects.

The real interest lies in the backend — system design, performance, and security — the parts that make applications reliable and scalable. It’s about writing clean, maintainable code, thinking ahead, and solving problems at their core.

Right now, the focus is on growing as a developer by building better systems and deepening technical skills — with a mindset rooted in clarity, curiosity, and continuous improvement.
`}
          </pre>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Problem Solving</h3>
              <p className="text-muted-foreground">
                Analytical thinker with a methodical approach to breaking down
                complex challenges.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Critical Thinking</h3>
              <p className="text-muted-foreground">
                Ability to evaluate solutions objectively and make data-driven
                decisions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Effective communicator who thrives in collaborative environments
                and values diverse perspectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
