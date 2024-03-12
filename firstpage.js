let red = document.getElementById('red');
let ora = document.getElementById('ora');
let yel = document.getElementById('yel');
let gre = document.getElementById('gre');
let blu = document.getElementById('blu');
let ind = document.getElementById('ind');
let vio = document.getElementById('vio');

window.addEventListener('scroll', () => {
    let value = window.scrollY

    red.style.left = value * -3.5 + 'px';
    ora.style.left = value * 3.5 + 'px';
    yel.style.left = value * -3.5 + 'px';
    gre.style.left = value * 3.5 + 'px';
    blu.style.left = value * -3.5 + 'px';
    ind.style.left = value * 3.5 + 'px';
    vio.style.left = value * -3.5 + 'px';
});

