import Icon from "@/components/ui/Icon";
import { site } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="samSection samContactStory">
      <span className="samLabel">06 / CONTACT</span>

      <div className="samContactStoryGrid">
        <div>
          <h2>Let&apos;s connect.</h2>
          <p>
            I&apos;m currently exploring entry-level opportunities in software engineering,
            frontend development and web development.
          </p>
          <a className="samContactEmail" href={`mailto:${site.email}`}>
            <Icon name="mail" size={19}/> Email me <Icon name="arrow" size={16}/>
          </a>
        </div>

        <div className="samContactLinks">
          <a href={site.linkedin}><Icon name="linkedin" size={20}/><span>LinkedIn</span><Icon name="arrow" size={16}/></a>
          <a href={site.github}><Icon name="github" size={20}/><span>GitHub</span><Icon name="arrow" size={16}/></a>
          <div><Icon name="user" size={20}/><span>{site.location}</span></div>
        </div>
      </div>

      <footer className="samFooter"><span>Samantha · Portfolio 2026</span><a href="#home">Back to top ↑</a></footer>
    </section>
  );
}
