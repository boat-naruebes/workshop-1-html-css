const url = "https://randomuser.me/api/?results=100";
const Fecthdata = document.querySelector(".fecth-data");
var fetchData = async () => {
    let respone = await fetch(url);
    let jsonData = await respone.json();
    return jsonData;
}

fetchData().then(data =>{
    data.results.forEach(item => {
        getNameData(item.name.first, item.name.last, item.picture.large)
    });
});

function getNameData(addFirstName, addLastName, getimg){
    let flexContainerDiv  = document.createElement("div");
    let createDivRight = document.createElement("div")
    let createDivLeft = document.createElement("div")
    let createfirst = document.createElement("h4");
    let createlast = document.createElement("h4");

    let createImg = document.createElement("img");
    createImg.setAttribute("src", getimg);

    createfirst.innerText = `First Name: ${addFirstName}`;
    createlast.innerText = `Last Name: ${addLastName}`;

    flexContainerDiv.appendChild(createDivLeft);
    flexContainerDiv.appendChild(createDivRight);
    createDivLeft.appendChild(createImg);

    createDivRight.appendChild(createfirst);
    createDivRight.appendChild(createlast);
    Fecthdata.appendChild(flexContainerDiv);

    flexContainerDiv.classList.add("flex-container");
    createDivRight.classList.add("right")
    createfirst.classList.add("first");
    createlast.classList.add("last");
    createDivLeft.classList.add("left")
}

//foreach loop
// วิธีที่ 1
// data.forEach(test)
// function test(value, index) {
//     console.log(value);
// }
// ------------------------------
// วิธีที่ 2
// data.forEach((item) => {
//     console.log(item.name.first);
// });



// async function getAPI(){

// วิธีที่ 1
// }
// fetch(url)
//     .then(response => response.json())
//     .then(data => getData(data.results));

// function getData(data) {
//     data.forEach((item) => {
//         console.log(item.name.first);
//     });
//     // data.forEach(test)
// }
// ------------------------------------

// วิธี 2 async นิยมกว่าแบบเเรก
// var fetchData = async () => {
//     let respone = await fetch(url);
//     let jsonData = await respone.json();
//     return jsonData;
// }

