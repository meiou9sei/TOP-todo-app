export default function TodoItem(todoItem) {
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
