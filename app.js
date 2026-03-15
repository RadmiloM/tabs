const london = document.querySelector('.london');
const paris = document.querySelector('.paris');
const tokyo = document.querySelector('.tokyo');
const tabContainer = document.querySelector('.tab-container');

const textContentLondon = document.querySelector('.text-content-london');
const textContentParis = document.querySelector('.text-content-paris');
const textContentTokyo = document.querySelector('.text-content-tokyo');


london.addEventListener('click', () => {
    textContentLondon.style.display = 'block';
    textContentParis.style.display = 'none';
    textContentTokyo.style.display = 'none';
})

paris.addEventListener('click', () => {
    textContentLondon.style.display = 'none';
    textContentTokyo.style.display = 'none';
    textContentParis.style.display='block';
    textContentParis.style.marginLeft= '20px';
})

tokyo.addEventListener('click', () => {
    textContentLondon.style.display = 'none';
    textContentParis.style.display = 'none';
    textContentTokyo.style.display='block';
    textContentTokyo.style.marginLeft= '20px';
})