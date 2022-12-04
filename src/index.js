import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";

function content() {
  const content = document.querySelector("#content");

  const testTodoItem = TodoItem("make macaroni");
  content.appendChild(testTodoItem);

  const footer = Footer();
  content.appendChild(footer);

  return content;
}

document.body.appendChild(content());
