var body = document.querySelector('body');
//console.log(body)
var cb = document.getElementById('mouse-move');
cb.addEventListener('mousemove',changecolor)
function changecolor(e) {
    body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 30)"
}
cb.addEventListener('mouseout',normalcolor)
function normalcolor(e) {
    body.style.backgroundColor = "#f4f4f4"
}
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
var lists = document.getElementsByClassName('list-group-item')
var btn = document.getElementById('btn')
btn.addEventListener('click',changeItemcolor)
function changeItemcolor(e) {
    var arr = itemList.children;
    for (let i = 1; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'red'
    }
}
var btnw = document.getElementById('btnw')
btnw.addEventListener('click',returnItemcolor)
function returnItemcolor(e) {
    var arr = itemList.children;
    for (let i = 1; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'white'
    }
}


//console.log('cb')
//alert(123)