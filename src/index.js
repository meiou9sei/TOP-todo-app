import TodoItems from "./components/TodoItems";
import Projects from "./components/Projects";

let testTodoItem = {
  id: 1,
  project: "cooking",
  title: "make macaroni",
  description: "I'm gonna make some yummy macaroni tonight",
  dueDate: "24/03/2020",
  priority: 3,
  complete: false,
};

const projectsArray = [
  {
    id: 0,
    name: "inbox",
  },
  {
    id: 1,
    name: "cooking",
  },
];
//make inbox project id: 0 and delete stuff above 0
let testProject = {
  id: 5,
  name: "gardening",
};

function displayContent() {
  //displays projects - just pass in all the arrays
  const projectsListContainer = document.querySelector(
    ".projects-list-container"
  );
  const projectsList = Projects(projectsArray);
  projectsListContainer.appendChild(projectsList);

  //displays todos
  const todosContainer = document.querySelector(".todos-container");
  const currentlySelectedProject = TodoItems(testTodoItem);
  todosContainer.appendChild(currentlySelectedProject);

  return todosContainer;
}

displayContent();
