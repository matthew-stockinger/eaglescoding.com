/*** To do:
 * Fix or remove keyboard events.
 */

/* ********** Slideshow Main **************** */
const CodeArt = (function() {
    let slideIndex, numFigures, navType;

    function init() {
        slideIndex = 1;
        numFigures = document.querySelectorAll("figure").length;
    
        if (numFigures === 1) {
            navType = "noNav";
        } else if (numFigures > 1 && numFigures <= 7) {
            navType = "dotNav";
        } else if (numFigures >= 8) {
            navType = "numNav";
        }
        /* ****** Generate code-art nav ****** */
        showDivs(slideIndex);
        displayNav(navType, 0, false);
            // displayNav generates HTML for appropriate navtype.  Also attaches event listeners.
        updateHighlights(navType);
        
        /* ********************** add keyboard interaction ******************* */
        window.addEventListener("keydown", function(event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            
            let leftArrowButton = document.querySelector("[rel='js-left-arrow']");
            let rightArrowButton = document.querySelector("[rel='js-right-arrow']");

            switch (event.key) {
                case "ArrowRight":
                    rightArrowButton.click();
                    break;
                case "ArrowLeft":
                    leftArrowButton.click();
                    break;
                default:
                    return; // Quit when any other key is pressed.
            }

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }, true);
    }

    /* ************ Show the appropriate image & caption ******************** */
    function showDivs(n) {
        // update the figure and caption.
        var i;
        var x = document.querySelectorAll("[rel='js-slides']");
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
    }

    function displayDotNav() {
        var leftArrow = '<span rel="js-left-arrow" class="w3-hover-black w3-round unselectable navarrow">&#10094;</span>';
        var rightArrow = '<span rel="js-right-arrow" class="w3-hover-black w3-round unselectable navarrow">&#10095;</span>';
        var navDotA = '<span rel="js-navdots';
        var navDotB = '" class="w3-badge navdots w3-border w3-border-black w3-transparent w3-hover-black"></span>';
        var navDots = '';
        var i;
        for (i = 1; i <= numFigures; i++) {
            navDots += navDotA + i + navDotB;
        }
        document.querySelector("[rel='js-imageNav']").innerHTML = leftArrow + navDots + rightArrow;
        dotListeners();
    }

    // direction is -1, 0, or 1.  animated is bool.
    function displayNumNav(direction, animated) {
        var leftArrow = '<span rel="js-left-arrow" class="w3-hover-black w3-round unselectable navarrow">&#10094;</span>';
        var rightArrow = '<span rel="js-right-arrow" class="w3-hover-black w3-round unselectable navarrow">&#10095;</span>';
        var a1 = '<span rel="js-navnums';
        var a2 = '" class="navnums w3-xlarge">';
        var aRight1 = '<span rel="js-navnums';
        var aRight2 = '" class="navnums w3-xlarge num-animate-right">';
        var aFadeRight1 = '<span rel="js-navnums';
        var aFadeRight2 = '" class="navnums w3-xlarge num-fade-animate-right">';
        var aLeft1 = '<span rel="js-navnums';
        var aLeft2 = '" class="navnums w3-xlarge num-animate-left">';
        var aFadeLeft1 = '<span rel="js-navnums';
        var aFadeLeft2 = '" class="navnums w3-xlarge num-fade-animate-left">';
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
                    res += aFadeLeft1 + "1" + aFadeLeft2 + "1" + c;
                    for (i = 2; i <= 7; i++) {
                        res += aLeft1 + i + aLeft2 + i + c;
                    }
                } else {
                    // make the first number fade in on arrow click.  The rest just move without fade.
                    res += aFadeLeft1 + (slideIndex - 3).toString() + aFadeLeft2 + (slideIndex - 3).toString() + c;
                    for (i = slideIndex - 2; i <= slideIndex + 3; i++) {
                        res += aLeft1 + i + aLeft2 + i + c;
                    }
                }
            } else if (direction === 1) {
                // animated right
                var i;
                // generate the appropriate number list HTML
                if (slideIndex > numFigures - 3) {
                    for (i = numFigures - 6; i <= numFigures - 1; i++) {
                        res += aRight1 + i + aRight2 + i + c;
                    }
                    // make the last number fade in on arrow click.  The rest just move without fade.
                    res += aFadeRight1 + numFigures + aFadeRight2 + numFigures + c;
                } else {
                    for (i = slideIndex - 3; i <= slideIndex + 2; i++) {
                        res += aRight1 + i + aRight2 + i + c;
                    }
                    // make the last number fade in on arrow click.  The rest just move without fade.
                    res += aFadeRight1 + (slideIndex + 3).toString() + aFadeRight2 + (slideIndex + 3).toString() + c;
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
                    res += a1 + i + a2 + i + c;
                }
            } else if (slideIndex >= numFigures - 3) {
                // static far right
                var i;
                for (i = numFigures - 6; i <= numFigures; i++) {
                    res += a1 + i + a2 + i + c;
                }
            } else {
                // static middle
                var i;
                for (i = slideIndex - 3; i <= slideIndex + 3; i++) {
                    res += a1 + i + a2 + i + c;
                }
            }
        }

        document.querySelector("[rel='js-imageNav']").innerHTML = leftArrow + res + rightArrow;
        // add blue hover CSS after animation completes, in 0.3s.  Otherwise will be blue during animation.
        // Only an issue for the far right or left number.
        setTimeout(function() {
            var x = document.querySelectorAll("[rel^='js-navnums']");
            var i;
            for (i = 0; i < 7; i++) {
                if (x[i].className.indexOf("w3-hover-text-blue") === -1) {
                    x[i].className += " w3-hover-text-blue";
                }
            }
        }, 300);

        numListeners();
    }

    function dotListeners() {
        document.querySelector("[rel='js-left-arrow']").addEventListener("click", plusDivs, false);
        document.querySelector("[rel='js-right-arrow']").addEventListener("click", plusDivs, false);
        const navDots = document.querySelectorAll("[rel^='js-navdots']");
        for (let i = 0; i < navDots.length; i++) {
            navDots[i].addEventListener("click", currentDiv, false);
        }
    }
    
    function numListeners() {
        document.querySelector("[rel='js-left-arrow']").addEventListener("click", plusDivs, false);
        document.querySelector("[rel='js-right-arrow']").addEventListener("click", plusDivs, false);
        const navNums = document.querySelectorAll("[rel^='js-navnums']");
        for (let i = 0; i < navNums.length; i++) {
            navNums[i].addEventListener("click", currentDiv, false);
        }
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
        var dots = document.querySelectorAll("[rel^='js-navdots']");
        var i;
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-black", "");
        }
        dots[slideIndex - 1].className += " w3-black";
    }

    // handles number highlighting.
    function updateNums() {
        var navnumElements = document.querySelectorAll("[rel^='js-navnums']");
        
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

    /****************** Methods for changing slides ************************** */
    function plusDivs(evt) {
        // left arrow = -1.  right arrow = 1
        const n = (evt.target.getAttribute("rel") === "js-left-arrow") ? -1 : 1;
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

    function currentDiv(evt) {
        let n = whichNavItem(evt);
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

    function whichNavItem(evt) {
        let attr = evt.target.getAttribute("rel");
        const re = /\d/;  // match first numerical digit.
        return Number(attr.substring(attr.search(re))); // numerical digits at end of attribute.
    }

    const publicAPI = {
        init: init
    };
    return publicAPI;

})();

CodeArt.init();