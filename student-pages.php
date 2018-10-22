<!DOCTYPE html>
<html lang="en-US">
<!--
  Fix directory references in code.
  Then add php to generate nav and subnav
-->
  <head>
    <title>Apollo Coding Student Work</title>
    <link rel="stylesheet" href="css/student_pages.css">
    <meta charset="UTF-8">
    <meta name="description" content="Student work on display.">
    <meta name="author" content="Matthew Stockinger">
  </head>
  <body>

<!--
    <h2>
      <a id="backLink" href="http://eaglescoding.com">eaglescoding.com</a>
    </h2>
-->

    <div id="studentLinkList">
      <input type="text" size="40" placeholder="Search for names..." id="myInput" onkeyup="filterFunction()" autofocus>
      
      <ul id="myUL">
      <!-- generates the list of names from the folders present with this file. -->
      <?php
        $ls = scandir("./students/2017_tri3_p1/");
        foreach ($ls as $item) {
          // if it's ./ or ../ or cgi-bin, ignore it.
          if ($item === "." or $item === ".." or $item === "cgi-bin") continue;
          // if it's a named directory, create a link on the page.
          if (is_dir("./2017_tri3_p1/" . $item)) {
            $full_Name = $item;
            $fullName = str_replace("_", " ", $item);
            echo '<li><a href="2017_tri3_p1/' . $full_Name . '/index.html" class="nameLink" target="_blank">' . $fullName . '</a></li>';
          }
        }
      ?>
      </ul>
    </div>
    
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