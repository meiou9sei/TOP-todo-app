import { projectsArray } from "./Projects";

// empty this later and have a fetch from storage option
const todoItemsArray = [
  {
    id: 1,
    project: "cooking",
    title: "make macaroni",
    description: "I'm gonna make some yummy macaroni tonight",
    dueDate: "2023-03-24",
    priority: 2,
    complete: false,
  },
  {
    id: 2,
    project: "inbox",
    title: "check email",
    description: "gotta delete some spam mail",
    dueDate: "2023-04-22",
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
    if (todoItem.project == projectsArray.find(({ active }) => active).name)
      todosList.appendChild(TodoItems(todoItem));
  });

  setUpEditButtons();
}

function setupNewTodoButton() {
  const submitNewTodo = document.querySelector("#submit-new-todo");
  submitNewTodo.addEventListener("click", (e) => addNewTodoItem(e));
}

function setUpEditButtons() {
  // set up flag so can't edit more than 1 at a time
  let isCurrentlyEditingTodo = false;
  const todoItemsLI = document.querySelectorAll(".todoItem");
  console.log(todoItemsLI);
  todoItemsLI.forEach((todoItemLI) => {
    const todoItemID = todoItemLI.querySelector("input").id;
    console.log(todoItemID);
    const todoObject = todoItemsArray.find((obj) => obj.id == todoItemID);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Todo";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", (e) => {
      if (isCurrentlyEditingTodo) {
        //display warning
        const warning = document.createElement("div");
        warning.classList.add("warning");
        warning.textContent = "Can only edit 1 todo at a time!";
        document.querySelector(".edit-todo").appendChild(warning);
        setTimeout(() => {
          document.querySelector(".edit-todo").removeChild(warning);
        }, 5000);
        return;
      } else isCurrentlyEditingTodo = true;
      // this is not best practices lmao, but it's fine, this is a small project w/ a deadline
      const todoItemContainer = editButton.parentElement.parentElement;
      todoItemContainer.removeChild(todoItemLI);
      // cloning and filling in relevant details
      // prettier-ignore
      const editTodoItemTemplate = document.getElementById("editTodoItem-template");
      // prettier-ignore
      const todoItemEditor = document.importNode(editTodoItemTemplate.content, true);
      /***********************  fill out info ******************************/
      const newTodoTitle = todoItemEditor.querySelector("#new-todo-title");
      newTodoTitle.value = todoObject.title;
      // prettier-ignore
      const newTodoDescription = todoItemEditor.querySelector("#new-todo-description");
      newTodoDescription.value = todoObject.description;
      const newTodoDueDate = todoItemEditor.querySelector("#new-todo-dueDate");
      newTodoDueDate.value = todoObject.dueDate;
      // prettier-ignore
      const newTodoPriority = todoItemEditor.querySelector("#new-todo-priority");
      newTodoPriority.value = todoObject.priority;
      // prettier-ignore
      const newTodoProject = todoItemEditor.querySelector("#new-todo-project");
      projectsArray.forEach((projectItem) => {
        const option = document.createElement("option");
        option.value = projectItem.name;
        option.textContent = projectItem.name;
        newTodoProject.appendChild(option);
      });
      newTodoProject.value = todoObject.project;
      // save button updates local active data
      const saveEditBtn = todoItemEditor.querySelector(".save-edit-button");
      saveEditBtn.addEventListener("click", (e) => {
        e.preventDefault();
        todoObject.title = newTodoTitle.value;
        todoObject.description = newTodoDescription.value;
        todoObject.dueDate = newTodoDueDate.value;
        todoObject.priority = newTodoPriority.value;
        todoObject.project = newTodoProject.value;
        updateAndRender();
      });
      // cancel button does nothing, just exits
      const cancelEditBtn = todoItemEditor.querySelector(".cancel-edit-button");
      cancelEditBtn.addEventListener("click", (e) => {
        e.preventDefault();
        updateAndRender();
      });

      todoItemContainer.appendChild(todoItemEditor);
    });
    todoItemLI.appendChild(editButton);
  });
}

function TodoItems(todoItem) {
  const todoItemTemplate = document.getElementById("todoItem-template");
  const todoItemElement = document.importNode(todoItemTemplate.content, true);
  const checkbox = todoItemElement.querySelector("input");
  checkbox.id = todoItem.id;
  checkbox.checked = todoItem.complete;
  checkbox.addEventListener("click", () => {
    todoItem.complete = !todoItem.complete;
  });
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
  let project = projectsArray.find(({ active }) => active).name;
  let title = document.querySelector("#new-todo-title").value;
  let description = document.querySelector("#new-todo-description").value;
  let dueDate = document.querySelector("#new-todo-dueDate").value;
  let priority = document.querySelector("#new-todo-priority").value;

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

export { renderNewData as renderNewTodos };
