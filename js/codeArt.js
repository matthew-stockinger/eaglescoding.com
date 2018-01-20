// Hamburger menu
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}

/*********** Slideshow Updating Functions **************** */
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
    // update the figure and caption.
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";

    // call update of dots or numNav
    switch(navType) {
        case "noNav": break;
        case "dotNav":
            updateDots(n);
            break;
        case "numNav":
            updateNums(n);
    }
}

function updateDots(n) {
    var dots = document.getElementsByClassName("navdots");
    var i;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-black", "");
    }
    dots[slideIndex - 1].className += " w3-black";
}

function updateNums(n) {
    // generate and display number list.  Handles wrapping and scrolling scenarios.
    displayNumNav();
    var navnumElements = document.getElementsByClassName("navnums");
    
    // remove blue from numbers.
    for (i = 0; i < 7; i++) {
        navnumElements[i].className = navnumElements[i].className.replace(" w3-text-blue", "");
    }
    
    // add blue to active number.
    if (slideIndex <= 4) {
        navnumElements[slideIndex - 1].className += " w3-text-blue";
    } else if (slideIndex > 4 && slideIndex <= numFigures - 3) {
        navnumElements[3].className += " w3-text-blue";
    } else if (slideIndex > numFigures - 3) {
        navnumElements[6 + slideIndex - numFigures].className += " w3-text-blue";
    }
    
    /* original thoughts on algortihm */
    // // Use slideIndex and numFigures to decide where I am on the display (left, middle, or end)
    // if (slideIndex === 1) {
    //     // if first, need to regenerate number list 1 - 7, in case of wrapping.
    //     displayNumNav();

    // } else if (slideIndex === 2 || slideIndex === 3) {
    //     // If left, black out numbers and highlight next/previous one.
    // } else if (slideIndex > 3 && slideIndex < numFigures - 2) {
    //     // If middle, regenerate numbers and highlight middle.
    // } else if (slideIndex in [numFigures - 2, numFigures - 1]) {
    //     // If right, black out and highlight next/previous.
    // } else if (slideIndex === numFigures) {
    //     // if last, need to regenerate number list, in case of wrapping
    // } else {
    //     alert("slideIndex outside of valid range in updateNums.");
    // }
    // var nums = document.getElementsByClassName("navnums");
    // var i;
    // for (i = 0; )
}

/******* Functions for generating navigation under the slideshow  ************* */
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
    var a = '<span class="navnums w3-hover-text-blue" onclick="currentDiv(';
    var b = ')">'
    var c = '</span>';
    var res = "";
    if (slideIndex <= 4) {
        var i;
        for (i = 1; i <= 7; i++) {
            res += a + i + b + i + c;
        }
    } else if (slideIndex > 4 && slideIndex <= numFigures - 3) {
        var i;
        for (i = slideIndex - 3; i <= slideIndex + 3; i++) {
            res += a + i + b + i + c;
        }
    } else if (slideIndex > numFigures - 3) {
        var i;
        for (i = numFigures - 6; i <= numFigures; i++) {
            res += a + i + b + i + c;
        }
    }
    document.getElementById("imageNav").innerHTML = leftArrow + res + rightArrow;
}