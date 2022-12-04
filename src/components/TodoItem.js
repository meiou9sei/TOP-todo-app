export default function TodoItem(title /*, description, dueDate, priority*/) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  //parts of a todo item
  const todoTitle = document.createElement("h3");
  todoTitle.classList.add("todo-item-title");
  todoTitle.innerText = title;

  //attaching to master element
  todoItem.appendChild(todoTitle);

  return todoItem;
}
