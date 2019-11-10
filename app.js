"use strict"

function showNavigation() {
  let i = document.getElementById("nav");
  if (i.style.display === "block") {
    i.style.display = "none";
  } else if (i.style.display === "none")  {
    i.style.display = "block";
    i.style.display = "flex";
    i.style.position = "absolute";
    i.style.background = "#ffffff";
    i.style.height = "100%";
    i.style.width = "100%";
    i.style.flexDirection = "column";
    i.style.borderTop = "1px solid #7f7f7f";
    i.style.padding = "20px";
    i.style.top = "120px";
    i.style.fontSize = "20px";
    i.style.paddingTop = "40px";
  } else {
    i.style.display = "none";
  }
}