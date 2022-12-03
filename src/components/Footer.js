export default function Footer() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p class="footer-text">Webpage created by <a href="https://github.com/meiou9sei" class="links" target=_blank>meiou9sei</a> as part of <a href="https://theodinproject.com" class="links" target=_blank>The Odin Project</a> course curriculum.</p>
    <p><small><a href=https://github.com/meiou9sei/TOP-todo-app class="links" target=_blank>See the code for this page</a></small></p> 
  `;
  return footer;
}
