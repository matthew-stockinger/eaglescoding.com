/*
 * Nav module.
 * Handles main sidenav for the site.
 */

//var Nav = (function () {

    function openMainNav() {
        var mainNav = document.getElementById("mainNav");
        mainNav.style.display = "flex";
        if (mainNav.className.indexOf(" w3-animate-left") === -1) {
            mainNav.className += " w3-animate-left";
        }
    }

    function closeMainNav() {
        document.getElementById("mainNav").style.display = "none";
    }

    function openSubNav(subNavID) {
        var mainNav = document.getElementById("mainNav");
        mainNav.className = mainNav.className.replace(" w3-collapse", "");
        mainNav.style.display = "none";
        var subNav = document.getElementsByClassName("subNav")[subNavID];
        subNav.style.display = "flex";
        // need this if to get animation to run the first time user opens the submenu.
        // otherwise it'll just appear with no animation.
        if (subNav.className.indexOf(" w3-animate-left") === -1) {
            subNav.className += " w3-animate-left";
        }
    }

    function closeSubNav() {
        var subNavs = document.getElementsByClassName("subNav");
        for (var i = 0; i < subNavs.length; i++) {
            subNavs[i].style.display = "none";
        }
    }

    function backToMainNav() {
        closeSubNav();
        var mainNav = document.getElementById("mainNav");
        mainNav.className += " w3-collapse";
        if (mainNav.className.indexOf(" w3-animate-left") === -1) {
            mainNav.className += " w3-animate-left";
        }
        mainNav.style.display = "flex";
    }

    function highlightMe(elt) {
        var subNavDivs = document.getElementsByClassName("subNavDivs");
        var i;
        for (i = 0; i < subNavDivs.length; i++) {
            subNavDivs[i].className = subNavDivs[i].className.replace(" w3-gray", " w3-black");
        }
        elt.className = elt.className.replace(" w3-black", " w3-gray");
    }

//    var publicAPI = {
//        openMainNav: openMainNav,
//        closeMainNav: closeMainNav
//    }
//    return publicAPI;
//
//})();
