const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30)
//map a range of numbers to another range of numbers
function mapRange(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`
    //map a range of numbers to another range of numbers
    loadText.style.opacity = mapRange(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${mapRange(load, 0, 100, 30, 0)}px)`
}

