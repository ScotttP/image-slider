let next = document.querySelector('#next')
let previous = document.querySelector('#prev')
let allImages = document.querySelectorAll('.slides')

let image1 = document.querySelector('#image1')
let image2 = document.querySelector('#image2')
let image3 = document.querySelector('#image3')

let index = 0;

clearDisplay()
displaySlides(index)

next.addEventListener('click', (e) =>{
    clearDisplay()
    displaySlides(index)
    index++
    if (index > allImages.length-1){
        index = 0
    }
})
previous.addEventListener('click', (e) =>{
    clearDisplay()
    displaySlides(index)
    index--
    if (index < 0){
        index = allImages.length-1
    }
})
function displaySlides (index){
   allImages[index].style.display = 'block'
   
}
function clearDisplay (){
    for (let i = 0; i<=allImages.length-1; i++){
        allImages[i].style.display = 'none'
    }
}
