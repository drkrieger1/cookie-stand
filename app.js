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
// var pike = {
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   cookiesPrHr:[],
//   custPh: function(minCust,maxCust){
//     return (Math.floor(Math.random()* (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//   cookiesPerH: function(){
//     for(var i = 0; i < hrPd.length; i++){
//       var cookiesPer = Math.floor(this.avgCookies * this.custPh());
//       this.cookiesPrHr.push(cookiesPer);
//     }
//     return this.cookiesPrHr;
//   },
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < this.cookiesPrHr.length; i++){
//       total += this.cookiesPrHr[i];
//     }
//     return total;
//   },
//   render: function(){
//     var pikeUL = document.getElementById('pike');
//     for(var i = 0; i < hrPd.length; i++){
//      var liEl = document.createElement('li');
//      liEl.textContent = hrPd[i] + ':' + pike.cookiesPrHr[i] + ' cookies per hour';
//      pikeUL.appendChild(liEl);
//     }
//     var total = document.getElementById('pike');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total-> ' + pike.cookiesPerDay(total);
//     total.appendChild(liEl);
//
//   }
// };
//
// pike.custPh();
// pike.cookiesPerH();
// pike.render();
//
// // Sea Town
// var seaTown = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   cookiesPrHr:[],
//   custPh: function(minCust,maxCust){
//     return (Math.floor(Math.random()* (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//   cookiesPerH: function(){
//     for(var i = 0; i < hrPd.length; i++){
//       var cookiesPer = Math.floor(this.avgCookies * this.custPh());
//       this.cookiesPrHr.push(cookiesPer);
//     }
//     return this.cookiesPrHr;
//   },
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < this.cookiesPrHr.length; i++){
//       total += this.cookiesPrHr[i];
//     }
//     return total;
//   },
//   render: function(){
//     var tacUL = document.getElementById('seatac');
//     for(var i = 0; i < hrPd.length; i++){
//      var liEl = document.createElement('li');
//      liEl.textContent = hrPd[i] + ':' + seaTown.cookiesPrHr[i] + ' cookies per hour';
//      tacUL.appendChild(liEl);
//     }
//     var total = document.getElementById('seatac');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total-> ' + seaTown.cookiesPerDay(total);
//     total.appendChild(liEl);
//
//   }
// };
//
// seaTown.custPh();
// seaTown.cookiesPerH();
// seaTown.render();
//
// //seattle Center
// var seaCent = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   cookiesPrHr:[],
//   custPh: function(minCust,maxCust){
//     return (Math.floor(Math.random()* (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//   cookiesPerH: function(){
//     for(var i = 0; i < hrPd.length; i++){
//       var cookiesPer = Math.floor(this.avgCookies * this.custPh());
//       this.cookiesPrHr.push(cookiesPer);
//     }
//     return this.cookiesPrHr;
//   },
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < this.cookiesPrHr.length; i++){
//       total += this.cookiesPrHr[i];
//     }
//     return total;
//   },
//   render: function(){
//     var centUL = document.getElementById('seattlec');
//     for(var i = 0; i < hrPd.length; i++){
//      var liEl = document.createElement('li');
//      liEl.textContent = hrPd[i] + ':' + seaCent.cookiesPrHr[i] + ' cookies per hour';
//      centUL.appendChild(liEl);
//     }
//     var total = document.getElementById('seattlec');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total-> ' + seaCent.cookiesPerDay(total);
//     total.appendChild(liEl);
//
//   }
// };
//
// seaCent.custPh();
// seaCent.cookiesPerH();
// seaCent.render();
//
// //Capital Hill
// var capHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   cookiesPrHr:[],
//   custPh: function(minCust,maxCust){
//     return (Math.floor(Math.random()* (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//   cookiesPerH: function(){
//     for(var i = 0; i < hrPd.length; i++){
//       var cookiesPer = Math.floor(this.avgCookies * this.custPh());
//       this.cookiesPrHr.push(cookiesPer);
//     }
//     return this.cookiesPrHr;
//   },
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < this.cookiesPrHr.length; i++){
//       total += this.cookiesPrHr[i];
//     }
//     return total;
//   },
//   render: function(){
//     var hillUL = document.getElementById('caphill');
//     for(var i = 0; i < hrPd.length; i++){
//      var liEl = document.createElement('li');
//      liEl.textContent = hrPd[i] + ':' + capHill.cookiesPrHr[i] + ' cookies per hour';
//      hillUL.appendChild(liEl);
//     }
//     var total = document.getElementById('caphill');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total-> ' + capHill.cookiesPerDay(total);
//     total.appendChild(liEl);
//
//   }
// };
//
// capHill.custPh();
// capHill.cookiesPerH();
// capHill.render();
//
// //Alki
// var alki = {
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   cookiesPrHr:[],
//   custPh: function(minCust,maxCust){
//     return (Math.floor(Math.random()* (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//   cookiesPerH: function(){
//     for(var i = 0; i < hrPd.length; i++){
//       var cookiesPer = Math.floor(this.avgCookies * this.custPh());
//       this.cookiesPrHr.push(cookiesPer);
//     }
//     return this.cookiesPrHr;
//   },
//   cookiesPerDay: function(){
//     var total = 0;
//     for(var i = 0; i < this.cookiesPrHr.length; i++){
//       total += this.cookiesPrHr[i];
//     }
//     return total;
//   },
//   render: function(){
//     var alkiUL = document.getElementById('alki');
//     for(var i = 0; i < hrPd.length; i++){
//      var liEl = document.createElement('li');
//      liEl.textContent = hrPd[i] + ':' + alki.cookiesPrHr[i] + ' cookies per hour';
//      alkiUL.appendChild(liEl);
//     }
//     var total = document.getElementById('alki');
//     var liEl = document.createElement('li');
//     liEl.textContent = 'total-> ' + alki.cookiesPerDay(total);
//     total.appendChild(liEl);
//
//   }
// };
//
// alki.custPh();
// alki.cookiesPerH();
// alki.render();
