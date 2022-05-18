const addText = document.querySelector('.item a');
const input_text = document.querySelector('input');
const ul_element = document.querySelector('ul');

addText.addEventListener('click', create_Element);
input_text.addEventListener("keypress", getenterkey);

function getenterkey(event) {
   if (event.key == "Enter") {
      create_Element();
   }
}

function create_Element() {
   let li_create = document.createElement("li");
   let create_A_element = document.createElement("a");
   let text_value = input_text.value;
   input_text.value = "";
   create_A_element.addEventListener("click", delete_H2)
   li_create.addEventListener("click", change_style);

   function change_style() {
      li_create.classList.toggle("click");
   }
   function delete_H2() {

      ul_element.removeChild(li_create);
   }

   if (text_value != "") {
      ul_element.appendChild(li_create).innerText = text_value;
      li_create.appendChild(create_A_element);
      li_create.className = "display-text";
   }
}


// ------------------------- เพิ่ม class ------------------
// 1. createElement.className = "display-text";
// 2. createElement.setAttribute("class","display-text")
// 3. createElement.classList.add("display-text");


// ------------------------- ลบ element ------------------
// 1. create_H2.className = "delete";
// 2. get_display_box.removeChild(create_H2);


// ------------------------- ใส่ ข้อความ ------------------
// 1. createTextNode("test")
// 2. innerText = "tets"
