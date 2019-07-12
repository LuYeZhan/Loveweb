'use strict'

function Loading(parentElement){
  this.parentElement = parentElement;
  this.elements = null
}

Loading.prototype.generate = function(){
  this.elements = `
  <video id="media" src="./videos/loading.mp4" muted="muted" autoplay="autoplay" loop></video>
  `;
  this.render();
}
Loading.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}