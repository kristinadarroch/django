console.log("hello objects");

var carInfo = {make: "toyota", year: 1990, model: "Camry"};
// when you are calling the key value pair, you have to call in strings

var myNewO = {a:"hello", b:[1,2,3], c:{inside:['a','b']}};


// 'key' is just a temporary variable - you can make it up
// calling the object this way will display it in no specific order
for (key in carInfo) {
  console.log(key);
} //this grabs the make, year, and model.


for (k in carInfo) {
  console.log(k);
  console.log(carInfo[k]);
} //this grabs both the keys and the values.


var simple = {
  prop: "hello",
  myMethod: function(){
    console.log("The myMethod was called");
  }};

var myObj = {
  name: "Jose",
  greet: function() {
    console.log("hello " + this.name);
  }
};
