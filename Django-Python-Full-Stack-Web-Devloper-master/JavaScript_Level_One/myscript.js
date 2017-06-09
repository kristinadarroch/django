// var hot = false;
// var temp = 50;
//
// if (temp>80) {
//   console.log('hot outside');
// }
// else if (temp <= 80 && temp >= 50) {
//   console.log('avg temp outside');
// }else if (temp < 50 && temp >= 32) {
//   console.log('it is pretty cold out');
// }else {
//   console.log('it is cold out');
// }
// console.log(hot);


// var ham = 10;
// var cheese = 10;
//
// var report = "blank"
//
// if (ham >= 10 && cheese >= 10) {
//   report = "strong sales of both ham and cheese"
// }else if (ham === 0 && cheese === 0) {
//   report = "nothing sold"
// }else {
//   report = "we had some sales of items"
// }
//
// // how you get the output in the console
// console.log(report);

// outside while loop
var x = 0

// this loop keeps looping until it hits 5
while (x < 5) {
  // what the string says + the number of x currently
  console.log("x is currently" +x);

if (x === 3) {
  console.log("X is equal to 3");
  break; //this command stops the loops execution

}

  console.log("x is still less than 5, adding 1 to x");

// reassign x to the current x but add one
  x = x+1;
}
