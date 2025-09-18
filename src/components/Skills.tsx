import { frontendSkillsGroups, backendSkillsGroups } from "@/data/skillsData";

export default function Skills() {
  return (
    <>
      <section className="skills section" id="skills">
        <span className="section__subtitle">My Abilities</span>
        <h2 className="section__title">My Experience</h2>

        <div className="skills__container container grid">
          <div className="skills__content">
            <h3 className="skills__title">Frontend Development</h3>

            <div className="skills__box">
              {frontendSkillsGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="skills__group">
                  {group.map((skill, index) => (
                    <div key={index} className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">{skill.name}</h3>
                        <span className="skills__level">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="skills__content">
            <h3 className="skills__title">Backend Development</h3>

            <div className="skills__box">
              {backendSkillsGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="skills__group">
                  {group.map((skill, index) => (
                    <div key={index} className="skills__data">
                      <i className="bx bxs-badge-check"></i>
                      <div>
                        <h3 className="skills__name">{skill.name}</h3>
                        <span className="skills__level">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
