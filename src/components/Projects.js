export const projectsArray = [
  {
    id: 0,
    name: "inbox",
    active: true,
  },
  {
    id: 1,
    name: "cooking",
    active: false,
  },
];

export default function displayProjects() {
  renderNewData();
}

function renderNewData() {
  const projectsListContainer = document.querySelector(
    ".projects-list-container"
  );

  while (projectsListContainer.hasChildNodes()) {
    projectsListContainer.removeChild(projectsListContainer.firstChild);
  }

  const projectsList = document.createElement("ul");
  projectsList.classList.add("projects-list");
  projectsArray.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.textContent = project.name;
    projectItem.setAttribute("id", project.id);
    projectItem.addEventListener("click", () => {
      projectsArray.forEach((proj) => {
        if (proj.id === project.id) proj.active = true;
        else proj.active = false;
      });
      renderNewData();
    });
    project.active
      ? projectItem.classList.add("active-project")
      : projectItem.classList.remove("active-project");
    projectsList.appendChild(projectItem);
  });

  projectsListContainer.appendChild(projectsList);
}
