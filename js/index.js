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
