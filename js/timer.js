function () {
	const seconds = 1000,
	minutes = seconds * 60,
	hour = minute * 60,
	day = hour * 24;
	
	let birthday = "Oct 21,2022 00:00:00",
		countDown= new Date(birthday).getTime(),
		x = setInterval(fuction()) {
			
			
			let now = new Date().getTime(),
				distance = countDown - now;
			
			document.getElementById("day").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day))/(hour))
			document.getElementById("minute").innerText = Math.floor(distance % (hour))/(minute))
			document.getElementById("secund").innerText = Math.floor(distance % (minute))/(second))
			
			
		if (distance < 0) {
			let headline = document.getElementById("headline"),
				countdown = document.getElementById("countdown"),
				concent = document.getElementById("cotent")
				
				
			headline.innerText = "It's my birthday!";
			countdown.style.display = "none";
			concent.style.display = "block";
			
			clearInterval(x);
		}
		//seconds
	},0)
	
	
}());