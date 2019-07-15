'use strict';

class EndPage{
  constructor(parentElement){
    this.parentElement = parentElement;
    this.elements = null;
    this.users= null;
    this.loading = null;
    }
    async generate(){
      this.loading = new Loading(this.parentElement);
      this.loading.generate();
      await this.connectToAPI();
      this.elements = `
        <header>
          <h2>I'ts a Match!</h2>
          <video id="media" src="./videos/end.mp4" muted="muted" autoplay="autoplay" loop></video>
        </header>
        <section class="endpage-section">
      `;
      this.users.forEach((users) => {
        if (users.dob.age > 35){
         users.dob.age = Math.floor(Math.random() * 8 + 25);
        };
        this.elements += `
         
            <h3>${users.name.title} ${users.name.first} ${ users.name.last}</h3>
            <div><img src="${users.picture.large}"></img></div>
            <p class="top-p">${users.gender}</p>
            <p>${users.dob.age}</p>
            <p>${users.nat}</p>
            <p>${users.location.street}</p>
            <p>${users.location.city}</p>
            <p class="phone">${users.email}</p>
            <p class="phone">${users.cell}</p>
          
        `;
      })
      this.elements += `
      </section>`
      this.render();
    }
    render () {
      this.parentElement.innerHTML = this.elements;
    }
    async connectToAPI() {
      this.users= await loveServiceInstance.getAllUsers();
    }
}