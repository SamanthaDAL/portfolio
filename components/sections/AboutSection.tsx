import Icon from "@/components/ui/Icon";
import { site } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="samSection samAboutFlow">
      <div className="samAboutIntro">
        <span className="samLabel">04 / ABOUT</span>
        <h2>A little more about me.</h2>
        <p>{site.summary}</p>
        <p className="samAboutPlaceholder">
          [A warmer 100–150 word About Me will be written here later from Samantha&apos;s
          actual background. It will stay professional without sounding like another resume.]
        </p>
      </div>

      <div className="samAboutDivider"/>

      <div className="samAboutRows">
        <div className="samAboutRow">
          <div className="samAboutRowTitle"><Icon name="graduation" size={20}/><span>EDUCATION</span></div>
          <div><h3>[Degree]</h3><p>[University]</p><small>[Period]</small></div>
        </div>

        <div className="samAboutRow">
          <div className="samAboutRowTitle"><Icon name="code" size={20}/><span>MY TOOLKIT</span></div>
          <div className="samToolkitPills">
            <span>[Language]</span><span>[Frontend]</span><span>[Backend]</span>
            <span>[Database]</span><span>[Testing]</span><span>[Tools]</span>
          </div>
        </div>

        <div className="samAboutRow samAboutTwoCol">
          <div>
            <div className="samAboutRowTitle"><Icon name="book" size={20}/><span>LANGUAGES</span></div>
            <p>[Language — proficiency]</p><p>[Language — proficiency]</p>
          </div>
          <div>
            <div className="samAboutRowTitle"><Icon name="file" size={20}/><span>CERTIFICATIONS / ACHIEVEMENTS</span></div>
            <p>[Only meaningful items if available.]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
