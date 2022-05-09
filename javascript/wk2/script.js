var white = document.getElementById('white');
var red = document.getElementById('red');
var violet = document.getElementById('violet');
var lightyellow = document.getElementById('lightyellow');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');


white.addEventListener('click', function(){
    white.style.backgroundColor = 'white';
    console.log(white);
});
red.addEventListener('click', function(){
    white.style.backgroundColor = 'red';
    console.log(white);
});
violet.addEventListener('click', function(){
    white.style.backgroundColor = 'violet';
    console.log(violet);
});
lightyellow.addEventListener('click', function(){
    white.style.backgroundColor = '#F5DEB3';
});
yellow.addEventListener('click', function(){
    white.style.backgroundColor = 'yellow';
});
green.addEventListener('click', function(){
    white.style.backgroundColor = 'green';
});
