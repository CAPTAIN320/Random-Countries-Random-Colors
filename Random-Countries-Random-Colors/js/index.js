

var counterText = document.getElementById("counterP");
var countriesDiv = document.getElementById("countriesDiv");
var countriesText = document.getElementById("countriesP");

//Array of countries
var country_list = ["Naija", "Nihon"];

var numOfCountries = country=list.length

function getRandomArrayIndex(arr){
	//Minimum value is set to 0 because arrays start at 0
	var min = 0;
	//Get max value by subtracting 1 from the array size
	var max = (arr.length - 1);
	//Get a random integer btw the min and max
	var randomIndex = Math.floor(Math.random() * (max - min)) + min;
	//Return random value
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