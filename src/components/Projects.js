export default function Project(projectsArray) {
  const projectElement = document.createElement("ul");
  projectElement.classList.add("project-item");
  console.log(projectsArray);
  projectsArray.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.textContent = project.name;
    projectItem.setAttribute("id", project.id);
    projectElement.appendChild(projectItem);
  });

  //make it clickable I think

  return projectElement;
}
