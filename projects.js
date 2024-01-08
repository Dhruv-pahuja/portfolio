
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

let popContainer = document.querySelector("#emailPopup");

popContainer.onclick = (event) => {
  event.stopPropagation();
  document.getElementById("popupContainer").style.display = "block";
};

window.addEventListener("click", function (event) {
  var popupContainer = document.getElementById("popupContainer");
  if (
    event.target !== popupContainer &&
    !popupContainer.contains(event.target)
  ) {
    popupContainer.style.display = "none";

  }
});

// function toggleMenu() {
//   var nav = document.querySelector('nav');
//   nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
// }


var nav = document.querySelector("#navLinks");
let opend = document.querySelector(".bar")
let closed = document.querySelector(".cross")

function showMenu() {
  nav.style.right =  0; 
  
}
function hideMenu() {
  nav.style.right = "-230px";

}

let widthd = screen.width;

if(widthd<=700){
  closed.style.display = 'block';
}