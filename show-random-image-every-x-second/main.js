var myElement = document.getElementById('myImg'),
    myImgs = [
        'imgs/01.jpg',
        'imgs/02.jpg',
        'imgs/03.jpg',
        'imgs/04.jpg',
        'imgs/05.jpg',
        'imgs/06.jpg',
        'imgs/07.jpg',
        'imgs/08.jpg'
    ];
function changeImage(myElement, myImgs){
    'use strict';
    setInterval(function () {

        var myRandomNum = Math.floor(Math.random() * myImgs.length);
        console.log(myRandomNum)
        myElement.src = myImgs[myRandomNum];
    }, 1000);
}
changeImage(myElement, myImgs);