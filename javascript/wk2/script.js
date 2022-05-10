var color = document.querySelectorAll('.click')
for(var i = 0; i < color.length; i++){
    color[i].classList.remove('click'); // remove class click
    color[i].addEventListener('click', function(){
        const txt = getComputedStyle(this);
        console.log(txt.backgroundColor) // get all style
        document.body.style.backgroundColor = txt.backgroundColor;
    });
}