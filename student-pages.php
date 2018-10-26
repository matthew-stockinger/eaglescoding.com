<!DOCTYPE html>
<html lang="en-US">
<!--
  Refactor JS folder into nav.js module
-->

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
  <!-- hamburger menu icon -->
  <header class="w3-container w3-black">
      <span class="w3-opennav w3-xlarge w3-hide-large" onclick="openMainNav()">&#9776;</span>
  </header>
  
  <div id="studentLinkList">
    <input type="text" size="40" placeholder="Search for names..." id="myInput" onkeyup="filterFunction()" autofocus>

    <ul id="myUL">
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
            $fullName = str_replace("-", " ", $studentFolder);
            echo '<li><a href="' . $linkTarget . '/index.html" class="nameLink" target="_blank">' . ucwords($fullName) . '</a></li>';
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
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
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
