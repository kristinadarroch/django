
var firstname = prompt("What is your first name?");
var lastname = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("What is your height in centimeters?");
var petname = prompt("What is your pets name?");
alert("thank you for your answers");

//four conditions we are going to check for.
var name = null;
var heightone = null;
var agebetween = null;
var pet = null;

if (firstname[0] == lastname[0]) {
  name = true;
}else {
  name = false;
}

if (age >= 20 && age <=30) {
  agebetween = true;
}else {
  agebetween = false;
}

if (height >= 170) {
  heightone = true;
}else {
  heightone = false;
}

// the reason you would use a .length-1 is because the first letter of an
// index is 0, so the last would be -1
if (petname[petname.length-1] === "y") {
  pet = true;
}else {
  pet = false;
}

// the && condition is already a boolean itself, so you do not need to specify
// them each in === true syntax.
if (name && heightone && agebetween && pet) {
  console.log("you have passed the test you secret spy");
}else {
  console.log("you are a spy");
}
