var picture = document.querySelectorAll('.pic');
var text = document.getElementById('txt');
for(var i = 0; i < picture.length; i++){
    picture[i].addEventListener('click', function(){
        let picture_path = this.getAttribute("src");
        document.body.style.backgroundImage = `url(${picture_path})`;
        document.body.style.backgroundSize = 'cover';
        text.style.display = "none";
        console.log(picture_path);
    })
}
