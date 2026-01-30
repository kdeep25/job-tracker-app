import { useEffect, useState } from "react";
import { getJobs } from "../utils/storage";
import { Briefcase, Clock, CheckCircle, XCircle } from "lucide-react";

export default function Stats() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(getJobs());
  }, []);

  const count = (status) =>
    jobs.filter((j) => j.status === status).length;

  const badgeColor = (status) => {
    const map = {
      Applied: "bg-blue-100 text-blue-700",
      Interview: "bg-yellow-100 text-yellow-700",
      Offer: "bg-green-100 text-green-700",
      Rejected: "bg-red-100 text-red-700",
    };
    return map[status];
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <h1 className="text-2xl font-bold text-primary">Application Statistics</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Applied" value={count("Applied")} icon={<Briefcase />} />
        <StatCard title="Interview" value={count("Interview")} icon={<Clock />} />
        <StatCard title="Offer" value={count("Offer")} icon={<CheckCircle />} />
        <StatCard title="Rejected" value={count("Rejected")} icon={<XCircle />} />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Added On</th>
            </tr>
          </thead>

          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-400">
                  No applications added yet
                </td>
              </tr>
            ) : (
              jobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium">{job.company}</td>
                  <td className="p-3">{job.role}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>
                  </td>

                  <td className="p-3 text-gray-500">
                    {new Date(job.id).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
}
