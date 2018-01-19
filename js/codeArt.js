// Hamburger menu
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}

// Slideshow
var slideIndex = 1;
var numFigures = document.getElementsByTagName("figure").length;
if (numFigures === 1) {
    var navType = "noNav";
} else if (numFigures > 1 && numFigures <= 7) {
    var navType = "dotNav";
} else if (numFigures >= 8) {
    var navType = "numNav";
}
displayNav(navType);
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("navdots");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-black", "");
    }
    x[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " w3-white";
    dots[slideIndex - 1].className += " w3-black";
}

function displayNav(navType) {
    switch(navType) {
        case "noNav":
            break;
        case "dotNav":
            displayDotNav();
            break;
        case "numNav":
            displayNumNav();
            break;
    }
}

function displayDotNav() {
    var leftArrow = '<span class="w3-hover-black w3-round unselectable navarrow" onclick="plusDivs(-1)">&#10094;</span>';
    var rightArrow = '<span class="w3-hover-black w3-round unselectable navarrow" onclick="plusDivs(1)">&#10095;</span>';
    var navDotA = '<span class="w3-badge navdots w3-border w3-border-black w3-transparent w3-hover-black" onclick="currentDiv(';
    var navDotB = ')"></span>';
    var navDots = '';
    var i;
    for (i = 1; i <= numFigures; i++) {
        navDots += navDotA + i + navDotB;
    }
    document.getElementById("imageNav").innerHTML = leftArrow + navDots + rightArrow;
}

function displayNumNav() {
    var leftArrow = '<span class="w3-hover-black w3-round unselectable navarrow" onclick="plusDivs(-1)">&#10094;</span>';
    var rightArrow = '<span class="w3-hover-black w3-round unselectable navarrow" onclick="plusDivs(1)">&#10095;</span>';
    var navNumberA = '<span class="navnums w3-hover-text-blue" onclick="currentDiv(';
    var navNumberB = ')">'
    var navNumberC = '</span>';
    var navNumbers = "";
    if (slideIndex <= 4) {
        var i;
        for (i = 1; i <= 7; i++) {
            navNumbers += navNumberA + i + navNumberB + i + navNumberC;
        }
    } else if (slideIndex > 4 && slideIndex <= numFigures - 3) {
        var i;
        for (i = slideIndex - 3; i <= slideIndex + 3; i++) {
            navNumbers += navNumberA + i + navNumberB + i + navNumberC;
        }
    } else if (slideIndex > numFigures - 3) {
        var i;
        for (i = numFigures - 6; i <= numFigures; i++) {
            navNumbers += navNumberA + i + navNumberB + i + navNumberC;
        }
    }
    document.getElementById("imageNav").innerHTML = leftArrow + navNumbers + rightArrow;
}