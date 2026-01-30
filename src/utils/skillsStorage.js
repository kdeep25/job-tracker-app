const KEY = "skills";

export const getSkills = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveSkills = (skills) => {
  localStorage.setItem(KEY, JSON.stringify(skills));
};
