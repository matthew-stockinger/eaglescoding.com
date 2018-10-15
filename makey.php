<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="utf-8">
  <meta name="description" content="Home of Apollo coding class">
  <meta name="author" content="Matthew Stockinger" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>2017 Makey Makey!</title>
  <link rel="stylesheet" href="css/w3.css">
  <link rel="stylesheet" href="css/style.css" />
  <link href='https://fonts.googleapis.com/css?family=Biryani:800' rel='stylesheet' type='text/css'>
</head>


<body>

  <!-- main sidenav -->
  <?php
    require './nav.php';
?>

  <!-- w3-main container needed for hamburger menu -->
  <!-- wraps around all of page content -->
  <main class="w3-main" style="margin-left:239px;">
    <!-- hamburger menu icon -->
    <header class="w3-container w3-black">
      <span class="w3-opennav w3-xlarge w3-hide-large" onclick="openMainNav()">&#9776;</span>
    </header>

    <!-- centered white content card -->
    <!--    <div class="w3-container w3-white w3-card">-->

    <header>
      <h1 class="w3-center w3-card-4 w3-black">The 2017 Apollo Coding<br>Innovation Grant</h1>

      <h2 class="w3-center">Creating Human Interfaces<br>With Makey Makey</h2>

      <hr class="hr-teal">

      <p>
        Makey Makey is an invention kit that allows the user to create touch-sensitive interfaces out of nearly anything. In this project, students used Makey Makey to create human interfaces for computers and software.
      </p>

      <hr class="hr-teal">
    </header>

    <div>
      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <img src="makey/2017MakeyHighlightPhotos/Aidan1.JPG" class="w3-image" alt="punch controller">
        <p class="w3-container">
          This device is a controller for a boxing game. The player can actually punch the controller.
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <img src="makey/2017MakeyHighlightPhotos/An1.JPG" class="w3-image" alt="art pad">
        <p class="w3-container">
          Some of our projects were designed as assistive technologies. This touchpad is designed for individuals with motor deficits. It is designed to allow them to control paint and art software without needing the keyboard or computer touchpad. It features a touch-sensitive pen that recognizes where the user is holding it and changes functionality accordingly.
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <div class="w3-display-container">
          <img src="makey/2017MakeyHighlightPhotos/artist1.JPG" class="w3-image slides1" alt="art pad 1">
          <img src="makey/2017MakeyHighlightPhotos/artist2.JPG" class="w3-image slides1" alt="art pad 2">
          <img src="makey/2017MakeyHighlightPhotos/artist3.JPG" class="w3-image slides1" alt="art pad 3">
          <button class="w3-button w3-black w3-display-left" onclick="slideChange(1, -1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="slideChange(1, 1)">&#10095;</button>
        </div>
        <p class="w3-container">
          This is another art-driven project that simplifies the user experience. Instead of dealing with a mouse or a touchpad, this device simply uses the touch-sensitive stars to control movement and clicks.
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <div class="w3-display-container">
          <img src="makey/2017MakeyHighlightPhotos/brenan1.JPG" class="w3-image slides2" alt="jump controller 1">
          <img src="makey/2017MakeyHighlightPhotos/brenan2.JPG" class="w3-image slides2" alt="jump controller 2">
          <button class="w3-button w3-black w3-display-left" onclick="slideChange(2, -1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="slideChange(2, 1)">&#10095;</button>
        </div>
        <p class="w3-container">
          Many games require players to run and jump through obstacle-filled worlds. Players using this controller have to jump in real life to make the character on the screen jump.
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <img src="makey/2017MakeyHighlightPhotos/Charles1.JPG" class="w3-image" alt="art pad">
        <p class="w3-container">
          Here is another example of an innovative user control experience: a tilt sensor. This student hand-made a box out of cardboard and aluminum foil as his controller. Inside the box is a small ball that rolls as you tilt the box. The rolling of the ball trips the Makey Makey sensors, allowing him to control computer functions and games (PacMan, in this example).
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <div class="w3-display-container">
          <img src="makey/2017MakeyHighlightPhotos/flappy1.JPG" class="w3-image slides3" alt="flappy bird 1">
          <img src="makey/2017MakeyHighlightPhotos/flappy2.JPG" class="w3-image slides3" alt="flappy bird 2">
          <button class="w3-button w3-black w3-display-left" onclick="slideChange(3, -1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="slideChange(3, 1)">&#10095;</button>
        </div>
        <p class="w3-container">
          Here is another example of a jump or foot-based controller. The idea here is to require jumps or foot stomps to control Flappy Bird.
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <div class="w3-display-container">
          <img src="makey/2017MakeyHighlightPhotos/Jakob1.JPG" class="w3-image slides4" alt="augmentative communication 1">
          <img src="makey/2017MakeyHighlightPhotos/Jakob2.JPG" class="w3-image slides4" alt="augmentative communication 2">
          <img src="makey/2017MakeyHighlightPhotos/Jakob3.JPG" class="w3-image slides4" alt="augmentative communication 3">
          <button class="w3-button w3-black w3-display-left" onclick="slideChange(4, -1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="slideChange(4, 1)">&#10095;</button>
        </div>
        <p class="w3-container">
          Using only a clothing box, this student created an augmentative communication device with six different custom messages. Each of the six inputs can be programmed to say anything that is desired.
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <div class="w3-display-container">
          <img src="makey/2017MakeyHighlightPhotos/Kole1.JPG" class="w3-image slides5" alt="sword and shield 1">
          <img src="makey/2017MakeyHighlightPhotos/Kole2.JPG" class="w3-image slides5" alt="sword and shield 2">
          <button class="w3-button w3-black w3-display-left" onclick="slideChange(5, -1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="slideChange(5, 1)">&#10095;</button>
        </div>
        <p class="w3-container">
          The Legend of Zelda was a seminal video game release in the 1980's. It remains one of the most popular video game franchises in the world. This device is a sword and shield that are used to play the game. To swing the sword in the game, swing the sword in real life.
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <div class="w3-display-container">
          <img src="makey/2017MakeyHighlightPhotos/misa1.JPG" class="w3-image slides6" alt="zoom controller 1">
          <img src="makey/2017MakeyHighlightPhotos/misa2.JPG" class="w3-image slides6" alt="zoom controller 2">
          <img src="makey/2017MakeyHighlightPhotos/misa3.JPG" class="w3-image slides6" alt="zoom controller 3">
          <button class="w3-button w3-black w3-display-left" onclick="slideChange(6, -1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="slideChange(6, 1)">&#10095;</button>
        </div>
        <p class="w3-container">
          Apple computers come with built-in magnification software for visually impaired people. While this is an excellent tool, a visually impaired person might have difficulty getting it activated, because they can't adequately see the keyboard or the screen before it's on. This device provides large, shiny, touch controls for the magnification functions of the MacBook.
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <div class="w3-display-container">
          <img src="makey/2017MakeyHighlightPhotos/piano1.JPG" class="w3-image slides7" alt="floor piano 1">
          <img src="makey/2017MakeyHighlightPhotos/piano2.JPG" class="w3-image slides7" alt="floor piano 2">
          <img src="makey/2017MakeyHighlightPhotos/piano3.JPG" class="w3-image slides7" alt="floor piano 3">
          <img src="makey/2017MakeyHighlightPhotos/piano4.JPG" class="w3-image slides7" alt="floor piano 4">
          <img src="makey/2017MakeyHighlightPhotos/piano5.JPG" class="w3-image slides7" alt="floor piano 5">
          <button class="w3-button w3-black w3-display-left" onclick="slideChange(7, -1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="slideChange(7, 1)">&#10095;</button>
        </div>
        <p class="w3-container">
          A floor piano made of kids' letter tiles!
        </p>
      </div>

      <div class="w3-card-4 w3-border w3-border-dark-grey w3-margin-bottom">
        <div class="w3-display-container">
          <img src="makey/2017MakeyHighlightPhotos/Tetris1.JPG" class="w3-image slides8" alt="foot tetris 1">
          <img src="makey/2017MakeyHighlightPhotos/Tetris2.JPG" class="w3-image slides8" alt="foot tetris 2">
          <img src="makey/2017MakeyHighlightPhotos/Tetris3.JPG" class="w3-image slides8" alt="foot tetris 3">
          <button class="w3-button w3-black w3-display-left" onclick="slideChange(8, -1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="slideChange(8, 1)">&#10095;</button>
        </div>
        <p class="w3-container">
          Foot-controlled Tetris!
        </p>
      </div>
    </div>

    <!--    </div>-->

    <footer class="w3-black w3-text-gray w3-small w3-center w3-container">
      <p><a href="#top">Back To Top</a></p>
      <p>
        &copy;2017 Matthew Stockinger
      </p>
      <p>
        All rights reserved. No part of this page may be copied or reproduced in any way without the explicit permission of the author.
      </p>
    </footer>
  </main>

  <!-- nav helper functions -->
  <script src="js/main.js">
  </script>

  <script>
    // array should have length = no. of slideshows on page.
    var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1];
    // must loop as many times as there are slideshows on the page.
    for (var j = 1; j <= 8; j++) {
      //    console.log("top of script.  loop j = ", j);
      //    console.log("calling showDivs(" + j + "," + slideIndex[j-1]);
      showDivs(j, slideIndex[j - 1] + ")");
    }

    // whichSlideshow allows this one function to work
    // for multiple different slideshows on the same page.
    function slideChange(whichSlideshow, n) {
      showDivs(whichSlideshow, slideIndex[whichSlideshow - 1] += n);
    }

    function showDivs(whichSlideshow, n) {
      var i;
      var whichClassName = "slides" + whichSlideshow;
      //    console.log("In showDivs.");
      //    console.log("whichClassName assigned to " + whichClassName);
      var images = document.getElementsByClassName(whichClassName);
      //    console.log("x assigned to " + images);
      if (n > images.length) {
        slideIndex[whichSlideshow - 1] = 1
      }
      if (n < 1) {
        slideIndex[whichSlideshow - 1] = images.length
      }
      for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
      images[slideIndex[whichSlideshow - 1] - 1].style.display = "block";
    }

  </script>

</body>

</html>
