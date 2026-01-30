export default function SkillCard({ skill, remove }) {
  const levelColors = {
    Learned: "bg-green-100 text-green-700",
    Learning: "bg-yellow-100 text-yellow-700",
    "Want to Learn": "bg-pink-100 text-pink-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex justify-between items-center hover:shadow-lg transition">

      <div>
        <h3 className="font-semibold">{skill.name}</h3>
        <p className="text-sm text-gray-500">{skill.source}</p>

        <span
          className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${levelColors[skill.level]}`}
        >
          {skill.level}
        </span>
      </div>

      <button
        onClick={() => remove(skill.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}
