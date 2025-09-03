const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', showBox)

function showBox(){
    const triggerbotton = window.innerHeight/1.08;
    

    boxes.forEach(box =>{
        const boxtop = box.getBoundingClientRect().top;
       if(boxtop < triggerbotton){
        box.classList.add('show');
        
       }else{
        box.classList.remove('show');
       }
    });

}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}