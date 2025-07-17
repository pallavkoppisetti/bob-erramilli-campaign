/*
=====================================
MASTER JAVASCRIPT FOR BOB ERRAMILLI CAMPAIGN
Handles animations and navigation.
=====================================
*/

jQuery(document).ready(function ($) {
  // --- Mobile Navigation Toggle ---
  $(".nav-toggle").on("click", function () {
    var menu = $("#main-menu");
    menu.toggleClass("mobile-active");
    $(this).html(menu.hasClass("mobile-active") ? "×" : "☰");
  });

  // --- Active Page Highlighting in Navigation ---
  var currentPath = window.location.pathname.split("/").pop();
  if (currentPath === "") {
    currentPath = "index.html";
  }

  $(".main-menu a").each(function () {
    var linkPath = $(this).attr("href");
    if (linkPath === currentPath) {
      $(this).addClass("active");
    }
  });

  // --- Scroll-triggered Animations ---
  if ("IntersectionObserver" in window) {
    const animatedElements = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  }
});
