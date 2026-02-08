import { useState, useEffect } from "react";

export default function JobForm({ addJob, updateJob, editingJob }) {
  const [job, setJob] = useState({
    company: "",
    role: "",
    status: "Applied",
    file: null,
  });

  /* When editing, pre-fill form */
  useEffect(() => {
    if (editingJob) {
      setJob(editingJob);
    }
  }, [editingJob]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setJob({
        ...job,
        file: {
          name: file.name,
          data: reader.result,
        },
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingJob) {
      updateJob(job); // update existing
    } else {
      addJob(job); // new job
    }

    setJob({
      company: "",
      role: "",
      status: "Applied",
      file: null,
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        {editingJob ? "Update Application" : "Add New Application"}
      </h2>

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

        <input
          type="file"
          accept="image/*,.pdf"
          className="border rounded p-2"
          onChange={handleFile}
        />

        <button className="md:col-span-2 bg-primary text-white rounded p-2">
          {editingJob ? "Save Changes" : "Add Job"}
        </button>
      </form>
    </div>
  );
}
