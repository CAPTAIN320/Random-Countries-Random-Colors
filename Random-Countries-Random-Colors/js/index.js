

var counterText = document.getElementById("counterP");
var countriesDiv = document.getElementById("countriesDiv");
var countriesText = document.getElementById("countriesP");

//Array of countries
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece",];

var numOfCountries = country=list.length

function getRandomArrayElement(arr){
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
	for (var i = 0; i < 6; i++) {;
		color = color + text[Math.floor(Math.random() * 16)];
	}
	return color;
}

//Interval in milliseconds
setInterval( function(){
	//Get a random value from our array.
	var country = getRandomArrayElement(country_list);

	//Get a random text color for the country being displayed
	var colorOfCountry = getARandomColor();

	if (i > numOfCountries) {
		i = 1;
	}

	//Outputs text counter
	counterText.textContent = i.toString();




}, 4000);