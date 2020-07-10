let next = document.querySelector('#next')
let previous = document.querySelector('#prev')
let allImages = document.querySelectorAll('.slides')
let navigationDots = document.querySelector('#navigationDots')


let image1 = document.querySelector('#image1')
let image2 = document.querySelector('#image2')
let image3 = document.querySelector('#image3')

let index = 0;

clearDisplay()
createDots()
displaySlides(index)
displayDots(index)


setInterval(nextListener,5000);

next.addEventListener('click', () =>{
    nextListener()
})
previous.addEventListener('click', () =>{
    prevListener()
})
function displaySlides (index){
   allImages[index].style.display = 'block'
   
}
function clearDisplay (){
    for (let i = 0; i<=allImages.length-1; i++){
        allImages[i].style.display = 'none'
    }
    let dots = document.querySelectorAll('.dot')
    dots.forEach((dots) => {
        dots.classList.remove('selectedDot')
    })
}
function createDots (){
    document.querySelector('#navigationDots').innerHTML = ''
    for (let i = 0; i<=allImages.length-1; i++){
        let createDots  = document.createElement('span')
        createDots.setAttribute('class' , 'dot')
        createDots.setAttribute('id', i)
        createDots.addEventListener('click', (e) => {
           dotListeners(e)
        })

        navigationDots.appendChild(createDots)
    }
}
function nextListener () {
    clearDisplay()
    displaySlides(index)
    displayDots(index)
    index++
    if (index > allImages.length-1){
        index = 0
    }
}
function prevListener () {
    clearDisplay()
    displaySlides(index)
    displayDots(index)
    index--
    if (index < 0){
        index = allImages.length-1
    }
}
function dotListeners (e) {
    
    clearDisplay()
    index = e.target.id
    displaySlides(index)
    displayDots(index)
}
function displayDots (index) {
   
    let allDots = document.querySelectorAll('span')
    allDots[index].classList.add('selectedDot')

}
