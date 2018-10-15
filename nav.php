<?php
// w3-collapse = phone hamburger menu.  flexcontainer centers vertically on screen.
echo '<nav id="mySideNav" class="w3-sidenav w3-collapse w3-padding flexcontainer">
    <a href="javascript:void(0)" onclick="closeMainNav()" class="w3-button w3-white w3-large w3-hide-large w3-padding">&times; Close</a>
    <div class="w3-black w3-margin">
        <a href="./index.php" class="w3-biryani">APOLLO CODING CLASS</a>
    </div>
    <div class="w3-black w3-margin">
        <a href="./makey.php" class="w3-biryani">Makey Makey!<br><br></a>
    </div>
    <div class="w3-black w3-margin">
        <a href="./students/student-pages.php" class="w3-biryani">Student Web Pages<br><br></a>
    </div>
    <div class="w3-black w3-margin">
        <a href="javascript:void(0)" onclick="openCodeArtNav()" class="w3-biryani">Student Code Art<br><br></a>
    </div>
</nav>';
?>
