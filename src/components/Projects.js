const projectsArray = [
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
  const projectsListContainer = document.querySelector(
    ".projects-list-container"
  );
  const projectsList = Project(projectsArray);
  projectsListContainer.appendChild(projectsList);
}

function Project(projectsArray) {
  const projectElement = document.createElement("ul");
  projectElement.classList.add("projects-list");
  projectsArray.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.textContent = project.name;
    projectItem.setAttribute("id", project.id);
    project.active
      ? projectItem.classList.add("active-project")
      : projectItem.classList.remove("active-project");
    projectElement.appendChild(projectItem);
  });

  //make it clickable I think

  return projectElement;
}
