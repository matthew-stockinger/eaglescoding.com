<!DOCTYPE html>
<!-- Version History
1.0   functional side navbar.
1.1   responsive navbar for tablet screens.
2.0   add image to right of navbar.  
2.1   add heading inside of image.
2.2   add videos.
2.3   restructure links and directories, add Google font Biryani
2.4   rewrote navbar CSS with flexboxes.
3.0   add phone width responsiveness.
4.0   rewrite with w3.css.

To Do:
-Merge current branch and create a new one.
-put code-art.php and code-art-nav.php in root directory.
    -use a variable to determine which files to display?
    -perhaps a URL ?folder sort of thing?
-Cleanup
    -filenames change to dashes.
    -?? folders: images, styles, scripts.
    -?? style.css
    -?? main.js
-add videos to codeart pages.
-publish winter 2017 submissions.
-Put image nav over top of images.  Use mouseover effects.
-Unify the site to same theme.
-get rid of google fonts.
-host YouTube videos locally.
-swipe with CSS.  clickstops?  I forget what they're called.  CSS tricks.
    https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
-AJAX the site.
-->
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="description" content="Home of Apollo coding class">
<meta name="author" content="Matthew Stockinger" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Apollo Coding</title>
<link rel="stylesheet" href="css/w3.css">
<link rel="stylesheet" href="css/styles.css" />
<link href='https://fonts.googleapis.com/css?family=Biryani:800' rel='stylesheet' type='text/css'>
</head>

<body>

<!-- w3-collapse = phone hamburger menu.  flexcontainer centers vertically on screen. -->
<nav id="mySideNav" class="w3-sidenav w3-collapse w3-padding flexcontainer">
    <a href="javascript:void(0)" onclick="closeMainNav()" class="w3-button w3-white w3-large w3-hide-large w3-padding">&times; Close</a>
    <div class="w3-black w3-margin">
        <a href="#" class="w3-biryani">APOLLO CODING CLASS</a>
    </div>
    <div class="w3-black w3-margin">
        <a href="./makey/makey.html" class="w3-biryani" target="_blank">Makey Makey!<br><br></a>
    </div>
    <div class="w3-black w3-margin">
        <a href="./students/student-pages.php" class="w3-biryani">Student Web Pages<br><br></a>
    </div>
    <div class="w3-black w3-margin">
        <a href="javascript:void(0)" onclick="openCodeArtNav()" class="w3-biryani">Student Code Art<br><br></a>
    </div>
</nav>

<nav id="codeArtNav" class="w3-sidenav w3-padding flexcontainer">
    <a href="javascript:void(0)" onclick="closeCodeArtNav()" class="w3-button w3-white w3-large w3-hide-large w3-padding">&times; Close</a>
    <a href="javascript:void(0)" onclick="backToMainNav()" class="w3-button w3-white w3-large w3-padding">
        &#10094; Back
    </a>
    <!-- php generate codeArt sidenav from directories present. -->
    <?php
        $ls = scandir("./code-art/");
        foreach ($ls as $item) {
            // if it's ./ or ../ or cgi-bin, ignore it.
            if ($item === "." or $item === ".." or $item === "cgi-bin") continue;
            // if it's a named directory, create a link on the page.
            if (is_dir("./code-art/" . $item)) {
                // parse the directory name.  Format is e.g. 2017_fall_ or 2017_fall_JavaScript.
                // Want this to become a string, "Fall 2017 JavaScript"
                $arr = explode("_", $item);
                $year = $arr[0];
                $season = $arr[1];
                $lang = $arr[2];
                // then echo div and <a> to add that item to sidenav.
                /* example: 
                <div class="codeArtNavDivs w3-margin w3-black" onclick="highlightMe(this)">
                    <a href="codeart/2017_fall_/codeart_2017fall.html" class="w3-biryani"><br>Fall 2017<br><br></a>
                </div> */
                $res = '<div class="codeArtNavDivs w3-margin w3-black" onclick="highlightMe(this)">';
                $res .= '<a href="code-art/' . $item . '/code-art.php" class="w3-biryani"><br>';
                $res .= ucfirst($season) . " " . $year . '<br>' . $lang . '<br></a></div>';
                echo $res;
            }
        }
    ?>
</nav>

<!-- w3-main container needed for hamburger menu -->
<!-- wraps around all of page content -->
<main class="w3-main" style="margin-left:239px;">
    <!-- hamburger menu icon -->
    <header class="w3-container w3-black">
        <span class="w3-opennav w3-xlarge w3-hide-large" onclick="openMainNav()">&#9776;</span>
    </header>

    <!-- The top image -->
    <header id="topImg" class="w3-display-container w3-container w3-margin-top">
        <img src="img/index/laptop2.jpg" alt="MacBook" style="width: 100%">
        <div class="w3-display-middle w3-black w3-biryani-title w3-padding">ANYONE CAN LEARN TO CODE</div>
    </header>
    
    <!-- The student code art carousel -->
    <!-- Shows up on click of student art in navbar -->
    <section id="topArt" class="w3-display-container w3-container w3-margin-top w3-hide">
        <img src="img/index/laptop2.jpg" alt="MacBook" style="width: 100%">
        <div class="w3-display-middle w3-black w3-biryani-title w3-padding">Carousel Test</div>
    </section>

    <!-- first youtube video -->
    <section class="video-container w3-container w3-margin-top w3-margin-bottom">
        <iframe class="w3-container" width="2000" height="1125" src="https://www.youtube.com/embed/nKIu9yen5nc" frameborder="0" allowfullscreen></iframe>
    </section>

    <!-- second youtube video -->
    <section class="video-container w3-container w3-margin-top w3-margin-bottom">
        <iframe class="w3-container" width="2000" height="1125" src="https://www.youtube.com/embed/mFPg96gdPkc" frameborder="0" allowfullscreen></iframe>
    </section>
</main>

<script src="js/index.js">
</script>

</body>
</html>