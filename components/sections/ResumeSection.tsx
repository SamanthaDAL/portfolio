import Icon from "@/components/ui/Icon";

const resumes = [
  {
    name: "Software Engineer",
    href: "/resumes/samantha-software-engineer-resume.pdf",
    description: "Software engineering and software development-focused applications.",
    enabled: true,
  },
  {
    name: "Front-End Developer",
    href: "/resumes/samantha-frontend-developer-resume.pdf",
    description: "Frontend and UI engineering-focused applications.",
    enabled: false,
  },
  {
    name: "Web Developer",
    href: "/resumes/samantha-web-developer-resume.pdf",
    description: "General web-development applications.",
    enabled: false,
  },
];

export default function ResumeSection() {
  const visibleResumes = resumes.filter((resume) => resume.enabled);
  return (
    <section id="resume" className="samSection samResumeFlow">
      <div className="samSectionHead">
        <span className="samLabel">05 / RESUME</span>
        <div>
          <h2>Choose the resume that fits the role.</h2>
          <p>
            Preview or download the resume tailored to the type of role
            you&apos;re hiring for.
          </p>
        </div>
      </div>

      <div className="samResumeList">
        {visibleResumes.map(({ name, href, description }, i) => (
          <article key={name}>
            <div className="samResumeListNo">0{i+1}</div>
            <div className="samResumeListText">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className="samResumeListActions">
              <a href={href} target="_blank" rel="noreferrer">Preview <Icon name="arrow" size={15}/></a>
              <a href={href} download>Download PDF <Icon name="download" size={15}/></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
