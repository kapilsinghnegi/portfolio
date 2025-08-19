import { LuBriefcase, LuCode, LuHandshake, LuUser } from "react-icons/lu";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 sm:mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Passionate Web Developer & Tech Enthusiast
            </h3>
            <p className="text-muted-foreground">
              Driven by curiosity, I began exploring programming and now thrive
              on building dynamic, responsive web apps while continually
              learning new technologies and frameworks.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about building elegant solutions to complex
              problems, continuously learning new technologies, and
              collaborating on impactful projects that drive innovation in the
              evolving web landscape.
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <a href="#contact" className="hero-button">
                <LuHandshake className="h-4 w-4" /> Get In Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-primary/10">
                  <LuCode className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern tools and frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-primary/10">
                  <LuUser className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces with smooth,
                    user-friendly experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-primary/10">
                  <LuBriefcase className="h-5 sm:h-6 w-5 sm:w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile Collaboration</h4>
                  <p className="text-muted-foreground">
                    Contributing to projects through agile workflows, clear
                    communication, and a focus on delivering real value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
