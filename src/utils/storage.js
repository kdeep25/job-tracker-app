const KEY = "jobs";

export const getJobs = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveJobs = (jobs) => {
  localStorage.setItem(KEY, JSON.stringify(jobs));
};
