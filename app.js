'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  totalArry: [],
  grandTotal: 0,

  custRand: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  genCookie: function() {
    for (let i =0; i < hours.length; i++) {
      let cook = this.avgCookie * this.custRand();
      let roundCookies = Math.round(cook);
      this.totalArry.push(roundCookies);
      this.grandTotal += roundCookies;
      console.log(this.totalArry, this.grandTotal);
    }
  },
  display: function() {
    this.genCookie();
    let section = document.getElementById('data');


    let titleCity = document.createElement('h2');
    titleCity.textContent = this.name;
    section.appendChild(titleCity);

    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i = 0; i < hours.length; i++){
      let entry = document.createElement('li');
      entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
      list.appendChild(entry);
    }
    let totalEntry = document.createElement('li');
    totalEntry.textContent = 'Total: ' + this.grandTotal;
    list.appendChild(totalEntry);
  }
};


let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  totalArry: [],
  grandTotal: 0,

  custRand: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  genCookie: function() {
    for (let i =0; i < hours.length; i++) {
      let cook = this.avgCookie * this.custRand();
      let roundCookies = Math.round(cook);
      this.totalArry.push(roundCookies);
      this.grandTotal += roundCookies;
      console.log(this.totalArry, this.grandTotal);
    }
  },
  display: function() {
    this.genCookie();
    let section = document.getElementById('data');


    let titleCity = document.createElement('h2');
    titleCity.textContent = this.name;
    section.appendChild(titleCity);

    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i = 0; i < hours.length; i++){
      let entry = document.createElement('li');
      entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
      list.appendChild(entry);
    }
    let totalEntry = document.createElement('li');
    totalEntry.textContent = 'Total: ' + this.grandTotal;
    list.appendChild(totalEntry);

  }
};
let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  totalArry: [],
  grandTotal: 0,

  custRand: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  genCookie: function() {
    for (let i =0; i < hours.length; i++) {
      let cook = this.avgCookie * this.custRand();
      let roundCookies = Math.round(cook);
      this.totalArry.push(roundCookies);
      this.grandTotal += roundCookies;
      console.log(this.totalArry, this.grandTotal);
    }
  },
  display: function() {
    this.genCookie();
    let section = document.getElementById('data');


    let titleCity = document.createElement('h2');
    titleCity.textContent = this.name;
    section.appendChild(titleCity);

    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i = 0; i < hours.length; i++){
      let entry = document.createElement('li');
      entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
      list.appendChild(entry);
    }
    let totalEntry = document.createElement('li');
    totalEntry.textContent = 'Total: ' + this.grandTotal;
    list.appendChild(totalEntry);
  }
};
let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  totalArry: [],
  grandTotal: 0,

  custRand: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  genCookie: function() {
    for (let i =0; i < hours.length; i++) {
      let cook = this.avgCookie * this.custRand();
      let roundCookies = Math.round(cook);
      this.totalArry.push(roundCookies);
      this.grandTotal += roundCookies;
      console.log(this.totalArry, this.grandTotal);
    }
  },
  display: function() {
    this.genCookie();
    let section = document.getElementById('data');


    let titleCity = document.createElement('h2');
    titleCity.textContent = this.name;
    section.appendChild(titleCity);

    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i = 0; i < hours.length; i++){
      let entry = document.createElement('li');
      entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
      list.appendChild(entry);
    }
    let totalEntry = document.createElement('li');
    totalEntry.textContent = 'Total: ' + this.grandTotal;
    list.appendChild(totalEntry);
  }
};
let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  totalArry: [],
  grandTotal: 0,

  custRand: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  genCookie: function() {
    for (let i =0; i < hours.length; i++) {
      let cook = this.avgCookie * this.custRand();
      let roundCookies = Math.round(cook);
      this.totalArry.push(roundCookies);
      this.grandTotal += roundCookies;
      console.log(this.totalArry, this.grandTotal);
    }
  },
  display: function() {
    this.genCookie();
    let section = document.getElementById('data');


    let titleCity = document.createElement('h2');
    titleCity.textContent = this.name;
    section.appendChild(titleCity);

    let list = document.createElement('ul');
    section.appendChild(list);
    for (let i = 0; i < hours.length; i++){
      let entry = document.createElement('li');
      entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
      list.appendChild(entry);
    }
    let totalEntry = document.createElement('li');
    totalEntry.textContent = 'Total: ' + this.grandTotal;
    list.appendChild(totalEntry);

  }
};

seattle.display();
tokyo.display();
dubai.display();
paris.display();
lima.display();
