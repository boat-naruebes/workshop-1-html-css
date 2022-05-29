let webname = document.getElementById("name");
let url = document.getElementById("url");
let submit = document.getElementById("submit");
let additem = document.getElementById("additem");
submit.addEventListener("click", emty);
function emty(){
        if(webname.value == "" && url.value == ""){
            alert("Please fill in the form");
        }
        else{
            let item = document.createElement("div");
            item.classList.add("parent")
            item.innerHTML = `<h5>${webname.value}</h5>
                                <div class = item>
                                <a href= ${url.value}  target="_blank" ><input class="btn btn-primary" type="submit" value="Visit"></a>
                                <input id = "delete" class="btn btn-danger" type="submit" value="Delete"></input></div>`;
            additem.appendChild(item);
            let getDeleteElement = document.querySelectorAll("#delete");
            getDeleteElement.forEach(test =>{
                test.addEventListener("click", function(){
                test.closest(".parent").remove();
                })
            })
        }
        cleatText()
} 
function cleatText(){
    webname.value = "";
    url.value = ""
}