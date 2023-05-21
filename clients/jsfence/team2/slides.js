
/* Testimonials *
-----------------------------------------*/
let testIndex = 0;
const testParagraphs = document.querySelectorAll(".testimonials");
testimonial();

function testimonial() {
    for (let i = 0; i < testParagraphs.length; i++) {
        testParagraphs[i].classList.remove("w3-show");
        testParagraphs[i].classList.add("w3-hide");
    }
    testIndex++;
    if (testIndex > testParagraphs.length) {testIndex = 1};
    testParagraphs[testIndex - 1].classList.replace("w3-hide", "w3-show");
    setTimeout(testimonial, 8000); // must match opacity-inout CSS timing.
}


/* Slideshow 
------------------------------------------ */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}