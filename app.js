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
    liEl.textContent = 'total-> ' + pike.cookiesPerDay(total);
    total.appendChild(liEl);

  }
};

pike.custPh();
pike.cookiesPerH();
pike.render();

// Sea Town
var seaTown = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
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
    var tacUL = document.getElementById('seatac');
    for(var i = 0; i < hrPd.length; i++){
     var liEl = document.createElement('li');
     liEl.textContent = hrPd[i] + ':' + seaTown.cookiesPrHr[i] + ' cookies per hour';
     tacUL.appendChild(liEl);
    }
    var total = document.getElementById('seatac');
    var liEl = document.createElement('li');
    liEl.textContent = 'total-> ' + seaTown.cookiesPerDay(total);
    total.appendChild(liEl);

  }
};

seaTown.custPh();
seaTown.cookiesPerH();
seaTown.render();

//seattle Center
var seaCent = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
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
    var centUL = document.getElementById('seattlec');
    for(var i = 0; i < hrPd.length; i++){
     var liEl = document.createElement('li');
     liEl.textContent = hrPd[i] + ':' + seaCent.cookiesPrHr[i] + ' cookies per hour';
     centUL.appendChild(liEl);
    }
    var total = document.getElementById('seattlec');
    var liEl = document.createElement('li');
    liEl.textContent = 'total-> ' + seaCent.cookiesPerDay(total);
    total.appendChild(liEl);

  }
};

seaCent.custPh();
seaCent.cookiesPerH();
seaCent.render();

//Capital Hill
var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
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
    var hillUL = document.getElementById('caphill');
    for(var i = 0; i < hrPd.length; i++){
     var liEl = document.createElement('li');
     liEl.textContent = hrPd[i] + ':' + capHill.cookiesPrHr[i] + ' cookies per hour';
     hillUL.appendChild(liEl);
    }
    var total = document.getElementById('caphill');
    var liEl = document.createElement('li');
    liEl.textContent = 'total-> ' + capHill.cookiesPerDay(total);
    total.appendChild(liEl);

  }
};

capHill.custPh();
capHill.cookiesPerH();
capHill.render();

//Alki
var alki = {
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
    var alkiUL = document.getElementById('alki');
    for(var i = 0; i < hrPd.length; i++){
     var liEl = document.createElement('li');
     liEl.textContent = hrPd[i] + ':' + alki.cookiesPrHr[i] + ' cookies per hour';
     alkiUL.appendChild(liEl);
    }
    var total = document.getElementById('alki');
    var liEl = document.createElement('li');
    liEl.textContent = 'total-> ' + alki.cookiesPerDay(total);
    total.appendChild(liEl);

  }
};

alki.custPh();
alki.cookiesPerH();
alki.render();
