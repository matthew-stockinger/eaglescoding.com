<?php
// *************** main nav ******************
// w3-collapse = phone hamburger menu.  flexcontainer centers vertically on screen.
echo '<nav rel="js-mainNav" class="w3-sidenav w3-collapse w3-padding flexcontainer mainNav">
    <a href="javascript:void(0)" rel="js-close-button" class="w3-button w3-white w3-large w3-hide-large w3-padding">&times; Close</a>
    <div class="w3-black w3-margin">
        <a href="./index.php" class="w3-biryani">APOLLO CODING CLASS</a>
    </div>
    <div class="w3-black w3-margin">
        <a href="./makey.php" class="w3-biryani">Makey Makey!<br><br></a>
    </div>
    <div class="w3-black w3-margin">
        <a href="javascript:void(0)" rel="js-student-pages-button" class="w3-biryani">Student Web Pages<br><br></a>
    </div>
    <div class="w3-black w3-margin">
        <a href="javascript:void(0)" rel="js-code-art-button" class="w3-biryani">Student Code Art<br><br></a>
    </div>
</nav>';

/************ subNav stuff *****************/
// Helper function for creating subnavs elements.
// Scan a subdirectory and create a nav item that links to the corresponding subNav item.
function scanSubDir($subDirName) {
    $ls = scandir("./" . $subDirName);
    $subDirDivs = "";
    foreach ($ls as $item) {
        // if it's ./ or ../ or cgi-bin, ignore it.
        if ($item === "." or $item === "..") continue;
        // if it's a named directory, create a link on the page.
        if (is_dir("./" . $subDirName . "/" . $item)) {
            // parse the directory name.  Format is e.g. 2017_fall_ or 2017_fall_JavaScript.
            // Want this to become a string, "Fall 2017 JavaScript"
            $arr = explode("-", $item);
            $year = $arr[0];
            $season = $arr[1];
            if ($arr[2]) {
                $lang = $arr[2];
            } else {
                $lang = '';
            }
            // then echo div and <a> to add that item to sidenav.
            /* example: 
            <div class="codeArtNavDivs w3-margin w3-black">
                <a href="codeart/2017_fall_/codeart_2017fall.html" class="w3-biryani"><br>Fall 2017<br><br></a>
            </div> */
            $res = '<div class="w3-margin w3-black">';
            $res .= '<a href="' . $subDirName . '.php?folder=' . $item . '" class="w3-biryani"><br>';
            $res .= ucfirst($season) . " " . $year . '<br>' . $lang . '<br></a></div>';
            $subDirDivs .= $res;
        }
    }
    return $subDirDivs;
}

// student-pages subnav menu.
echo '<nav rel="js-subNav" class="w3-sidenav w3-padding sub-nav flexcontainer">
<a href="javascript:void(0)" rel="js-close-subnav-button" class="w3-button w3-white w3-large w3-hide-large w3-padding">&times; Close</a>
<a href="javascript:void(0)" rel="js-back-button" class="w3-button w3-white w3-large w3-padding">
&#10094; Back
</a>';
echo scanSubDir("code-art");
echo "</nav>";

// The initially hidden code-art subnav menu.
echo '<nav rel="js-subNav" class="w3-sidenav w3-padding sub-nav flexcontainer">
    <a href="javascript:void(0)" rel="js-close-subnav-button" class="w3-button w3-white w3-large w3-hide-large w3-padding">&times; Close</a>
    <a href="javascript:void(0)" rel="js-back-button" class="w3-button w3-white w3-large w3-padding">
        &#10094; Back
    </a>';
echo scanSubDir("student-pages");
echo "</nav>";

?>
