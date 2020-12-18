
function openb (evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



// button to breify say add to cart//

var x = 0;

function mybutton1() {
  x += 1;
  document.getElementById("button1").innerHTML = "ADDED TO CART!";
  setTimeout(function(){
    document.getElementById("button1").innerHTML = "BUY NOW!";
  }, 1000);
  document.getElementById("theCount").innerHTML = x;

}
