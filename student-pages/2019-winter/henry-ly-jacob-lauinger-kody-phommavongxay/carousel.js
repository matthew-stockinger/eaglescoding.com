var slideIndex = [1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}``


function w3_open() {
				document.getElementById("mySidebar").style.display = "block";
				document.getElementById("mySidebar").style.height = "506px";
			}

			function w3_close() {
				document.getElementById("mySidebar").style.display = "none";
				document.getElementById("mySidebar").style.height = "69px";
			}