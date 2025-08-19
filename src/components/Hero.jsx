import { LuBriefcase } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col w-full items-center justify-center px-4 py-8 md:px-6 lg:px-8 bg-secondary/30"
    >
      <h2 className="pointer-events-none z-10 whitespace-pre-wrap bg-linear-to-b from-sky-300 via-blue-500 to-violet-400 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-transparent opacity-0 animate-fade-in-delay-1 select-none">
        Kapil Singh Negi
      </h2>
      <div className="max-w-2xl mx-auto space-y-6 z-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight text-foreground opacity-0 animate-fade-in-delay-2">
          Full Stack Developer
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground opacity-0 animate-fade-in-delay-3">
          Developing design and functionality with cutting-edge frontend
          expertise and rapidly expanding backend skills. Transforming ideas
          into seamless, user-centric digital experiences.
        </p>

        <div className="flex justify-center mt-8 opacity-0 animate-fade-in-delay-4">
          <a className="hero-button" href="#projects">
            <LuBriefcase className="h-4 w-4" />
            View my work
          </a>
        </div>
      </div>
    </section>
  );
}
