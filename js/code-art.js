/******************  Hamburger/side menu ********************* */
function openMainNav() {
    var mySideNav = document.getElementById("mySideNav");
    mySideNav.style.display = "flex";
    if(mySideNav.className.indexOf(" w3-animate-left") === -1) {
        mySideNav.className += " w3-animate-left";
    }
}

function closeMainNav() {
    document.getElementById("mySideNav").style.display = "none";
}

function openCodeArtNav() {
    var mySideNav = document.getElementById("mySideNav");
    mySideNav.className = mySideNav.className.replace(" w3-collapse",""); 
    mySideNav.style.display = "none";
    var codeArtNav = document.getElementById("codeArtNav");
    codeArtNav.style.display = "flex";
    // need this if to get animation to run the first time user opens the submenu.
    // otherwise it'll just appear with no animation.
    if (codeArtNav.className.indexOf(" w3-animate-left") === -1) {
        codeArtNav.className += " w3-animate-left";
    }
}

function closeCodeArtNav() {
    document.getElementById("codeArtNav").style.display = "none";
}

function backToMainNav() {
    document.getElementById("codeArtNav").style.display = "none";
    var mySideNav = document.getElementById("mySideNav");
    mySideNav.className += " w3-collapse";
    if(mySideNav.className.indexOf(" w3-animate-left") === -1) {
        mySideNav.className += " w3-animate-left";
    }
    mySideNav.style.display = "flex";
}

function highlightMe(elt) {
    var codeArtNavDivs = document.getElementsByClassName("codeArtNavDivs");
    var i;
    for (i = 0; i < codeArtNavDivs.length; i++) {
        codeArtNavDivs[i].className = codeArtNavDivs[i].className.replace(" w3-gray", " w3-black");
    }
    elt.className = elt.className.replace(" w3-black", " w3-gray");
}


/* ********** Slideshow Main **************** */
var imageNav = document.getElementById("imageNav");
var slideIndex = 1;
var numFigures = document.getElementsByTagName("figure").length;
if (numFigures === 1) {
    var navType = "noNav";
} else if (numFigures > 1 && numFigures <= 7) {
    var navType = "dotNav";
} else if (numFigures >= 8) {
    var navType = "numNav";
}
showDivs(slideIndex); // display block for active image, display none for others
displayNav(navType, 0, false); // generate the navigation elements.  handle css animation.
updateHighlights(navType); // highlight active number/dot.  unhighlight others.

// handles left and right arrows
function plusDivs(n) {
    showDivs(slideIndex += n);
    if (n === 1) {
        if (slideIndex <= 4 || slideIndex > numFigures - 3) {
            displayNav(navType, n, false);
        } else if (slideIndex > 4 && slideIndex <= numFigures - 3) {
            displayNav(navType, n, true);
        }
    } else if (n === -1) {
        if (slideIndex <= 3 || slideIndex >= numFigures - 3) {
            displayNav(navType, n, false);
        } else if (slideIndex >= 4 && slideIndex < numFigures - 3) {
            displayNav(navType, n, true);
        }
    }
    updateHighlights(navType);
}

// if user clicks an image number directly.
function currentDiv(n) {
    // Need to check if new center number will be different than old center number.
    // If so, then animate.
    if (slideIndex > 4 && n < slideIndex && n < numFigures - 3) {
        // animate left
        slideIndex = n;
        displayNav(navType, -1, true);
    } else if (slideIndex < numFigures - 3 && n > slideIndex && n > 4) {
        // animate right
        slideIndex = n;
        displayNav(navType, 1, true);
    } else {
        // static
        slideIndex = n;
        displayNav(navType, 0, false);
    }
    showDivs(n);
    updateHighlights(navType);
}

/* ************ Show the appropriate image & caption ******************** */
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

}

/* ****** Generate and appropriately animate dot or number list  ************* */
function displayNav(navType, direction, animated) {
    switch(navType) {
        case "noNav":
            break;
        case "dotNav":
            displayDotNav();
            break;
        case "numNav":
            displayNumNav(direction, animated);
            break;
    }

    // this code positions the numNav or dotNav over the image or video.
    // videos have controls, so positioning is higher than for images.
    var x = document.getElementsByClassName("mySlides");
    if (x[slideIndex - 1].firstElementChild.tagName === 'IMG') {
        imageNav.className = imageNav.className.replace("vidPositioned", "imgPositioned");
    } else if (x[slideIndex - 1].firstElementChild.tagName === 'VIDEO') {
        imageNav.className = imageNav.className.replace("imgPositioned", "vidPositioned");    
    }

    // fade out the imageNav a few seconds after no mouse movement.
    // event handlers for mouseenter and mouseleave are elsewhere, below.
    // setTimeout(fadeOut, 2000);
}

function displayDotNav() {
    var leftArrow = '<span class="w3-hover-white w3-round unselectable navarrow" onclick="plusDivs(-1)">&#10094;</span>';
    var rightArrow = '<span class="w3-hover-white w3-round unselectable navarrow" onclick="plusDivs(1)">&#10095;</span>';
    var navDotA = '<span class="w3-badge navdots w3-border w3-border-white w3-transparent w3-hover-white" onclick="currentDiv(';
    var navDotB = ')"></span>';
    var navDots = '';
    var i;
    for (i = 1; i <= numFigures; i++) {
        navDots += navDotA + i + navDotB;
    }
    imageNav.innerHTML = leftArrow + navDots + rightArrow;
}

// direction is -1, 0, or 1.  animated is bool.
function displayNumNav(direction, animated) {
    var leftArrow = '<span class="w3-hover-white w3-round unselectable navarrow" onclick="plusDivs(-1)">&#10094;</span>';
    var rightArrow = '<span class="w3-hover-white w3-round unselectable navarrow" onclick="plusDivs(1)">&#10095;</span>';
    var a = '<span class="navnums w3-xlarge" onclick="currentDiv(';
    var aRight = '<span class="navnums w3-xlarge num-animate-right" onclick="currentDiv(';
    var aFadeRight = '<span class="navnums w3-xlarge num-fade-animate-right" onclick="currentDiv(';
    var aLeft = '<span class="navnums w3-xlarge num-animate-left" onclick="currentDiv(';
    var aFadeLeft = '<span class="navnums w3-xlarge num-fade-animate-left" onclick="currentDiv(';
    var b = ')">'
    var c = '</span>';
    var res = "";
    /**** All the logic below decides what numbers to generate, whether to animate, and in which direction. */
    /**** A string of HTML is generated based on these decisions. */
    if (animated === true) {
        if (direction === -1) {
            // animated left
            var i;
            // generate the appropriate number list HTML
            if (slideIndex < 4) {
                // make the first number fade in on arrow click.  The rest just move without fade.
                res += aFadeLeft + "1" + b + "1" + c;
                for (i = 2; i <= 7; i++) {
                    res += aLeft + i.toString() + b + i.toString() + c;
                }
            } else {
                // make the first number fade in on arrow click.  The rest just move without fade.
                res += aFadeLeft + (slideIndex - 3).toString() + b + (slideIndex - 3).toString() + c;
                for (i = slideIndex - 2; i <= slideIndex + 3; i++) {
                    res += aLeft + i.toString() + b + i.toString() + c;
                }
            }
        } else if (direction === 1) {
            // animated right
            var i;
            // generate the appropriate number list HTML
            if (slideIndex > numFigures - 3) {
                for (i = numFigures - 6; i <= numFigures - 1; i++) {
                    res += aRight + i.toString() + b + i.toString() + c;
                }
                // make the last number fade in on arrow click.  The rest just move without fade.
                res += aFadeRight + numFigures.toString() + b + numFigures.toString() + c;
            } else {
                for (i = slideIndex - 3; i <= slideIndex + 2; i++) {
                    res += aRight + i.toString() + b + i.toString() + c;
                }
                // make the last number fade in on arrow click.  The rest just move without fade.
                res += aFadeRight + (slideIndex + 3).toString() + b + (slideIndex + 3).toString() + c;
            }
        } else if (direction === 0) {
            // error handling: no direction animated
            animated = false;
        } else { 
            alert("Invalid direction value.  Please email matthew.stockinger@isd742.org.");
        }
    } else if (animated === false) {
        if (slideIndex <= 4) {
            // static far left
            var i;
            for (i = 1; i <= 7; i++) {
                res += a + i.toString() + b + i.toString() + c;
            }
        } else if (slideIndex >= numFigures - 3) {
            // static far right
            var i;
            for (i = numFigures - 6; i <= numFigures; i++) {
                res += a + i.toString() + b + i.toString() + c;
            }
        } else {
            // static middle
            var i;
            for (i = slideIndex - 3; i <= slideIndex + 3; i++) {
                res += a + i.toString() + b + i.toString() + c;
            }
        }
    }

    imageNav.innerHTML = leftArrow + res + rightArrow;
    // add blue hover CSS after animation completes, in 0.3s.  Otherwise will be blue during animation.
    // Only an issue for the far right or left number.
    setTimeout(function() {
        var x = document.getElementsByClassName("navnums");
        var i;
        for (i = 0; i < 7; i++) {
            if (x[i].className.indexOf("w3-hover-text-blue") === -1) {
                x[i].className += " w3-hover-text-blue";
            }
        }
    }, 300);
}

/********************* Change the highlight color of the dots/numbers **************** */
function updateHighlights(navType) {
    switch(navType) {
        case "noNav":
            break;
        case "dotNav":
            updateDots();
            break;
        case "numNav":
            updateNums();
            break;
    }
}

function updateDots(n) {
    // delete: displayDotNav();
    var dots = document.getElementsByClassName("navdots");
    var i;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-black", "");
    }
    dots[slideIndex - 1].className += " w3-black";
}

// handles number highlighting.
function updateNums() {
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
}

/*****************autohide / hover effects for imageNav*************** */
var picDiv = document.getElementById("picDiv");
window.onload = function() { setTimeout(function() { delayedFadeOut(1000) }) };
picDiv.addEventListener("mouseleave", function() { delayedFadeOut(800); });
picDiv.addEventListener("mouseover", fadeIn);
picDiv.addEventListener("mousedown", touchFadeIn); // touch makes nav reappear for a time.

function touchFadeIn() {
    fadeIn();
    delayedFadeOut(3000);
}

function delayedFadeOut(delay) {
    timeoutID = setTimeout(fadeOut, delay);
}

function fadeOut() {
    if (imageNav.className.indexOf('fadeIn') !== -1) {
        imageNav.className = imageNav.className.replace("fadeIn", "fadeOut");
    } else {
        imageNav.className += " fadeOut";
    }
}

function fadeIn() {
    if (typeof timeoutID === 'number') {
        clearTimeout(timeoutID);
        timeoutID = undefined;
    }
    if (imageNav.className.indexOf('fadeOut') !== -1) {
        imageNav.className = imageNav.className.replace("fadeOut", "fadeIn");
    } 
}

/* ************************** keyboard interaction ******************* */
window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (event.key) {
        case "ArrowRight":
            plusDivs(1);
            break;
        case "ArrowLeft":
            plusDivs(-1);
            break;
        default:
            return; // Quit when any other key is pressed.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);