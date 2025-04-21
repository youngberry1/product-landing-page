let lastScrollY = window.scrollY;
const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down, hide the header
    header.style.top = `-${header.offsetHeight}px`; // Move header completely out of view
  } else {
    // Scrolling up, show the header
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});