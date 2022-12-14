'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let table = document.getElementById('table');
let botRow = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let footer = document.getElementById('Foot');

function Store(name, minCust, maxCust, avgCookieCust, openTime, closeTime) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.custNum = [];
  this.avgCookieCust = avgCookieCust;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.totalSales = [];
  this.grandTotal = 0;
  this.total = 0;

  // // this.randomCustomersPerHour = function(){
  // //   for (let i =0; i < hours.length; i++) {
  // //     this.custNum.push(Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust)
  // //                       }
  // };
  // this.populateHoursOfOp();

}
Store.prototype.randomCustomersPerHour = function(){
  for (let i =0; i < hours.length; i++) {
    this.custNum.push(Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust);
  }
};
Store.prototype.generateCookie = function(){
  for (let i =0; i < hours.length; i++) {
    let randoNum = Math.floor(this.custNum[i] * this.avgCookieCust);
    this.totalSales.push(randoNum);
    this.grandTotal += randoNum;
    botRow[i] += randoNum;
  }
  console.log(this.grandTotal, botRow);
};


Store.prototype.display = function(){
  this.generateCookie();
  console.log(this.totalSales);
  let row = document.createElement('tr');
  table.appendChild(row);

  let heading = document.createElement('th');
  row.appendChild(heading);
  heading.textContent = this.name;

  for(let i =0; i < hours.length; i++) {
    let entry = document.createElement('td');
    entry.textContent = this.totalSales[i];
    row.appendChild(entry);
  }
  let totalSale = document.createElement('td');
  totalSale.textContent = this.grandTotal;
  row.appendChild(totalSale);
};

let newStore = document.getElementById('New-Store');


newStore.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event.target.Store.value);
  console.log(event.target.Min.value);
  console.log(event.target.Max.value);
  console.log(event.target.Cookie.value);



  let X = new Store(event.target.Store.value,+event.target.Min.value,+event.target.Max.value,+event.target.Cookie.value);
  X.randomCustomersPerHour();
  X.display();

  footer.textContent = '';
  footerRow();
}
);


let Seattle = new Store('Seattle', 23, 165, 6.3, '6am', '7pm');
Seattle.randomCustomersPerHour();
Seattle.display();
console.log(Seattle);

let Tokyo = new Store('Tokyo', 3, 24, 1.2, '6am', '7pm');
Tokyo.randomCustomersPerHour();
Tokyo.display();
console.log(Tokyo);

let Dubai = new Store('Dubai', 11, 38, 4.6, '6am', '7pm');
Dubai.randomCustomersPerHour();
Dubai.display();
console.log(Dubai);

let Paris = new Store('Paris', 20, 38, 2.3, '6am', '7pm');
Paris.randomCustomersPerHour();
Paris.display();
console.log(Paris);

let Lima = new Store('Lima', 2, 16, 4.6, '6am', '7pm');
Lima.randomCustomersPerHour();
Lima.display();
console.log(Lima);





display();

function display(){
  let header = document.createElement('thead');
  table.appendChild(header);
  let row = document.createElement('tr');
  header.appendChild(row);
  let city = document.createElement('td');
  row.appendChild(city);

  for (let i =0; i < hours.length; i++){
    let time = document.createElement('th');
    time.textContent = hours[i];
    row.appendChild(time);
  }
  let totalLabel = document.createElement('th');
  totalLabel.textContent = 'Total';
  row.appendChild(totalLabel);
}

function footerRow (){
  let row = document.createElement('tr');
  footer.appendChild(row);
  let cell = document.createElement('td');
  cell.textContent = 'Total';
  row.appendChild(cell);
  console.log(botRow);

  let finalValue =0;

  for (let i =0; i < hours.length; i++){
    let hourTD = document.createElement('td');
    hourTD.textContent = botRow[i];
    finalValue+= botRow[i];
    row.appendChild(hourTD);
  }
  let grandTotal = document.createElement('td');
  grandTotal.textContent = finalValue;
  row.appendChild(grandTotal);
}
footerRow();














// seattle.display();
// tokyo.display();
// dubai.display();
// paris.display();
// lima.display();

// let seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     totalArry: [],
//     grandTotal: 0,
  
//     custRand: function(){
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     },
//     genCookie: function() {
//       for (let i =0; i < hours.length; i++) {
//         let cook = this.avgCookie * this.custRand();
//         let roundCookies = Math.round(cook);
//         this.totalArry.push(roundCookies);
//         this.grandTotal += roundCookies;
//         console.log(this.totalArry, this.grandTotal);
//       }
//     },
//     display: function() {
//       this.genCookie();
//       let section = document.getElementById('data');
  
  
//       let titleCity = document.createElement('h2');
//       titleCity.textContent = this.name;
//       section.appendChild(titleCity);
  
//       let list = document.createElement('ul');
//       section.appendChild(list);
//       for (let i = 0; i < hours.length; i++){
//         let entry = document.createElement('li');
//         entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
//         list.appendChild(entry);
//       }
//       let totalEntry = document.createElement('li');
//       totalEntry.textContent = 'Total: ' + this.grandTotal;
//       list.appendChild(totalEntry);
//     }
//   };
  
  
//   let tokyo = {
//     name: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     totalArry: [],
//     grandTotal: 0,
  
//     custRand: function(){
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     },
//     genCookie: function() {
//       for (let i =0; i < hours.length; i++) {
//         let cook = this.avgCookie * this.custRand();
//         let roundCookies = Math.round(cook);
//         this.totalArry.push(roundCookies);
//         this.grandTotal += roundCookies;
//         console.log(this.totalArry, this.grandTotal);
//       }
//     },
//     display: function() {
//       this.genCookie();
//       let section = document.getElementById('data');
  
  
//       let titleCity = document.createElement('h2');
//       titleCity.textContent = this.name;
//       section.appendChild(titleCity);
  
//       let list = document.createElement('ul');
//       section.appendChild(list);
//       for (let i = 0; i < hours.length; i++){
//         let entry = document.createElement('li');
//         entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
//         list.appendChild(entry);
//       }
//       let totalEntry = document.createElement('li');
//       totalEntry.textContent = 'Total: ' + this.grandTotal;
//       list.appendChild(totalEntry);
  
//     }
//   };
//   let dubai = {
//     name: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7,
//     totalArry: [],
//     grandTotal: 0,
  
//     custRand: function(){
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     },
//     genCookie: function() {
//       for (let i =0; i < hours.length; i++) {
//         let cook = this.avgCookie * this.custRand();
//         let roundCookies = Math.round(cook);
//         this.totalArry.push(roundCookies);
//         this.grandTotal += roundCookies;
//         console.log(this.totalArry, this.grandTotal);
//       }
//     },
//     display: function() {
//       this.genCookie();
//       let section = document.getElementById('data');
  
  
//       let titleCity = document.createElement('h2');
//       titleCity.textContent = this.name;
//       section.appendChild(titleCity);
  
//       let list = document.createElement('ul');
//       section.appendChild(list);
//       for (let i = 0; i < hours.length; i++){
//         let entry = document.createElement('li');
//         entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
//         list.appendChild(entry);
//       }
//       let totalEntry = document.createElement('li');
//       totalEntry.textContent = 'Total: ' + this.grandTotal;
//       list.appendChild(totalEntry);
//     }
//   };
//   let paris = {
//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     totalArry: [],
//     grandTotal: 0,
  
//     custRand: function(){
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     },
//     genCookie: function() {
//       for (let i =0; i < hours.length; i++) {
//         let cook = this.avgCookie * this.custRand();
//         let roundCookies = Math.round(cook);
//         this.totalArry.push(roundCookies);
//         this.grandTotal += roundCookies;
//         console.log(this.totalArry, this.grandTotal);
//       }
//     },
//     display: function() {
//       this.genCookie();
//       let section = document.getElementById('data');
  
  
//       let titleCity = document.createElement('h2');
//       titleCity.textContent = this.name;
//       section.appendChild(titleCity);
  
//       let list = document.createElement('ul');
//       section.appendChild(list);
//       for (let i = 0; i < hours.length; i++){
//         let entry = document.createElement('li');
//         entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
//         list.appendChild(entry);
//       }
//       let totalEntry = document.createElement('li');
//       totalEntry.textContent = 'Total: ' + this.grandTotal;
//       list.appendChild(totalEntry);
//     }
//   };
//   let lima = {
//     name: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     totalArry: [],
//     grandTotal: 0,
  
//     custRand: function(){
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     },
//     genCookie: function() {
//       for (let i =0; i < hours.length; i++) {
//         let cook = this.avgCookie * this.custRand();
//         let roundCookies = Math.round(cook);
//         this.totalArry.push(roundCookies);
//         this.grandTotal += roundCookies;
//         console.log(this.totalArry, this.grandTotal);
//       }
//     },
//     display: function() {
//       this.genCookie();
//       let section = document.getElementById('data');
  
  
//       let titleCity = document.createElement('h2');
//       titleCity.textContent = this.name;
//       section.appendChild(titleCity);
  
//       let list = document.createElement('ul');
//       section.appendChild(list);
//       for (let i = 0; i < hours.length; i++){
//         let entry = document.createElement('li');
//         entry.textContent = hours[i] + ': ' + this.totalArry[i] + ' Cookies';
//         list.appendChild(entry);
//       }
//       let totalEntry = document.createElement('li');
//       totalEntry.textContent = 'Total: ' + this.grandTotal;
//       list.appendChild(totalEntry);
  
//     }
//   };
