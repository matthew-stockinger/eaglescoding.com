/*
 * Nav module.
 * Handles main sidenav for the site.
 */

var Nav = (function() {

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

    function openSubNav(evt) {
        var mainNav = document.querySelector("[rel='js-mainNav']");
        mainNav.className = mainNav.className.replace(" w3-collapse", "");
        mainNav.style.display = "none";

        // pick which subNav to open (0 for student web pages or 1 for code art)
        const cond = (evt.target.getAttribute("rel") === "js-student-pages-button");
        const subNavID = cond ? 0 : 1;

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

    function init() {
        const hamburgerButton = document.querySelector("[rel='js-hamburger-button']");
        const closeButton = document.querySelector("[rel='js-close-button']");
        const studentPagesButton = document.querySelector("[rel='js-student-pages-button']");
        const codeArtButton = document.querySelector("[rel='js-code-art-button']");
        const closeSubNavButtons = document.querySelectorAll("[rel='js-close-subnav-button']");
        const backButtons = document.querySelectorAll("[rel='js-back-button']");
        hamburgerButton.addEventListener("click", openMainNav, false);
        closeButton.addEventListener("click", closeMainNav, false);
        studentPagesButton.addEventListener("click", openSubNav, false);
        codeArtButton.addEventListener("click", openSubNav, false);
        for (let i = 0; i < closeSubNavButtons.length; i++) {
            closeSubNavButtons[i].addEventListener("click", closeSubNav, false);
        }
        for (let i = 0; i < backButtons.length; i++) {
            backButtons[i].addEventListener("click", backToMainNav, false);
        }
    }

    const publicAPI = {
        init: init,
    }
    return publicAPI;

})();

Nav.init();
