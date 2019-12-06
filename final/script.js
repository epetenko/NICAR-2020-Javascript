// // Let's start with the most basic command: Talk. You can tell the Javascript to "log" or "print" something directly,
// //
// console.log('Welcome to NICAR!')


//A basic, numeric variable
var first_variable = 5;

//printing it out
console.log(first_variable)

//A text-based variable is always contained in "double" or 'single' quotes.
var string_variable = "Testing!"

console.log(string_variable)

// An array holds multiple numbers or strings.
var array_variable = [6,15,2,36,420]

// You can log the whole array...
console.log(array_variable)

//Or just one specific element, by using its place in the array.
console.log(array_variable[0])


for (i = 0; i < 5; i++) {
  console.log(array_variable[i]);
}

// A function is a way to create a temporary variable that lives just within that function. In this case, element is just a way to refer to each element of the array.
array_variable.forEach(function(element) {
	console.log(element + 5)
	})

var pets = [
	{
		"Name": "Princess Mia",
		"Type": "cat",
		"Age": 3,
		"Color": "orange",
	},
	{
		"Name": "Willy",
		"Type": "cat",
		"Age": 6,
		"Color": "grey",
	},
	{
		"Name": "Sophie",
		"Type": "dog",
		"Age": 4,
		"Color": "brown",
	},
]

for (i = 0; i < 3; i++) {
  console.log(pets[i]);
}

console.log(pets[0]['Name'] + "- testing")

pets.forEach(function(obj){
	console.log(obj['Name'])
})


document.getElementById('hello').innerHTML = 'Your first front-end Javascript!';

var new_element = document.createElement('button')
new_element.innerHTML = "Let's create a button!"
document.getElementById('create-button').appendChild(new_element)




new_element.innerHTML = "<button onclick='myFunction()'>Click me</button>"

// Here, we create a function that will perform the action:

function myFunction() {
	document.getElementById("button-trigger").innerHTML = "You clicked the button!";

}

new_element.innerHTML = "<button onclick='showNames()'>Click me</button>"

//create a function
function showNames() {
	//loop through our array
	pets.forEach(function(obj){
		//for each element of the array, create a new div
		var pet_row = document.createElement('div')
		// set the value of that new div to the pet's name
		pet_row.innerHTML = obj['Name']
		//append that div to the HTML
		document.getElementById('button-trigger').appendChild(pet_row)
	})
}

if (6<7) {
	console.log("Why is 6 afraid of 7? Because 7 8 9")
}

if(6>7) {
	console.log('Why is 6 afraid of 7? Because 7 8 9')
} else if (6==7) {
	console.log('6 is fighting for equality')
} else {
	console.log('6 is fighting back')
}

new_element.innerHTML = "<button onclick='testPets()'>Click me</button>"

//create a function
function testPets() {
	//loop through our array
	pets.forEach(function(obj){
		//for each element of the array, create a new div
		var pet_row = document.createElement('div')
		// set the value of that new div to the pet's name
		if (obj['Type'] == 'cat') {
			pet_row.innerHTML = obj['Name'] + ' is a cat'
		} else {
			pet_row.innerHTML = obj['Name'] + ' is a dog'
		}
		
		//append that div to the HTML
		document.getElementById('button-trigger').appendChild(pet_row)
	})
}


new_element.innerHTML = "<button id='jquery-button'>Click me</button>"

$('#jquery-button').click(function(d) {
		document.getElementById("button-trigger").innerHTML = "You clicked a jquery button!";

})



