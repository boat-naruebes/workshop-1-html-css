var click = document.getElementsByClassName("title");
var p = document.getElementsByClassName("Accordion");
for (var i = 0; i < click.length; i++) {
    click[i].addEventListener("click", toggle);
}

function toggle() {
    var test = this.parentNode.className;
    console.log(test);
    for(var i = 0; i < p.length; i++){
        p[i].className = "Accordion close";
        console.log(p[i]);
    }
    if(test == "Accordion close"){
       this.parentNode.className = "Accordion open"
    }
  
}
