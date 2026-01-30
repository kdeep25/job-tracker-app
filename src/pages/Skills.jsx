import { useState, useEffect } from "react";
import SkillForm from "../components/SkillForm";
import SkillCard from "../components/SkillCard";
import { getSkills, saveSkills } from "../utils/skillsStorage";

export default function Skills() {
  const [skills, setSkills] = useState(() => getSkills());

  useEffect(() => {
    saveSkills(skills);
  }, [skills]);

  const addSkill = (skill) => {
    setSkills([...skills, { ...skill, id: Date.now() }]);
  };

  const remove = (id) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-primary">Skills Tracker</h1>

      <SkillForm addSkill={addSkill} />

      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} remove={remove} />
        ))}
      </div>
    </div>
  );
}
