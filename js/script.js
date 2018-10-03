var btn_prev = document.querySelector('#galery .galeryButtons .prev');
var btn_next = document.querySelector('#galery .galeryButtons .next');

var images = document.querySelectorAll('#galery .photos img');
console.log("11111", images);
var i = 0;

btn_prev.onclick = function(){
    images[i].className = '';
    i = i - 1;

    if (i < 0){
        i = images.length - 1;
    }
    images[i].className = 'showed';
}

btn_next.onclick = function(){
     images[i].className = '';
     i = i + 1; /* i++ */

     if(i >= images.length){
         i = 0;
     }

     images[i].className = 'showed';
}
