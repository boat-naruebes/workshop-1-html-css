const addText = document.querySelector('.item a');
const input_text = document.querySelector('input');
const get_display_box = document.querySelector('.display-box');

// console.log(input_text);

addText.addEventListener('click', function(){
   let text_value =  input_text.value;
   input_text.value = "";
   let create_H2 = document.createElement("h2");
   let create_A = document.createElement("a");

   create_A.addEventListener("click", delete_H2)
   create_H2.addEventListener("click", change_style);
   if(text_value != ""){
      get_display_box.appendChild(create_H2).innerText = text_value;
      create_H2.appendChild(create_A);
      create_H2.className = "display-text";
   }
   


 function change_style(){
    create_H2.classList.toggle("display-text");
    create_H2.classList.toggle("click");  
 }

 function delete_H2(){
    console.log("test");
   get_display_box.removeChild(create_H2);
}

   
// ------------------------- เพิ่ม class ------------------
//     createElement.className = "display-text";                 
//    createElement.setAttribute("class","display-text")
//  createElement.classList.add("display-text");
   

})