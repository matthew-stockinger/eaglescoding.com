<!DOCTYPE html>
<!-- To do
    -put imagenav over the top of the images.
        -make a background bar to contain it.
        -use event handlers to make it autohide.
    -Write CSS so that aspect ratio and max-sizes are constrained.
        -Don't want to have to worry about resizing images and videos, or
         reducing quality by displaying browser-enlarged images.
    -Fix video size issue.
-->

<html lang="en-US">
<head>
    <meta charset="UTF-8" />
    <meta name="description" content="Home of Apollo coding class">
    <meta name="author" content="Matthew Stockinger" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php
            $arr = explode("-", $_GET['folder']);
            $year = $arr[0];
            $season = $arr[1];
            if ($arr[2]) { $lang = $arr[2]; } else { $lang = ''; }
            echo ucfirst($season) . ' ' . $year . ' ' . $lang;
        ?>
    </title>
    <link rel="stylesheet" href="./css/w3.css">
    <link rel="stylesheet" href="./css/code-art.css">
    <link href='https://fonts.googleapis.com/css?family=Biryani:800' 
        rel='stylesheet' type='text/css'>
</head>

<body>

<!-- sidenav -->
<?php
    require './nav.php';
?>

<!-- wrapper for page content. Helper class for hamburger menu. -->
<main class="w3-main">
    <!-- hamburger icon header bar -->
    <header class="w3-container w3-black">
        <span class="w3-opennav w3-xlarge w3-hide-large" onclick="openCodeArtNav()">&#9776;</span>
    </header>
    
    <div id="picDiv" class="w3-content">
        <!-- images here should preferably have an aspect ratio of 0.71 
        That's 317 x 446 -->
        <?php
            $ls = scandir('./code-art/' . $_GET['folder']);
            foreach ($ls as $item) {
                // if it's ./ or ../, ignore it.
                if ($item === "." or $item === "..") {
                    continue;
                } elseif (strtolower(substr($item, -3)) === "jpg" or strtolower(substr($item, -4)) === "jpeg") {
                    // this part finds the jpegs and generate <figure> elements.
                    /* example:
                        <figure class="mySlides">
                            <img src="Hinda_Mohamed,Abdiowasoho_Mahamed.jpg">
                            <figcaption>Hinda Mohamed, Abdiowasoho Mohamed</figcaption>
                        </figure>
                    */
                    // create array of contributor names.
                    $res = '<figure class="mySlides">';
                    $res .= '<img src="./code-art/' . $_GET['folder'] . '/' . $item . '">';
                    $res .= '<figcaption>';
                    /* here, parse the filename to create the caption, which is a list of student contributors
                        to the image. Expected format: Jane_Smith,John_Smith.jpg */
                    // remove file extension from filename string.
                    $item = str_replace(array(".jpg", ".jpeg"), "", $item);
                    // create an array of the student names and add them to $res
                    $fullNames = explode(",", $item);
                    if (count($fullNames) === 1) {
                        $n = explode("-", $fullNames[0]);
                        $first = ucfirst($n[0]);
                        $last = ucfirst($n[1]);
                        if ($n[2]) { $num = $n[2]; }
                        else { $num = ""; }
                        $res .= $first . " " . $last . " " . $num;
                    } else {
                        foreach ($fullNames as $name) {
                            $n = explode("-", $name);
                            $first = ucfirst($n[0]);
                            $last = ucfirst($n[1]);
                            $res .= $first . " " . $last . ", ";
                        }
                        $res = substr($res, 0, -2); // remove the final ", "
                    }
                    $res .= '</figcaption></figure>';
                    echo $res;
                } elseif (strtolower(substr($item, -3)) === "mp4") {
                    // this part detects movie files and adds them to the slideshow.
                    /* example:
                    <figure class="mySlides">
                    <video src="Hinda_Mohamed,Abdiowasoho_Mahamed.mp4" autoplay>
                    Sorry, your browser doesn't support embedded mp4 videos, but
                    you can download it <a href="Hinda_Mohamed,Abdiowasoho_Mahamed.mp4">here</a>.
                    </video>
                    <figcaption>Hinda Mohamed, Abdiowasoho Mohamed</figcaption>
                    </figure>
                    */
                    // create array of contributor names.
                    $res = '<figure class="mySlides">';
                    $res .= '<video src="./code-art/' . $_GET['folder'] . '/' . $item . '" controls>';
                    $res .= 'Sorry, your browser doesn\'t support embedded mp4 videos, ' . 
                    'but you can download it <a href="' . $item . '">here</a>.';
                    $res .= '</video>';
                    $res .= '<figcaption>';
                    /* here, parse the filename to create the caption, which is a list of student contributors
                    to the image. Expected format: Jane_Smith,John_Smith.mp4 */
                    // remove file extension from filename string.
                    $item = str_replace(array(".mp4"), "", $item);
                    // create an array of the student names and add them to $res
                    $fullNames = explode(",", $item);
                    if (count($fullNames) === 1) {
                        $n = explode("-", $fullNames[0]);
                        $first = ucfirst($n[0]);
                        $last = ucfirst($n[1]);
                        if ($n[2]) { $num = $n[2]; }
                        else { $num = ""; }
                        $res .= $first . " " . $last . " " . $num;
                    } else {
                        foreach ($fullNames as $name) {
                            $n = explode("-", $name);
                            $first = ucfirst($n[0]);
                            $last = ucfirst($n[1]);
                            $res .= $first . " " . $last . ", ";
                        }
                        $res = substr($res, 0, -2); // remove the final ", "
                    }
                    $res .= '</figcaption></figure>';
                    echo $res;
                }
            }
            ?>
    </div>
    
    <!-- image nav created dynamically in codeArt.js -->
    <nav id="imageNav" class="w3-center w3-xxlarge w3-text-black"></nav>
</main>

<script src="./js/nav.js"></script>
<script src="./js/code-art.js"></script>

</body>
</html>
