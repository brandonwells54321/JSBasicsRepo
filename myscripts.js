var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function changeColor(){
    if(box.style.backround == 'green'){
        box.style.background = 'blue';
    }else{
        box.style.background = 'green';
    }
}
