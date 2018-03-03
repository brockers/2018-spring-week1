#!/usr/bin/env node

var name = "Bobby";
var born = 1976;
var year = 2018;
var age = year - born;

console.log("My name is " + name);
console.log("I am " + age + " years old");

if( age > 40 ){
	console.log("Damn... you are OLD!!");
} else {
	console.log("Dang... I was hoping to be younger than you.");
	if ( age == 40 ) {
		console.log("Soon you will be old as well.");
	} else {
		console.log("I hate you!");
	}
}

var youngerThanMe =  age - 1;

while(youngerThanMe > 0){
	console.log("Someone age", ( age - youngerThanMe ), "is", youngerThanMe, "younger than me." );
	youngerThanMe--;
}