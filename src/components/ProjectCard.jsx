export default function ProjectCard({ project }) {
  return (
    <div className="w-full max-w-[430px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div
        style={{
          backgroundImage: `url(${project.imageUrl})`,
        }}
        className={`project-image`}
      ></div>
      <div className="p-4 bg-card">
        <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 sm:mt-2 flex items-center gap-2">
          {project.icons.map((icon, i) => (
            <span
              key={i}
              className="text-lg text-foreground bg-secondary p-1.5 rounded-md"
            >
              {icon}
            </span>
          ))}
        </div>
        <div className="mt-4 sm:mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}{" "}
            </span>
          ))}
        </div>
        <div className="mt-6 sm:mt-4 flex flex-col sm:flex-row gap-2">
          <a
            href={project.liveSite}
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow-sm transition-colors hover:bg-foreground/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <a
            href={project.githubUrl}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
