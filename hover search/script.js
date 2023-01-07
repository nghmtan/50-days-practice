const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

//click if toggle

btn.addEventListener('mouseenter', () => {
    search.classList.add('active');
    input.focus();
})
search.addEventListener('mouseleave', () => {
    search.classList.remove('active');
    input.focus();
})
//

