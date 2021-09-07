
/*
const clickL = document.querySelector('.nav__icon-left')
const clickR = document.querySelector('.nav__icon-right')
const sliderContainer = document.querySelector('.slider__imgs');
const sld = document.querySelectorAll('.slider__img');
const a = 1525;
sliderContainer.style.width =  `${sld.length * a}px`;

var i = 0;
function next() {
    if ( i < sld.length - 1 ) {
        i++;
    }
    else {
        i = 0;
    }

    sliderContainer.style.transform = `translateX( -${a * i}px)`;
}

function left() {
    if(i === 0){
        i = sld.length - 1;
    }
    else {
        i--;
    }

    sliderContainer.style.transform = `translateX( -${a * i}px)`;
}
clickR.addEventListener('click', next);
clickL.addEventListener('click', left);
setInterval(next, 5000)
*/

const sliderContainer = document.querySelector('.slider__imgs');
const sld = document.querySelectorAll('.slider__img');

var i = 0;
var j = sld.length - 1;
function next() {
        if ( i < sld.length -1 ) {
            i++;
        sld[i-1].classList.add('js-none')
        }
        else if(i < (sld.length * 2) - 1 ) {
           sld[j].classList.remove('js-none')
           j--;
           i++;
            console.log(i)
        }

        else if(i = 7 ){
            i = 0;
            j = sld.length - 1;
        }

}

setInterval(next, 2000)

