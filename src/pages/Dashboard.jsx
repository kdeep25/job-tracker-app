import { useState, useEffect } from "react";
import JobForm from "../components/JobForm";
import JobCard from "../components/JobCard";
import { getJobs, saveJobs } from "../utils/storage";
import { Search } from "lucide-react";

export default function Dashboard() {
  /* ================= STATE ================= */

  const [jobs, setJobs] = useState(() => getJobs());

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // NEW → for editing
  const [editingJob, setEditingJob] = useState(null);


  /* ================= STORAGE SYNC ================= */

  useEffect(() => {
    saveJobs(jobs);
  }, [jobs]);


  /* ================= CRUD LOGIC ================= */

  // CREATE
  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: Date.now() }]);
  };

  // UPDATE (NEW)
  const updateJob = (updated) => {
    const updatedJobs = jobs.map((j) =>
      j.id === updated.id ? updated : j
    );

    setJobs(updatedJobs);
    setEditingJob(null); // exit edit mode
  };

  // DELETE
  const remove = (id) => {
    setJobs(jobs.filter((j) => j.id !== id));
  };


  /* ================= FILTER LOGIC ================= */

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });


  /* ================= UI ================= */

  return (
    <div className="space-y-6">

      {/* ================= SEARCH BAR ================= */}
      <div className="bg-white p-4 rounded-2xl shadow flex gap-3 items-center">

        <div className="flex items-center border rounded-lg px-3 flex-1">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search company or role..."
            className="p-2 outline-none flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="border rounded-lg p-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>


      {/* ================= ADD / UPDATE FORM ================= */}
      <JobForm
        addJob={addJob}
        updateJob={updateJob}
        editingJob={editingJob}
      />


      {/* ================= JOB LIST ================= */}
      <div className="grid gap-4">

        {filteredJobs.length === 0 ? (
          <p className="text-gray-400 text-center mt-6">
            No applications found
          </p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              remove={remove}
              edit={setEditingJob}   // NEW → pass edit handler
            />
          ))
        )}

      </div>

    </div>
  );
}
