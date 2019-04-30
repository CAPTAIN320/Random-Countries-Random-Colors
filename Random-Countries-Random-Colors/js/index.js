

var counterText = document.getElementById("counterP");
var countriesDiv = document.getElementById("countriesDiv");
var countriesText = document.getElementById("countriesP");

var country_list = ["Naija", "Nihon"];

var numOfCountries = country=list.length

function getRandomArrayIndex(arr){
	var min = 0;
	var max = (arr.length - 1);
	var randomIndex = Math.floor(Math.random() * (max - min)) + min;

	return arr[randomIndex];
}

function getARandomColor(){
	var text = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 5; i++) {;
		color = color + text[Math.floor(Math.random() * 16)];
	}
	return color;
}

//Interval in milliseconds
setInterval( function(){
	//Get a random value from our array.
	var country = getRandomArrayElement(country_list);


}, 4000);