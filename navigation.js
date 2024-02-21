function openContent(evt, ContentBox) {
  var i, contentbox, navbutton;

  contentbox = document.getElementsByClassName("content");
  for (i = 0; i < contentbox.length; i++) {
    contentbox[i].style.display = "none";
  }

  navbutton = document.getElementsByClassName("navigation");
  for (i = 0; i < navbutton.length; i++) {
    navbutton[i].className = navbutton[i].className.replace(" active", "");
  }

  document.getElementById(ContentBox).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();