function showAlert() {
  alert("This is an alert message!");
}
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  rightNav.classList.toggle(".h-nav-resp");
  navList.classList.toggle(".h-nav-resp");
  navbar.classList.toggle("h-nav-resp");
});

const logoImage = document.getElementById("logoImage");

logoImage.addEventListener("mouseover", () => {
  logoImage.style.transform = "scale(1.2)";
});

logoImage.addEventListener("mouseout", () => {
  logoImage.style.transform = "scale(1)";
});
