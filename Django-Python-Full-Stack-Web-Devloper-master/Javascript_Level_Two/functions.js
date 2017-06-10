// function helloYou(name){
//   console.log('hello ' + name);
// }

//you call the function to execute with parenthesis
//you just call the function with out the parenthesis, but it does not execute

// function addNum(num1, num2){
//   console.log(num1 + num2);
// }

// JAVASCRIPT TYPE COHERSION

// you can assign default parameters (like frankie is a default parameter)
// function helloSomeone(name = "Frankie"){
//   console.log("Hello " + name);
// }

//if you want to save the result of a function, use the return keyword
// function formal(name = "Sam", title="Sir"){
//   return title + " " + name;
// }

// function timesFive(numInput){
//   var result = numInput *5;
//   return result
// }

//scope = how objects and variables get defined within JavaScript

// if a variable is defined within a function, then the scope of that variable
// is only valid in that function


//Global scope
// var v = "Global V";
// var stuff = "GLOBAL STUFF";
//
// function fun(stuff) {
//   //checks for global scope then for local scope
//   console.log(v);
//   stuff = "Reassign stuff inside func";
//   console.log(stuff);
// }
// fun();
//
// console.log(stuff);
