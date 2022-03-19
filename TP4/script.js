let countDownBox = document.querySelector(".allTime");
		let daysBox	= document.querySelector(".days");
		let hrsBox	= document.querySelector(".hrs");
		let minBox	= document.querySelector(".min");
		let secBox	= document.querySelector(".sec");
		let countDownDate = new Date("Dec 31, 2022 00:01:00").getTime();

		// COUNT DOWN FUNCTION
		let x = setInterval(function() {

			// GET DATE
			let now = new Date().getTime();

			// TIME BETWEEN NOW AND DATE
			let distance = countDownDate - now;

			// CALCULATION TIME
			let days 	= Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours 	= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes	= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds	= Math.floor((distance % (1000 * 60)) / 1000);

			daysBox.innerHTML = days + "<span>Jours</span>";
			hrsBox.innerHTML = hours + "<span>Heures</span>";
			minBox.innerHTML = minutes + "<span>Minutes</span>";
			secBox.innerHTML = seconds + "<span>Secondes</span>";

			
		}, 1000);