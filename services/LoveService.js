'use strict';

function LoveService(){
  this.baseUrl = 'https://randomuser.me/api/'
}

LoveService.prototype.getAllUsers = async function(){
  var response = await fetch(`${this.baseUrl}`);
  var data = await response.json();
  console.log(data)
  return data.results;
}

var loveServiceInstance = new LoveService();