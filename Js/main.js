let circle = document.querySelectorAll('.navSpan');

circle[0].style.backgroundColor ='#DD011B'

circle[0].addEventListener('click', () => {
    circle[0].style.backgroundColor ='#DD011B'
    circle[1].style.backgroundColor ='#fff'
    circle[2].style.backgroundColor ='#fff'
})
circle[1].addEventListener('click', () => {
    circle[0].style.backgroundColor ='#fff'
    circle[1].style.backgroundColor ='#01A38E'
    circle[2].style.backgroundColor ='#fff'

})
circle[2].addEventListener('click', () => {
    circle[0].style.backgroundColor ='#fff'
    circle[1].style.backgroundColor ='#fff'
    circle[2].style.backgroundColor ='#FCAA00'
})






