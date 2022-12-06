import "./styles.css";

import displayTodos from "./components/TodoItems";
import Projects from "./components/Projects";

//test data to delete later
import { projectsArray } from "./testData";

function runApp() {
  displayContent();
}

runApp();

// prob separate this into its own util function / module later
function displayContent() {
  displayTodos();
  //displays projects - just pass in all the arrays
  const projectsListContainer = document.querySelector(
    ".projects-list-container"
  );
  const projectsList = Projects(projectsArray);
  projectsListContainer.appendChild(projectsList);
}
