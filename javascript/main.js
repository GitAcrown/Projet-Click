var perClick = 1.0;
var multiplier = 1.0;
var total = 0;
var totalClicks = 0;

function addValue() {
	total = total + perClick * multiplier;
	totalClicks ++;
	document.title = totalClicks + " Clicks au total";
	var totalDisplay = document.getElementById("total-display");
	totalDisplay.innerHTML = total;
	audio.volume = 1.0;
}

function main() {
}

main()
