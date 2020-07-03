let next = document.querySelector('#next')
let previous = document.querySelector('#previous')

let image1 = document.querySelector('#image1')
let image2 = document.querySelector('#image2')
let image3 = document.querySelector('#image3')
let image4 = document.querySelector('#image4')
let image5 = document.querySelector('#image5')

let currentImage = image1
let nextImage = image2
let previousImage = image5


next.addEventListener('click', (e) =>{
    image1.removeAttribute('class','show')//current image
    image2.removeAttribute('class','hide')//previous image
    image1.setAttribute('class','hide')//previous image
    image2.setAttribute('class','show')//current image
})
previous.addEventListener('click', (e) =>{
    image1.removeAttribute('class','hide')
    image2.removeAttribute('class','show')
    image1.setAttribute('class','show')
    image2.setAttribute('class','hide')
})

