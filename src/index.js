import "./styles.css";

import displayTodos from "./components/TodoItems";
import displayProjects from "./components/Projects";

function runApp() {
  displayContent();
}

runApp();

// prob separate this into its own util function / module later
function displayContent() {
  displayTodos();
  displayProjects();
}
