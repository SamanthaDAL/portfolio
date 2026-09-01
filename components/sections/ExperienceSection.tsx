import Icon from "@/components/ui/Icon";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="samSection samExperienceFlow"
    >
      <div className="samSectionHead">
        <span className="samLabel">
          03 / EXPERIENCE
        </span>

        <div>
          <h2>
            From research
            <br />
            to practical solutions.
          </h2>

          <p>
            Experience combining research,
            UI/UX, data preparation, spatial
            thinking and technical development.
          </p>
        </div>
      </div>

      <div className="samExperienceFlowGrid">
        <aside>
          <div className="samExperienceDot" />

          <span>
            {experience.year}
          </span>

          <small>
            {experience.period}
          </small>
        </aside>

        <article>
          <div className="samExperienceTitle">
            <Icon
              name="briefcase"
              size={21}
            />

            <div>
              <span>
                {experience.role.toUpperCase()}
              </span>

              <h3>
                {experience.company}
              </h3>

              <small>
                {experience.team}
              </small>
            </div>
          </div>

          <p>
            {experience.summary}
          </p>

          <div className="samExperienceSubhead">
            WHAT I CONTRIBUTED
          </div>

          <div className="samWorkLines">
            {experience.contributions.map(
              (item) => (
                <div key={item.number}>
                  <b>
                    {item.number}
                  </b>

                  <span>
                    {item.title}
                  </span>

                  <p>
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="samExperienceSubhead">
            ADDITIONAL CONTRIBUTIONS
          </div>

          <p className="samAdditionalExperience">
            {experience.additional}
          </p>

          <div className="samExperienceSubhead">
            TOOLS & TECHNOLOGIES
          </div>

          <div className="samToolPills">
            {experience.tools.map(
              (tool) => (
                <span key={tool}>
                  {tool}
                </span>
              )
            )}
          </div>
        </article>
      </div>
    </section>
  );
}