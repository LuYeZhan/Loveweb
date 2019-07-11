'use strict';

function LovePage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
  this.users= null;
  this.loading = null;
}

LovePage.prototype.generate = async function(){
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  await this.connectToAPI();
  this.elements = `
    <header>
      <h2>love is all you need</h2>
    </header>
    <div class="div-header">
    <section class="love-section">
  `;
  this.users.forEach((users) => {
    if (users.dob.age > 35){
     users.dob.age = Math.floor(Math.random() * 8 + 25);
    };
    this.elements += `
      <article class="love-article">
        <h3>${users.name.first} ${ users.name.last}</h3>
        <img src="${users.picture.large}"></img>
        <p class="top-p">${users.gender}</p>
        <p>${users.dob.age}</p>
        <p>${users.location.city}</p>
        <p>${users.nat}</p>
       
      </article>  
    `;
    // va arriba <p class="phone">${users.phone}</p>
  })
  this.elements += `</div>
  </section>`
  this.render();
}

LovePage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}

LovePage.prototype.connectToAPI = async function() {
  this.users= await loveServiceInstance.getAllUsers();
}