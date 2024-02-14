


// let slideIndex = 0;
// let slides = document.getElementsByClassName("slider__slide");
// let slideTimeout
// showSlides();


// function showSlides() {
//   let i;
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   slides[slideIndex-1].style.display = "block";  
//   slideTimeout = setTimeout(showSlides, 10000); // Change slide every 2 seconds
// }

// document.getElementById("prevBtn").addEventListener("click", function(){
// 	clearTimeout(slideTimeout)
//   slideIndex -= 1;
//   console.log('нажата prevBtn', {slideIndex})
//   if(slideIndex < 1) { slideIndex = slides.length - 1; }
//   showSlides(slideIndex);
// });

// document.getElementById("nextBtn").addEventListener("click", function(){
// 	clearTimeout(slideTimeout)
//   slideIndex += 1;
//   console.log('нажата nextBtn', {slideIndex})
//   if(slideIndex >= slides.length) { slideIndex = 0; }
//   showSlides(slideIndex);
// });


let slideIndex = 0;
let slides = document.getElementsByClassName("slider__slide");
showSlides(slideIndex);

function showSlides(n) {
  let i;
  
  if (n >= slides.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = slides.length - 1}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // slides[i].classList.remove('active')
  }
  
  slides[slideIndex].style.display = "block";  
  // slides[slideIndex].classList.add('active')
}

document.getElementById("prevBtn").addEventListener("click", function(){
	console.log('pressed prevBtn', {slideIndex})
  clearTimeout(slideTimeout);
  showSlides(--slideIndex);
});

document.getElementById("nextBtn").addEventListener("click", function(){
	console.log('pressed nextBtn', {slideIndex})
  clearTimeout(slideTimeout);
  showSlides(++slideIndex);
});

let slideTimeout = setInterval(function() { showSlides(++slideIndex); }, 7000);


// newproducts slider
let npIndex = 0
let npSlides = document.getElementsByClassName("newproducts__carts-slider")
shownpSlides(npIndex);

function shownpSlides(n) {
  let i;
  
  if (n >= npSlides.length) {npIndex = 0}    
  if (n < 0) {npIndex = npSlides.length - 1}
  
  for (i = 0; i < npSlides.length; i++) {
    npSlides[i].style.display = "none";
    // slides[i].classList.remove('active')
  }
  
  npSlides[npIndex].style.display = "flex";  
  // slides[slideIndex].classList.add('active')
}

document.getElementById("prevBtn-np").addEventListener("click", function(){
	console.log('pressed prevBtn', {npIndex})
  shownpSlides(--npIndex);
});

document.getElementById("nextBtn-np").addEventListener("click", function(){
	console.log('pressed nextBtn', {npIndex})
  shownpSlides(++npIndex);
});


// bestsell slider
let bsIndex = 0
let bsSlides = document.getElementsByClassName("bestsell__carts-container")
showbsSlides(bsIndex);

function showbsSlides(n) {
  let i;
  
  if (n >= bsSlides.length) {bsIndex = 0}    
  if (n < 0) {bsIndex = bsSlides.length - 1}
  
  for (i = 0; i <bsSlides.length; i++) {
    bsSlides[i].style.display = "none";
    // slides[i].classList.remove('active')
  }
  
  bsSlides[bsIndex].style.display = "flex";  
  // slides[slideIndex].classList.add('active')
}

document.getElementById("prevBtn-bs").addEventListener("click", function(){
	console.log('pressed prevBtn-bs', {bsIndex})
  showbsSlides(--bsIndex);
});

document.getElementById("nextBtn-bs").addEventListener("click", function(){
	console.log('pressed nextBtn-bs', {bsIndex})
  showbsSlides(++bsIndex);
});


// a href
// Получите все элементы <a> на странице
let items = document.querySelectorAll('.bestsell__item');

// Добавьте обработчик событий 'click' каждому элементу <a>
for(let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function(event) {
    // Отмените действие по умолчанию (переход по ссылке)
    event.preventDefault();

    // Удалите класс 'bestsell__item--active' у всех элементов
    for(let j = 0; j < items.length; j++) {
      items[j].classList.remove('bestsell__item--active');
    }

    // Добавьте класс 'bestsell__item--active' к выбранному элементу
    this.classList.add('bestsell__item--active');
  });
}
