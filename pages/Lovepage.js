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
      <h2>Welcome to the Love page</h2>
    </header>
    <section class="cards-container">
  `;
  this.users.forEach((users) => {
    if (users.dob.age > 35){
     users.dob.age = Math.floor(Math.random() * 8 + 25);
    };
    this.elements += `
      <article>
        <h3>${users.name.first} ${ users.name.last}</h3>
        <img src="${users.picture.large}"></img>
        <p>${users.gender}</p>
        <p>${users.dob.age}</p>
        <p>${users.location.city}</p>
        <p>${users.nat}</p>
        <p class="mail">${users.email}</p>
        <p class="phone">${users.phone}</p>
      </article>  
    `;
  })
  this.elements += `</section>`
  this.render();
}

LovePage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;

}

LovePage.prototype.connectToAPI = async function() {
  this.users= await loveServiceInstance.getAllUsers();

}