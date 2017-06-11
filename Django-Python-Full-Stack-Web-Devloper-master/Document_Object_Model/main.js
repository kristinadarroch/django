var headOne = document.querySelector('#one');
var headTwo = document.querySelector('#two');
var headThree = document.querySelector('#three');

// Hover (mouseover and mouseout)
headOne.addEventListener('mouseover',function(){
  headOne.textContent = "Mouse currently Over";
  headOne.style.color = 'red';
});

headOne.addEventListener('mouseout', function(){
  headOne.textContent = 'hover over me!';
  headOne.style.color = 'black';
});
