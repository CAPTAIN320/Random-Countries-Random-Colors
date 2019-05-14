

var counterText = document.getElementById("counterP");
var countriesDiv = document.getElementById("countriesDiv");
var countriesText = document.getElementById("countriesP");

//Array of countries
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria",];

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

function getRandomColor(){
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
	var colorOfCountry = getRandomColor();

	if (i > numOfCountries) {
		i = 1;
	}

	//Outputs text counter
	counterText.textContent = i.toString();

	if (i == 0) {
		countriesText.textContent = country;
		countriesText.style.color = colorOfCountry;
	}

	i = i+1;

}, 4000);