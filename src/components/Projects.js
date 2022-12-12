import { renderNewTodos } from "./TodoItems";

const LOCAL_STORAGE_PROJECT_KEY = "todo.projects";

export const projectsArray = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)
) || [
  {
    id: 0,
    name: "inbox",
    active: true,
  },
];

export default function displayProjects() {
  setupNewProjectButton();
  renderNewData();
}

function updateAndRender() {
  updateData();
  renderNewData();
}

function updateData() {
  // this function adds data to localStorage
  localStorage.setItem(
    LOCAL_STORAGE_PROJECT_KEY,
    JSON.stringify(projectsArray)
  );
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
      updateAndRender();
      renderNewTodos();
    });
    project.active
      ? projectItem.classList.add("active-project")
      : projectItem.classList.remove("active-project");
    projectsList.appendChild(projectItem);
  });

  projectsListContainer.appendChild(projectsList);
}

function setupNewProjectButton() {
  const submitNewProject = document.querySelector("#submit-new-project");
  submitNewProject.addEventListener("click", (e) => addNewProjectItem(e));
}

function addNewProjectItem(e) {
  e.preventDefault();
  let name = document.querySelector("#new-project-title").value;
  let newProject = {
    id: Date.now().toString(),
    name: name,
    active: false,
  };
  document.querySelector(".new-project-adder").reset();
  projectsArray.push(newProject);
  updateAndRender();
}

export { updateAndRender as updateAndRenderProjects };
