// empty this later and have a fetch from storage option
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

export default function displayTodos() {
  // add initial reading from JSON data later
  setupNewTodoButton();

  renderNewData();
}

function updateAndRender() {
  updateData();
  renderNewData();
}

function updateData() {
  // this function adds data to JSON
  console.log("updating");
}

function renderNewData() {
  const todosList = document.querySelector(".todos-container");
  // removes old list
  while (todosList.hasChildNodes()) {
    todosList.removeChild(todosList.firstChild);
  }
  // adds new todos with updated data
  todoItemsArray.forEach((todoItem) => {
    // worry about filtering them later
    // todoItem.project ===
    todosList.appendChild(TodoItems(todoItem));
  });
}

function setupNewTodoButton() {
  const submitNewTodo = document.querySelector("#submit-new-todo");
  submitNewTodo.addEventListener("click", (e) => addNewTodoItem(e));
}

function TodoItems(todoItem) {
  const todoItemTemplate = document.getElementById("todoItem-template");
  const todoItemElement = document.importNode(todoItemTemplate.content, true);
  const checkbox = todoItemElement.querySelector("input");
  checkbox.id = todoItem.id;
  checkbox.checked = todoItem.complete;
  const label = todoItemElement.querySelector("label");
  label.htmlFor = todoItem.id;
  label.append(todoItem.title);
  const description = todoItemElement.querySelector(".todoItem-description");
  description.append(todoItem.description);
  const dueDate = todoItemElement.querySelector(".todoItem-dueDate");
  dueDate.append(todoItem.dueDate);
  const priority = todoItemElement.querySelector(".todoItem-priority");
  priority.append(todoItem.priority);

  return todoItemElement;
}

function addNewTodoItem(e) {
  e.preventDefault();

  let project = document.querySelector(".active-project").textContent;
  let title = document.querySelector("#new-project-title").value;
  let description = document.querySelector("#new-project-description").value;
  let dueDate = document.querySelector("#new-project-dueDate").value;
  let priority = document.querySelector("#new-project-priority").value;

  // checks if input empty
  if (!title) {
    const warning = document.createElement("div");
    warning.classList.add("warning");
    warning.textContent = "Give your Todo a name!";
    document.querySelector(".new-todo-adder").appendChild(warning);
    setTimeout(() => {
      document.querySelector(".new-todo-adder").removeChild(warning);
    }, 5000);
    return;
  }

  let newTodo = {
    id: Date.now().toString(),
    project: project,
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
  };

  // clear form
  document.querySelector(".new-todo-adder").reset();

  todoItemsArray.push(newTodo);
  updateAndRender();
}
