var hot = false;
var temp = 50;

if (temp>80) {
  console.log('hot outside');
}
else if (temp <= 80 && temp >= 50) {
  console.log('avg temp outside');
}else if (temp < 50 && temp >= 32) {
  console.log('it is pretty cold out');
}else {
  console.log('it is cold out');
}
console.log(hot);


var ham = 10;
var cheese = 10;

var report = "blank"

if (ham >= 10 && cheese >= 10) {
  report = "strong sales of both ham and cheese"
}else if (ham === 0 && cheese === 0) {
  report = "nothing sold"
}else {
  report = "we had some sales of items"
}

// how you get the output in the console
console.log(report);

outside while loop
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


// WHILE LOOP THAT PRINTS OUT ONLY EVEN NUMBERS FROM 1-10

//this program I entered in manually what is an even number and what is odd

var x = 0;
while (x < 10) {
  if (x === 2) {
    console.log('2');
  }else if (x === 4) {
    console.log('4');
  }else if (x === 6) {
    console.log('6');
  }else if (x === 8) {
    console.log('8');
  }else if (x === 10) {
    console.log('10');
  }
  // else {
  //   console.log(x + ' is an odd number');
  // }

  x = x+1;

}

var x = 0;
while (x < 11) {
  console.log(x);

  x = x+2;
}

var num = 1;
while (num < 11) {
  if (num%2 === 0) {
    console.log(num);
  }
  num = num+1;
}


FOR loops

for (var i = 0; i < 5; i=i+1) {
  console.log("number is " +i);
}

var word = "ABCDEFGHIJK"

for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}

var word = "ABABABABABA"
for (var i = 0; i < word.length; i=i+2) {
  console.log(word[i]);
}
