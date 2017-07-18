'use strict'
var hrPd = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesPrHr:[],
  custPh: function(minCust,maxCust){
    return (Math.floor(Math.random()* (this.maxCust - this.minCust + 1)) + this.minCust);
  },
  cookiesPerH: function(){
    for(var i = 0; i < hrPd.length; i++){
      var cookiesPer = Math.floor(this.avgCookies * this.custPh());
      this.cookiesPrHr.push(cookiesPer);
    }
    return this.cookiesPrHr;
  },
  cookiesPerDay: function(){
    var total = 0;
    for(var i = 0; i < this.cookiesPrHr.length; i++){
      total += this.cookiesPrHr[i];
    }
    return total;
  },
  render: function(){
    var pikeUL = document.getElementById('pike');
    for(var i = 0; i < hrPd.length; i++){
     var liEl = document.createElement('li');
     liEl.textContent = hrPd[i] + ':' + pike.cookiesPrHr[i] + ' cookies per hour';
     pikeUL.appendChild(liEl);
    }
    var total = document.getElementById('pike');
    var liEl = document.createElement('li');
    liEl.textContent = 'total- ' + pike.cookiesPerDay(total);
    total.appendChild(liEl);

  }
};

pike.custPh();
pike.cookiesPerH();
pike.render();
