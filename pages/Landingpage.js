'use strict';

class LandingPage {
  constructor(parentElement){
    this.parentElement = parentElement;
    this.elements = null;
  }
  generate(){
    this.elements = `
    <header>
    <h1>Lovapp</h1>
    <video id="media" src="./videos/intro.mp4" muted="muted" autoplay="autoplay" loop></video>
    </header>
  `;
    this.render();
  }
  render(){
    this.parentElement.innerHTML = this.elements;
  }
}