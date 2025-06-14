const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector("nav.mobile-nav");

mobileMenuButton.addEventListener("click", () => {
  const expanded =
    mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
  mobileMenuButton.setAttribute("aria-expanded", !expanded);
  mobileNav.classList.toggle("show");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  });
});
