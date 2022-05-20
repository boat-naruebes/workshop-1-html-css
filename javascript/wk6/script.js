const url = "https://randomuser.me/api/?results=100";
var Fetchdata = document.getElementById("fecth-data");
var fetchData = async () => {
    let respone = await fetch(url);
    let jsonData = await respone.json();
    return jsonData;
}
fetchData().then(data =>{
    data.results.forEach(item => {
        var createTable = document.createElement("table")
        createTable.innerHTML = 
        `<td>
              <img src = ${item.picture.large}>
        </td>
        <td>
            First Name: ${item.name.first}<br>
            Last Name: ${item.name.last}
        </td>`;
        Fetchdata.appendChild(createTable);
    })
    console.log(Fetchdata);
});

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

