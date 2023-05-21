<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Student work on display.">
    <meta name="author" content="Matthew Stockinger">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php
        $arr = explode("-", $_GET['folder']);
        $year = $arr[0];
        $season = $arr[1];
        echo ucfirst($season) . ' ' . $year;
        ?>
    </title>
    <link rel="stylesheet" href="css/w3.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/student-pages.css">
    <link href='https://fonts.googleapis.com/css?family=Biryani:800' rel='stylesheet' type='text/css'>
</head>

<body>

    <!-- main sidenav -->
    <?php
    require './nav.php';
    ?>

    <main class="w3-main" style="margin-left:239px;">

        <!-- hamburger icon header -->
        <?php require './nav-hamburger.php'; ?>

        <div>
            <input type="text" size="40" placeholder="Search for names..." rel="js-nameInput" onkeyup="filterFunction()" autofocus>

            <ul rel="js-namesUL">
                <!-- generates the list of names from the folders present with this file. -->
                <?php
                $classFolder = "./student-pages/" . $_GET['folder'];
                $studentFolders = scandir($classFolder);
                foreach ($studentFolders as $studentFolder) {
                  // if it's ./ or ../ or cgi-bin, ignore it.
                  if ($studentFolder === "." or $studentFolder === ".." or $studentFolder === "cgi-bin") continue;
                  // if it's a named directory, create a link on the page.
                  $linkTarget = $classFolder . "/" . $studentFolder;
                  if (is_dir($linkTarget)) {
                    $full_Name = $studentFolder;
                    // create array of characters in the folder name.
                    // used below to look at hyphens.
                    $strArray = count_chars($full_Name, 1);
                    
                    // if there's more than one hyphen in folder-name, then do multi-name processing
                    if ($strArray[45] > 1) {
                      // replaces odd hyphens with a space.  replace evens with a <br>.
                      while ((bool)strpos($full_Name, "-")) {
                        $firstHyphen = strpos($full_Name, "-");
                        $full_Name = substr($full_Name, 0, $firstHyphen) . " " . substr($full_Name, $firstHyphen + 1);
                        if ((bool)strpos($full_Name, "-")) {
                          $firstHyphen = strpos($full_Name, "-");
                          // ucwords below won't catch letters after <br> as new words.  This is a fix.
                          $full_Name[$firstHyphen + 1] = strtoupper($full_Name[$firstHyphen + 1]);
                          $full_Name = substr($full_Name, 0, $firstHyphen) . "<br>" . substr($full_Name, $firstHyphen + 1);
                        }
                      }
                      echo '<li><a href="' . $linkTarget . '/index.html" class="nameLink" target="_blank">' . ucwords($full_Name) . '</a></li>';
                    } else {
                      $full_Name = str_replace("-", " ", $studentFolder);
                      echo '<li><a href="' . $linkTarget . '/index.html" class="nameLink" target="_blank">' . ucwords($full_Name) . '</a></li>';
                    }
                  }
                }
                ?>
            </ul>
        </div>
    </main>

    <script src="js/nav.js"></script>
    <!-- the filtering field on top of the names list -->
    <script>
        function filterFunction() {
            var input, filter, ul, li, i;
            input = document.querySelector("[rel='js-nameInput']");
            filter = input.value.toUpperCase();
            ul = document.querySelector("[rel='js-namesUL']");
            li = ul.querySelectorAll("li");
            for (i = 0; i < li.length; i++) {
                if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    </script>

</body>

</html> 