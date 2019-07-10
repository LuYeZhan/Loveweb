'use strict';

function LandingPage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function(){
  this.elements = `
    <header>
    <h1>Love is all you need</h1>
    <h2>Random stupid love quote </h2>
    </header>
  `;
  this.render();
}

LandingPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;

}