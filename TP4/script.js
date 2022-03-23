const countDownBox = document.querySelector(".date");
const daysBox	= document.querySelector(".days");
const hrsBox	= document.querySelector(".hrs");
const minBox	= document.querySelector(".min");
const secBox	= document.querySelector(".sec");

// var currentTime = new Date();
// let eventTime = new Date("Jan 01, 2023 00:01:00");
// var diffTime = eventTime - currentTime;
// var duration = moment.duration(diffTime,'milliseconds');
// var hours = duration._data.hours;
// var hours = duration._data.hours;
// var hours = duration._data.hours;
// console.log(duration);

 var interval = 1000;
 
var eventTime= new Date("Jan 01, 2023 00:01:00"); 
var currentTime = new Date(); 
// console.log(currentTime)
// console.log(eventTime)
var diffTime = eventTime - currentTime;
console.log(diffTime);
var duration = moment.duration(diffTime, 'milliseconds');

setInterval(function(){
    duration = moment.duration(duration - interval, 'milliseconds');
    var d = moment(eventTime).diff(moment(currentTime),'days');
	var	h = duration._data.hours;
	var	m = duration._data.minutes;
	var	s = duration._data.seconds;
		daysBox.innerHTML = d + "<span>Jours</span>";
		hrsBox.innerHTML = h + "<span>Heures</span>";
		minBox.innerHTML = m + "<span>Minutes</span>";
		secBox.innerHTML = s + "<span>Secondes</span>";
		//window.location.reload()
}, interval);
 