// toggle active
const navbarNav = document.querySelector(".navbar-nav");
// menu clicked
document.querySelector("#hmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//clicked outside sidebar

const menu = document.querySelector("#hmenu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
