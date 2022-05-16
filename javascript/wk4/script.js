var open = document.querySelector('.button');
var close = document.querySelector('.default');
open.addEventListener('click', change);

function change(){
    close.classList.toggle('close');
}
