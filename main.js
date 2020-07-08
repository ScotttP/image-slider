let next = document.querySelector('#next')
let previous = document.querySelector('#prev')
let allImages = document.querySelectorAll('.slides')
let navigationDots = document.querySelector('#navigationDots')

let image1 = document.querySelector('#image1')
let image2 = document.querySelector('#image2')
let image3 = document.querySelector('#image3')

let index = 0;

clearDisplay()
displaySlides(index)
createDots()

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
}
function createDots (){
    document.querySelector('#navigationDots').innerHTML = ''
    for (let i = 0; i<=allImages.length-1; i++){
        let createDots  = document.createElement('span')
        createDots.setAttribute('class' , 'dot')
        createDots.setAttribute('id', i)
        createDots.addEventListener('click', (e) => {
            clearDisplay()
            let selectedIndex = e.target.id
            displaySlides(selectedIndex)
        })

        navigationDots.appendChild(createDots)
    }
}
function nextListener () {
    clearDisplay()
    displaySlides(index)
    index++
    if (index > allImages.length-1){
        index = 0
    }
}
function prevListener () {
    clearDisplay()
    displaySlides(index)
    index--
    if (index < 0){
        index = allImages.length-1
    }
}
function hi (){
    console.log('hi')
}