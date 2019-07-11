'use strict';

function main(){
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var mainbarInstance = null;
  var rootElement = document.querySelector('#root');
  var links = [
    {name: '',
    url: '/',
    },
    {name: '',
    url: '/love',
    },
    // {name: '',
    // url: '/end',
    // }
  ];

var count = 0;
generateLayout();
generateMainbar();
addListenersToMainBar();
activateRouter();

function generateLayout(){
  layoutInstance = new Layout(rootElement);
  layoutInstance.generate();
}

function generateMainbar(){
  mainbarInstance = new Mainbar(layoutInstance.header, links);
  mainbarInstance.generate();
}
function addListenersToMainBar(){
  var anchors = document.querySelectorAll('#site-header li');
  var randomNumber = Math.floor(Math.random() * 8)

  anchors.forEach(function(anchor){
    
    anchor.addEventListener('click', function(e){changePage(e, randomNumber)})
  })
}
function activateRouter(){
  routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
}
function changePage(event, randomNumber){
  console.log(randomNumber, count);
  if(randomNumber === count){
    console.log('Match!')
    // this.generateEndPage(parentElement);
  } else {
    console.log("you ugly")
    count++
  }
  var url = event.target.attributes.url.value;
  routerInstance.buildDOM(url, layoutInstance.main);
}

}
window.addEventListener('load',main);