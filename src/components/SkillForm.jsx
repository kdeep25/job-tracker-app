import { useState } from "react";

export default function SkillForm({ addSkill }) {
  const [skill, setSkill] = useState({
    name: "",
    level: "Learning",
    source: "Online Course",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill(skill);
    setSkill({ name: "", level: "Learning", source: "Online Course" });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="font-semibold mb-4">Add Skill</h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-3">

        <input
          className="border rounded p-2"
          placeholder="Skill name"
          value={skill.name}
          onChange={(e) => setSkill({ ...skill, name: e.target.value })}
        />

        <select
          className="border rounded p-2"
          value={skill.level}
          onChange={(e) => setSkill({ ...skill, level: e.target.value })}
        >
          <option>Learned</option>
          <option>Learning</option>
          <option>Want to Learn</option>
        </select>

        <select
          className="border rounded p-2"
          value={skill.source}
          onChange={(e) => setSkill({ ...skill, source: e.target.value })}
        >
          <option>College</option>
          <option>Internship</option>
          <option>Job</option>
          <option>Udemy</option>
          <option>Coursera</option>
          <option>NPTEL</option>
          <option>Self Learning</option>
        </select>

        <button className="md:col-span-3 bg-primary text-white rounded p-2 hover:opacity-90">
          Add Skill
        </button>
      </form>
    </div>
  );
}
