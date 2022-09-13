const circles = document.querySelectorAll('.circle');

circles.forEach(elem =>{
    let dots = elem.getAttribute('data-dots');
    let marked = elem.getAttribute('data-porcent');
    let porcent = Math.floor(dots * marked / 100);
    let rotate = 360 / dots;
    let points = '';
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`
        
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < porcent; i++) {
        pointsMarked[i].classList.add('marked')
        
    }
})