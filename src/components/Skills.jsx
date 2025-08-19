import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  // Frontend
  {
    name: "HTML",
    category: "Frontend",
    image: "https://skillicons.dev/icons?i=html",
    icon: <SiHtml5 />,
    textColor: "#E34F26",
    bgColor: "#F5F5F5",
  },
  {
    name: "CSS",
    category: "Frontend",
    image: "https://skillicons.dev/icons?i=css",
    icon: <SiCss3 />,
    textColor: "#1572B6",
    bgColor: "#F5F5F5",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    image: "https://skillicons.dev/icons?i=js",
    icon: <SiJavascript />,
    textColor: "#F7DF1E",
    bgColor: "#0f172a",
  },
  {
    name: "React",
    category: "Frontend",
    image: "https://skillicons.dev/icons?i=react",
    icon: <SiReact />,
    textColor: "#61DAFB",
    bgColor: "#20232A",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    image: "https://skillicons.dev/icons?i=ts",
    icon: <SiTypescript />,
    textColor: "#3178C6",
    bgColor: "#F5F5F5",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    image: "https://skillicons.dev/icons?i=tailwind",
    icon: <SiTailwindcss />,
    textColor: "#38BDF8",
    bgColor: "#20232A",
  },
  {
    name: "Next.js",
    category: "Frontend",
    image: "https://skillicons.dev/icons?i=nextjs",
    icon: <SiNextdotjs />,
    textColor: "#000000",
    bgColor: "#F5F5F5",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    image: "https://skillicons.dev/icons?i=nodejs",
    icon: <SiNodedotjs />,
    textColor: "#7BC239",
    bgColor: "#20232A",
  },
  {
    name: "Express.js",
    category: "Backend",
    image: "https://skillicons.dev/icons?i=express",
    icon: <SiExpress />,
    textColor: "#F5F5F5",
    bgColor: "#242938",
  },
  {
    name: "MongoDB",
    category: "Backend",
    image: "https://skillicons.dev/icons?i=mongodb",
    icon: <SiMongodb />,
    textColor: "#7BC239",
    bgColor: "#242938",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    image: "https://skillicons.dev/icons?i=postgres",
    icon: <SiPostgresql />,
    textColor: "#F5F5F5",
    bgColor: "#242938",
  },

  // Tools & Technologies
  {
    name: "Git",
    category: "Tools",
    image: "https://skillicons.dev/icons?i=git",
    icon: <SiGit />,
    textColor: "#F5F5F5",
    bgColor: "#F05032",
  },
  {
    name: "GitHub",
    category: "Tools",
    image: "https://skillicons.dev/icons?i=github",
    icon: <SiGithub />,
    textColor: "#F0F0F0",
    bgColor: "#262626",
  },
  {
    name: "Postman",
    category: "Tools",
    image: "https://skillicons.dev/icons?i=postman",
    icon: <SiPostman />,
    textColor: "#FF6C37",
    bgColor: "#F5F5F5",
  },
  {
    name: "Figma",
    category: "Tools",
    image: "https://skillicons.dev/icons?i=figma",
    icon: <SiFigma />,
    textColor: "#F5F5F5",
    bgColor: "#242938",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredSkills = skills.filter(
    skill =>
      activeCategory === "all" ||
      skill.category.toLowerCase() === activeCategory
  );
  return (
    <section
      id="skills"
      className="py-24 px-2 sm:py-20 sm:px-4 md:py-24 md:px-8 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-medium text-base sm:text-lg md:text-xl capitalize cursor-pointer shadow-sm border border-border transition-all duration-300 focus:outline-none hover:scale-105 hover:shadow-lg",
                "sm:min-w-28 md:min-w-32 lg:min-w-36 ",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 sm:p-5 rounded-lg shadow-xs card-hover flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="text-2xl sm:text-3xl mt-2 bg-accent p-2 rounded-lg text-foreground transition-colors duration-300"
                style={
                  hoveredIndex === key ? { backgroundColor: skill.bgColor } : {}
                }
              >
                <span
                  className="transition-colors duration-300"
                  style={
                    hoveredIndex === key
                      ? {
                          backgroundColor: skill.bgColor,
                          color: skill.textColor,
                        }
                      : {}
                  }
                >
                  {skill.icon}
                </span>
              </div>
              <div className="mt-3 sm:mt-4">
                <h3 className="font-semibold text-base sm:text-lg text-center">
                  {" "}
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
