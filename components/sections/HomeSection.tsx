import Icon from "@/components/ui/Icon";
import { site } from "@/data/site";

export default function HomeSection() {
  return (
    <section id="home" className="samSection samHero">
      <div className="samHeroGrid">
        <div className="samHeroCopy">
          <span className="samLabel">01 / HOME</span>
          <h1>Hi, I&apos;m {site.displayName}.<span>I build clear, useful software.</span></h1>
          <p>{site.summary}</p>

          <div className="samActions">
            <a className="samPrimary" href="#projects">View projects <Icon name="arrow" size={17}/></a>
            <a className="samSecondary" href="#resume">View resumes <Icon name="file" size={17}/></a>
          </div>

          <div className="samSocialRow">
            <span>{site.location}</span>
            <a href={site.github}><Icon name="github" size={16}/> GitHub</a>
            <a href={site.linkedin}><Icon name="linkedin" size={16}/> LinkedIn</a>
          </div>
        </div>

        <aside className="samHeroCard">
          <div className="samHeroCardHead"><span>PORTFOLIO SNAPSHOT</span><span>2026</span></div>
          <div className="samSnapshotRows">
            <div><Icon name="briefcase" size={20}/><span>Experience</span><strong>6-month internship</strong></div>
            <div><Icon name="graduation" size={20}/><span>FYP</span><strong>Mobile application</strong></div>
            <div><Icon name="book" size={20}/><span>University</span><strong>Selected projects</strong></div>
          </div>
          <p>Real project screenshots will replace this simple content preview later.</p>
        </aside>
      </div>
    </section>
  );
}
