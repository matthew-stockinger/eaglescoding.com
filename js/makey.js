var Makey = (function() {

    // array should have length = no. of slideshows on page.
    var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1];
    // must loop as many times as there are slideshows on the page.
    for (var j = 1; j <= 8; j++) {
        showDivs(j, slideIndex[j - 1] + ")");
    }
    
    // dispatches appropriate slideshow number, slide index, and direction to showDivs.
    function slideChange(evt) {
        var slideshowNum = evt.target.getAttribute("rel").charAt(9);
        var direction = evt.target.getAttribute("rel").charAt(11);
        if (direction === "l") {
            direction = -1;
        } else if (direction === "r") {
            direction = 1;
        } else {
            direction = 0;
        }
        // change the slide.
        showDivs(slideshowNum, slideIndex[slideshowNum - 1] += direction);
    }
    
    function showDivs(slideshowNum, n) {
        var i;
        var whichSlideshow = "js-slides" + slideshowNum;
        var images = document.querySelectorAll("[rel='" + whichSlideshow + "']");
        if (n > images.length) {
            slideIndex[slideshowNum - 1] = 1
        }
        if (n < 1) {
            slideIndex[slideshowNum - 1] = images.length
        }
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        images[slideIndex[slideshowNum - 1] - 1].style.display = "block";
    }
    
    // attach event handlers to slideshow L and R buttons.
    function init() {
        // the selector rel$='-r' looks for all rel attributes suffixed by -r.
        var rightButtons = document.querySelectorAll("[rel$='-r']");
        var leftButtons = document.querySelectorAll("[rel$='-l']");
        for (var i = 0; i < rightButtons.length; i++) {
            rightButtons[i].addEventListener("click", slideChange, false);
        }
        for (var i = 0; i < leftButtons.length; i++) {
            leftButtons[i].addEventListener("click", slideChange, false);
        }
    }

    const publicAPI = {
        init: init;
    };
    return publicAPI;
    
})();