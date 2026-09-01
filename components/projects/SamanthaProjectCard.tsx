import Icon, { type IconName } from "@/components/ui/Icon";
import type { Project } from "@/data/projects";

const icons: Record<Project["category"], IconName> = {
  "personal-portfolio": "code",
  internship: "briefcase",
  fyp: "graduation",
  university: "book",
};

export default function SamanthaProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article className={`samStoryProject ${reverse ? "reverse" : ""}`}>
      <div className="samStoryVisual">
        <div className="samStoryVisualTop">
          <Icon name={icons[project.category]} size={18}/>
          <span>REAL SCREENSHOT LATER</span>
        </div>
        <div className="samStoryMock">
          <div className="samStoryMockBar"><i/><i/><i/></div>
          <div className="samStoryMockBody">
            <b/><b/>
            <div><span/><span/><span/></div>
          </div>
        </div>
      </div>

      <div className="samStoryCopy">
        <span className="samStatus">{project.status === "placeholder" ? "Placeholder" : "Live project"}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="samTags">{project.stack.map((x)=><span key={x}>{x}</span>)}</div>
        <div className="samStoryLink">Case study later <Icon name="arrow" size={16}/></div>
      </div>
    </article>
  );
}
