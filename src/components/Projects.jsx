import ProjectCard from "./ProjectCard";
import {
  SiEjs,
  SiExpress,
  SiJest,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Bhojan Buddy",
    liveSite: "https://bhojan-buddy.vercel.app/",
    githubUrl: "https://github.com/kapilsinghnegi/Bhojan-Buddy",
    imageUrl: "/assets/bhojan-buddy.png",
    tags: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Rouuter",
      "React Testing Library",
      "Jest",
      "Swiggy API",
      "Jest",
    ],
    icons: [
      <SiReact />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiReactrouter />,
      <SiTestinglibrary />,
      <SiJest />,
      <SiJavascript />,
    ],
    description:
      "A simple ReactJS application that retrieves live data from the Swiggy API to showcase restaurants, dishes, and prices, featuring cart and checkout functionality.",
  },
  {
    id: 2,
    title: "AI Article Summarizer",
    liveSite: "https://ai-summarizer-ksn.vercel.app/",
    githubUrl: "https://github.com/kapilsinghnegi/aisummarizer",
    imageUrl: "/assets/ai-summarizer.png",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Rapid API", "GPT-4"],
    icons: [
      <SiReact />,
      <SiRedux />,
      <SiTailwindcss />,
      <SiOpenai />,
      <SiJavascript />,
    ],
    description:
      "AI Article Summarizer, a web application where users can get clear and concise summaries of articles with just a link to the desired article, users can also access their previous summary articles through the history easily. Also, you can get summaries in 15 popular languages.",
  },
  {
    id: 3,
    title: "Project Drive",
    liveSite: "https://project-drive-x53s.onrender.com/",
    githubUrl: "https://github.com/kapilsinghnegi/project-drive",
    imageUrl: "/assets/project-drive.png",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Supabase Storage",
      "JWT",
      "Multer",
      "EJS",
      "Postman",
    ],
    icons: [
      <SiNodedotjs />,
      <SiExpress />,
      <SiMongodb />,
      <SiMongoose />,
      <SiSupabase />,
      <SiEjs />,
      <SiPostman />,
      <SiJavascript />,
    ],
    description:
      "A Google Drive-inspired backend app using Node.js, Express, MongoDB, and Supabase Storage for secure user authentication, file upload, management, and download.",
  },
  {
    id: 4,
    title: "Word Search",
    liveSite: "https://kapilsinghnegi.github.io/word-search/",
    githubUrl: "https://github.com/kapilsinghnegi/word-search",
    imageUrl: "/assets/word-search.png",
    tags: ["React", "Tailwind CSS", "Material UI", "Dictionary API"],
    icons: [<SiReact />, <SiTailwindcss />, <SiMui />, <SiJavascript />],
    description:
      "A modern, responsive React dictionary app supporting word definitions, synonyms, antonyms, audio pronunciation, light/dark mode, and local storage. Uses Tailwind CSS, Material UI, and Dictionary API.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-8 relative w-full bg-secondary/30"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="max-w-4xl text-center text-sm sm:text-base md:text-lg text-muted-foreground">
            Check out some of the projects I have worked on various web
            applications which showcases my skills and creativity.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center space-y-2">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
