/*
 * Nav module.
 * Handles main sidenav for the site.
 */

var Nav = (function () {

    function openMainNav() {
        var mainNav = document.querySelector("[rel='js-mainNav']");
        mainNav.style.display = "flex";
        if (mainNav.className.indexOf(" w3-animate-left") === -1) {
            mainNav.className += " w3-animate-left";
        }
    }

    function closeMainNav() {
        document.querySelector("[rel='js-mainNav']").style.display = "none";
    }

    function openSubNav(subNavID) {
        var mainNav = document.querySelector("[rel='js-mainNav']");
        mainNav.className = mainNav.className.replace(" w3-collapse", "");
        mainNav.style.display = "none";
        var subNav = document.querySelectorAll("[rel='js-subNav']")[subNavID];
        subNav.style.display = "flex";
        // need this if to get animation to run the first time user opens the submenu.
        // otherwise it'll just appear with no animation.
        if (subNav.className.indexOf(" w3-animate-left") === -1) {
            subNav.className += " w3-animate-left";
        }
    }

    function closeSubNav() {
        var subNavs = document.querySelectorAll("[rel='js-subNav']");
        for (var i = 0; i < subNavs.length; i++) {
            subNavs[i].style.display = "none";
        }
    }

    function backToMainNav() {
        closeSubNav();
        var mainNav = document.querySelector("[rel='js-mainNav']");
        mainNav.className += " w3-collapse";
        if (mainNav.className.indexOf(" w3-animate-left") === -1) {
            mainNav.className += " w3-animate-left";
        }
        mainNav.style.display = "flex";
    }


   var publicAPI = {
       openMainNav: openMainNav,
       closeMainNav: closeMainNav
   }
   return publicAPI;

})();
