var button = document.querySelecter('button');
var box = document.getElementById('changeMe');

button.onclick = function changeColor(){
    box.style.background = 'blue';
}