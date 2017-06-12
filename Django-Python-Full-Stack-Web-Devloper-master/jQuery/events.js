//displays in the console 'there was a click' when you click on the h1 element.
$('h1').click(function(){
  console.log('there was a click');
});

//displays in the console 'any li element was clicked' when you click on any of
//the <li> elements.
$('li').click(function() {
  console.log('any li element was clicked');
});

//if you want to change something you have you use the THIS keyword.
$('h1').click(function() {
  $(this).text("i was changed");
});

//KEY PRESS

//the .eq grabs the first input on the

//13 is a numerical code which coinsides with the keyboard.
$('input').eq(0).keypress(function(event) {
  if (event.which === 13 ){
    $('h3').toggleClass('turnBlue');
  }
});

// on() method

//on the double click h1 will turn blue
$('h1').on('dblclick', function() {
  $(this).toggleClass('turnBlue');
});

//when you hover over the h1 element, it will turn blue.
$('h1').on('mouseEnter', function() {
  $(this).toggleClass('turnBlue');
});


//EVENTS AND ANIMATIONS.

//everything in the input .container class will fade out within 3 ms.
$('input').eq(1).on('click', function() {
  $('.container').fadeOut(3000);
});
