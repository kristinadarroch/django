console.log('arrays');

var countries = ["USA", //0
                "Germany", //1
                 "China"  //2
               ];
console.log(countries);
// indexing starts at 0

//a string is immutable

var mixed = [true,20,"string"]; //an array can take in multiple data types

var myArr = ['one', 'two', 'three'];
var lastItem = myArr.pop();
//.pop removes the last item off of the array
console.log(myArr);


//push adds a new item to an array
myArr.push("new_item");
console.log(myArr);

//removes an item off of the list
// myArr[myArr.length -1];
// console.log(myArr);

var matrix = [[1,2,3], [4,5,6], [7,8,9]];
console.log(matrix);

//Array ITERATION

//for loop method
var arr = ['A', 'B', 'C'];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//for of method
// for (letter of arr){
//   console.log(letter);
// }

// for (letter of arr) {
//   alert(letter)
// }

// arr.forEach(alert);

function addAwesome(name){
  console.log(name+ ' is awesome');
}

var topics = ["python", "django", "science"];
//you can also do a foreach in a function and pass an array into that function
topics.forEach(addAwesome);
