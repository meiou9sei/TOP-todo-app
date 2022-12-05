import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";

let testTodoItem = {
  id: 1,
  title: "make macaroni",
  description: "I'm gonna make some yummy macaroni tonight",
  dueDate: "24/03/2020",
  priority: 3,
  complete: false,
};

function content() {
  const content = document.querySelector("#content");

  content.appendChild(TodoItem(testTodoItem));

  const footer = Footer();
  content.appendChild(footer);

  return content;
}

document.body.appendChild(content());
