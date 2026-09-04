import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { about } from "@/data/about";

const skillGroups = [
  {
    label: "FRONTEND",
    items: about.technicalSkills.core,
  },
  {
    label: "APPLICATION",
    items: about.technicalSkills.development,
  },
  {
    label: "DATA & SERVICES",
    items: about.technicalSkills.dataAndIntegration,
  },
  {
    label: "TOOLS",
    items: about.technicalSkills.interfaceAndTools,
  },
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="samSection samAboutSimple">
      {/* INTRO */}
      <div className="samAboutTop">
        <div className="samAboutCopy">
          <span className="samLabel">04 / ABOUT</span>

          <h2>A little more about me.</h2>

          <p className="samAboutLead">{about.intro}</p>

          <p className="samAboutSummary">
            {about.professionalSummary}
          </p>

          <div className="samAboutPreference">
            <small>DEVELOPMENT + DESIGN</small>

            <p>
              I&apos;m comfortable with visual design and UI/UX
              thinking, but development is the direction I&apos;m
              most interested in pursuing. I enjoy using design
              decisions to support how an application works and
              how people interact with it.
            </p>
          </div>

          <div className="samAboutEducation">
            <div>
              <small>EDUCATION</small>

              <strong>{about.education.degree}</strong>

              <span>{about.education.university}</span>
              <span>{about.education.period}</span>
            </div>

            <div>
              <small>CURRENT CGPA</small>

              <strong className="samAboutCgpa">
                {about.education.cgpa.value}
              </strong>
            </div>
          </div>
        </div>

        <figure className="samAboutPortrait">
          <div>
            <Image
              src={about.profileImage}
              alt="Samantha Lam Wai Sim"
              width={720}
              height={900}
            />
          </div>

          <figcaption>
            <strong>Samantha</strong>
            <span>Lam Wai Sim</span>
          </figcaption>
        </figure>
      </div>

      {/* HOW I WORK */}
      <section className="samAboutBlock">
        <div className="samAboutBlockHead">
          <small>HOW I WORK</small>
          <h3>User-focused, thoughtful and iterative.</h3>
        </div>

        <div className="samAboutWorkGrid">
          <article>
            <strong>User-Focused</strong>

            <p>
              I think about what people need to accomplish and
              how information and actions should flow through
              an application.
            </p>
          </article>

          <article>
            <strong>Thoughtful</strong>

            <p>
              I prefer understanding the problem and exploring
              possible approaches before settling on a solution.
            </p>
          </article>

          <article>
            <strong>Iterative</strong>

            <p>
              I&apos;m comfortable revisiting an implementation
              when feedback or testing reveals a clearer way
              forward.
            </p>
          </article>
        </div>

        <div className="samAboutEnjoy">
          <small>I PARTICULARLY ENJOY</small>

          <p>{about.enjoys.join(" · ")}</p>

          <span>
            {about.developmentInterests.join(" · ")}
          </span>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="samAboutBlock">
        <div className="samAboutBlockHead">
          <small>TECHNICAL SKILLS</small>
          <h3>What I work with.</h3>
        </div>

        <div className="samAboutSkillList">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="samAboutSkillRow"
            >
              <strong>{group.label}</strong>

              <div>
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REFLECTIONS */}
      <section className="samAboutBlock">
        <div className="samAboutBlockHead">
          <small>WHAT SHAPED MY DEVELOPMENT</small>
          <h3>Learning through real projects.</h3>
        </div>

        <div className="samAboutStoryList">
          <article>
            <div>
              <small>INDUSTRIAL TRAINING</small>
              <strong>Internship</strong>
            </div>

            <div>
              <h4>
                Learning through feedback and changing
                requirements.
              </h4>

              <p>{about.internshipReflection}</p>
            </div>
          </article>

          <article>
            <div>
              <small>FINAL YEAR PROJECT</small>
              <strong>TeleCardio</strong>
            </div>

            <div>
              <h4>
                Building around complete application workflows.
              </h4>

              <p>{about.fypReflection}</p>
            </div>
          </article>
        </div>

        <div className="samAboutRecruiterNote">
          <small>ONE THING TO KNOW ABOUT ME</small>
          <p>{about.recruiterNote}</p>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="samAboutBlock">
        <div className="samAboutBlockHead">
          <small>RECOGNITION & INVOLVEMENT</small>
          <h3>Beyond project work.</h3>
        </div>

        <div className="samAboutRecognition">
          {about.achievements.map((achievement) => (
            <article key={achievement.title}>
              <small>{achievement.type}</small>

              <h4>{achievement.title}</h4>

              <p>{achievement.organisation}</p>

              <span>{achievement.detail}</span>

              <strong>{achievement.year}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* LANGUAGES + INTERESTS */}
      <section className="samAboutBlock">
        <div className="samAboutBlockHead">
          <small>BACKGROUND</small>
          <h3>A little outside development.</h3>
        </div>

        <div className="samAboutLanguageGrid">
          {about.languages.map((language) => (
            <article key={language.name}>
              <strong>{language.name}</strong>

              <span>{language.level}</span>

              <p>{language.detail}</p>
            </article>
          ))}
        </div>

        <div className="samAboutInterestLine">
          <small>INTERESTS</small>

          <p>{about.interests.join(" · ")}</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="samAboutBlock">
        <div className="samAboutBlockHead">
          <small>CERTIFICATIONS</small>
          <h3>Learning beyond the classroom.</h3>
        </div>

        <div className="samAboutCertList">
          {about.certifications.map((certificate) => (
            <a
              key={certificate.title}
              href={certificate.href}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <small>
                  {certificate.issuer} · {certificate.year}
                </small>

                <strong>{certificate.title}</strong>

                {"note" in certificate && (
                  <span>{certificate.note}</span>
                )}
              </div>

              <Icon name="arrow" size={17} />
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}