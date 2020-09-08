var body = document.querySelector('body');
//console.log(body)
var cb = document.getElementById('mouse-move');
var btnw = document.getElementById('btnw')
//change body color ---------------------------------------------------------
body.style.backgroundColor = '#f4f4f4';
cb.addEventListener('mousemove',changecolor)
function changecolor(e) {
    body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 30)"
    cb.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 30)"
    btnw.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 30)"
}
//return body color -------------------------------------------------------
cb.addEventListener('mouseout',normalcolor)
function normalcolor(e) {
    body.style.backgroundColor = "#f4f4f4"
    cb.style.backgroundColor = "#f4f4f4"
    btnw.style.backgroundColor = "#f4f4f4"
}
// Add a new list ------------------------------------------------------
var myForm = document.getElementById('form-group');
var itemList = document.getElementById('list-group')
myForm.addEventListener('submit',addItem)
function addItem(e) {
    e.preventDefault();
    var text = document.getElementById('text-list') ;
    var newItem = document.createElement('li'); 
    newItem.appendChild(document.createTextNode(text.value));
    if (text.value == '') {
        alert('you have to write the name of the item')
    }else{
        newItem.className = 'list-group-item'
        //console.log(newItem)
        itemList.appendChild(newItem);
        text.value = '';
    }
}
// Remove a list ----------------------------------------------------------------------
var removeList = document.getElementById('remove-list');
var btnremove = document.getElementById('btnremove');
btnremove.addEventListener('click',listDel)
function listDel(e) {
    var array = itemList.children;
    for (let i = 0; i < array.length; i++) {
        if (removeList.value.toLowerCase() == array[i].textContent.toLowerCase()) {
            itemList.removeChild(array[i])
        }
    }
    removeList.value = '';
}

// change lists color to red ------------------------------------------------
var lists = document.getElementsByClassName('list-group-item')
var btn = document.getElementById('btn')
btn.addEventListener('click',changeItemcolor)
function changeItemcolor(e) {
    var arr = itemList.children;
    for (let i = 1; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'red'
    }
    btnw.style.backgroundColor = '#000'
}
// change lists color to white --------------------------------------
btnw.addEventListener('click',returnItemcolor)
function returnItemcolor(e) {
    var arr = itemList.children;
    for (let i = 1; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'white'
    }
    btnw.style.backgroundColor = '#f4f4f4'
}