'use strict';

function Mainbar(parentElement,links,style){
  this.parentElement = parentElement;
  this.links = links;
  this.style = style;
  this.elements = null;
}

Mainbar.prototype.generate = function() {
  // generar dinamicamente los elementos
  this.elements = `
  <main>
    <ul> `;
  this.links.forEach((link) => {
    this.elements += `
    <li>
      <a href="#0" url = ${link.url}> <button  url = ${link.url}></button> ${link.name} </a>
    </li>
    `;
  });
  this.elements += `
    </ul>
  </main>
  `;
  this.render();
}

Mainbar.prototype.render = function() {
// add elements to DOM
  this.parentElement.innerHTML = this.elements;
}