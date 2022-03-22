let countDownBox = document.querySelector(".date");
let daysBox	= document.querySelector(".days");
let hrsBox	= document.querySelector(".hrs");
let minBox	= document.querySelector(".min");
let secBox	= document.querySelector(".sec");
let countDownDate = new Date("Jan 01, 2023 00:01:00").getTime();
 var interval = 1000;
 
var eventTime= new Date(2023,0,1,00,00,00); 
var currentTime = new Date(); 
console.log(currentTime)
console.log(eventTime)
//var diffTime = moment("Jan 01, 2023 00:01:00").diff(moment(dateNow),'Days');
var diffTime = eventTime - currentTime;
console.log(diffTime);
var duration = moment.duration(diffTime*1000, 'milliseconds');

setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
  var d = moment(eventTime).diff(moment(currentTime),'days');
	var	h = moment.duration(duration).hours();
	var	m = moment.duration(duration).minutes();
	var	s = moment.duration(duration).seconds();
		daysBox.innerHTML = d + "<span>Jours</span>";
		hrsBox.innerHTML = h + "<span>Heures</span>";
		minBox.innerHTML = m + "<span>Minutes</span>";
		secBox.innerHTML = s + "<span>Secondes</span>";
}, interval);
