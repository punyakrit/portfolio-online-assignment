import { useState } from "react";

function Skills({ data }: any) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill._id === selectedSkill ? null : skill._id);
  };

  return (
    <div className="flex flex-col items-center gap-6 my-12 px-4">
      <div className="mt-5 text-4xl font-bold text-white mb-4">Skills</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data.skills.map((skill: any) => (
          <div
            key={skill._id}
            className={`bg-violet-800 p-4 rounded-lg cursor-pointer ${
              selectedSkill === skill._id ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleSkillClick(skill)}
          >
            <img
              src={skill.image.url}
              alt={skill.name}
              className="h-24 w-24 mx-auto mb-4 rounded-full"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <h5 className="text-white ">Percentage: {skill.percentage}%</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
