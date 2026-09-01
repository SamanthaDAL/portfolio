import Icon from "@/components/ui/Icon";

const resumes = [
 ["Software Engineer","/resumes/samantha-software-engineer-resume.pdf","Full-stack / software-focused applications"],
 ["Front-End Developer","/resumes/samantha-frontend-developer-resume.pdf","Frontend and UI engineering-focused applications"],
 ["Web Developer","/resumes/samantha-web-developer-resume.pdf","General web-development applications"],
];

export default function ResumeSection() {
  return (
    <section id="resume" className="samSection samResumeFlow">
      <div className="samSectionHead">
        <span className="samLabel">05 / RESUME</span>
        <div>
          <h2>Choose the resume that fits the role.</h2>
          <p>No three-card dashboard here — Samantha&apos;s resumes are presented as a simple, readable list.</p>
        </div>
      </div>

      <div className="samResumeList">
        {resumes.map(([name,href,desc],i)=>(
          <article key={name}>
            <div className="samResumeListNo">0{i+1}</div>
            <div className="samResumeListText">
              <h3>{name}</h3>
              <p>{desc}</p>
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
