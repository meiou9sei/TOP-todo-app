import TodoItems from "./components/TodoItems";
import Projects from "./components/Projects";

const todoItemsArray = [
  {
    id: 1,
    project: "cooking",
    title: "make macaroni",
    description: "I'm gonna make some yummy macaroni tonight",
    dueDate: "24/03/2023",
    priority: 2,
    complete: false,
  },
  {
    id: 2,
    project: "inbox",
    title: "check email",
    description: "gotta delete some spam mail",
    dueDate: "22/04/2023",
    priority: 4,
    complete: true,
  },
];

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
