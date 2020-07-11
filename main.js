let next = document.querySelector('#next')
let previous = document.querySelector('#prev')
let allImages = document.querySelectorAll('.slides')
let navigationDots = document.querySelector('#navigationDots')
let index;

index = 0
clearDisplay()
createDots()
displaySlides(index)
displayDots(index)


let nextSlide = setInterval(nextListener,5000);

next.addEventListener('click', () =>{
    nextListener()
})
previous.addEventListener('click', () =>{
    prevListener()
    // clearInterval(nextSlide)
})
function displaySlides (index){
    allImages[index].classList.remove('hide')
   allImages[index].classList.add('show')
   
}
function clearDisplay (){
    for (let i = 0; i<=allImages.length-1; i++){
        allImages[i].classList.add('hide')
        allImages[i].classList.remove('show')
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
    index++
    if (index > allImages.length-1){
        index = 0
    }
    clearDisplay()
    displaySlides(index)
    displayDots(index)
}
function prevListener () {
    index--
    if (index < 0){
        index = allImages.length-1
    }

    clearDisplay()
    displaySlides(index)
    displayDots(index)
    
}
function dotListeners (e) {
    
    clearDisplay()
    index = parseInt(e.target.id)
    displaySlides(index)
    displayDots(index)
}
function displayDots (index) {
    let allDots = document.querySelectorAll('span')
    allDots[index].classList.add('selectedDot')

}
