'use strict';

function Router () {
  this.page = null;
}

Router.prototype.buildDOM = function(url, parentElement) {
  switch (url) {
    case '/':
    this.generateLandingPage(parentElement);
    break;
    case '/love':
    this.generateLovePage(parentElement);
    break;
  default: 
    this.generateLandingPage(parentElement);
  }
}

Router.prototype.generateLandingPage = function (parentElement){
  this.page = new LandingPage (parentElement);
  this.page.generate();
}

Router.prototype.generateLovePage = function (parentElement){
  this.page = new LovePage (parentElement);
  this.page.generate();
}

// Router.prototype.generateEndPage = function (parentElement){
//   this.page = new EndPage (parentElement);
//   this.page.generate();
// }

var routerInstance = new Router();