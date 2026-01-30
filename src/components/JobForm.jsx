import { useState } from "react";

export default function JobForm({ addJob }) {
  const [job, setJob] = useState({
    company: "",
    role: "",
    status: "Applied",
    file: null,
  });

  /* Convert file → base64 */
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setJob({
        ...job,
        file: {
          name: file.name,
          data: reader.result, // base64 string
        },
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addJob(job);

    setJob({
      company: "",
      role: "",
      status: "Applied",
      file: null,
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add New Application</h2>

      <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2">

        <input
          className="border rounded p-2"
          placeholder="Company"
          value={job.company}
          onChange={(e) => setJob({ ...job, company: e.target.value })}
        />

        <input
          className="border rounded p-2"
          placeholder="Role"
          value={job.role}
          onChange={(e) => setJob({ ...job, role: e.target.value })}
        />

        <select
          className="border rounded p-2"
          value={job.status}
          onChange={(e) => setJob({ ...job, status: e.target.value })}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        {/* FILE INPUT */}
        <input
          type="file"
          accept="image/*,.pdf"
          className="border rounded p-2"
          onChange={handleFile}
        />

        <button className="md:col-span-2 bg-primary text-white rounded p-2 hover:opacity-90">
          Add Job
        </button>
      </form>
    </div>
  );
}
