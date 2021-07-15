

let textbox  = document.getElementById("textbox");
textbox.value = 'New To do Item';

let firstbutton = document.querySelector('button');
let listItems = document.getElementsByClassName('group-item'); 

// let newLi = document.createElement("li");
// newLi.innerHTML= "Item4";
// let list = document.querySelector('ul');

let list = document.getElementById("todolist");
// list.appendChild(newLi);

function removeItem(event){
    event.target.remove();
}

firstbutton.addEventListener("click",addItem)

// add new item to list 
function addItem(e, text){
    let newItem = document.createElement("li");
    newItem.innerText = text;
    if(!text){
        newItem.innerText = textbox.value;
        textbox.value = "";
    }
    newItem.addEventListener("click", removeItem);
    list.appendChild(newItem);
}


function myFunction() {
    var myobj = document.getElementById('item1');
    myobj.remove();
}
function myFunction2() {
    var myobj2 = document.getElementById('item2');
    myobj2.remove();
}
function myFunction3() {
    var myobj3 = document.getElementById('item3');
    myobj3.remove();
}
















