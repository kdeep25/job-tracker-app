export default function JobCard({ job, remove, edit }) {
  const colors = {
    Applied: "bg-blue-100 text-blue-700",
    Interview: "bg-yellow-100 text-yellow-700",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  /* Open attached file (PDF/Image) */
  const openFile = () => {
    if (!job.file) return;

    const newTab = window.open();
    newTab.document.write(`
      <iframe 
        src="${job.file.data}" 
        frameborder="0" 
        style="width:100%;height:100%">
      </iframe>
    `);
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-secondary flex justify-between items-center">

      {/* LEFT SIDE - JOB INFO */}
      <div>
        <h2 className="text-lg font-semibold">{job.company}</h2>

        <p className="text-gray-500">{job.role}</p>

        <span
          className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${colors[job.status]}`}
        >
          {job.status}
        </span>

        {job.file && (
          <p className="text-xs text-gray-400 mt-1">
            📎 {job.file.name}
          </p>
        )}
      </div>


      {/* RIGHT SIDE - ACTION BUTTONS */}
      <div className="flex gap-4 text-sm">

        {job.file && (
          <button
            onClick={openFile}
            className="text-blue-600 hover:underline"
          >
            Open File
          </button>
        )}

        <button
          onClick={() => edit(job)}
          className="text-yellow-600 hover:underline"
        >
          Update
        </button>

        <button
          onClick={() => remove(job.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>

      </div>
    </div>
  );
}
