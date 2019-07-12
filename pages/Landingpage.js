'use strict';

function LandingPage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function(){
  this.elements = `
    <header>
    <h1>Lovapp</h1>
    <video id="media" src="./videos/intro.mp4" muted="muted" autoplay="autoplay" loop></video>
    </header>
  `;
  this.render();

}

LandingPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}