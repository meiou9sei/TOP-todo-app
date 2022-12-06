import "./styles.css";

import TodoItems from "./components/TodoItems";
import Projects from "./components/Projects";

//test data to delete later
import { todoItemsArray, projectsArray } from "./testData";

function displayContent() {
  // prob separate these into their own util functions / modules later

  //displays projects - just pass in all the arrays
  const projectsListContainer = document.querySelector(
    ".projects-list-container"
  );
  const projectsList = Projects(projectsArray);
  projectsListContainer.appendChild(projectsList);

  //displays todos
  const todosContainer = document.querySelector(".todos-container");
  todoItemsArray.forEach((todoItem) => {
    // worry about filtering them later
    // todoItem.project ===
    todosContainer.appendChild(TodoItems(todoItem));
  });

  return todosContainer;
}

displayContent();
