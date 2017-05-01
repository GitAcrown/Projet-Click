var perClick = 1.0;
var multiplier = 1.0;
var total = 0;
var totalClicks = 0;
document.title = "Aucun click";

function addValue() {
	total = total + perClick * multiplier;
	totalClicks ++;
	document.title = totalClicks + " Clicks au total";
	var totalDisplay = document.getElementById("total-display");
	totalDisplay.innerHTML = total;
}

function main() {
}

main()
