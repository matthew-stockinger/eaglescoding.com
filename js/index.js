function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}

function toggleArt() {
    var topImg = document.getElementById("topImg");
    var topArt = document.getElementById("topArt");
    // toggle landing page image display.
    if (topImg.className.indexOf("w3-show") > -1) {
        topImg.className = topImg.className.replace("w3-show", "w3-hide");
    } else if (topImg.className.indexOf("w3-hide") > -1) {
        topImg.className = topImg.className.replace("w3-hide", "w3-show");
    } else {
        topImg.className += " w3-hide";
    }

    // toggle art carousel display.
    if (topArt.className.indexOf("w3-show") > -1) {
        topArt.className = topArt.className.replace("w3-show", "w3-hide");
    } else if (topArt.className.indexOf("w3-hide") > -1) {
        topArt.className = topArt.className.replace("w3-hide", "w3-show");
    } else {
        topArt.className += " w3-hide";
    }
}