import SamanthaProjectSpotlight from "@/components/projects/SamanthaProjectSpotlight";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="samSection samProjectsSpotlight">
      <div className="samSectionHead">
        <span className="samLabel">02 / PROJECTS</span>
        <div>
          <h2>Projects shaped by users, flows and functionality.</h2>

          <p>
            Explore selected work from my internship and final year project,
            including the development process, technical implementation and
            application workflows behind each project.
          </p>
        </div>
      </div>

      <SamanthaProjectSpotlight allProjects={projects} />
    </section>
  );
}
