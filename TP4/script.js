let countDownBox = document.querySelector(".date");
let daysBox	= document.querySelector(".days");
let hrsBox	= document.querySelector(".hrs");
let minBox	= document.querySelector(".min");
let secBox	= document.querySelector(".sec");
let countDownDate = new Date("Jan 01, 2023 00:01:00").getTime();

let x = setInterval(function() {

	//moment js
	let now = new Date().getTime();
	let dist = countDownDate - now;
	let days 	= Math.floor(dist / (1000 * 60 * 60 * 24));
	let hours 	= Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes	= Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
	let seconds	= Math.floor((dist % (1000 * 60)) / 1000);
		daysBox.innerHTML = days + "<span>Jours</span>";
		hrsBox.innerHTML = hours + "<span>Heures</span>";
		minBox.innerHTML = minutes + "<span>Minutes</span>";
		secBox.innerHTML = seconds + "<span>Secondes</span>";

}, 1000);


// var eventTime= 1366549200; 
// var currentTime = 1366547400; 
// var diffTime = eventTime - currentTime;
// var duration = moment.duration(diffTime*1000, 'milliseconds');
// var interval = 1000;

// setInterval(function(){
//   duration = moment.duration(duration - interval, 'milliseconds');
//     $('.countdown').text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
// }, interval);
