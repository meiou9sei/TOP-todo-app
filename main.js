(()=>{"use strict";var r={28:(r,e,n)=>{n.d(e,{Z:()=>d});var t=n(81),o=n.n(t),i=n(645),a=n.n(i)()(o());a.push([r.id,"html {\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n\r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* CSS RESET ^ */\r\n\r\n:root {\r\n    --primary: #138cb1;\r\n    --primary-dark: #1b4079;\r\n    --primary-light: #30bda1;\r\n    --secondary: #cbdf90;\r\n    --secondary-dark: #73d85c; \r\n    --round-border: 10px;\r\n\r\n    --priority-1: red; \r\n    --priority-2: orangered;\r\n    --priority-3: orange;\r\n    --priority-4: yellow;\r\n}\r\n\r\nbutton,\r\ninput, \r\nselect {\r\n  padding: 4px;\r\n  margin: 4px;\r\n  border: none;\r\n  border-radius: var(--round-border);\r\n}\r\n\r\nselect {\r\n  background-color: white;\r\n}\r\n\r\n.projects button {\r\n  background-color: var(--primary-dark);\r\n  color: white;\r\n}\r\n\r\n.projects button:hover {\r\n  background-color: var(--primary);\r\n  cursor: pointer;\r\n  color: black;\r\n}\r\n\r\n.todos button {\r\n  background-color: var(--secondary-dark);\r\n  color: black;\r\n}\r\n\r\n.todos button:hover {\r\n  background-color: var(--primary);\r\n  cursor: pointer;\r\n  color: black;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: var(--primary-dark);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 25px;\r\n  background-color: var(--primary);\r\n  color: white;\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid: \r\n    '. projects . todos .' auto /\r\n    1fr minmax(100px, 2fr) 1fr minmax(300px, 5fr) 1fr;\r\n  background-color: var(--primary-dark);\r\n  padding: 16px;\r\n  width: 100%;\r\n  max-width: 1920px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.projects {\r\n  grid-area: projects;\r\n  background-color: var(--primary-light);\r\n  padding: 16px;\r\n  box-shadow: 8px 8px var(--primary);\r\n\r\n  align-self: start;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.projects-list li {\r\n  padding: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.projects-list li:hover {\r\n  background-color: rgba(19, 140, 177, 0.5);\r\n  border-radius: var(--round-border);\r\n}\r\n\r\n.active-project {\r\n  font-weight: bold;\r\n  background-color: var(--primary);\r\n  border-radius: var(--round-border);\r\n}\r\n\r\n.new-project-adder {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.mass-delete-functions {\r\n  margin-top: 1rem;\r\n  display: flex;\r\n}\r\n\r\n.todos {\r\n  grid-area: todos;\r\n  background-color: var(--secondary);\r\n  padding: 16px;\r\n  box-shadow: 8px 8px var(--secondary-dark);\r\n}\r\n\r\n.todoItemContainer {\r\n  margin: 4px;\r\n  padding: 4px;\r\n  background-color: var(--primary-light);\r\n  border-radius: var(--round-border);\r\n}\r\n\r\n.todoItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todoItem-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.checkbox-round {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  border-radius: 50%;\r\n  border: 4px solid white;\r\n  vertical-align: middle;\r\n  appearance: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox-round:checked {\r\n  background-color: var(--primary-dark);\r\n  border: 4px solid white;\r\n}\r\n\r\n.completed-todo {\r\n  opacity: 50%;\r\n}\r\n\r\n.todoItem-title {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.todoItem-details-container {\r\n  margin: 0 27px;\r\n}\r\n\r\n.todoItem-details-footer {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todoItem-dueDate,\r\n.todoItem-priority {\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.priority {\r\n  border-radius: var(--round-border);\r\n  padding: 4px;\r\n}\r\n\r\n.priority-1 {\r\n  background-color: var(--priority-1);\r\n}\r\n\r\n.priority-2 {\r\n  background-color: var(--priority-2);\r\n}\r\n\r\n.priority-3 {\r\n  background-color: var(--priority-3);\r\n}\r\n\r\n.priority-4 {\r\n  background-color: var(--priority-4);\r\n}\r\n\r\n.edit-button,\r\n.delete-button {\r\n  width: 25%;\r\n  align-self: center;\r\n}\r\n\r\n.new-todo-adder {\r\n  margin-top: 36px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.warning {\r\n  background-color: lightcoral;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  padding: 16px;\r\n  align-self: center;\r\n  border-radius: 10px;\r\n  margin: 8px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  padding: 8px;\r\n  background-color: var(--primary);\r\n  color: black;\r\n  text-align: center;\r\n  margin-top: auto;\r\n}\r\n\r\nfooter a {\r\n  color: var(--secondary);\r\n  text-decoration: none;\r\n}\r\n\r\nfooter a:hover {\r\n  color: var(--secondary-dark);\r\n}",""]);const d=a},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<r.length;l++){var s=[].concat(r[l]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var i={},a=[],d=0;d<r.length;d++){var c=r[d],l=t.base?c[0]+t.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var v=o(m,t);t.byIndex=d,e.splice(d,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function o(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var d=n(i[a]);e[d].references--}for(var c=t(r,o),l=0;l<i.length;l++){var s=n(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},569:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},795:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return r[t](i,i.exports,n),i.exports}n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),n.nc=void 0,(()=>{var r=n(379),e=n.n(r),t=n(795),o=n.n(t),i=n(569),a=n.n(i),d=n(565),c=n.n(d),l=n(216),s=n.n(l),u=n(589),p=n.n(u),m=n(28),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=s(),e()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const f="todo.projects",y=JSON.parse(localStorage.getItem(f))||[{id:0,name:"inbox",active:!0}];function h(){localStorage.setItem(f,JSON.stringify(y)),g()}function g(){const r=document.querySelector(".projects-list-container");for(;r.hasChildNodes();)r.removeChild(r.firstChild);const e=document.createElement("ul");e.classList.add("projects-list"),y.forEach((r=>{const n=document.createElement("li");n.textContent=r.name,n.setAttribute("id",r.id),n.addEventListener("click",(()=>{y.forEach((e=>{e.id===r.id?e.active=!0:e.active=!1})),h(),w()})),r.active?n.classList.add("active-project"):n.classList.remove("active-project"),e.appendChild(n)})),r.appendChild(e)}const b="todo.todos",x=JSON.parse(localStorage.getItem(b))||[];function S(){localStorage.setItem(b,JSON.stringify(x)),w()}function w(){const r=document.querySelector(".todos-container");for(;r.hasChildNodes();)r.removeChild(r.firstChild);x.forEach((e=>{e.project==y.find((({active:r})=>r)).name&&r.appendChild(function(r){const e=document.getElementById("todoItem-template"),n=document.importNode(e.content,!0),t=n.querySelector("input");t.id=r.id,t.checked=r.complete,t.addEventListener("click",(()=>{r.complete=!r.complete;const e=document.getElementById(r.id).parentElement.parentElement;r.complete?e.classList.add("completed-todo"):e.classList.remove("completed-todo")}));const o=n.querySelector(".todoItem");r.complete&&o.classList.add("completed-todo");const i=n.querySelector("label");i.htmlFor=r.id,i.append(r.title),n.querySelector(".todoItem-description").append(r.description),n.querySelector(".todoItem-dueDate").append(r.dueDate);const a=n.querySelector(".todoItem-priority");return a.classList.add("priority"),a.classList.add(`priority-${r.priority}`),a.append(r.priority),n}(e))})),function(){let r=!1;document.querySelectorAll(".todoItem").forEach((e=>{const n=e.querySelector("input").id,t=x.find((r=>r.id==n)),o=document.createElement("button");o.textContent="Edit Todo",o.classList.add("edit-button"),o.addEventListener("click",(n=>{if(r){const r=document.createElement("div");return r.classList.add("warning"),r.textContent="Can only edit 1 todo at a time!",document.querySelector(".edit-todo").appendChild(r),void setTimeout((()=>{document.querySelector(".edit-todo").removeChild(r)}),5e3)}r=!0;const i=o.parentElement.parentElement;i.removeChild(e);const a=document.getElementById("editTodoItem-template"),d=document.importNode(a.content,!0),c=d.querySelector("#new-todo-title");c.value=t.title;const l=d.querySelector("#new-todo-description");l.value=t.description;const s=d.querySelector("#new-todo-dueDate");s.value=t.dueDate;const u=d.querySelector("#new-todo-priority");u.value=t.priority;const p=d.querySelector("#new-todo-project");y.forEach((r=>{const e=document.createElement("option");e.value=r.name,e.textContent=r.name,p.appendChild(e)})),p.value=t.project,d.querySelector(".save-edit-button").addEventListener("click",(r=>{r.preventDefault(),t.title=c.value,t.description=l.value,t.dueDate=s.value,t.priority=u.value,t.project=p.value,S()})),d.querySelector(".cancel-edit-button").addEventListener("click",(r=>{r.preventDefault(),S()})),i.appendChild(d)})),e.appendChild(o)}))}(),document.querySelectorAll(".todoItem").forEach((r=>{const e=r.querySelector("input").id,n=document.createElement("button");n.textContent="Delete Todo",n.classList.add("delete-button"),n.addEventListener("click",(()=>k(e))),r.appendChild(n)}))}function k(r){const e=x.findIndex((e=>e.id===r));x.splice(e,1),S()}document.querySelector("#submit-new-todo").addEventListener("click",(r=>function(r){r.preventDefault();let e=y.find((({active:r})=>r)).name,n=document.querySelector("#new-todo-title").value,t=document.querySelector("#new-todo-description").value,o=document.querySelector("#new-todo-dueDate").value,i=document.querySelector("#new-todo-priority").value;if(!n){const r=document.createElement("div");return r.classList.add("warning"),r.textContent="Give your Todo a name!",document.querySelector(".new-todo-adder").appendChild(r),void setTimeout((()=>{document.querySelector(".new-todo-adder").removeChild(r)}),5e3)}let a={id:Date.now().toString(),project:e,title:n,description:t,dueDate:o,priority:i};document.querySelector(".new-todo-adder").reset(),x.push(a),S()}(r))),document.querySelector("#delete-completed-todos").addEventListener("click",(()=>{x.filter((r=>r.project===y.find((({active:r})=>r)).name)).filter((r=>r.complete)).forEach((r=>k(r.id)))})),document.querySelector("#delete-selected-project").addEventListener("click",(()=>{if(0===y.find((({active:r})=>r)).id){const r=document.createElement("div");return r.classList.add("warning"),r.textContent="Cannot delete Inbox!",document.querySelector(".mass-delete-functions-container").append(r),void setTimeout((()=>{document.querySelector(".mass-delete-functions-container").removeChild(r)}),5e3)}x.filter((r=>r.project===y.find((({active:r})=>r)).name)).forEach((r=>k(r.id)));const r=y.findIndex((r=>r.active));y.splice(r,1),h()})),w(),document.querySelector("#submit-new-project").addEventListener("click",(r=>function(r){r.preventDefault();let e=document.querySelector("#new-project-title").value;if(!e){const r=document.createElement("div");return r.classList.add("warning"),r.textContent="Must give project name!",document.querySelector(".new-project-adder").appendChild(r),void setTimeout((()=>{document.querySelector(".new-project-adder").removeChild(r)}),5e3)}let n={id:Date.now().toString(),name:e,active:!1};document.querySelector(".new-project-adder").reset(),y.push(n),h()}(r))),g()})()})();