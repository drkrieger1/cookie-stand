'use strict'
var hrPd = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var myStore = [];
var storeTable = document.getElementById('sales');

function CookieStand(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerSale = avgCookies;
  this.customersPerHour = [];
  this.calcCustomersPerHour = function(){
    for(var i = 0; i < hrPd.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
   };
  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function(){
    this.calcCustomersPerHour();
    for(var i = 0; i < hrPd.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
      console.log(this.totalCookiesPerDay, 'running daily cookie total');
  }
};
  this.totalCookiesPerDay = 0;

  myStore.push(this);


  this.render = function(){
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    for(var i = 0; i < hrPd.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
      storeTable.appendChild(trEl);
    }
    var tdEl = document.createElement('td');
      tdEl.textContent = this.totalCookiesPerDay;
      trEl.appendChild(tdEl);
      storeTable.appendChild(trEl);
  }
  this.calcCookiesSoldEachHour();
};

new CookieStand('Pike', 23, 65, 6.3);
new CookieStand('Sea Tac', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capital Hill', 20, 38, 2.8);
new CookieStand('Alki', 23, 65, 6.3);

console.table(myStore);

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
    thEl.textContent = 'location';
    trEl.appendChild(thEl);
    // storeTable.appendChild(trEl);

  var thEl = document.createElement('th');
    for(var i = 0; i < hrPd.length; i++){
      thEl.textContent = hrPd[i];
      trEl.appendChild(thEl);
      // storeTable.appendChild(trEl);
    };
  var thEl = document.createElement('th');
    thEl.textContent = 'toatal';
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);

}
function storeRowes(){
  for(var i = 0; i < myStore.length; i++){
    myStore[i].render();
  }
}
makeHeaderRow();
storeRowes();
