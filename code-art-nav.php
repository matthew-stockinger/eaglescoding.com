<!--
    Generate code-art nav items from directories present in the code-art directory.
--> 
<?php
    $ls = scandir("./code-art/");
    foreach ($ls as $item) {
        // if it's ./ or ../ or cgi-bin, ignore it.
        if ($item === "." or $item === "..") continue;
        // if it's a named directory, create a link on the page.
        if (is_dir("./code-art/" . $item)) {
            // parse the directory name.  Format is e.g. 2017_fall_ or 2017_fall_JavaScript.
            // Want this to become a string, "Fall 2017 JavaScript"
            $arr = explode("-", $item);
            $year = $arr[0];
            $season = $arr[1];
            if ($arr[2]) { $lang = $arr[2]; }
            // then echo div and <a> to add that item to sidenav.
            /* example: 
            <div class="codeArtNavDivs w3-margin w3-black" onclick="highlightMe(this)">
                <a href="codeart/2017_fall_/codeart_2017fall.html" class="w3-biryani"><br>Fall 2017<br><br></a>
            </div> */
            $res = '<div class="w3-margin w3-black" onclick="highlightMe(this)">';
            $res .= '<a href="code-art.php?folder=' . $item . '" class="w3-biryani"><br>';
            $res .= ucfirst($season) . " " . $year . '<br>' . $lang . '<br></a></div>';
            echo $res;
        }
    }
?>