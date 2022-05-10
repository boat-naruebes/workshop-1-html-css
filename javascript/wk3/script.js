var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var four = document.getElementById("four");
var txt = document.getElementById("txt");
document.body.style.backgroundSize = 'cover'

first.addEventListener('click', function(){
   document.body.style.backgroundImage = 'url(\'https://images.unsplash.com/photo-1528920304568-7aa06b3dda8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80\')'
   txt.style.visibility = "hidden"
});
second.addEventListener('click', function(){
   document.body.style.backgroundImage = 'url(\'https://images.unsplash.com/photo-1650821108375-67fbb5cf6b4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80\')'
});
third.addEventListener('click', function(){
   document.body.style.backgroundImage = 'url(\'https://images.unsplash.com/photo-1650324705564-2eb0b6b23954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\')'
});
four.addEventListener('click', function(){
   document.body.style.backgroundImage = 'url(\'https://images.unsplash.com/photo-1649780428890-169362bd70f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80\')'
});


