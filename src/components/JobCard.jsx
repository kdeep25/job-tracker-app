export default function JobCard({ job, remove }) {
  const colors = {
    Applied: "bg-blue-100 text-blue-700",
    Interview: "bg-yellow-100 text-yellow-700",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const openFile = () => {
    if (!job.file) return;

    const newTab = window.open();
    newTab.document.write(
      `<iframe src="${job.file.data}" frameborder="0" style="width:100%;height:100%"></iframe>`
    );
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-secondary flex justify-between items-center">

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

      <div className="flex gap-3">

        {job.file && (
          <button
            onClick={openFile}
            className="text-blue-600 hover:underline text-sm"
          >
            Open File
          </button>
        )}

        <button
          onClick={() => remove(job.id)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
