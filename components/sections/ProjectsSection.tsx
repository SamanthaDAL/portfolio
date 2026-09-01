import SamanthaProjectSpotlight from "@/components/projects/SamanthaProjectSpotlight";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="samSection samProjectsSpotlight">
      <div className="samSectionHead">
        <span className="samLabel">02 / PROJECTS</span>
        <div>
          <h2>One project in focus, with context around it.</h2>
          <p>
            Choose a category and browse its projects. The current project stays centered,
            while the previous and next projects appear as smaller supporting previews.
          </p>
        </div>
      </div>

      <SamanthaProjectSpotlight allProjects={projects} />
    </section>
  );
}
