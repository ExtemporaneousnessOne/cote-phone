function updateDateTime() {
	const now = new Date();
	const hour = now.getHours().toString().padStart(2, '0');
	const minute = now.getMinutes().toString().padStart(2, '0');
	document.getElementById("hour").textContent = hour;
	document.getElementById("minute").textContent = minute;
	
	document.getElementById("colon").textContent = ":";
}
	
const myInterval = setInterval(updateDateTime, 1000);

