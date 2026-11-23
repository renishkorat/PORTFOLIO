
function Skills() {
  const skills = [
    { name: "C Language", percentages: 75 },
    { name: "HTML5", percentages: 95 },
    { name: "CSS3", percentages: 92 },
    { name: "Tailwind CSS", percentages: 89 },
    { name: "Bootstrap", percentages: 85 },
    { name: "React js", percentages: 90 },
  ];

  return (
    <section
      id="skills"
      className="relative mt-8 overflow-hidden rounded-lg bg-gradient-to-br from-[#2B0A16] via-[#641E35] to-[#9F1239] px-4 py-14 text-white sm:px-6 sm:py-20"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#FB7185]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold sm:mb-16 sm:text-5xl">
          My <span className="text-[#FB7185]">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:gap-y-10">

          {skills.map((skill) => (
            <div key={skill.name}>

              {/* Skill Name */}
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-rose-100 sm:text-base">
                  {skill.name}
                </span>

                <span className="text-sm font-semibold text-[#FB7185] sm:text-base">
                  {skill.percentages}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 overflow-hidden rounded-full bg-[#2B0A16]/80">
                <div
                  className="h-full rounded-full bg-[#FB7185] shadow-[0_0_12px_rgba(251,113,133,0.45)] transition-all duration-700"
                  style={{ width: `${skill.percentages}%` }}
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
