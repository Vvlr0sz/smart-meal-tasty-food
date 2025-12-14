// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Hero button
const heroBtn = document.getElementById("heroBtn");
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    window.location.href = "menu.html";
  });
}
