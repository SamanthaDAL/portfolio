import Icon from "@/components/ui/Icon";
import { profile } from "@/data/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="samSection samContactStory"
    >
      <span className="samLabel">
        06 / CONTACT
      </span>

      <div className="samContactStoryGrid">

        <div>
          <h2>Let&apos;s connect.</h2>

          <p>
            {profile.contactMessage}
          </p>

          <div className="samContactAvailability">
            <small>AVAILABLE NOW</small>
            <strong>{profile.availability}</strong>
          </div>

          <a
            className="samContactEmail"
            href={`mailto:${profile.email}`}
          >
            <Icon name="mail" size={19} />
            Email me
            <Icon name="arrow" size={16} />
          </a>
        </div>

        <div className="samContactLinks">

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" size={20} />

            <span>
              <small>LINKEDIN</small>
              Connect professionally
            </span>

            <Icon name="arrow" size={16} />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={20} />

            <span>
              <small>GITHUB</small>
              View my development work
            </span>

            <Icon name="arrow" size={16} />
          </a>

          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="mail" size={20} />

            <span>
              <small>WHATSAPP</small>
              Send me a message
            </span>

            <Icon name="arrow" size={16} />
          </a>

          <a href={profile.phoneHref}>
            <Icon name="user" size={20} />

            <span>
              <small>PHONE</small>
              {profile.phone}
            </span>

            <Icon name="arrow" size={16} />
          </a>

          <a href="#resume">
            <Icon name="file" size={20} />

            <span>
              <small>RESUME</small>
              View role-based resumes
            </span>

            <Icon name="arrow" size={16} />
          </a>

        </div>
      </div>

      <footer className="samFooter">
        <span>Samantha · Portfolio 2026</span>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}