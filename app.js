'use strict'
var hrPd = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  minCustPrHr: 23,
  maxCustPrHr: 65,
  avgCookiesPerCust: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesPerDay:0,
  //(methods to calculate customer and cookie totals)
  //(method to calculate customers per hour)
  random: function(min,max){
    return (Math.floor(Math.random()* (max - min + 1)) + min);
  },
  ckPrh: function(){
    var rand = this.random(this.minCustPrHr,maxCustPrHr);
    var prD = ((rand * avgCookiesPerCust) /15);

  }

}
    
