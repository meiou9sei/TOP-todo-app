import Footer from "./components/Footer";

function content() {
  const content = document.querySelector("#content");

  const footer = Footer();
  content.appendChild(footer);

  return content;
}

document.body.appendChild(content());
