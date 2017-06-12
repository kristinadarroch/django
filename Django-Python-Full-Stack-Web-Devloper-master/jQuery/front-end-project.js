console.log('hello connect four');

var playerOne = prompt('Enter the name of player 1:');
var playerOneColor = rgb(255,0,0); //red

var playerTwo = prompt('Enter the name of player 2:');
var playerTwoColor = rgb(0,0,255); //blue

var game_on = true;
var table = $('table tr');


function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}
