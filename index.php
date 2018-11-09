<!DOCTYPE html>
<!-- 
To Do:
-Refactor:
  -attach event handlers in JS modules.
  -rewrite JS files with module pattern.
  -all CSS animations: can use a transition instead of CSS animation.
  -make index.php the wireframe.  Put all content in separate files and load with ajax requests.

-Put image nav over top of images.  Use mouseover effects.
-get rid of google fonts.
-host YouTube videos locally.
-swipe with CSS.  clickstops?  I forget what they're called.  CSS tricks.
    https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
-AJAX the site?
-fix ugly display of code-art-nav 2-line items.  e.g. 2017 winter JavaScript
-->
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="description" content="Home of Apollo coding class">
<meta name="author" content="Matthew Stockinger" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Apollo Coding</title>
<link rel="stylesheet" href="css/w3.css">
<link rel="stylesheet" href="css/style.css" />
<link href='https://fonts.googleapis.com/css?family=Biryani:800' rel='stylesheet' type='text/css'>
</head>

<body>

<!-- sidenav -->
<?php require './nav.php'; ?>


<!-- w3-main container needed for hamburger menu -->
<!-- wraps around all of page content -->
<main class="w3-main" style="margin-left:239px;">

    <!-- hamburger icon header -->
    <?php require './nav-hamburger.php'; ?>

    <!-- The top image -->
    <section class="w3-display-container w3-container w3-margin-top">
        <img src="img/index/laptop2.jpg" alt="MacBook" style="width: 100%">
        <div class="w3-display-middle w3-black w3-biryani-title w3-padding">ANYONE CAN LEARN TO CODE</div>
    </section>
    
    <!-- The student code art carousel -->
    <!-- Shows up on click of student art in navbar -->
    <section class="w3-display-container w3-container w3-margin-top w3-hide">
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

<script src="js/nav.js"></script>
<!-- <script src="js/main.js"></script> -->

</body>
</html>
