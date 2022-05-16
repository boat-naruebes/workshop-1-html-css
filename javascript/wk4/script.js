var getswit = document.getElementById('swit')
function change(){
    console.log(getswit.className)
    if(getswit.className == "close default"){
        getswit.style.transform = "translateX(220px)";
        getswit.className = "open default";
    }
    else if(getswit.className == "open default"){
        getswit.style.transform = "translateX(0px)";
        getswit.className = "close default";
    }
    
    // getswit.style.transform = "translateX(0px)";
}
