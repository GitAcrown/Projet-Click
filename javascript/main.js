var perClick = 1.0;
var multiplier = 1.0;
var total = 0;
var totalClicks = 0;
var audio = document.createElement("audio");

function addValue() {
	total = total + perClick * multiplier;
	totalClicks ++;
	document.title = totalClicks + " Total Clicks";
	var totalDisplay = document.getElementById("total-display");
	totalDisplay.innerHTML = totalee;
	audio.volume = 1.0;
}

function main() {
}

main()
